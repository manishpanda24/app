import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { SERVICES, PRICING_INTRO } from '../mock';

export default function Pricing() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden border-b border-amg-line">
        <div className="absolute inset-0 grid-paper pointer-events-none"/>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-24 relative">
          <nav className="flex items-center gap-2 text-[12px] text-amg-mute mb-8">
            <Link to="/" className="hover:text-amg-teal">Home</Link>
            <span>/</span>
            <span className="text-amg-teal">Pricing</span>
          </nav>
          <div className="eyebrow mb-4">{PRICING_INTRO.eyebrow}</div>
          <h1 className="heading-display text-[48px] md:text-[72px] text-amg-teal max-w-4xl">{PRICING_INTRO.title}</h1>
          <p className="mt-7 text-[17px] text-amg-teal/75 max-w-2xl leading-relaxed">{PRICING_INTRO.description}</p>
          <div className="flex flex-wrap items-center gap-4 mt-9">
            <Link to="/contact" className="btn-yellow">Book a Consultation <ArrowRight className="w-4 h-4"/></Link>
            <Link to="/founder-services" className="btn-outline">Browse Services</Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const bar = s.accent === 'yellow' ? 'bg-amg-yellow' : s.accent === 'turquoise' ? 'bg-amg-turquoise' : 'bg-amg-teal';
            return (
              <Link key={s.slug} to={`/services/${s.slug}`} className="card-pro shadow-soft hover-lift block overflow-hidden">
                <div className={`h-1 ${bar}`}/>
                <div className="p-7">
                  <div className="font-serif text-[22px] font-medium leading-tight text-amg-teal">{s.title}</div>
                  <p className="mt-2 text-[14px] text-amg-teal/70 leading-relaxed">{s.tagline}</p>
                  <div className="hr-thin my-6"/>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-amg-turquoise-2">View Pricing</span>
                    <ArrowRight className="w-4 h-4 text-amg-turquoise-2"/>
                  </div>
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
