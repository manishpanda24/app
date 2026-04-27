import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { SERVICES } from '../mock';

export default function Pricing() {
  return (
    <>
      <Navbar />
      <section className="border-b-2 border-amg-ink relative overflow-hidden">
        <div className="absolute inset-0 grid-paper pointer-events-none"/>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-20 lg:py-28 relative">
          <div className="eyebrow text-amg-teal mb-4">Pricing</div>
          <h1 className="heading-display text-[48px] md:text-[78px] text-amg-ink max-w-4xl">Transparent, <span className="italic text-amg-teal">flat-fee</span> pricing.</h1>
          <p className="mt-7 text-[17px] text-amg-ink/75 max-w-2xl leading-relaxed">No hourly surprises. Every engagement is scoped, priced, and agreed upon before we start.</p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1320px] mx-auto space-y-10">
          {SERVICES.map(s => {
            const accent = s.accent === 'yellow' ? 'bg-amg-yellow' : s.accent === 'turquoise' ? 'bg-amg-turquoise' : 'bg-amg-teal text-amg-cream';
            return (
              <div key={s.slug} className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
                <div className={`lg:col-span-4 ${accent} border-2 border-amg-ink p-7 shadow-crisp`}>
                  <div className="eyebrow opacity-70 mb-2">Service</div>
                  <div className="font-serif text-[32px] font-semibold leading-tight">{s.title}</div>
                  <p className="mt-3 text-[14px] opacity-85">{s.tagline}</p>
                  <Link to={`/services/${s.slug}`} className="mt-5 inline-flex items-center gap-2 font-semibold link-under">View details <ArrowUpRight className="w-4 h-4"/></Link>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {s.pricing.map((p, i) => {
                    const featured = i === 1;
                    return (
                      <div key={i} className={`relative border-2 border-amg-ink p-6 shadow-crisp ${featured?'bg-amg-ink text-amg-cream':'bg-white'}`}>
                        {featured && <div className="absolute -top-3 right-4 bg-amg-yellow text-amg-ink eyebrow px-3 py-1 border-2 border-amg-ink">Most popular</div>}
                        <div className={`eyebrow ${featured?'text-amg-yellow':'text-amg-teal'} mb-2`}>{p.tier}</div>
                        <div className="font-serif text-[44px] font-semibold leading-none">{p.price}</div>
                        <div className={`text-[13px] mt-2 ${featured?'text-amg-cream/70':'text-amg-ink/70'}`}>{p.sub}</div>
                        <ul className="mt-5 space-y-2 text-[13px]">
                          {s.included.slice(0,4).map((it, k) => (
                            <li key={k} className="flex items-start gap-2"><Check className={`w-4 h-4 mt-0.5 ${featured?'text-amg-yellow':'text-amg-teal'}`}/><span>{it}</span></li>
                          ))}
                        </ul>
                        <Link to="/contact" className={`mt-6 inline-flex items-center gap-2 font-semibold border-2 ${featured?'border-amg-yellow bg-amg-yellow text-amg-ink':'border-amg-ink bg-amg-yellow text-amg-ink'} px-4 py-2`}>Get Started <ArrowUpRight className="w-4 h-4"/></Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
