import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, FileText, Sparkles, Calculator, TrendingUp, Users, ShieldCheck, MessageCircle, Briefcase } from 'lucide-react';
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
      <section className="border-b-2 border-amg-ink relative overflow-hidden">
        <div className="absolute inset-0 grid-paper pointer-events-none"/>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-20 lg:py-28 relative">
          <div className="eyebrow text-amg-teal mb-4">For Founders</div>
          <h1 className="heading-display text-[48px] md:text-[80px] text-amg-ink max-w-4xl">Founder <span className="italic text-amg-teal">Services</span>.</h1>
          <p className="mt-7 text-[17px] text-amg-ink/75 max-w-2xl leading-relaxed">
            From your first pitch deck to your closing round, AMG Venture Partners provides hands-on, stage-appropriate support at every critical step of the fundraising journey. Each service is tailored to your specific context — your stage, sector, geography, and target investor.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link to="/contact" className="btn-primary">Book a Free Call <ArrowUpRight className="w-4 h-4"/></Link>
            <Link to="/pricing" className="btn-outline">View Pricing <ArrowRight className="w-4 h-4"/></Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-7">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.slug] || Briefcase;
            const big = i === 0;
            const bg = s.accent === 'yellow' ? 'bg-amg-yellow' : s.accent === 'turquoise' ? 'bg-amg-turquoise' : 'bg-amg-teal text-amg-cream';
            const isTeal = s.accent === 'teal';
            return (
              <Link key={s.slug} to={`/services/${s.slug}`} className={`group ${bg} border-2 border-amg-ink p-8 lg:p-10 shadow-crisp hover-lift relative overflow-hidden ${big ? 'md:col-span-2 min-h-[300px]' : 'min-h-[260px]'}`}>
                <div className="flex items-start justify-between gap-6 mb-6">
                  <div className={`w-14 h-14 ${isTeal?'bg-amg-cream':'bg-amg-cream'} border-2 border-amg-ink flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-amg-ink"/>
                  </div>
                  <div className={`font-serif text-[14px] eyebrow ${isTeal?'text-amg-cream/80':'text-amg-ink/70'}`}>0{i+1}</div>
                </div>
                <div className={`font-serif font-semibold leading-tight ${big ? 'text-[44px] md:text-[58px]' : 'text-[30px]'}`}>{s.title}</div>
                <p className={`mt-3 text-[15px] ${isTeal?'text-amg-cream/85':'text-amg-ink/80'} max-w-xl leading-relaxed`}>{s.tagline}</p>
                <div className="flex items-center gap-3 mt-7">
                  <span className={`inline-flex items-center gap-2 font-semibold border-2 ${isTeal?'border-amg-cream text-amg-cream':'border-amg-ink text-amg-ink'} px-4 py-2 group-hover:translate-x-1 transition-transform`}>
                    Get Started <ArrowUpRight className="w-4 h-4"/>
                  </span>
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
