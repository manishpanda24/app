import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
    <header className={`sticky top-0 z-50 border-b-2 border-amg-ink transition-colors ${scrolled ? 'bg-amg-cream/95 backdrop-blur' : 'bg-amg-cream'}`}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-amg-yellow border-2 border-amg-ink shadow-crisp-sm flex items-center justify-center font-serif text-amg-ink font-bold text-lg group-hover:bg-amg-turquoise transition-colors">A</div>
          <div className="leading-tight">
            <div className="font-serif font-semibold text-[15px] tracking-tight text-amg-ink">AMG Venture Partners</div>
            <div className="eyebrow text-[10px] text-amg-teal">Business Consulting</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <NavLink key={l.to} to={l.to} className={({isActive})=>`text-[14px] font-semibold link-under ${isActive ? 'text-amg-teal' : 'text-amg-ink hover:text-amg-teal'}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="btn-primary text-[13px] py-2.5 px-4">
            Book a Consultation <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <button onClick={()=>setOpen(!open)} className="lg:hidden p-2 border-2 border-amg-ink bg-amg-yellow shadow-crisp-sm" aria-label="menu">
          {open ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t-2 border-amg-ink bg-amg-cream">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map(l => (
              <NavLink key={l.to} to={l.to} className={({isActive})=>`py-2 font-semibold ${isActive?'text-amg-teal':'text-amg-ink'}`}>{l.label}</NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-2 justify-center">Book a Consultation <ArrowUpRight className="w-4 h-4"/></Link>
          </div>
        </div>
      )}
    </header>
  );
}
