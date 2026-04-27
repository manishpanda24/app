import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, FileText, Sparkles, Calculator, TrendingUp, Users, ShieldCheck, MessageCircle, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { SERVICES } from '../mock';

const ICONS = {
  'pitch-deck-review': FileText,
  'pitch-deck-creation': Sparkles,
  'financial-model': Calculator,
  'valuation': TrendingUp,
  'investor-outreach': Users,
  'investment-readiness': ShieldCheck,
  'ama-sessions': MessageCircle,
};

export default function FounderServices() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden border-b border-amg-line">
        <div className="absolute inset-0 grid-paper pointer-events-none"/>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-28 relative">
          <nav className="flex items-center gap-2 text-[12px] text-amg-mute mb-8">
            <Link to="/" className="hover:text-amg-ink">Home</Link>
            <span>/</span>
            <span className="text-amg-ink">Founder Services</span>
          </nav>
          <div className="eyebrow mb-4">For Founders</div>
          <h1 className="heading-display text-[48px] md:text-[80px] text-amg-ink max-w-4xl">Founder <em>services</em>.</h1>
          <p className="mt-7 text-[17px] text-amg-ink/70 max-w-2xl leading-relaxed">
            From your first pitch deck to your closing round, AMG Venture Partners provides hands-on, stage-appropriate support at every critical step — tailored to your stage, sector, geography, and target investor.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-9">
            <Link to="/contact" className="btn-primary">Book a free call <ArrowRight className="w-4 h-4"/></Link>
            <Link to="/pricing" className="btn-outline">View pricing</Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.slug] || Briefcase;
            const big = i === 0;
            const dot = s.accent === 'yellow' ? 'bg-amg-yellow' : s.accent === 'turquoise' ? 'bg-amg-turquoise' : 'bg-amg-teal';
            return (
              <Link key={s.slug} to={`/services/${s.slug}`} className={`group card-pro shadow-soft hover-lift p-9 lg:p-10 relative ${big ? 'md:col-span-2' : ''}`}>
                <div className="flex items-start justify-between gap-6 mb-7">
                  <div className="w-12 h-12 rounded-md bg-amg-cream-2 border border-amg-line flex items-center justify-center">
                    <Icon className="w-5 h-5 text-amg-ink"/>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${dot}`}/>
                    <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-amg-mute">0{i+1} · {s.accent === 'yellow'?'Strategy':s.accent === 'turquoise'?'Story':'Capital'}</span>
                  </div>
                </div>
                <div className={`font-serif font-medium leading-tight text-amg-ink ${big ? 'text-[40px] md:text-[52px]' : 'text-[28px]'}`}>{s.title}</div>
                <p className={`mt-3 text-amg-ink/65 max-w-2xl leading-relaxed ${big?'text-[16px]':'text-[14.5px]'}`}>{s.tagline}</p>
                <div className="hr-thin my-6"/>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-3">
                    {s.included.slice(0,3).map((it, k) => (
                      <span key={k} className="tag-pill">{it.length>34?it.slice(0,34)+'…':it}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-amg-teal">View service <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/></span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
