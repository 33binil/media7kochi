import { useCallback, useEffect, useRef, useState } from 'react'

const TOTAL_FRAMES = 240
const SCROLL_SECTIONS = 5

const features = [
  {
    range: [0, 0.18],
    title: 'Media7',
    subtitle: 'Digital Agency',
    description: 'Pioneering the future of digital experiences through cutting-edge technology and creative innovation.',
  },
  {
    range: [0.18, 0.38],
    title: 'Digital Strategy',
    subtitle: '01 — Feature',
    description: 'Data-driven strategies that transform brands into market leaders with measurable results.',
  },
  {
    range: [0.38, 0.58],
    title: 'Creative Design',
    subtitle: '02 — Feature',
    description: 'Immersive interfaces and visual narratives that captivate audiences and drive engagement.',
  },
  {
    range: [0.58, 0.78],
    title: 'Data Analytics',
    subtitle: '03 — Feature',
    description: 'Real-time insights and predictive analytics to optimize performance and accelerate growth.',
  },
  {
    range: [0.78, 1],
    title: 'Innovation',
    subtitle: '04 — Feature',
    description: 'Emerging technologies and forward-thinking solutions built for tomorrow\'s challenges.',
  },
]

const LAZY_BUFFER = 20

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
      if (!ready && index === 0) {
        drawFrame(0)
        setReady(true)
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
    ensureWindow(0)

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

  return (
    <>
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
                bottom: 'clamp(80px, 12vh, 140px)',
                ...(isMobile
                  ? { left: 0, right: 0, display: 'flex', justifyContent: 'center' }
                  : { left: 'clamp(24px, 6vw, 80px)' }
                ),
              }}
            >
              <div
                className="backdrop-blur-xl bg-white/[0.04] border border-white/[0.08] rounded-r-3xl rounded-l-lg px-5 py-4 md:px-8 md:py-6 max-w-lg w-full md:w-auto shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                style={{
                  transform: isActive ? `translateY(${y}px)` : 'translateY(0px)',
                  transition: 'transform 0.2s',
                }}
              >
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase mb-1.5 md:mb-2 text-white/40 block">
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
