import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../mock';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-amg-cream/85 backdrop-blur-md border-b border-amg-line' : 'bg-amg-cream border-b border-transparent'}`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[68px]">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-amg-ink text-amg-cream flex items-center justify-center font-serif text-[16px] rounded-[4px]">A</div>
          <div className="leading-tight">
            <div className="font-serif font-medium text-[15px] tracking-tight text-amg-ink">AMG Venture Partners</div>
            <div className="text-[10px] tracking-[0.18em] uppercase font-medium text-amg-mute">Business Consulting</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map(l => (
            <NavLink key={l.to} to={l.to} className={({isActive})=>`text-[13.5px] font-medium link-under ${isActive ? 'text-amg-teal' : 'text-amg-ink/80 hover:text-amg-ink'}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="btn-primary text-[13px] py-2.5 px-4">
            Book a consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <button onClick={()=>setOpen(!open)} className="lg:hidden p-2 border border-amg-line rounded-md text-amg-ink" aria-label="menu">
          {open ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-amg-line bg-amg-cream">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map(l => (
              <NavLink key={l.to} to={l.to} className={({isActive})=>`py-2 font-medium ${isActive?'text-amg-teal':'text-amg-ink'}`}>{l.label}</NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-2 justify-center">Book a consultation <ArrowRight className="w-4 h-4"/></Link>
          </div>
        </div>
      )}
    </header>
  );
}
