import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, FileText, Sparkles, Calculator, TrendingUp, Users, ShieldCheck, MessageCircle, Briefcase, CheckCircle2, Target, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { HERO, SERVICES, FOUNDER_SERVICES_INTRO, WHO_WE_ARE, HOW_WE_WORK_INTRO } from '../mock';

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
        </div>
      </section>

      {/* FOUNDER SERVICES */}
      <section className="py-24 px-6 lg:px-10 border-t border-gray-100">
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
              const accent = s.accent === 'yellow'
                ? { bar:'bg-amg-yellow', iconBg:'bg-amg-yellow-bg', dot:'bg-amg-yellow' }
                : s.accent === 'turquoise'
                  ? { bar:'bg-amg-turquoise', iconBg:'bg-amg-turquoise-bg', dot:'bg-amg-turquoise' }
                  : { bar:'bg-amg-teal', iconBg:'bg-amg-teal-bg', dot:'bg-amg-teal' };
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

      {/* ── HOW WE WORK TOGETHER ─────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 border-t border-amg-line">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Left */}
            <div className="lg:col-span-4">
              <div className="eyebrow mb-4">{HOW_WE_WORK_INTRO.eyebrow}</div>
              <h2 className="font-serif text-[36px] md:text-[48px] font-medium text-amg-teal leading-tight tracking-tight">
                How We Work Together
              </h2>
              <p className="mt-5 text-[15px] text-amg-teal/65 leading-relaxed">
                {HOW_WE_WORK_INTRO.description}
              </p>
            </div>

            {/* Right: vertical timeline */}
            <div className="lg:col-span-8">
              <div className="relative pl-2">
                {/* Vertical connector line */}
                <div
                  className="absolute left-[19px] top-5 w-px bg-amg-turquoise-soft"
                  style={{ height: 'calc(100% - 40px)' }}
                  aria-hidden="true"
                />

                <div className="space-y-10">
                  {HOW_WE_WORK_STEPS.map((step, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      {/* Step circle */}
                      <div className="shrink-0 w-10 h-10 rounded-full bg-amg-turquoise-bg border-2 border-amg-turquoise-soft text-amg-teal font-semibold text-[14px] flex items-center justify-center z-10 relative">
                        {i + 1}
                      </div>

                      {/* Step content */}
                      <div className="flex-1 pt-1.5">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="font-semibold text-[16.5px] text-amg-teal">{step.step}</span>
                          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                            {step.day}
                          </span>
                        </div>
                        <p className="text-[14px] text-amg-teal/65 leading-relaxed mb-2.5">{step.text}</p>
                        <p className="text-[13px] font-medium text-amg-turquoise-2">
                          → Output: {step.output}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
