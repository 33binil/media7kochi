import Footer from '../components/Footer'
import { featuredPost, posts } from '../data/blog'

export default function Blog({ onNavigate }) {
  return (
    <div className="h-screen overflow-y-auto bg-[#0B0B0B] text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container">
      <div className="h-20" />

      <main className="pb-section-gap px-6 max-w-7xl mx-auto">
        <header className="mb-stack-lg space-y-4">
          <p className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest">Thought Leadership</p>
          <h1 className="font-display-xl text-display-xl text-on-surface">Insights &amp; Updates</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Expert perspectives on the intersection of technology, creative strategy, and executive media management.
          </p>
        </header>

        <section className="mb-stack-lg group">
          <div className="relative aspect-[21/9] overflow-hidden bg-surface-container-low border border-white/5 shadow-2xl">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={featuredPost.alt} src={featuredPost.img} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent p-stack-lg flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-unit">
                <span className="font-label-sm text-label-sm text-primary-container">{featuredPost.category}</span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span className="font-label-sm text-label-sm text-on-surface-variant">{featuredPost.date}</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md max-w-3xl">{featuredPost.title}</h2>
              <button onClick={() => onNavigate(`blogpost-${featuredPost.id}`)} className="flex items-center gap-2 text-primary-container font-bold group/link">
                Read Featured Article
                <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {posts.map(post => (
            <article key={post.id} className="flex flex-col bg-[#1A1A1A] border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 group">
              <div className="aspect-[16/9] overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={post.alt} src={post.img} />
              </div>
              <div className="p-stack-lg flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-stack-md">
                  <span className="font-label-sm text-label-sm text-primary-container">{post.category}</span>
                  <span className="font-label-sm text-label-sm text-zinc-500">{post.readTime}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-md">{post.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg line-clamp-3">{post.description}</p>
                <div className="mt-auto">
                  <button onClick={() => onNavigate(`blogpost-${post.id}`)} className="flex items-center gap-2 text-primary-container font-bold group/btn">
                    Read More
                    <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

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
