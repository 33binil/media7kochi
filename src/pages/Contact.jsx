import Footer from '../components/Footer'

export default function Contact({ onNavigate }) {
  return (
    <div className="h-screen overflow-y-auto bg-[#0B0B0B] text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container">
      {/* Nav Spacer */}
      <div className="h-20" />

      <main className="pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-stack-lg">
          <h1 className="font-display-xl text-display-xl text-on-surface mb-stack-md">Get in Touch</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Ready to elevate your digital presence? Our executive team is available for private consultations and strategic partnership discussions.
          </p>
        </section>

        {/* Dual Column Layout */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-4 space-y-gutter">
            {/* Email Card */}
            <div className="bg-[#1A1A1A] border border-white/5 p-stack-lg transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 group">
              <div className="flex items-center gap-4 mb-stack-md">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container">
                  <span className="material-symbols-outlined text-[#F5C542] text-2xl">mail</span>
                </div>
                <span className="font-label-sm text-label-sm text-zinc-500 uppercase tracking-widest">Email Us</span>
              </div>
              <p className="font-headline-md text-headline-md text-on-surface group-hover:text-[#F5C542] transition-colors">hello@media7.agency</p>
            </div>

            {/* Phone Card */}
            <div className="bg-[#1A1A1A] border border-white/5 p-stack-lg transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 group">
              <div className="flex items-center gap-4 mb-stack-md">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container">
                  <span className="material-symbols-outlined text-[#F5C542] text-2xl">call</span>
                </div>
                <span className="font-label-sm text-label-sm text-zinc-500 uppercase tracking-widest">Call Directly</span>
              </div>
              <p className="font-headline-md text-headline-md text-on-surface group-hover:text-[#F5C542] transition-colors">+1 (555) 890-2410</p>
            </div>

            {/* Address Card */}
            <div className="bg-[#1A1A1A] border border-white/5 p-stack-lg transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 group">
              <div className="flex items-center gap-4 mb-stack-md">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container">
                  <span className="material-symbols-outlined text-[#F5C542] text-2xl">location_on</span>
                </div>
                <span className="font-label-sm text-label-sm text-zinc-500 uppercase tracking-widest">Visit Studio</span>
              </div>
              <p className="font-headline-md text-headline-md text-on-surface group-hover:text-[#F5C542] transition-colors">7th Avenue, Suite 400<br />New York, NY 10011</p>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-8 bg-[#1A1A1A] border border-white/5 p-stack-lg">
            <h2 className="font-headline-md text-headline-md mb-stack-lg text-on-surface">Project Inquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Full Name</label>
                  <input className="w-full bg-[#0B0B0B] border border-white/5 focus:border-[#F5C542] focus:ring-0 text-on-surface font-body-md p-4 transition-colors" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Email Address</label>
                  <input className="w-full bg-[#0B0B0B] border border-white/5 focus:border-[#F5C542] focus:ring-0 text-on-surface font-body-md p-4 transition-colors" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Project Type</label>
                  <select className="w-full bg-[#0B0B0B] border border-white/5 focus:border-[#F5C542] focus:ring-0 text-on-surface font-body-md p-4 transition-colors">
                    <option>Brand Identity</option>
                    <option>Digital Strategy</option>
                    <option>High-End Web Development</option>
                    <option>Media Production</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Budget Range</label>
                  <select className="w-full bg-[#0B0B0B] border border-white/5 focus:border-[#F5C542] focus:ring-0 text-on-surface font-body-md p-4 transition-colors">
                    <option>$20k - $50k</option>
                    <option>$50k - $150k</option>
                    <option>$150k+</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Project Brief</label>
                <textarea className="w-full bg-[#0B0B0B] border border-white/5 focus:border-[#F5C542] focus:ring-0 text-on-surface font-body-md p-4 transition-colors" placeholder="Tell us about your vision and goals..." rows="6"></textarea>
              </div>
              <div className="pt-4">
                <button className="w-full bg-[#F5C542] text-black font-bold py-6 text-label-sm uppercase tracking-widest hover:brightness-110 transition-all active:scale-[0.98]" type="submit">
                  Submit Proposal
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section className="max-w-7xl mx-auto px-6 mt-stack-lg">
          <div className="w-full overflow-hidden border border-white/5">
            <iframe
              src="https://maps.google.com/maps?q=10.014936,76.3018219&z=15&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Media7 Location"
            />
          </div>
        </section>

      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}
