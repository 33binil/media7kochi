import Footer from '../components/Footer'

export default function About({ onNavigate }) {
  return (
    <div className="h-screen overflow-y-auto bg-[#0B0B0B] text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[614px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-40"
              alt="A wide-angle shot of a sophisticated, high-end corporate lobby with deep charcoal walls and subtle golden accent lighting."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBARijy0q_LMUPiIacaLLQLJ0eqBG7eoKKa6hc5lXM9JHAYcDlyUNkzPHgf6hI4ZJ3nHbnrGUlIUpRiN7sSqKCtln-u3ECCc7J5dTheYe-r9iqrfaz_6Gzdhtw2dupuZWtbSn7ZBB2Yx5tnGX7dLAo-8bWx_3mzh3oyLZpKRq-hfFJaN0shaETQlSCiBhCTlf58pX0azB3GNZ7B1CSHSKbA-ET1IQNKnluGdOTYNtFw13j5xH0f7eCxsPEkbQaDe89CVgGeLS9v7p0"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,11,11,0) 0%, rgba(11,11,11,1) 100%)' }} />
          </div>
          <div className="relative z-10 text-center px-6">
            <span className="font-label-sm text-primary-container uppercase tracking-[0.3em] mb-4 block">Est. 1998</span>
            <h1 className="font-display-xl text-on-surface mb-6">
              Crafting Digital <br />Prestige
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">We don&apos;t just create media; we curate legacies for brands that demand nothing short of absolute excellence.</p>
          </div>
        </section>

        {/* Legacy & Philosophy */}
        <section className="py-section-gap max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">
            <div className="space-y-stack-lg">
              <h2 className="font-headline-lg text-on-surface">Our Legacy</h2>
              <div className="w-20 h-1 bg-primary-container" />
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Born in the heart of the digital revolution, Media7 began as a small collective of visionaries who believed that technology and art should never be mutually exclusive. Over two decades, we have evolved into a global authority on high-end digital experiences.
              </p>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Our journey is defined by a relentless pursuit of perfection. From pioneering early web standards to defining modern luxury branding, our legacy is etched in the success of the world&apos;s most influential entities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg bg-surface-container-low p-10 border border-white/5">
              <div className="space-y-stack-sm">
                <span className="material-symbols-outlined text-[#F5C542] text-4xl">verified</span>
                <h3 className="font-headline-md text-on-surface text-xl">Integrity</h3>
                <p className="font-body-md text-on-surface-variant">Uncompromising standards in every pixel and every strategy we deliver.</p>
              </div>
              <div className="space-y-stack-sm">
                <span className="material-symbols-outlined text-[#F5C542] text-4xl">auto_awesome</span>
                <h3 className="font-headline-md text-on-surface text-xl">Innovation</h3>
                <p className="font-body-md text-on-surface-variant">Leading the curve through bespoke technological solutions and creative audacity.</p>
              </div>
              <div className="space-y-stack-sm">
                <span className="material-symbols-outlined text-[#F5C542] text-4xl">diamond</span>
                <h3 className="font-headline-md text-on-surface text-xl">Exclusivity</h3>
                <p className="font-body-md text-on-surface-variant">Tailored experiences designed for a select few who value the extraordinary.</p>
              </div>
              <div className="space-y-stack-sm">
                <span className="material-symbols-outlined text-[#F5C542] text-4xl">visibility</span>
                <h3 className="font-headline-md text-on-surface text-xl">Vision</h3>
                <p className="font-body-md text-on-surface-variant">Anticipating the future of media to keep our partners ahead of the global conversation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-section-gap bg-[#110e06]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="group bg-[#1A1A1A] p-12 border border-white/5 transition-all duration-500 hover:border-[#F5C542]/30 shadow-2xl hover:-translate-y-2">
              <div className="flex justify-between items-start mb-8">
                <h3 className="font-headline-lg text-[#F5C542]">Mission</h3>
                <span className="material-symbols-outlined text-[#F5C542] text-5xl">rocket_launch</span>
              </div>
              <p className="font-body-lg text-on-surface leading-relaxed italic border-l-2 border-[#F5C542] pl-6">
                &quot;To engineer the most prestigious digital ecosystems on the planet, empowering global leaders to communicate with unparalleled clarity and authority.&quot;
              </p>
            </div>
            <div className="group bg-[#F5C542] p-12 border border-[#F5C542] transition-all duration-500 hover:bg-[#ffdf95] shadow-2xl hover:-translate-y-2">
              <div className="flex justify-between items-start mb-8 text-[#0B0B0B]">
                <h3 className="font-headline-lg">Vision</h3>
                <span className="material-symbols-outlined text-5xl">insights</span>
              </div>
              <p className="font-body-lg text-[#0B0B0B] leading-relaxed italic border-l-2 border-[#0B0B0B] pl-6">
                &quot;To set the definitive standard for the future of executive media, where technology serves as the ultimate canvas for human achievement and brand storytelling.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-section-gap border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
            <div className="space-y-stack-sm">
              <div className="font-display-xl text-[#F5C542]">25+</div>
              <div className="font-label-sm text-on-surface-variant uppercase tracking-widest">Years of Excellence</div>
            </div>
            <div className="space-y-stack-sm">
              <div className="font-display-xl text-[#F5C542]">400</div>
              <div className="font-label-sm text-on-surface-variant uppercase tracking-widest">Global Partners</div>
            </div>
            <div className="space-y-stack-sm">
              <div className="font-display-xl text-[#F5C542]">12</div>
              <div className="font-label-sm text-on-surface-variant uppercase tracking-widest">Industry Awards</div>
            </div>
            <div className="space-y-stack-sm">
              <div className="font-display-xl text-[#F5C542]">98%</div>
              <div className="font-label-sm text-on-surface-variant uppercase tracking-widest">Retention Rate</div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-section-gap max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-stack-lg">
            <div>
              <span className="font-label-sm text-primary-container uppercase tracking-[0.3em] mb-4 block">The Architects</span>
              <h2 className="font-headline-lg text-on-surface">Leadership</h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md text-right">
              Directed by a board of seasoned strategists and creative pioneers with a shared obsession for detail.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Member 1 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-surface-container-high border border-white/5">
              <img
                className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                alt="A professional portrait of a senior male executive in a sharp black suit against a dark background."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-IwpdIGYxh6wyR8l7vff5XhYj_yNU1BDZTlVzujHiQEfdvUM93nWKjfcSP8FEoOqP0kiHWKzkHvpVghhLBeBqRzimQhHTZ9vTshEhRU5DQTWczHanM1plrlTc7GVNe7cd76pq0ntazmrJ6IUdfi_wHOKPEFIDBXBBeWFtPrmISsR30de7yQFaS0M9IBzx-ukOiJbuSZUENY3uVPR2W85FH0peOf6vhLi7jVQ_ywijySR2gilnboTowBtGMFLSL44QS6kpn7ML0m4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="font-headline-md text-xl text-on-surface mb-1">Julian Thorne</h4>
                <p className="font-label-sm text-primary-container uppercase tracking-widest">Chief Executive Officer</p>
              </div>
            </div>
            {/* Member 2 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-surface-container-high border border-white/5">
              <img
                className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                alt="A sophisticated portrait of a female creative director in professional attire."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL4j4oy98ltd_ELMGvK45LoDcJ92Bx3-nN7KbO1H9QL81xfbcbtjEKM2L64vosX5hOplNnqkyns6BcpiMdy0gsdD6kba3Fi4fCUmhQTvL2pxL6vDHD_6VLdRs4Bb5Sbb2InjLRBjiVNviYLPR-bh1_sUcHo1dYABregq8d_CyBrvBsRR1eA2-LEvRLCT7cQiLY3VEKeF8rsvVYMGVN_cwst6yBgRDeg0MZffdSPhwUAQw8nuF1PRtM78zn_AtAAh-3ALn0efI2TxE"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="font-headline-md text-xl text-on-surface mb-1">Elena Vance</h4>
                <p className="font-label-sm text-primary-container uppercase tracking-widest">Creative Director</p>
              </div>
            </div>
            {/* Member 3 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-surface-container-high border border-white/5">
              <img
                className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                alt="Close-up portrait of a male technology officer with a thoughtful gaze."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEx-VoUEIKiv_-498y3pBCmpX7sEHohqm1AmKXWWcZSskqZBHhUOT0GCrXfMgxbWkZsVb1WBtPLfX8FLe1xtYsFh_FE6SssDytOYoRP48Gr2CKpYwCSekP5intNQTESEJAtNzbbQsjgwpPtzasm-7k754rkJc5gz3tJg0qv7aTV-ZHbByE1GX3Ia_42rFse1XEvNobDYQCRkZqLsXJyr0O7FaZq6VFo7u5WfnQJp6eylvm_eH5Rgs0hPP_3IICtL_dUSV7ldeAlZg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="font-headline-md text-xl text-on-surface mb-1">Marcus Sterling</h4>
                <p className="font-label-sm text-primary-container uppercase tracking-widest">Head of Innovation</p>
              </div>
            </div>
            {/* Member 4 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-surface-container-high border border-white/5">
              <img
                className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                alt="Refined professional headshot of a female strategist in a high-fashion black blazer."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9QHdJ2x9VSbPjOl2R3k-L38uuz-J5Qw4f_VeWYfyuZ9esxB0vY732Ce81cblZy_L1KvUxsGmOYpNsDwM4Xwrn4JxheV6GdL8xXhEUI1N2rcxn7BSzumppfHuj26bJTBjdGVxBqCm9shTzxXGGMRb2bLMujsk855hyE3Kzfq9hE9_QVgWRfw_8oX8N_wGF121IxoKhgvNrvlodzQqek0M_MPR9aWiRig9uBvJvgghktZWR7Cs8gXyNdlIZJikNfYS6mYM_r9pPmsc"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="font-headline-md text-xl text-on-surface mb-1">Sienna Blake</h4>
                <p className="font-label-sm text-primary-container uppercase tracking-widest">Strategic Partnerships</p>
              </div>
            </div>
          </div>
        </section>
      </main>

        <Footer onNavigate={onNavigate} />
    </div>
  )
}
