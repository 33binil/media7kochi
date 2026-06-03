import Footer from '../components/Footer'

export default function Blog({ onNavigate }) {
  return (
    <div className="h-screen overflow-y-auto bg-[#0B0B0B] text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container">
      {/* Nav Spacer */}
      <div className="h-20" />

      <main className="pb-section-gap px-6 max-w-7xl mx-auto">
        {/* Hero Header */}
        <header className="mb-stack-lg space-y-4">
          <p className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest">Thought Leadership</p>
          <h1 className="font-display-xl text-display-xl text-on-surface">Insights &amp; Updates</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Expert perspectives on the intersection of technology, creative strategy, and executive media management.
          </p>
        </header>

        {/* Featured Post */}
        <section className="mb-stack-lg group">
          <div className="relative aspect-[21/9] overflow-hidden bg-surface-container-low border border-white/5 shadow-2xl">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="A cinematic, high-contrast overhead shot of a sleek, dark executive boardroom overlooking a glowing futuristic city at night. The lighting is moody and noir-inspired, with deep shadows and sharp amber accents reflecting off polished surfaces. The aesthetic is luxurious, modern, and authoritative, emphasizing a professional media environment with a noir and gold palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpbGSgLouJISqpTEXMCgNo0CBiWr4LFxrhcSgvxVLZlORpU7_dXiNs07VpDT4EBLDC6gyaYxJ8y6V43K2C4gc2VqB4MCM6LyKmTmziA4AJhVbg3YKyhm-zOr7tF7mCk7E2dcDf-0X5E7x0kG0vC7-MVi5ptQDtHcuXgh87wzWAVlHb9w0X0vSDWOC_s8FAYV5kCGkbZPpTTiYS_s5eSvHGcek3ePfDUSFycvaU5l-Ad7_PC5db1im84i7iS2eR5VErn8xUgCmtaJo" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent p-stack-lg flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-unit">
                <span className="font-label-sm text-label-sm text-primary-container">STRATEGY</span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span className="font-label-sm text-label-sm text-on-surface-variant">OCT 24, 2024</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md max-w-3xl">Navigating the Future of Digital Narrative in Executive Media</h2>
              <a className="flex items-center gap-2 text-primary-container font-bold group/link" href="#">
                Read Featured Article
                <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Card 1 */}
          <article className="flex flex-col bg-[#1A1A1A] border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 group">
            <div className="aspect-[16/9] overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="A minimalist architectural detail of a luxury modern building facade at twilight. Geometric lines and shadows dominate the composition, illuminated by a warm, golden glow from interior windows. The scene is shot in a noir style with deep blacks and rich golden highlights, evoking a sense of status and quiet confidence in a professional setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvb8xY8HFPry3Jqqx2U6bN2ibv0i6R9Oj3ZJOGr1sqmEupT-jKhn5XKlQs5fsGhszI9GtR-hqUWQ_p43hPYW997bNj0lhjwQuazwxR8L56D-uM7fYI2AnQPnenmgHHZa5fL_QF2_PI2qaqZbksLaHLqia876vl9r1TEp4jgVolcl5tnKvkbG2a5tv6uMGHA7KKsKiaTZTVwZA7futD8Bou6q59UkLOAPqXCaCjwpKWngfsdD_AO8rPdAf9RJ8qo_szQMivEVLrY0w" />
            </div>
            <div className="p-stack-lg flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-stack-md">
                <span className="font-label-sm text-label-sm text-primary-container">BRANDING</span>
                <span className="font-label-sm text-label-sm text-zinc-500">12 MIN READ</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-md">The Psychology of Minimalism in Luxury Brands</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg line-clamp-3">
                How reducing visual noise creates a sense of exclusivity and status for high-end corporate identities.
              </p>
              <div className="mt-auto">
                <a className="flex items-center gap-2 text-primary-container font-bold group/btn" href="#">
                  Read More
                  <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="flex flex-col bg-[#1A1A1A] border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 group">
            <div className="aspect-[16/9] overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="An abstract, close-up shot of liquid gold flowing over a matte black textured surface. The lighting creates dramatic highlights and shadows, emphasizing the viscosity and metallic sheen of the gold. The overall mood is luxurious, avant-garde, and sophisticated, perfectly aligned with a premium corporate noir aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLFi_DsN9G0rJL3WmfDjei_hqH55rTbA_VAlQ41ONKp7jONlmduYFUZiNJKSAbg_2EMv4HjzWdGUpg3B1SvJlhZ8VlvQNZYMq6rBr70FgOJjpVe_3dkaE1rtWMWIrU6jUDduXqPeLnZhxAte3Z0uZ7JbHe6zVaKx7YQS6vbUuXcLx6CjxKMANC5PFjI-IYpGT9m0tcx72oCLfVHv4yNu0-eKyXiFzfmtZzXi0X50uf7o_cYfpJx74M3KsFGlM_JKZVRsk0WJVfAH4" />
            </div>
            <div className="p-stack-lg flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-stack-md">
                <span className="font-label-sm text-label-sm text-primary-container">INNOVATION</span>
                <span className="font-label-sm text-label-sm text-zinc-500">8 MIN READ</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-md">AI Integration in Creative Workflows</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg line-clamp-3">
                Maintaining the human touch in high-end media production while leveraging generative tools for efficiency.
              </p>
              <div className="mt-auto">
                <a className="flex items-center gap-2 text-primary-container font-bold group/btn" href="#">
                  Read More
                  <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="flex flex-col bg-[#1A1A1A] border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 group">
            <div className="aspect-[16/9] overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="A professional studio portrait of a sophisticated person in a tailored black suit, partially obscured by artistic shadows. The lighting is high-contrast chiasoscuro, with a single warm light source highlighting the texture of the fabric. The aesthetic is extremely high-end, corporate, and minimalist, using a deep black background and subtle amber highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDiravvcenfqmWBas01yoL3AUrDebjjQERjxGIME874dcyV06pIT2uDsCtKKo4x0K4e3OwBmdks9sX7AdvvVMvl6HnH4veBrf71V59V9oz2BvQXNY__v7cCkzG8wG75YFtNNLyQF_fSn1E-AyXuqmgNaRxRTuRh26n49zM5qQ_1FwuLQLg2_w08pA11OZ9JzPAKflHPR83d8nbc-z6Ve6b1teq9DUaHUFvAw2t1OIXUM2Jqq-N7Xp3_VI0aoYhu-9kfATPbxit3j0" />
            </div>
            <div className="p-stack-lg flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-stack-md">
                <span className="font-label-sm text-label-sm text-primary-container">LEADERSHIP</span>
                <span className="font-label-sm text-label-sm text-zinc-500">15 MIN READ</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-md">Crisis Management in Global Media</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg line-clamp-3">
                Strategic communication frameworks for maintaining brand authority during industry shifts and public scrutiny.
              </p>
              <div className="mt-auto">
                <a className="flex items-center gap-2 text-primary-container font-bold group/btn" href="#">
                  Read More
                  <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>

          {/* Card 4 */}
          <article className="flex flex-col bg-[#1A1A1A] border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 group">
            <div className="aspect-[16/9] overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="A macro shot of a vintage Leica-style camera lens reflecting a golden sunset in its glass. The camera body is matte black and precision-engineered. The focus is sharp on the lens elements, with a soft bokeh background. The lighting is warm and dramatic, following a luxury noir aesthetic that emphasizes craftsmanship and technical excellence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5DYU-lCoTTINdmBzMjiouLFBNfOS5dNqLdBLxwu57u6sbkL8AaowzAxU1HWcv7jAsnc8n6IvKeaHcbJ16bKT2QTVfNqQadHp6QTSSOshwHreHdApS5lm41WD4jCnqmWVSOgPRnJ8NugYpO27wUqr0ecIcKS3To2XLHiHkSxWYErwYsbCETlLkHlRGCQBnHPaZfKnjMTac7VedIR866wtguE0BF6sF_7sA6RD_8DYKtU6IMPZiGe64tXmO7Iy1P9Nb2-2c49oo3Dg" />
            </div>
            <div className="p-stack-lg flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-stack-md">
                <span className="font-label-sm text-label-sm text-primary-container">PRODUCTION</span>
                <span className="font-label-sm text-label-sm text-zinc-500">10 MIN READ</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-md">Visual Consistency Across Omnichannel Media</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg line-clamp-3">
                Why a unified visual language is the most critical asset for modern enterprises.
              </p>
              <div className="mt-auto">
                <a className="flex items-center gap-2 text-primary-container font-bold group/btn" href="#">
                  Read More
                  <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>

          {/* Card 5 */}
          <article className="flex flex-col bg-[#1A1A1A] border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 group">
            <div className="aspect-[16/9] overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="A wide-angle interior view of a contemporary art gallery with one large, minimalist black canvas illuminated by a single warm spotlight. The concrete floor is polished and reflects the golden light. The atmosphere is quiet, reverent, and elite. The color palette is strictly noir with gold highlights, conveying an ultra-premium and curated brand experience." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkMNYRw9RpdY8Gc7_qoe9e0S4h67x5cHsRCtgIm4DWFmxZU1QeMvoGP5iEdgToMTpPzxcRIug0guHiToXFPl8XdnpUIALxlzjkgFiFZUZLUl6Lb1Ke4pw3ocKRF3KLU-dSvkfyGdGV4zTIqgztfsPYLdM-a26OWvT17UD-r_VicCYY7pi-QT34GEAFdooSimUayqAYfiKAk3pQCos6l76Gefnna9g4nm5d08oVZRYVUbmiyY-dQ18NQ3bFXGvBgqcFKULvpoPDBOg" />
            </div>
            <div className="p-stack-lg flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-stack-md">
                <span className="font-label-sm text-label-sm text-primary-container">CULTURE</span>
                <span className="font-label-sm text-label-sm text-zinc-500">6 MIN READ</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-md">The Gallery Effect in Interface Design</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg line-clamp-3">
                Applying museum curation principles to digital platforms to elevate user perceived value.
              </p>
              <div className="mt-auto">
                <a className="flex items-center gap-2 text-primary-container font-bold group/btn" href="#">
                  Read More
                  <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>

          {/* Card 6 */}
          <article className="flex flex-col bg-[#1A1A1A] border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 group">
            <div className="aspect-[16/9] overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="A stylized image of a high-end black fountain pen resting on a leather-bound notebook. A single droplet of golden ink sits on the nib, shimmering under a focused soft light. The background is dark and out of focus. The composition is elegant, traditional yet modern, and exudes authority and premium storytelling quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6N4WXfYkKZBcYg8BdMw1B3tJgJrHIuSMCGUT_lTZnlBH28wrG3KPo0jzck8edyAZrZUpNeoJbvpZwHLPn3WLWcIur1_ChyyA5uvJAHXmWN25AFf8CJdlSm7RG8wLZ_Ot1PG6ycQD9QOK7GaSl4Mipn32gcjEBK5ZhI9iplF_F_xDxi1iEE-2zwnNTtG6s4hLfOsJSv9FUIeWziFpAXJOoJvyTkA5Gq4wAtGoYXo5DBZaG8StRAwFEcFoamqUaudJr79MJQq69nvY" />
            </div>
            <div className="p-stack-lg flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-stack-md">
                <span className="font-label-sm text-label-sm text-primary-container">WRITING</span>
                <span className="font-label-sm text-label-sm text-zinc-500">14 MIN READ</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-md">Crafting Narratives for Global Stakeholders</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg line-clamp-3">
                Effective storytelling techniques that resonate in boardrooms across diverse cultural landscapes.
              </p>
              <div className="mt-auto">
                <a className="flex items-center gap-2 text-primary-container font-bold group/btn" href="#">
                  Read More
                  <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* Pagination */}
        <div className="mt-stack-lg flex justify-center items-center gap-4">
          <button className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-primary-container text-on-surface-variant hover:text-primary-container transition-all">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <span className="font-label-sm text-label-sm text-primary-container">PAGE 01 / 08</span>
          <button className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-primary-container text-on-surface-variant hover:text-primary-container transition-all">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}
