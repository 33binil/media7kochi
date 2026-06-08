import { useState, useEffect } from 'react'
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

  function navigate(nextPage) {
    setPage(nextPage)
    window.history.pushState({ page: nextPage }, '', '')
  }

  useEffect(() => {
    function handlePopState(e) {
      if (e.state?.page) {
        setPage(e.state.page)
      }
    }
    window.addEventListener('popstate', handlePopState)
    if (!window.history.state) {
      window.history.replaceState({ page }, '', '')
    }
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <div className="relative">
      {showNav && <Navbar onNavigate={navigate} currentPage={page} />}

      {page === 'loading' && <Loading onNavigate={navigate} />}

      {page === 'home' && (
        <>
          <Hero />
          <div className="fixed inset-0 z-10" style={{ height: '100dvh' }}>
            <Home onNavigate={navigate} />
          </div>
        </>
      )}

      {page === 'about' && <About onNavigate={navigate} />}
      {page === 'services' && <Services onNavigate={navigate} />}
      {page === 'portfolio' && <Portfolio onNavigate={navigate} />}
      {page === 'blog' && <Blog onNavigate={navigate} />}
      {page === 'contact' && <Contact onNavigate={navigate} />}
      {page === 'careers' && <Careers onNavigate={navigate} />}
      {page === 'privacy' && <Privacy onNavigate={navigate} />}
      {page === 'terms' && <Terms onNavigate={navigate} />}
      {isBlogPost && <BlogPost onNavigate={navigate} page={page} />}
    </div>
  )
}