import Footer from '../components/Footer'

export default function Terms({ onNavigate }) {
  return (
    <div className="h-screen overflow-y-auto bg-[#0B0B0B] text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/40 via-[#0B0B0B]/80 to-[#0B0B0B] z-10" />
            <img
              className="w-full h-full object-cover grayscale opacity-40"
              alt="Terms of Service"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH1js_D1xV_JQ0J1Gsd06MI9RXpcpt8-mq4X-e7cDxrLxvJpEMGdDeC2l_nF8-6bItg6-w2TluHUP3Qamv_tmeKqL0Ear5XRhmt5CgRxxdTc9Yfqy3CWacpCr-_k60faTFIl3X3Ts35Ndo27nEjv7wM5uo_srW0H7hDhphNk2WWHFPVo8YZYlXdqS3V46fMwFiyiJQWYzckGrkRebJIgTM0baeX6B_lReBGDa3FhhLvGal1PtMU1xiPstdy90_vrYAJYMkdQjrrVs"
            />
          </div>
          <div className="relative z-20 text-center max-w-4xl px-6">
            <span className="font-label-sm text-primary-container tracking-[0.3em] uppercase mb-4 block">Legal</span>
            <h1 className="font-display-xl text-on-background mb-6">Terms of Service</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Guidelines governing the use of our services and website.</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-section-gap max-w-4xl mx-auto px-6">
          <div className="space-y-stack-lg">
            <div>
              <h2 className="font-headline-md text-on-surface mb-4">Acceptance of Terms</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">By accessing or using the Media7 website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our website or services.</p>
            </div>

            <div>
              <h2 className="font-headline-md text-on-surface mb-4">Services</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">Media7 provides branding, advertising, digital marketing, media production, and event management services. All services are delivered based on the scope agreed upon in a separate contract or proposal. We reserve the right to modify or discontinue any service without prior notice.</p>
            </div>

            <div>
              <h2 className="font-headline-md text-on-surface mb-4">Intellectual Property</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">All content, trademarks, logos, and intellectual property displayed on this website are owned by or licensed to Media7. You may not reproduce, distribute, or use any content without our prior written permission.</p>
            </div>

            <div>
              <h2 className="font-headline-md text-on-surface mb-4">User Conduct</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">You agree not to use our website or services for any unlawful purpose or in violation of any applicable laws. You must not attempt to disrupt, damage, or gain unauthorized access to our systems or data.</p>
            </div>

            <div>
              <h2 className="font-headline-md text-on-surface mb-4">Limitation of Liability</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">Media7 shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services, to the fullest extent permitted by law.</p>
            </div>

            <div>
              <h2 className="font-headline-md text-on-surface mb-4">Third-Party Links</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">Our website may contain links to third-party websites. Media7 is not responsible for the content, privacy policies, or practices of these external sites.</p>
            </div>

            <div>
              <h2 className="font-headline-md text-on-surface mb-4">Changes to Terms</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">We reserve the right to update or modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the revised terms.</p>
            </div>

            <div>
              <h2 className="font-headline-md text-on-surface mb-4">Contact Us</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">If you have any questions about these Terms of Service, please contact us at md@media7news.com mail or via WhatsApp at +91 99955 33988.</p>
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="font-body-md text-on-surface-variant">Last updated: June 2025</p>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} currentPage="terms" />
    </div>
  )
}
