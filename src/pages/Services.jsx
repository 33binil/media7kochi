import Footer from '../components/Footer'

export default function Services({ onNavigate }) {
  return (
    <div className="h-screen overflow-y-auto bg-[#0B0B0B] text-on-background selection:bg-primary-container selection:text-on-primary-container font-body-md antialiased">
      <main className="mt-[80px]">
        {/* Hero Header */}
        <section className="relative h-[614px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/40 via-[#0B0B0B]/80 to-[#0B0B0B] z-10" />
            <img
              className="w-full h-full object-cover grayscale opacity-40"
              alt="A cinematic, low-angle shot of a high-end corporate skyscraper interior with polished obsidian surfaces and golden ambient lighting."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH1js_D1xV_JQ0J1Gsd06MI9RXpcpt8-mq4X-e7cDxrLxvJpEMGdDeC2l_nF8-6bItg6-w2TluHUP3Qamv_tmeKqL0Ear5XRhmt5CgRxxdTc9Yfqy3CWacpCr-_k60faTFIl3X3Ts35Ndo27nEjv7wM5uo_srW0H7hDhphNk2WWHFPVo8YZYlXdqS3V46fMwFiyiJQWYzckGrkRebJIgTM0baeX6B_lReBGDa3FhhLvGal1PtMU1xiPstdy90_vrYAJYMkdQjrrVs"
            />
          </div>
          <div className="relative z-20 text-center max-w-4xl px-6">
            <span className="font-label-sm text-primary-container tracking-[0.3em] uppercase mb-4 block">Our Expertise</span>
            <h1 className="font-display-xl text-on-background mb-6">Expertise &amp; Solutions</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Elevating brands through a fusion of strategic marketing, cinematic media creation, and world-class event execution.</p>
          </div>
        </section>

        {/* Services Breakdown */}
        <section className="py-section-gap max-w-7xl mx-auto px-6">
          <div className="space-y-section-gap">
            {/* Branding & Marketing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="font-label-sm text-primary-container tracking-widest uppercase block mb-4">01. Identity</span>
                <h2 className="font-headline-lg text-on-background mb-8">Branding &amp; Marketing</h2>
                <p className="font-body-lg text-on-surface-variant mb-8">We construct powerful brand identities that resonate with authority. Our approach combines data-driven insights with avant-garde creative direction to position your brand at the pinnacle of your industry.</p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 font-body-md text-on-surface">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    Visual Identity &amp; Logo Architecture
                  </li>
                  <li className="flex items-center gap-3 font-body-md text-on-surface">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    Strategic Market Positioning
                  </li>
                  <li className="flex items-center gap-3 font-body-md text-on-surface">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    Omni-channel Growth Marketing
                  </li>
                </ul>
                <button className="border border-white/20 px-8 py-3 font-bold text-on-background hover:bg-white/5 transition-all">Explore Branding</button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/5] bg-[#1A1A1A] relative overflow-hidden rounded-lg group shadow-2xl">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                    alt="A minimalist brand board displaying premium textures, a golden logo, and elegant typography."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCJ78_5WkxI47H9zEZs5oWAbrsVil6SfofwnK9XHbqOLSmdu8y4NOxNVqynIGhyarvSUyJU5bKrefABVfq8upZVSXWLvD3K3a1cYh9E4ZlWUiTzQkAXpiSH2tJrzJt-eLkbaPOwSfN7d5uKynRESf3abi_GfzEnto-wEhriM_war7KFajTuJt-nG4I5R5jvcMx35B_fUsq4r66iZ90TY0GFFKD4Gz-q8povOW7J6xk10V1P4KiyJ9avaUkHm_E7dNBQUm1GOfC8UQ"
                  />
                  <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Media Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="aspect-[16/9] bg-[#1A1A1A] relative overflow-hidden rounded-lg group shadow-2xl">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                    alt="A professional film set in a darkened studio with a high-end cinema camera."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz-0RaQa1WMW2Kjs3AJYE59-T50QjsCnP_7i2q52YRAL7CSBFd_k5ehLVab1xY6lUsETDT45tXwIagzlXve67_LQnHury2gGdG14T_juGRQWbAE9gy7Ay2fvXNVkq8JaezC2tpLEtdfWygXSifbNBgFmc6AcZDp52AOZZ1Kv-FO1hOXtIqHZ__tHeVl56mE6-ym7o5iUPwISMi4l0xb13-LaKzFA5EhFbNRaaMemhBfYpIUvm5GJoHCzJeN2omnsqjynw0hc5Z2r4"
                  />
                  <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                </div>
              </div>
              <div className="pl-0 lg:pl-12">
                <span className="font-label-sm text-primary-container tracking-widest uppercase block mb-4">02. Visuals</span>
                <h2 className="font-headline-lg text-on-background mb-8">Media Solutions</h2>
                <p className="font-body-lg text-on-surface-variant mb-8">Capturing the essence of excellence through high-fidelity media. From cinematic commercial production to corporate documentaries, we tell stories that demand attention and inspire action.</p>
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="p-6 bg-[#1A1A1A] border border-white/5">
                    <span className="material-symbols-outlined text-primary-container text-3xl mb-4">videocam</span>
                    <h4 className="font-headline-md text-lg mb-2">Cinematography</h4>
                    <p className="text-sm text-on-surface-variant">4K Narrative Production</p>
                  </div>
                  <div className="p-6 bg-[#1A1A1A] border border-white/5">
                    <span className="material-symbols-outlined text-primary-container text-3xl mb-4">photo_camera</span>
                    <h4 className="font-headline-md text-lg mb-2">Photography</h4>
                    <p className="text-sm text-on-surface-variant">High-End Brand Assets</p>
                  </div>
                </div>
                <button className="border border-white/20 px-8 py-3 font-bold text-on-background hover:bg-white/5 transition-all">View Our Reels</button>
              </div>
            </div>

            {/* Event Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="font-label-sm text-primary-container tracking-widest uppercase block mb-4">03. Experience</span>
                <h2 className="font-headline-lg text-on-background mb-8">Event Management</h2>
                <p className="font-body-lg text-on-surface-variant mb-8">We curate bespoke events that serve as unforgettable brand touchpoints. Our team handles every detail from logistical precision to atmospheric design, ensuring a seamless and high-status experience.</p>
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-primary-container text-primary-container font-headline-md">1</div>
                    <div>
                      <h4 className="font-bold text-on-background">Corporate Galas</h4>
                      <p className="text-on-surface-variant">Elegant executive gatherings designed for networking.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-primary-container text-primary-container font-headline-md">2</div>
                    <div>
                      <h4 className="font-bold text-on-background">Product Launches</h4>
                      <p className="text-on-surface-variant">Immersive showcases that generate global hype.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] bg-[#1A1A1A] relative overflow-hidden rounded-lg group shadow-2xl">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                    alt="An expansive view of a luxury event hall prepared for a black-tie gala."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBACXRsZsBUr_eQfOTmGScu1-9b_7yIZGtqQQ4sTEeV8E5nHQzut26ROdAVNvUQw5HZGqFbQ2ej6G-Fuc12JXZTRaC2-Qzev_Np8qstb9FlWxBzNJ7-X8Fr0U19eoyviohChfwuLdStu9VlKa4fQwg1M9nGId3tbiMwOZ68TBmwVChON7Fq8-jzheu71YRtoWms8ykJu2PeDSdjvE2ab9C2XGztAE-KJaS35xDtY4c43tNPYFTvhMyaKtRv6RC__Qx4wAughQ2Mt6o"
                  />
                  <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-section-gap bg-[#111111] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-headline-lg text-on-background mb-4">From Vision to Victory</h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Our proven methodology ensures that every project reaches its maximum potential through a structured, elite workflow.</p>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 hidden md:block" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                {/* Step 1 */}
                <div className="bg-[#1A1A1A] p-8 relative group hover:bg-[#222222] transition-colors">
                  <div className="w-16 h-16 bg-primary-container flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-lg shadow-primary-container/20">
                    <span className="material-symbols-outlined text-black text-3xl">lightbulb</span>
                  </div>
                  <span className="font-label-sm text-primary-container mb-2 block">Phase 01</span>
                  <h3 className="font-headline-md text-xl mb-4">Discovery</h3>
                  <p className="text-sm text-on-surface-variant">We dive deep into your brand DNA, identifying core values and market opportunities.</p>
                </div>
                {/* Step 2 */}
                <div className="bg-[#1A1A1A] p-8 relative group hover:bg-[#222222] transition-colors">
                  <div className="w-16 h-16 bg-primary-container flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-lg shadow-primary-container/20">
                    <span className="material-symbols-outlined text-black text-3xl">architecture</span>
                  </div>
                  <span className="font-label-sm text-primary-container mb-2 block">Phase 02</span>
                  <h3 className="font-headline-md text-xl mb-4">Architecture</h3>
                  <p className="text-sm text-on-surface-variant">Designing the blueprint for success across creative and logistical touchpoints.</p>
                </div>
                {/* Step 3 */}
                <div className="bg-[#1A1A1A] p-8 relative group hover:bg-[#222222] transition-colors">
                  <div className="w-16 h-16 bg-primary-container flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-lg shadow-primary-container/20">
                    <span className="material-symbols-outlined text-black text-3xl">brush</span>
                  </div>
                  <span className="font-label-sm text-primary-container mb-2 block">Phase 03</span>
                  <h3 className="font-headline-md text-xl mb-4">Execution</h3>
                  <p className="text-sm text-on-surface-variant">Precision implementation of strategy and creative assets by our master artisans.</p>
                </div>
                {/* Step 4 */}
                <div className="bg-[#1A1A1A] p-8 relative group hover:bg-[#222222] transition-colors">
                  <div className="w-16 h-16 bg-primary-container flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-lg shadow-primary-container/20">
                    <span className="material-symbols-outlined text-black text-3xl">trophy</span>
                  </div>
                  <span className="font-label-sm text-primary-container mb-2 block">Phase 04</span>
                  <h3 className="font-headline-md text-xl mb-4">Victory</h3>
                  <p className="text-sm text-on-surface-variant">Analysis, refinement, and celebration of measurable brand growth and impact.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-section-gap text-center px-6">
          <div className="max-w-3xl mx-auto border border-white/5 bg-[#1A1A1A] p-16 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full -mr-16 -mt-16 blur-3xl" />
            <h2 className="font-headline-lg text-on-background mb-6">Ready to elevate?</h2>
            <p className="font-body-lg text-on-surface-variant mb-10">Connect with our executive team to discuss your next high-impact project.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-[#F5C542] text-black px-10 py-4 font-bold text-lg hover:brightness-110 active:scale-95 transition-all">Start a Project</button>
              <button className="border border-white/20 px-10 py-4 font-bold text-lg text-on-background hover:bg-white/5 transition-all">Our Portfolio</button>
            </div>
          </div>
        </section>
      </main>

        <Footer onNavigate={onNavigate} />
    </div>
  )
}
