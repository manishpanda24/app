import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import { SERVICES } from '../mock';

export default function Footer() {
  return (
    <footer className="bg-amg-ink text-amg-cream/85 mt-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-amg-yellow text-amg-ink flex items-center justify-center font-serif text-[16px] rounded-[4px]">A</div>
              <div>
                <div className="font-serif font-medium text-[16px] text-amg-cream">AMG Venture Partners</div>
                <div className="text-[10px] tracking-[0.18em] uppercase text-amg-yellow/90 font-medium">Business Consulting</div>
              </div>
            </Link>
            <p className="text-[14.5px] text-amg-cream/65 leading-relaxed max-w-md">
              An advisory partner to founders, accelerators and incubators across North America &amp; Europe — helping them raise capital with clarity and conviction.
            </p>
            <div className="flex items-center gap-2 mt-7">
              <a href="https://www.linkedin.com/in/gauravmishra-amg/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-amg-cream/20 flex items-center justify-center hover:bg-amg-yellow hover:text-amg-ink hover:border-amg-yellow transition-colors">
                <Linkedin className="w-4 h-4"/>
              </a>
              <a href="mailto:hello@amgventures.co" className="w-9 h-9 rounded-full border border-amg-cream/20 flex items-center justify-center hover:bg-amg-yellow hover:text-amg-ink hover:border-amg-yellow transition-colors">
                <Mail className="w-4 h-4"/>
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] tracking-[0.18em] uppercase text-amg-yellow font-semibold mb-4">Services</div>
            <ul className="space-y-2.5">
              {SERVICES.slice(0,6).map(s => (
                <li key={s.slug}><Link to={`/services/${s.slug}`} className="text-[13.5px] text-amg-cream/65 hover:text-amg-cream link-under">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] tracking-[0.18em] uppercase text-amg-yellow font-semibold mb-4">Firm</div>
            <ul className="space-y-2.5">
              <li><Link to="/founder-services" className="text-[13.5px] text-amg-cream/65 hover:text-amg-cream link-under">Founder Services</Link></li>
              <li><Link to="/pricing" className="text-[13.5px] text-amg-cream/65 hover:text-amg-cream link-under">Pricing</Link></li>
              <li><Link to="/resources" className="text-[13.5px] text-amg-cream/65 hover:text-amg-cream link-under">Resources</Link></li>
              <li><Link to="/contact" className="text-[13.5px] text-amg-cream/65 hover:text-amg-cream link-under">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] tracking-[0.18em] uppercase text-amg-yellow font-semibold mb-4">Engage</div>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-amg-yellow text-amg-ink font-semibold px-4 py-2.5 rounded-md hover:bg-amg-yellow-soft transition-colors text-[13px]">
              Book a call <ArrowRight className="w-4 h-4"/>
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-amg-cream/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="text-[12px] text-amg-cream/45">© 2026 AMG Venture Partners. All rights reserved.</div>
          <div className="text-[12px] text-amg-cream/45 flex gap-6">
            <a href="#" className="hover:text-amg-cream link-under">Privacy</a>
            <a href="#" className="hover:text-amg-cream link-under">Terms</a>
            <a href="#" className="hover:text-amg-cream link-under">Mutual NDA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
