import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home({ onNavigate }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let visible = false

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const p = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0
      const shouldBe = p >= 1

      if (shouldBe !== visible) {
        visible = shouldBe
        el.style.transition = shouldBe
          ? 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease-out'
          : 'transform 0.5s ease-in, opacity 0.3s ease-in'
        el.style.transform = shouldBe ? 'translateY(0)' : 'translateY(100%)'
        el.style.opacity = shouldBe ? '1' : '0'
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={ref}
      className="h-full w-full bg-[#0B0B0B]"
      style={{ transform: 'translateY(100%)', opacity: 0 }}
    >
      <Navbar onNavigate={onNavigate} currentPage="home" />
      {/* Scrollable content */}
      <main className="h-full overflow-y-auto overscroll-behavior-contain pt-20">
        {/* Hero Section */}
        <section className="relative h-[921px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-40"
              alt="A cinematic, low-key photograph of a high-end, minimalist creative studio with sleek black surfaces and ambient golden backlighting."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOniR9dn00823gIKiZU16Q0nnBwUsDPUELbO5aIeEyctdxwameRzN8QZ2zpDLtwGQiSlrEiwHVXk8wMRDZjSRmP7-zGIepYPjCR4we8w50sOm-U3m8a4doLfsnArcwhkNjvW2DkEZEy8VfxecHxdLFZoAE0fAiTrVeQMtekyGfX3cea-zNAj3whasW2bHoJuHq16hF6UpTv13wowK7OFj8x5LMtFRLWXhXAdvmdysZ9ibX4V6ZYtZc7ClAmPk1VZn607DHG5rv9FE"
            />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <span className="font-label-sm text-gold tracking-[0.3em] uppercase block mb-6">Established MMXIV</span>
            <h1 className="font-display-xl text-on-background mb-8 leading-tight">
              Crafting Identities for the <span className="text-gold italic">Global Elite.</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
              Media7 is a premier full-service agency specializing in ultra-luxury branding, high-stakes media strategy, and exclusive event management.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="bg-gold text-[#0B0B0B] px-10 py-5 font-bold uppercase text-sm tracking-widest transition-all hover:scale-105">
                Start Your Project
              </button>
              <button className="border border-white/20 text-white px-10 py-5 font-bold uppercase text-sm tracking-widest transition-all hover:bg-white/5">
                View Showreel
              </button>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-section-gap max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="font-label-sm text-gold tracking-[0.2em] uppercase block mb-4">Our Expertise</span>
              <h2 className="font-headline-lg">Strategic solutions for ambitious brands.</h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-xs border-l border-gold/30 pl-6">
              A curated suite of services designed to elevate and protect your prestige in a crowded market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="luxury-card p-10 flex flex-col h-full">
              <span className="material-symbols-outlined text-gold mb-8 text-4xl">workspace_premium</span>
              <h3 className="font-headline-md mb-4">Branding</h3>
              <p className="font-body-md text-on-surface-variant mb-8 flex-grow">
                Developing cohesive visual and narrative identities that resonate with sophistication and authority.
              </p>
              <a className="text-gold font-label-sm flex items-center gap-2 group" href="#">
                EXPLORE SERVICE <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            {/* Service 2 */}
            <div className="luxury-card p-10 flex flex-col h-full">
              <span className="material-symbols-outlined text-gold mb-8 text-4xl">play_circle</span>
              <h3 className="font-headline-md mb-4">Media</h3>
              <p className="font-body-md text-on-surface-variant mb-8 flex-grow">
                High-impact content production and distribution strategies tailored for premium global audiences.
              </p>
              <a className="text-gold font-label-sm flex items-center gap-2 group" href="#">
                EXPLORE SERVICE <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            {/* Service 3 */}
            <div className="luxury-card p-10 flex flex-col h-full">
              <span className="material-symbols-outlined text-gold mb-8 text-4xl">event_seat</span>
              <h3 className="font-headline-md mb-4">Event Management</h3>
              <p className="font-body-md text-on-surface-variant mb-8 flex-grow">
                Executing exclusive corporate and luxury events with meticulous attention to detail and atmosphere.
              </p>
              <a className="text-gold font-label-sm flex items-center gap-2 group" href="#">
                EXPLORE SERVICE <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-[#110e06] py-section-gap overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-20">
            <div className="relative">
              <div className="aspect-[4/5] relative z-10">
                <img
                  className="w-full h-full object-cover"
                  alt="A portrait of a visionary creative director in a sharp black suit, silhouetted against a large arched window overlooking a modern city skyline at dusk."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGPymucF-qlBtgx0muK-eBpxlWyfEjm0DQZybtRsrSj8I5gRxhp7qcFfFfPEU-ekZaRpwNlujQauwGqsK_CKQQsu-LJrPx_3wwxgcO2VogRCAVVZEaeLV7-gPhpkfOIYQ7Y3AaB1T_po8-89PsvOGrw3x-L60xcQQo1zs5lqdd09uj4Fg54T3nNIiqK19BUa1RWWqA5GTd73CXb-lNqHlChiWb1HQEH6MEutQzvK1cRFz7-4e_23UBp4IxxgS-koL4_MqZVYOp8sI"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold flex items-center justify-center p-8 z-20">
                <span className="text-[#0B0B0B] font-display-xl leading-none">10</span>
                <span className="text-[#0B0B0B] font-bold text-xs uppercase tracking-tighter -rotate-90">Years of Excellence</span>
              </div>
            </div>
            <div>
              <span className="font-label-sm text-gold tracking-[0.2em] uppercase block mb-4">The Legacy</span>
              <h2 className="font-headline-lg mb-8">Redefining the standards of modern excellence.</h2>
              <div className="space-y-6 text-on-surface-variant font-body-md">
                <p>Founded on the principle that luxury is a language of silence and precision, Media7 has spent a decade curating the world&apos;s most influential narratives.</p>
                <p>Our approach is not about volume; it&apos;s about the weight of each decision. We partner with visionaries to create enduring value in a transient world.</p>
              </div>
              <button className="mt-12 border-b-2 border-gold pb-2 text-gold font-bold uppercase tracking-widest hover:text-white hover:border-white transition-all">
                Discover Our Philosophy
              </button>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-section-gap max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-label-sm text-gold tracking-[0.2em] uppercase block mb-4">Portfolio</span>
            <h2 className="font-headline-lg">Selected works for global leaders.</h2>
          </div>
          <div className="grid grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Case 1 */}
            <div className="col-span-12 md:col-span-8 relative group overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="A high-end architectural visualization of a futuristic skyscraper project at night."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_8cvOiNyR1JPriQr-o6EBXoL7HzPTQMOZ9bfC6HkO_G3VfvAVZIvMNXEmupqOIZwKJLIs5Ciz0CBXY8mwrMhXLTL3C-Om9joboydDgBbES2SDxpWAimePhJyNu4v7wpZk8iB5CWTpp1g1TgNWpV_ubEd9jzSFy1QMse-C3snx1Ght7QpBtfoKnzGMpuVCMHyHNne_jB3CejS7JQM8MYQFtcP3Owe5VH3RYE76BB7ksO1h_5hk2_uf9EpUDC7WBE2aLsQmlYuwFD4"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                <div>
                  <span className="font-label-sm text-gold uppercase mb-2 block">Branding &amp; Media</span>
                  <h3 className="font-headline-md text-white">The Onyx Residences</h3>
                </div>
              </div>
            </div>
            {/* Case 2 */}
            <div className="col-span-12 md:col-span-4 relative group overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="An abstract, high-fashion close-up of premium watch mechanics."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSUIijkKixb9yXDhps4l8_u8uaAd-KJvTsSDdzfaUpmtrZ9a1Nizao3B_cgG9rGHDyxZgXaB5Ka2HB4ipiOXJAKort_EUCLypUTOVFiRoEMbiF-sZUp28mz_NwuE75beBGjGIiqUj5_TYwXForxdI7zOHRu9czrP7eeV8KXMKl0xADb1ittJIV2_8DALuw7hDUictLSOMHizXr_vlhQrTskStNacSPqIJ_THHNIiiTD-Ab0QQpq9DXGAlfmI3Z1qcvKjB5gYlgZlA"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                <div>
                  <span className="font-label-sm text-gold uppercase mb-2 block">Event Management</span>
                  <h3 className="font-headline-md text-white">Chronos Gala</h3>
                </div>
              </div>
            </div>
            {/* Case 3 */}
            <div className="col-span-12 md:col-span-4 relative group overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="A minimalist, top-down photograph of a bespoke leather-bound brand manual."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiiUaD-Y76QbrCx67WDH0JLOFv12eNAgCqGCGjMMCs_Z9cyndCejakaTCkliDvwFyWtVSCkBUp-32YPFJ6vz5ZM2lqVt9nadndydJjJypiQCLRiUEacTyY099NyKGiSz-hJ5j186qqENSxO4QxMiMt43ElRK4h4y6OlPTJYq4c-BVfZiXE6QWalsLDgz3J3nis-ugXXTyP8UkLHEq4Jq4rF372sf404Mo4Ysu9GP-zM3pCm5IQk-J_t-Kx8-7uqdxUaeGCYxNxsfg"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                <div>
                  <span className="font-label-sm text-gold uppercase mb-2 block">Identity Design</span>
                  <h3 className="font-headline-md text-white">Nordic Capital</h3>
                </div>
              </div>
            </div>
            {/* Case 4 */}
            <div className="col-span-12 md:col-span-8 relative group overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="A wide, sweeping shot of a private jet terminal lounge with high-end furniture."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFKw3_fJonLfrvsod7erNQ0q6fieBAGNRIs5tFF-DYY4IoW8Jbty8DZG04scA96lPSXRJcfjkPUthpcOX0GnRJ0mkKtpO0tV8NqUPjiidv_GGNNfNH2Xbb1Nm0oHp_CF4svYw7OjGXuoBaVDiUGbF0EQ-ZwxDA9B7Jdr_O9hnR6MTnHu2U8Upew4lEsRCQSYEnuqaS6iFFqJWTApq9tDS1VWz8PBmr7R4Vl8zU5foWoPaf3WizhG6SLJMxuIOVeRMQ-2npdoGV3Gg"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                <div>
                  <span className="font-label-sm text-gold uppercase mb-2 block">Media Strategy</span>
                  <h3 className="font-headline-md text-white">Aero Elite</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-section-gap bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="material-symbols-outlined text-gold text-6xl mb-8">format_quote</span>
              <p className="font-headline-md italic mb-10 text-on-surface">
                &quot;Media7 didn&apos;t just understand our brand; they elevated it to a level we didn&apos;t think possible. Their attention to the nuances of luxury is unparalleled in the industry.&quot;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="A sophisticated headshot of a female executive with a confident smile."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7SR0VyBC75XS0fjA0TB1Y5naJQ8_E6f2bTdgdbuqBGmCF9-ERHAewJtpsgGkfn_FgqmeuTAOpQ4XcJqO1VfkDg8tP4HckyIzrOiGyjZoyeaDOLDBQ3rAXkWWwYIlD83rm1O7uc2drGojdI7R4LqZVeNbv_1HOU8SGv7GUVauRLQBT4DRvNb8_1YvAk9eC-7Q11u81768_jfioKo3-ojmoOHIOiQ2Rc6B-tKRnkRgYSLiQA8G5EYA2vNm_sXP2pl5DVrDd0toFN-Q"
                  />
                </div>
                <div className="text-left">
                  <p className="font-bold text-on-surface">Alexandra Vance</p>
                  <p className="text-gold text-xs uppercase tracking-widest font-label-sm">CEO, Vance Global</p>
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-12">
                <button className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold transition-colors">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold transition-colors">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Thinking / Blog */}
        <section className="py-section-gap max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <h2 className="font-headline-lg">Latest Thinking.</h2>
            <a className="text-gold font-bold uppercase tracking-widest text-xs hover:text-white transition-colors" href="#">Read all Articles</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[16/9] overflow-hidden mb-6">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="An artistic close-up of a high-end digital interface on a sleek tablet."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDweCdEZPDFm9T7x4N29glll7qEX3NKcVHVnlLlcRGekmNvjlRIQiEPLERAzW8nYkR6wQ9s9XLroHL9RuljA3jyMJtDZ5QvgCuvnvZEiJE1jMjjbki1z3pB3BAhtphboO9uktJnVF1_yWGSrqoUzdWmmqHFDC8pGsC3YIONMS96KtTGpLrao4XD47cfjIL-tdhrtIPvGBZg0rm1KveCzw7yTtuub2moMhJlvfRmSifgslQx3aebzNHZEqh_o8H2btf_soLhKK87SnM"
                />
              </div>
              <span className="font-label-sm text-gold uppercase tracking-widest mb-3 block">Branding</span>
              <h3 className="font-headline-md text-on-surface group-hover:text-gold transition-colors mb-4">The Psychology of Minimalist Luxury</h3>
              <p className="font-body-md text-on-surface-variant line-clamp-2">How reducing visual noise creates an atmosphere of exclusive authority and trust...</p>
            </div>
            {/* Blog 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[16/9] overflow-hidden mb-6">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="A photograph of a high-end rooftop event at night."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4LneSNAotyEUR3OhReZ8he6Sx2ObhLE6TdYjG8pi_F6IGSrtzDBo0GX0aeTBmLBHOP5AfQOryNnHqu1az1SWbUUVNM8vjrUM4oVlHiCTBFNCGZnLkFpR7sHToK3COE9e0xYsEyWcILyqNwSyNk7dzF2S6Dk0cTfyOak1LA1-LBlndTxKPghYqvGxrZR8DMetNY7UGUfRq7sraGs01q9_UR9AV7N7rDq35FqMPCFV-X7hXCf4CQ0oaVn645S6jlNM6q2xjulkZW84"
                />
              </div>
              <span className="font-label-sm text-gold uppercase tracking-widest mb-3 block">Strategy</span>
              <h3 className="font-headline-md text-on-surface group-hover:text-gold transition-colors mb-4">2024 Media Trends for High-Net-Worth Brands</h3>
              <p className="font-body-md text-on-surface-variant line-clamp-2">Navigating the shift toward private digital communities and curated media experiences...</p>
            </div>
            {/* Blog 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[16/9] overflow-hidden mb-6">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="A macro shot of premium textured paper with a gold-foil stamped logo."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpbhKDtbSTGuUbu9wHOleBjhH0KmjnLKf0tqOxt9HHv38qE8yjFKqVbM3iIrrIUBP4TeRnXEJ8JzV-3yxhS78Fh3X0GRUqLttnfzAOtjxC5hiXC7-RuJ6D17xNOP5E7hSvqruvghdSTjh0eS_iGASqPCJH0p_4qAv2Lle8LdYMHaD49x1Dcw_a1kthrpOMKuIeEMUWXSvo_JL8UNIUWNHVNDNFSLVzieR4kEdffJF24mqKPQYNk4D_6t205SR5qQfbLnLOJX5Kezo"
                />
              </div>
              <span className="font-label-sm text-gold uppercase tracking-widest mb-3 block">Design</span>
              <h3 className="font-headline-md text-on-surface group-hover:text-gold transition-colors mb-4">Why Physical Assets Still Matter</h3>
              <p className="font-body-md text-on-surface-variant line-clamp-2">The enduring power of tactile experiences in an increasingly digital landscape...</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section-gap relative overflow-hidden bg-gold">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="font-display-xl text-[#0B0B0B] mb-8">Ready to elevate your <span className="italic underline decoration-2">presence</span>?</h2>
            <p className="font-body-lg text-[#0B0B0B]/80 max-w-2xl mx-auto mb-12">
              Partner with an agency that understands the gravity of your ambition. Let&apos;s discuss your next milestone.
            </p>
            <button className="bg-[#0B0B0B] text-white px-12 py-6 font-bold uppercase text-sm tracking-widest transition-all hover:scale-105 active:scale-95">
              Schedule a Consultation
            </button>
          </div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 border-[40px] border-[#0B0B0B]/10 rounded-full" />
        </section>

        <Footer onNavigate={onNavigate} />
      </main>
    </div>
  )
}
