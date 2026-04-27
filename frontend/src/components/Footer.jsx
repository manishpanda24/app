import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import { SERVICES } from '../mock';

export default function Footer() {
  return (
    <footer className="bg-amg-teal-dark text-amg-cream border-t-2 border-amg-ink mt-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-amg-yellow border-2 border-amg-yellow flex items-center justify-center font-serif text-amg-ink font-bold text-lg">A</div>
              <div>
                <div className="font-serif font-semibold text-[16px] text-amg-cream">AMG Venture Partners</div>
                <div className="eyebrow text-[10px] text-amg-yellow">Business Consulting</div>
              </div>
            </div>
            <p className="text-[15px] text-amg-cream/75 leading-relaxed max-w-md">
              Empowering founders across North America &amp; Europe to raise capital with clarity and conviction.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.linkedin.com/in/gauravmishra-amg/" target="_blank" rel="noreferrer" className="w-10 h-10 border-2 border-amg-cream flex items-center justify-center hover:bg-amg-yellow hover:text-amg-ink hover:border-amg-yellow transition-colors">
                <Linkedin className="w-4 h-4"/>
              </a>
              <a href="mailto:hello@amgventures.co" className="w-10 h-10 border-2 border-amg-cream flex items-center justify-center hover:bg-amg-yellow hover:text-amg-ink hover:border-amg-yellow transition-colors">
                <Mail className="w-4 h-4"/>
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-amg-yellow mb-4">Services</div>
            <ul className="space-y-2.5">
              {SERVICES.slice(0,6).map(s => (
                <li key={s.slug}><Link to={`/services/${s.slug}`} className="text-[14px] text-amg-cream/80 hover:text-amg-yellow link-under">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-amg-yellow mb-4">Company</div>
            <ul className="space-y-2.5">
              <li><Link to="/founder-services" className="text-[14px] text-amg-cream/80 hover:text-amg-yellow link-under">Founder Services</Link></li>
              <li><Link to="/pricing" className="text-[14px] text-amg-cream/80 hover:text-amg-yellow link-under">Pricing</Link></li>
              <li><Link to="/resources" className="text-[14px] text-amg-cream/80 hover:text-amg-yellow link-under">Resources</Link></li>
              <li><Link to="/contact" className="text-[14px] text-amg-cream/80 hover:text-amg-yellow link-under">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-amg-yellow mb-4">Get Started</div>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-amg-yellow text-amg-ink font-semibold px-4 py-2.5 border-2 border-amg-yellow hover:bg-amg-turquoise hover:border-amg-turquoise transition-colors">
              Book a call <ArrowUpRight className="w-4 h-4"/>
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-amg-cream/15 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="text-[12px] text-amg-cream/55">© 2026 AMG Venture Partners. All rights reserved.</div>
          <div className="text-[12px] text-amg-cream/55 flex gap-5">
            <a href="#" className="hover:text-amg-yellow link-under">Privacy</a>
            <a href="#" className="hover:text-amg-yellow link-under">Terms</a>
            <a href="#" className="hover:text-amg-yellow link-under">NDA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
