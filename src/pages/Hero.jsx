import { useCallback, useEffect, useRef, useState } from 'react'

const TOTAL_FRAMES = 240
const SCROLL_SECTIONS = 5

const features = [
  {
    range: [0, 0.25],
    title: 'Media7 News Kerala',
    subtitle: 'Media & Advertising Hub',
    description: 'A complete digital media platform delivering news, branding, advertising, and audience engagement solutions across Kerala.',
  },
  {
    range: [0.25, 0.45],
    title: 'Visual Advertising',
    subtitle: '01 — Feature',
    description: 'High-impact visual channel promotions, scrolling advertisements, and banner placements designed to maximize brand visibility.',
  },
  {
    range: [0.45, 0.65],
    title: 'Multi-Platform Reach',
    subtitle: '02 — Feature',
    description: 'Promote your brand through Media7 News Portal, Visual Channel, WhatsApp Groups, and E-Directory networks from a single campaign.',
  },
  {
    range: [0.65, 0.85],
    title: 'Social Media Network',
    subtitle: '03 — Feature',
    description: 'Expand your reach across YouTube, Facebook, Instagram, Threads, X, LinkedIn, Pinterest, and WhatsApp with targeted promotions.',
  },
  {
    range: [0.85, 1],
    title: 'Performance & Growth',
    subtitle: '04 — Feature',
    description: 'Backed by millions of views and audience engagement, helping businesses build awareness and generate measurable results.',
  },
]

const LAZY_BUFFER = 10
const INITIAL_LOAD = 15

function createImage(folder, index) {
  const img = new Image()
  img.src = `/${folder}/ezgif-frame-${String(index + 1).padStart(3, '0')}.webp`
  return img
}

