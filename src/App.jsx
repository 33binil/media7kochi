import { useState } from 'react'
import Loading from './pages/Loading'
import Hero from './pages/Hero'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Navbar from './components/Navbar'

export default function App() {
  const [page, setPage] = useState('loading')

  const isBlogPost = page.startsWith('blogpost-')
  const showNav = page !== 'loading' && page !== 'home' && !isBlogPost

  return (
    <div className="relative">
      {showNav && <Navbar onNavigate={setPage} currentPage={page} />}

      {page === 'loading' && <Loading onNavigate={setPage} />}

      {page === 'home' && (
        <>
          <Hero />
          <div className="fixed inset-0 z-10">
            <Home onNavigate={setPage} />
          </div>
        </>
      )}

      {page === 'about' && <About onNavigate={setPage} />}
      {page === 'services' && <Services onNavigate={setPage} />}
      {page === 'portfolio' && <Portfolio onNavigate={setPage} />}
      {page === 'blog' && <Blog onNavigate={setPage} />}
      {page === 'contact' && <Contact onNavigate={setPage} />}
      {page === 'careers' && <Careers onNavigate={setPage} />}
      {page === 'privacy' && <Privacy onNavigate={setPage} />}
      {page === 'terms' && <Terms onNavigate={setPage} />}
      {isBlogPost && <BlogPost onNavigate={setPage} page={page} />}
    </div>
  )
}