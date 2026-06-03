export default function Navbar({ onNavigate, currentPage }) {
  const links = ['Home', 'About', 'Services', 'Portfolio', 'Blog']

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0B0B0B]/90 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-black/50">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <span
            className="material-symbols-outlined text-[#F5C542] active:scale-95 transition-transform cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            menu
          </span>
          <span
            className="text-xl font-black tracking-widest text-[#F5C542] uppercase font-headline-lg cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            Media7
          </span>
        </div>
        <div className="hidden md:flex gap-8 items-center font-manrope antialiased tracking-tight">
          {links.map(link => (
            <button
              key={link}
              onClick={() => onNavigate(link.toLowerCase())}
              className={`transition-colors duration-300 ${
                currentPage === link.toLowerCase()
                  ? 'text-[#F5C542] font-bold'
                  : 'text-white/70 hover:text-[#F5C542]'
              }`}
            >
              {link}
            </button>
          ))}
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="bg-[#F5C542] text-[#0B0B0B] px-6 py-2.5 font-bold uppercase text-xs tracking-widest active:scale-95 transition-all hover:bg-[#ffe5aa]"
        >
          Get in Touch
        </button>
      </nav>
    </header>
  )
}
