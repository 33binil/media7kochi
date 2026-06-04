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
            <span className="font-label-sm text-primary-container uppercase tracking-[0.3em] mb-4 block">Est. 2017</span>
            <h1 className="font-display-xl text-on-surface mb-6">
              Crafting Powerful <br />Brand Stories
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">We don't just create content; we build meaningful brand experiences through creativity, strategy, and innovation. From branding and advertising to digital marketing and media production, we help businesses connect, engage, and grow.</p>
          </div>
        </section>

        {/* Legacy & Philosophy */}
        <section className="py-section-gap max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">
            <div className="space-y-stack-lg">
              <h2 className="font-headline-lg text-on-surface">Our Story</h2>
              <div className="w-20 h-1 bg-primary-container" />
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Established in 2017 in the UAE, Media7 was founded with a vision to create meaningful connections between brands and their audiences through powerful storytelling, creative innovation, and strategic communication. With over 7 years of experience across the GCC and India, we have grown into a trusted 360° creative agency delivering impactful media and marketing solutions.
              </p>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Our journey is driven by passion, creativity, and a commitment to excellence. From branding and advertising to ad film production, digital marketing, corporate videos, and event management, we help businesses transform ideas into memorable brand experiences that inspire, engage, and deliver results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg bg-surface-container-low p-10 border border-white/5">
              <div className="space-y-stack-sm">
                <span className="material-symbols-outlined text-[#F5C542] text-4xl">verified</span>
                <h3 className="font-headline-md text-on-surface text-xl">Integrity</h3>
                <p className="font-body-md text-on-surface-variant">Building trust through transparency, professionalism, and a commitment to delivering quality in every project.</p>
              </div>
              <div className="space-y-stack-sm">
                <span className="material-symbols-outlined text-[#F5C542] text-4xl">auto_awesome</span>
                <h3 className="font-headline-md text-on-surface text-xl">Creativity</h3>
                <p className="font-body-md text-on-surface-variant">Combining innovative ideas, compelling storytelling, and bold design to create unforgettable brand experiences.</p>
              </div>
              <div className="space-y-stack-sm">
                <span className="material-symbols-outlined text-[#F5C542] text-4xl">diamond</span>
                <h3 className="font-headline-md text-on-surface text-xl">Impact</h3>
                <p className="font-body-md text-on-surface-variant">Crafting strategic campaigns and media solutions that drive engagement, visibility, and measurable business growth.</p>
              </div>
              <div className="space-y-stack-sm">
                <span className="material-symbols-outlined text-[#F5C542] text-4xl">visibility</span>
                <h3 className="font-headline-md text-on-surface text-xl">Vision</h3>
                <p className="font-body-md text-on-surface-variant">Staying ahead of industry trends and emerging technologies to help brands thrive in an ever-evolving digital world.</p>
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
                "To help businesses build powerful brands through creative storytelling, strategic marketing, and innovative media solutions that inspire audiences, drive engagement, and deliver measurable growth."
              </p>
            </div>
            <div className="group bg-[#F5C542] p-12 border border-[#F5C542] transition-all duration-500 hover:bg-[#ffdf95] shadow-2xl hover:-translate-y-2">
              <div className="flex justify-between items-start mb-8 text-[#0B0B0B]">
                <h3 className="font-headline-lg">Vision</h3>
                <span className="material-symbols-outlined text-5xl">insights</span>
              </div>
              <p className="font-body-lg text-[#0B0B0B] leading-relaxed italic border-l-2 border-[#0B0B0B] pl-6">
                "To become a leading creative and media agency recognized for transforming ideas into impactful brand experiences, setting new standards in branding, digital marketing, media production, and business communication."
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-section-gap border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
            <div className="space-y-stack-sm">
              <div className="font-display-xl text-[#F5C542]">7+</div>
              <div className="font-label-sm text-on-surface-variant uppercase tracking-widest">Years of Experience</div>
            </div>
            <div className="space-y-stack-sm">
              <div className="font-display-xl text-[#F5C542]">20+</div>
              <div className="font-label-sm text-on-surface-variant uppercase tracking-widest">Projects Delivered</div>
            </div>
            <div className="space-y-stack-sm">
              <div className="font-display-xl text-[#F5C542]">20+</div>
              <div className="font-label-sm text-on-surface-variant uppercase tracking-widest">Brands Served</div>
            </div>
            <div className="space-y-stack-sm">
              <div className="font-display-xl text-[#F5C542]">100%</div>
              <div className="font-label-sm text-on-surface-variant uppercase tracking-widest">Commitment to Quality</div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-section-gap max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-stack-lg">
            <div>
              <span className="font-label-sm text-primary-container uppercase tracking-[0.3em] mb-4 block">Our Partners</span>
              <h2 className="font-headline-lg text-on-surface">Building lasting relationships with businesses, brands, <br /> and organizations across industries.</h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md text-right">
              Our partnerships are built on trust, creativity, and a shared commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Partner 1 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-surface-container-high border border-white/5">
              <img
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                alt="Grace Financials"
                src="/grace_financials.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="font-headline-md text-xl text-on-surface mb-1">Grace Financials</h4>
                <p className="font-label-sm text-primary-container uppercase tracking-widest">Financial Partner</p>
              </div>
            </div>
            {/* Partner 2 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-surface-container-high border border-white/5">
              <img
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                alt="Wild Wind Logo"
                src="/wild_wind_logo.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="font-headline-md text-xl text-on-surface mb-1">Wild Wind</h4>
                <p className="font-label-sm text-primary-container uppercase tracking-widest">Touri Partner</p>
              </div>
            </div>
            {/* Partner 3 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-surface-container-high border border-white/5">
              <img
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                alt="Anvi Group of Companies"
                src="/anvi_group_of_companies_logo.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="font-headline-md text-xl text-on-surface mb-1">Anvi Group</h4>
                <p className="font-label-sm text-primary-container uppercase tracking-widest">Corporate Partner</p>
              </div>
            </div>
            {/* Partner 4 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-surface-container-high border border-white/5">
              <img
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                alt="Marina Properties Management"
                src="/marina_properties_management_logo.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="font-headline-md text-xl text-on-surface mb-1">Marina Properties</h4>
                <p className="font-label-sm text-primary-container uppercase tracking-widest">Real Estate Partner</p>
              </div>
            </div>
          </div>
        </section>
      </main>

        <Footer onNavigate={onNavigate} />
    </div>
  )
}
