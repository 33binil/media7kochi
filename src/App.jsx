import { useState } from 'react'
import Hero from './pages/Hero'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Navbar from './components/Navbar'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="relative">
      {page !== 'home' && <Navbar onNavigate={setPage} currentPage={page} />}

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
    </div>
  )
}