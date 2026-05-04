import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, FileText, Sparkles, Calculator, TrendingUp, Users, ShieldCheck, MessageCircle, Briefcase, CheckCircle2, Target, Globe, Linkedin, BadgeCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import GauravImage from '../images/GauravImage.jpg';
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

const ECOSYSTEM_FEATURES = [
  {
    icon: Target,
    iconBg: 'bg-amg-turquoise-bg',
    iconColor: 'text-amg-turquoise-2',
    title: 'Portfolio Assessment',
    desc: 'Evaluate investment readiness across your entire portfolio cohort with structured diagnostics.',
  },
  {
    icon: Users,
    iconBg: 'bg-amg-turquoise-bg',
    iconColor: 'text-amg-turquoise-2',
    title: 'Workshop Programs',
    desc: 'Interactive fundraising and investor readiness workshops tailored for your cohort.',
  },
  {
    icon: TrendingUp,
    iconBg: 'bg-amg-yellow-bg',
    iconColor: 'text-amg-teal',
    title: 'Demo Day Preparation',
    desc: 'End-to-end preparation support to ensure your founders shine in front of investors.',
  },
  {
    icon: Globe,
    iconBg: 'bg-amg-teal-bg',
    iconColor: 'text-amg-teal',
    title: 'Investor Network Access',
    desc: 'Leverage our curated investor network to facilitate warm introductions for your portfolio.',
  },
];

const STATS = [
  { value: '200+',          label: 'Founders Supported',     color: 'text-amg-turquoise-2' },
  { value: '$500M+',        label: 'Capital Facilitated',    color: 'text-amg-turquoise-2' },
  { value: 'Pre-Seed → A', label: 'Stage Coverage',         color: 'text-green-600' },
  { value: '2 Continents',  label: 'North America & Europe', color: 'text-amg-teal' },
];

const HOW_WE_WORK_STEPS = [
  {
    step: 'Intake & Context Setting',
    day: 'Day 1',
    text: 'You share your deck along with context: your stage, target investors, geography, fundraising goal, and any specific areas of concern.',
    output: 'Context brief reviewed by our team',
  },
  {
    step: 'Deep Deck Analysis',
    day: 'Day 2–4',
    text: 'We conduct a thorough review of your deck using a structured investor evaluation framework — narrative, market, traction, team, financials, and ask.',
    output: 'Internal scoring and annotation across all slides',
  },
  {
    step: 'Written Feedback Report',
    day: 'Day 5',
    text: 'You receive a detailed written report: slide-by-slide annotations, an executive summary of key strengths and critical gaps, and prioritized improvement recommendations.',
    output: 'Written feedback report (PDF)',
  },
  {
    step: 'Live Debrief Session',
    day: 'Day 6',
    text: 'We walk through the report together in a 60-minute call — discussing each finding, answering your questions, and mapping a revision roadmap.',
    output: 'Clear prioritized action plan for your revision',
  },
];

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
            {/* <div className="lg:col-span-4 fade-in">
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
            </div> */}
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
     <section className="py-6 px-6 lg:px-10 border-t border-amg-line bg-gray-50">
        {/* Stats strip */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 border border-amg-line rounded-2xl overflow-hidden bg-white shadow-soft">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`px-8 py-10 text-center ${i < STATS.length - 1 ? 'border-r border-amg-line' : ''}`}
              >
                <div className={`font-serif text-[34px] md:text-[42px] font-medium leading-none ${s.color}`}>
                  {s.value}
                </div>
                <div className="mt-2.5 text-[13px] text-amg-teal/60 font-medium">{s.label}</div>
              </div>
            ))}
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
{/* ── ACCELERATORS & INCUBATORS ────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-gray-50">
        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="tag-pill inline-flex mb-5">
              <span className="dot bg-amg-turquoise"/>For Ecosystems
            </span>
            <h2 className="font-serif text-[44px] md:text-[64px] font-medium text-amg-teal leading-tight tracking-tight">
              Accelerators &amp; Incubators
            </h2>
            <p className="mt-4 text-[16px] text-amg-teal/60 max-w-lg mx-auto leading-relaxed">
              We partner with innovation programs to elevate the fundraising capability of their entire cohort at scale.
            </p>
          </div>
</div>

          {/* 4-column feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ECOSYSTEM_FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="card-pro shadow-soft p-7 hover-lift bg-white">
                  <div className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center mb-6`}>
                    <Icon className={`w-5 h-5 ${f.iconColor}`}/>
                  </div>
                  <div className="font-semibold text-[15.5px] text-amg-teal mb-2 leading-snug">{f.title}</div>
                  <p className="text-[13.5px] text-amg-teal/60 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>

        
      </section>

      {/* ── MEET THE FOUNDER ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-[#f0f2f8]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left: photo with floating badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-[520px] mx-auto shadow-soft-lg">
                <img
                  src={GauravImage}
                  alt="Gaurav Bansal — Founder & CEO, AMG Venture Partners"
                  className="w-full h-full object-cover object-top"
                />

          

                {/* Bottom name card */}
                <div className="absolute bottom-0 left-0 right-0 bg-white px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[17px] text-amg-teal">Gaurav Bansal</span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amg-teal/70 border border-amg-line rounded-full px-2.5 py-1">
                      <BadgeCheck className="w-3.5 h-3.5 text-amg-yellow"/> Verified
                    </span>
                  </div>
                  <div className="text-[12.5px] text-amg-teal/60 mt-1 mb-2">Founder & CEO, AMG Venture Partners</div>
                  <a
                    href="https://www.linkedin.com/in/gauravbansalventurecapital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-7 h-7 rounded bg-[#0077b5] hover:bg-[#005f91] transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-white fill-white"/>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div className="lg:col-span-7">
              <div className="tag-pill inline-flex mb-6">
                <span className="dot bg-amg-turquoise"/>Meet the Founder
              </div>

              <h2 className="font-serif text-[38px] md:text-[52px] font-medium text-amg-teal leading-tight tracking-tight">
                Tech Investor &amp; Advisor<br/>
                with <span className="text-amg-turquoise-2">Global Expertise</span>
              </h2>

              <p className="mt-6 text-[15.5px] text-amg-teal/75 leading-relaxed max-w-xl">
                Gaurav is a tech investor and advisor with over 35+ VC investments across 10 countries
                and experience in US $2Bn+ worth of IPOs, M&A, and private equity deals.
              </p>

              <ul className="mt-7 space-y-4">
                {[
                  'Expert in Residence & Mentor across startup programs',
                  'Evaluator for government grant programs',
                  'Specialist in AI/ML strategy & global expansion',
                  'Family office portfolio manager',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-amg-teal">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-amg-teal shrink-0"/>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://www.linkedin.com/in/gauravbansalventurecapital/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 bg-amg-turquoise-2 hover:bg-amg-teal text-white font-semibold px-6 py-3 rounded-full text-[14px] transition-colors"
              >
                <Linkedin className="w-4 h-4"/>
                View LinkedIn Profile
              </a>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}