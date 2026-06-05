import Footer from '../components/Footer'
import { featuredPost, posts } from '../data/blog'

const allPosts = [featuredPost, ...posts]

export default function BlogPost({ onNavigate, page }) {
  const postId = page.replace('blogpost-', '')
  const post = allPosts.find(p => String(p.id) === postId)

  if (!post) {
    return (
      <div className="h-screen overflow-y-auto bg-[#0B0B0B] text-on-surface font-body-md flex items-center justify-center">
        <p className="font-headline-md text-headline-md text-on-surface-variant">Post not found.</p>
      </div>
    )
  }

  return (
    <div className="h-screen overflow-y-auto bg-[#0B0B0B] text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container">
      <div className="h-20" />

      <main className="pb-section-gap px-6 max-w-4xl mx-auto">
        <button
          onClick={() => onNavigate('blog')}
          className="flex items-center gap-2 text-primary-container font-bold group/back mb-stack-lg"
        >
          <span className="material-symbols-outlined transition-transform group-hover/back:-translate-x-1">arrow_back</span>
          Back to Blog
        </button>

        <header className="mb-stack-lg space-y-4">
          <div className="flex items-center gap-4">
            <span className="font-label-sm text-label-sm text-primary-container">{post.category}</span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span className="font-label-sm text-label-sm text-on-surface-variant">{post.date}</span>
            {'readTime' in post && (
              <>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span className="font-label-sm text-label-sm text-zinc-500">{post.readTime}</span>
              </>
            )}
          </div>
          <h1 className="font-display-xl text-4xl md:text-display-xl text-on-surface">{post.title}</h1>
        </header>

        <div className="aspect-[21/9] overflow-hidden bg-surface-container-low border border-white/5 shadow-2xl mb-stack-lg">
          <img className="w-full h-full object-cover" alt={post.alt} src={post.img} />
        </div>

        <div className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed space-y-6 max-w-3xl">
          {post.content.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-stack-lg pt-stack-lg border-t border-white/5 flex justify-between items-center">
          <button
            onClick={() => onNavigate('blog')}
            className="flex items-center gap-2 text-primary-container font-bold group/back"
          >
            <span className="material-symbols-outlined transition-transform group-hover/back:-translate-x-1">arrow_back</span>
            Back to Blog
          </button>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}
