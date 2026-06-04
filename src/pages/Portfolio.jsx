import Footer from '../components/Footer'
import { projects } from '../data/portfolio'

const Portfolio = ({ onNavigate }) => {
  return (
    <div className="bg-[#0B0B0B] text-on-surface font-body-md h-screen overflow-y-auto">
      {/* Nav Spacer */}
      <div className="h-20" />

      <main className="pb-section-gap">
        {/* Hero Title */}
        <section className="max-w-7xl mx-auto px-6 mb-stack-lg">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">The Creative Showcase</h1>
          <p className="text-on-surface-variant max-w-2xl font-body-lg text-body-lg">A collection of our finest work in branding, advertising, media production, digital marketing, and event management. Every project reflects our passion for creativity, strategic thinking, and delivering meaningful results for our clients.</p>
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
            {projects.map(project => (
              <div key={project.id} className={`${project.gridClass} group relative overflow-hidden bg-[#1A1A1A] border border-white/5 ${project.aspect} project-card`}>
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={project.alt} src={project.img} />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-stack-lg backdrop-blur-[2px]">
                  <span className="text-[#F5C542] font-label-sm text-label-sm mb-2">{project.category}</span>
                  <h3 className="font-headline-md text-headline-md text-[#F5C542]">{project.title}</h3>
                  {project.description && (
                    <p className="text-white/70 font-body-md mt-4 max-w-lg">{project.description}</p>
                  )}
                </div>
              </div>
            ))}
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
