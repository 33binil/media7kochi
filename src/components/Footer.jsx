export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#0B0B0B] w-full py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <span className="text-lg font-bold text-[#F5C542] mb-6 block">Media7</span>
          <p className="font-manrope text-sm text-zinc-500 max-w-xs">
            Redefining excellence in media, branding, and luxury strategy for the world&apos;s most ambitious leaders.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-6">Navigation</h4>
          <ul className="space-y-4 font-manrope text-sm">
            <li><button onClick={() => onNavigate?.('home')} className="text-[#F5C542] transition-colors">Home</button></li>
            <li><button onClick={() => onNavigate?.('about')} className="text-zinc-500 hover:text-white transition-colors duration-200">About</button></li>
            <li><button onClick={() => onNavigate?.('services')} className="text-zinc-500 hover:text-white transition-colors duration-200">Services</button></li>
            <li><button onClick={() => onNavigate?.('portfolio')} className="text-zinc-500 hover:text-white transition-colors duration-200">Portfolio</button></li>
            <li><button onClick={() => onNavigate?.('careers')} className="text-zinc-500 hover:text-white transition-colors duration-200">Careers</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-6">Connect</h4>
          <ul className="space-y-4 font-manrope text-sm">
            <li><a className="text-zinc-500 hover:text-white transition-colors duration-200" href="#">LinkedIn</a></li>
            <li><a className="text-zinc-500 hover:text-white transition-colors duration-200" href="#">Instagram</a></li>
            <li><a className="text-zinc-500 hover:text-white transition-colors duration-200" href="#">Twitter</a></li>
            <li><a className="text-zinc-500 hover:text-white transition-colors duration-200" href="#">Behance</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-6">Office</h4>
          <p className="font-manrope text-sm text-zinc-500 mb-2">London &bull; Dubai &bull; New York</p>
          <p className="font-manrope text-sm text-zinc-500">concierge@media7.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-manrope text-sm text-zinc-500">&copy; 2024 Media7. All rights reserved.</p>
        <div className="flex gap-8 font-manrope text-xs text-zinc-600 uppercase tracking-widest">
          <a className="hover:text-gold transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-gold transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
