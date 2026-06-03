import Footer from '../components/Footer'

const Portfolio = ({ onNavigate }) => {
  return (
    <div className="bg-[#0B0B0B] text-on-surface font-body-md h-screen overflow-y-auto">
      {/* Nav Spacer */}
      <div className="h-20" />

      <main className="pb-section-gap">
        {/* Hero Title */}
        <section className="max-w-7xl mx-auto px-6 mb-stack-lg">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">The Curated Gallery</h1>
          <p className="text-on-surface-variant max-w-2xl font-body-lg text-body-lg">A chronicle of strategic execution and artistic vision. Our selected works represent the pinnacle of luxury media production and corporate branding.</p>
        </section>

        {/* Filters */}
        <section className="max-w-7xl mx-auto px-6 mb-stack-lg">
          <div className="flex justify-center border-b border-white/10">
            <div className="flex gap-12">
              <button className="py-4 font-label-sm text-label-sm text-[#F5C542] border-b-2 border-[#F5C542] transition-colors">ALL</button>
              <button className="py-4 font-label-sm text-label-sm text-white/50 hover:text-white transition-colors">BRANDING</button>
              <button className="py-4 font-label-sm text-label-sm text-white/50 hover:text-white transition-colors">MEDIA</button>
              <button className="py-4 font-label-sm text-label-sm text-white/50 hover:text-white transition-colors">EVENTS</button>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Project 1: Large Featured */}
            <div className="md:col-span-8 group relative overflow-hidden bg-[#1A1A1A] border border-white/5 aspect-[16/10] project-card">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="A high-contrast cinematic photograph of a contemporary brutalist architectural structure during the golden hour. The building's sharp concrete angles are illuminated by a warm, honey-toned sunset light, casting deep, dramatic shadows against a darkening charcoal sky. The overall aesthetic is ultra-luxurious and minimalist, maintaining a noir theme with vibrant gold highlights in the reflections." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsY4QvdccC1U9fuuW7l36uRcxMW5JSz_Coznd2FMCOSDRwnXqJ0x2LospcY085gTMJ-Dc5_hHIPWlnlVxh5wiAn45G0hWY-X6GJkVRecGvEKGi-gUPrXrFQ4UC6lyEonaoy1zpwBExY6i4AmEETMMUmpmeukhunPxIgU81vzURub1CJAcbW0m_0ZB0GsxB_sPrSMQoupDATM_HUsZuSyrpK3SFTtqap4TW7Zote2BVuKtYiVxD77V9NX4RsXl9OVi2SYvPb_SC7og" />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-stack-lg backdrop-blur-[2px]">
                <span className="text-[#F5C542] font-label-sm text-label-sm mb-2">BRANDING &amp; IDENTITY</span>
                <h3 className="font-headline-md text-headline-md text-[#F5C542]">AURA DEVELOPMENTS</h3>
                <p className="text-white/70 font-body-md mt-4 max-w-lg">Redefining modern living through minimalist architectural visual identity and high-end digital presence.</p>
              </div>
            </div>

            {/* Project 2: Vertical Small */}
            <div className="md:col-span-4 group relative overflow-hidden bg-[#1A1A1A] border border-white/5 aspect-[9/11] project-card">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="A macro studio shot of a premium obsidian-glass product bottle featuring metallic gold typography. The lighting is soft and directional, highlighting the texture of the matte black surface and the shimmering golden liquid within a glass vessel nearby. The atmosphere is sophisticated and exclusive, echoing a corporate noir style with a focus on precision and craftsmanship." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnTbsP_XRcCfBaHsIKt6gW3kUDwU27wiKFgNUPQhNVmRWnLYjzR_DzDse5QFUBRcTWDzzbmKozs5_nKZQdHwgid7sDK_Pak_wvEfy27q7r79vI1JYD65RW9bDtKN-IA4vCGP4_Y8yF83aGqNS721yROkAv20Qas_3EBU4YfHhK8NyKWkOzchPviqLlG9a8TbDhgC5RMNoi4yUfunu-PWQaXBVZ9KZ3X7J60Od3CumPQffzbaIHrERr08PxJTU-yCfc8AesvtKaJJc" />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-stack-lg backdrop-blur-[2px]">
                <span className="text-[#F5C542] font-label-sm text-label-sm mb-2">MEDIA PRODUCTION</span>
                <h3 className="font-headline-md text-headline-md text-[#F5C542]">ONYX ESSENCE</h3>
              </div>
            </div>

            {/* Project 3: Square */}
            <div className="md:col-span-4 group relative overflow-hidden bg-[#1A1A1A] border border-white/5 aspect-square project-card">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="An overhead flat lay of a sleek, dark executive desk setup featuring a black leather notebook, a gold fountain pen, and a high-end smartphone reflecting a dim, warm office light. The composition is clean and organized, conveying professional authority and executive status. The color palette is strictly deep blacks, dark grays, and luxury gold accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABg7I5Qln8C86GgiLkJYiKxezz0uIZ-5ngOcMgR9yhF1uJgZr-Tgh1yq27Yy8nEgevjRFJulXEUHx1iiyXuPl6X7y3uNcoILCRDUuO3SlnZv5Nw0aRtiNpcdxh-axuubfuaYQPz2vg2j55rrOAkd_G5LsHUp2lLTAbtNMfnmZH1n_SMUUi_ygJcpLWh9q_aE59L4evWunNjiUMhg0GACURhSKAwoAwnOOOTFHljWCTY7DT6ohbD1c9MvktVAXct2oufatRFaPQg08" />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-stack-lg backdrop-blur-[2px]">
                <span className="text-[#F5C542] font-label-sm text-label-sm mb-2">CORPORATE STRATEGY</span>
                <h3 className="font-headline-md text-headline-md text-[#F5C542]">CAPITAL ONE GROUP</h3>
              </div>
            </div>

            {/* Project 4: Large Horizontal */}
            <div className="md:col-span-8 group relative overflow-hidden bg-[#1A1A1A] border border-white/5 aspect-[16/8] project-card">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="A wide-angle shot of a high-end gala event held in a dark, vaulted ceiling venue. Atmospheric gold spotlights cut through a light haze, illuminating elegantly dressed guests and crystal glassware on dark-clothed tables. The mood is one of quiet exclusivity and prestigious celebration, following a midnight noir color scheme with glowing amber and gold highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA8piFrJxDcLkOxeSrBannQgHFVnaKN3tTuQ_beTBBxqG3rfhlXylO-YSUL8Wq15D35paMca3sNvJb0Ne0na-fJ1ijpsq5JBV3QEyUSCO656y1fpud4613t_DceqmoK_5R5PGtWJUXCG_N_Z-BPWcA1t-8OAueONg0iCMX-ygzh8h_1voRf2IW7bh5t67rsbHnpX8v9lOX35od2InSX68cB3PVHx-RRkHOQAcCastQcIaUGjP_5uS5yiOqJCPE5WWSyyPQknRUSJA" />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-stack-lg backdrop-blur-[2px]">
                <span className="text-[#F5C542] font-label-sm text-label-sm mb-2">EXPERIENTIAL EVENTS</span>
                <h3 className="font-headline-md text-headline-md text-[#F5C542]">THE MIDNIGHT GALA</h3>
              </div>
            </div>

            {/* Project 5: Medium */}
            <div className="md:col-span-6 group relative overflow-hidden bg-[#1A1A1A] border border-white/5 aspect-[4/3] project-card">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="A minimalist close-up of a high-end watch face featuring intricate golden mechanical parts visible through a dark sapphire crystal. The light catches the polished gold edges, creating a brilliant contrast against the deep black interior. The aesthetic is mechanical, precise, and extremely luxurious, presented in a studio setting with soft, controlled shadows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe9pw6QBhdC-UZIv2P5mQYckCpTRCKMfgNQI7lJ_jeKpmFBpN-TP4zqgdZLPlg9t4BoNI74Hp_iEu7JckluTBu_bKIMt4ZAHsb0FctB8dj-ramCPyKP82r2eQp9jydf_RiVS_eIXwiJNNG88NTzjeg1ib8BsIk7TAiSNZl6iUPHcOWfpTNBXTzu8YA5ifDwC6xuplvq1_Gc2l5BwVSgQd7f20BrWxE1SK6Uu-fYzdcykkNdzjl9NgtuLGEmCC5_k5xvJa0CRO5IEQ" />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-stack-lg backdrop-blur-[2px]">
                <span className="text-[#F5C542] font-label-sm text-label-sm mb-2">PRODUCT DESIGN</span>
                <h3 className="font-headline-md text-headline-md text-[#F5C542]">CHRONOS VIII</h3>
              </div>
            </div>

            {/* Project 6: Medium */}
            <div className="md:col-span-6 group relative overflow-hidden bg-[#1A1A1A] border border-white/5 aspect-[4/3] project-card">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="A clean, data-driven visualization displayed on a large high-resolution screen in a dark boardroom. The interface is sleek, using neon gold line graphs and thin white typography against a deep navy-black background. The lighting in the room is low, with the screen acting as the primary light source, creating a high-tech, authoritative corporate atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO-UC-RY1aXSHfoGXAerywyEqBVEJGBqF2wtJpEAEd6bfsQ-Ncsy7Wo-4ke_EQ6Y5eOz3G6VRUvCzHDlCwEcAIRoobNwXBLdCxwG3Ag0dvZDc6hBHK5zdMBCy2hA7vNYkE4kengNkuHVtmKlc3uxF6ZWRatMI2-MRlcqBdXh0lxUIcGWR6S-WaYX07uiWZm8ZB2ybJNQb1sAVGIl9b9O09KbH1cANbYJNEargQsTzKsnq9lpmN4aB_ijpshgz-XRZstOSj95gPgy0" />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-stack-lg backdrop-blur-[2px]">
                <span className="text-[#F5C542] font-label-sm text-label-sm mb-2">DIGITAL ECOSYSTEMS</span>
                <h3 className="font-headline-md text-headline-md text-[#F5C542]">STRATOS ANALYTICS</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 mt-section-gap">
          <div className="bg-[#1A1A1A] border border-white/5 p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Ready to curate your next chapter?</h2>
              <p className="text-on-surface-variant font-body-lg text-body-lg mb-8 max-w-xl mx-auto">Join a roster of elite brands who trust Media7 with their creative and strategic narrative.</p>
              <button className="bg-[#F5C542] text-[#0B0B0B] px-12 py-4 text-lg font-bold transition-transform active:scale-95">
                Start Your Project
              </button>
            </div>
          </div>
        </section>
      </main>

        <Footer onNavigate={onNavigate} />
    </div>
  )
}

export default Portfolio