export default function Hero() {
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const loadedRef = useRef(new Set())
  const frameRef = useRef(0)
  const rafRef = useRef(null)
  const [ready, setReady] = useState(false)
  const loadedCountRef = useRef(0)
  const [progress, setProgress] = useState(0)
  const [activeFeature, setActiveFeature] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

  function getFolder() {
    return isMobile ? 'hero_mobile' : 'hero_desktop'
  }

  function loadFrame(index) {
    if (loadedRef.current.has(index)) return
    loadedRef.current.add(index)
    const img = createImage(getFolder(), index)
    imagesRef.current[index] = img
    img.onload = () => {
      loadedCountRef.current++
      if (!ready && loadedCountRef.current >= INITIAL_LOAD) {
        drawFrame(0)
        setReady(true)
      }
      if (!ready && index === 0) drawFrame(0)
      if (ready && index === frameRef.current) {
        drawFrame(index)
      }
    }
  }

  function ensureWindow(center) {
    const start = Math.max(0, center - LAZY_BUFFER)
    const end = Math.min(TOTAL_FRAMES - 1, center + LAZY_BUFFER)
    for (let i = start; i <= end; i++) loadFrame(i)
  }

  function drawFrame(index) {
    const img = imagesRef.current[index]
    if (!img || !img.complete) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const cw = canvas.width
    const ch = canvas.height
    const cr = cw / ch
    const ir = img.naturalWidth / img.naturalHeight
    let sx, sy, sw, sh
    if (ir > cr) {
      sh = img.naturalHeight
      sw = sh * cr
      sx = (img.naturalWidth - sw) / 2
      sy = 0
    } else {
      sw = img.naturalWidth
      sh = sw / cr
      sx = 0
      sy = (img.naturalHeight - sh) / 2
    }
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const mobile = window.innerWidth <= 600
      setIsMobile(mobile)
      if (loadedRef.current.has(frameRef.current)) {
        drawFrame(frameRef.current)
      }
    }

    resize()
    window.addEventListener('resize', resize)

    imagesRef.current = []
    loadedRef.current = new Set()
    loadedCountRef.current = 0
    for (let i = 0; i < INITIAL_LOAD; i++) loadFrame(i)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [isMobile]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleScroll = useCallback(() => {
    if (rafRef.current) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const p = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0
      setProgress(p)

      const frameIndex = Math.min(Math.floor(p * (TOTAL_FRAMES - 1)), TOTAL_FRAMES - 1)
      ensureWindow(frameIndex)

      if (frameIndex !== frameRef.current) {
        frameRef.current = frameIndex
        drawFrame(frameIndex)
      }

      for (let i = features.length - 1; i >= 0; i--) {
        if (p >= features[i].range[0] && p < features[i].range[1]) {
          setActiveFeature(i)
          break
        }
      }
    })
  }, [isMobile]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    return () => { document.documentElement.style.overflowY = 'auto' }
  }, [])

  return (
    <>
      {/* Loading screen */}
      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-700 pointer-events-none"
        style={{
          opacity: ready ? 0 : 1,
          background: 'radial-gradient(ellipse at center, #0a0f1a 0%, #060a12 50%, #030508 100%)',
        }}
      >
        <style>{`
          @keyframes spin-slow { to { transform: rotate(360deg); } }
          @keyframes spin-slower { to { transform: rotate(-360deg); } }
          @keyframes logo-pulse {
            0%, 100% { transform: scale(1); opacity: 0.85; }
            50% { transform: scale(1.03); opacity: 1; }
          }
          @keyframes ring-fade {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }
        `}</style>

        <div className="relative flex flex-col items-center">
          {/* Outer rotating ring - silver */}
          <div className="absolute -inset-14" style={{ animation: 'spin-slow 5s linear infinite' }}>
            <svg viewBox="0 0 200 200" className="w-full h-full" style={{ animation: 'ring-fade 4s ease-in-out infinite' }}>
              <defs>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
                  <stop offset="50%" stopColor="rgba(200,200,200,0.1)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="88" fill="none" stroke="url(#ringGrad)" strokeWidth="1" strokeDasharray="3 7" />
            </svg>
          </div>

          {/* Mid rotating ring - metallic */}
          <div className="absolute -inset-10" style={{ animation: 'spin-slower 7s linear infinite' }}>
            <svg viewBox="0 0 200 200" className="w-full h-full" style={{ animation: 'ring-fade 5s ease-in-out infinite 1s' }}>
              <defs>
                <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(220,220,225,0.25)" />
                  <stop offset="50%" stopColor="rgba(180,180,185,0.08)" />
                  <stop offset="100%" stopColor="rgba(220,220,225,0)" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="78" fill="none" stroke="url(#ringGrad2)" strokeWidth="1.5" strokeDasharray="1 5" />
            </svg>
          </div>

          {/* Logo */}
          <div style={{ animation: 'logo-pulse 3.5s ease-in-out infinite' }}>
            <img
              src="/logo.png"
              alt="Media7"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain select-none relative z-10"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.12)) drop-shadow(0 0 40px rgba(200,200,210,0.08))',
              }}
            />
          </div>

          {/* Orbiting dots - silver */}
          <div className="absolute w-full h-full" style={{ animation: 'spin-slow 10s linear infinite' }}>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: i % 2 === 0 ? 2 : 1.5,
                  height: i % 2 === 0 ? 2 : 1.5,
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.4)' : 'rgba(200,200,210,0.25)',
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${deg}deg) translateY(-56px)`,
                  transformOrigin: '0 0',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="fixed inset-0 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: 'url(/hero.jpeg)',
            opacity: ready ? 0 : 1,
          }}
        />
        <canvas
          ref={canvasRef}
          className="block w-full h-full transition-opacity duration-700"
          style={{ opacity: ready ? 1 : 0 }}
        />
      </div>

      <div className="fixed inset-0 flex items-end pb-12 md:pb-24 pointer-events-none">
        {features.map((f, i) => {
          const isActive = activeFeature === i
          const localP = Math.max(0, Math.min((progress - f.range[0]) / (f.range[1] - f.range[0]), 1))
          const opacity = localP < 0.1 ? localP / 0.1 : localP > 0.85 ? (1 - localP) / 0.15 : 1
          const y = localP < 0.1 ? 30 * (1 - localP / 0.1) : localP > 0.85 ? -30 * ((localP - 0.85) / 0.15) : 0

          return (
            <div
              key={i}
              className="absolute"
              style={{
                opacity: isActive ? opacity : 0,
                transition: 'opacity 0.2s',
                ...(isMobile
                  ? { bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center' }
                  : { bottom: 'clamp(80px, 12vh, 140px)', left: 'clamp(24px, 6vw, 80px)' }
                ),
              }}
            >
              <div
                className="backdrop-blur-xl rounded-r-3xl rounded-l-lg px-5 py-4 md:px-8 md:py-6 max-w-lg w-full md:w-auto"
                style={{
                  transform: isActive ? `translateY(${y}px)` : 'translateY(0px)',
                  transition: 'transform 0.2s',
                  background: 'linear-gradient(135deg, rgba(180,140,50,0.06) 0%, rgba(120,90,30,0.03) 100%)',
                  border: '1px solid rgba(218,165,32,0.15)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(218,165,32,0.08), 0 0 40px rgba(218,165,32,0.04)',
                }}
              >
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase mb-1.5 md:mb-2 block text-white/50">
                  {f.subtitle}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none mb-2 md:mb-3 drop-shadow-xl">
                  {f.title}
                </h2>
                {f.description && (
                  <p className="text-xs sm:text-sm md:text-base text-white/40 leading-relaxed font-light max-w-sm">
                    {f.description}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-black" style={{ height: `${SCROLL_SECTIONS * 100}vh` }} />
    </>
  )
}
