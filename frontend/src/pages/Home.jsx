import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, FileText, Sparkles, Calculator, TrendingUp, Users, ShieldCheck, MessageCircle, Briefcase, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { HERO, SERVICE_PILLARS, SERVICES, FOUNDER_SERVICES_INTRO, WHO_WE_ARE } from '../mock';

const ICONS = {
  'pitch-deck-review': FileText,
  'pitch-deck-creation': Sparkles,
  'financial-model': Calculator,
  'valuation': TrendingUp,
  'investor-outreach': Users,
  'investment-readiness': ShieldCheck,
  'ama-sessions': MessageCircle,
};

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-paper pointer-events-none"/>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 fade-in">
              <div className="flex items-center gap-3 flex-wrap mb-7">
                {HERO.eyebrowTags.map((t,i) => (
                  <span key={t} className="tag-pill">
                    <span className={`dot ${i===0?'bg-amg-yellow':i===1?'bg-amg-turquoise':'bg-amg-teal'}`}/>{t}
                  </span>
                ))}
              </div>
              <h1 className="heading-display text-[52px] sm:text-[68px] lg:text-[88px] text-amg-teal">
                Raise Capital With <em>Conviction</em>.
              </h1>
              <p className="mt-7 text-[17px] lg:text-[19px] leading-relaxed text-amg-teal/75 max-w-2xl">
                {HERO.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <Link to={HERO.primaryCta.to} className="btn-yellow">{HERO.primaryCta.label} <ArrowRight className="w-4 h-4"/></Link>
                <Link to={HERO.secondaryCta.to} className="btn-outline">{HERO.secondaryCta.label}</Link>
              </div>
            </div>

            {/* Pillars stack */}
            <div className="lg:col-span-4 fade-in">
              <div className="grid grid-cols-2 gap-3">
                {SERVICE_PILLARS.map((p,i) => {
                  const tone = p.accent === 'yellow' ? 'bg-amg-yellow-bg border-amg-yellow' : p.accent === 'turquoise' ? 'bg-amg-turquoise-bg border-amg-turquoise' : 'bg-amg-teal-bg border-amg-teal';
                  return (
                    <div key={i} className={`rounded-lg p-5 border ${tone}`}>
                      <div className="font-serif text-[20px] font-medium text-amg-teal leading-tight">{p.title}</div>
                      <div className="mt-2 text-[12.5px] text-amg-teal/75">{p.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 px-6 lg:px-10 border-t border-amg-line">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-7">
              <span className="tag-pill bg-amg-turquoise-bg border-amg-turquoise"><span className="dot bg-amg-turquoise"/>{WHO_WE_ARE.eyebrow}</span>
            </div>
            <h2 className="heading-display text-[44px] md:text-[64px] text-amg-teal leading-[0.98]">
              Practical Insight.<br/><em>Real Results.</em>
            </h2>
            <div className="mt-7 space-y-5 text-[15.5px] text-amg-teal/75 leading-relaxed max-w-xl">
              {WHO_WE_ARE.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <ul className="mt-8 space-y-3.5">
              {WHO_WE_ARE.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-amg-teal">
                  <CheckCircle2 className="w-5 h-5 text-amg-turquoise-2 shrink-0 mt-0.5"/>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full max-w-[560px] mx-auto rounded-2xl overflow-hidden border border-amg-line shadow-soft-lg">
              <img src={WHO_WE_ARE.image} alt="AMG Venture Partners team working with a founder" className="w-full h-full object-cover"/>
            </div>
            <div className="absolute -bottom-6 -left-2 sm:left-6 lg:-left-6 card-pro shadow-soft-lg p-5 lg:p-6 max-w-[260px]">
              <div className="text-[10.5px] tracking-[0.18em] uppercase font-semibold text-amg-teal/75">{WHO_WE_ARE.stat.label}</div>
              <div className="font-serif text-[34px] lg:text-[40px] font-medium text-amg-turquoise-2 leading-none mt-2">{WHO_WE_ARE.stat.value}</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER SERVICES */}
      {/* <section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-amg-cream-2/40"> */}
      <section className="py-24 px-6 lg:px-10 border-t border-gray-100 bg-gray-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-4">{FOUNDER_SERVICES_INTRO.eyebrow}</div>
              <h2 className="heading-display text-[40px] md:text-[56px] text-amg-teal">{FOUNDER_SERVICES_INTRO.title}</h2>
            </div>
            <div className="lg:col-span-5 flex lg:items-end">
              <p className="text-[15.5px] text-amg-teal/75 leading-relaxed">{FOUNDER_SERVICES_INTRO.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.slug] || Briefcase;
              const accent = s.accent === 'yellow' ? { bar:'bg-amg-yellow', iconBg:'bg-amg-yellow-bg', dot:'bg-amg-yellow' } : s.accent === 'turquoise' ? { bar:'bg-amg-turquoise', iconBg:'bg-amg-turquoise-bg', dot:'bg-amg-turquoise' } : { bar:'bg-amg-teal', iconBg:'bg-amg-teal-bg', dot:'bg-amg-teal' };
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="group card-pro shadow-soft hover-lift block overflow-hidden">
                  <div className={`h-1 ${accent.bar}`}/>
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-11 h-11 rounded-md ${accent.iconBg} border border-amg-line flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-amg-teal"/>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${accent.dot}`}/>
                        <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-amg-teal/70">0{i+1}</span>
                      </div>
                    </div>
                    <div className="font-serif text-[24px] font-medium text-amg-teal leading-tight">{s.title}</div>
                    <p className="mt-2.5 text-[14px] text-amg-teal/70 leading-relaxed">{s.tagline}</p>
                    <div className="hr-thin my-6"/>
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-semibold text-amg-turquoise-2">View service</span>
                      <ArrowUpRight className="w-4 h-4 text-amg-turquoise-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
