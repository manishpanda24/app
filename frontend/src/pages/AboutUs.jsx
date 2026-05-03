import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Globe, Users, TrendingUp, Building2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

// ─── Data ────────────────────────────────────────────────────────────────────
const ABOUT_TABS = [
  { id: 'who-we-are', label: 'Who We Are' },
  { id: 'founder',    label: 'Founder' },
  { id: 'services',   label: 'What We Do' },
  { id: 'clients',    label: 'Clients' },
];

const STATS = [
  { value: '35+',     label: 'VC investments',          sub: 'across 10 countries',  accent: 'yellow' },
  { value: 'US$2Bn+', label: 'IPOs, M&A & PE deals',    sub: 'in experience',        accent: 'turquoise' },
  { value: '520+',    label: 'Global angel syndicates', sub: 'member',               accent: 'teal' },
  { value: '125+',    label: 'Startup CEOs supported',  sub: 'in last 2 years',      accent: 'yellow' },
];

const SERVICES_LIST = [
  {
    num: '01',
    title: 'Incubator & Accelerator Partnerships',
    accent: 'yellow',
    items: [
      'New program design, delivery, progress tracker templates, KPI reporting & documentation',
      'Lead Mentor / EIR for startup CEOs',
      'Review Panelist to screen startup applications',
      'Prepare startups for fundraising rounds and Demo Day pitching',
      'Workshops on "Investment Readiness" — cohort-based',
      'Review technical grant applications for startups',
      'Stakeholder Partnerships — CEOs, Investors, etc.',
    ],
  },
  {
    num: '02',
    title: 'Founder Services',
    accent: 'turquoise',
    items: [
      'End-to-end fundraising strategy and execution support',
      'Investment readiness assessments and pitch coaching',
      'Investor network introductions across North America & Europe',
      'Cap table structuring and deal term guidance',
    ],
  },
  {
    num: '03',
    title: 'IRP — 3 Tracks',
    accent: 'teal',
    items: [
      'Investor Readiness Program tailored to stage and sector',
      'Cohort-based and individual tracks available',
      'Available for accelerators and individual founders',
    ],
  },
];

const CLIENT_BULLETS = [
  {
    Icon: Building2,
    text: 'Worked with 15+ accelerators in the US, Canada, LATAM, and EU markets — delivering over 120 programs and workshops in Artificial Intelligence, Venture Capital, and Angel Investing.',
  },
  {
    Icon: Users,
    text: 'Supported 125+ CEOs building AI/ML tech products across fintech, supply chain, robotics, medical devices, digital health, insurtech, and semiconductors on investment readiness and fundraising.',
  },
  {
    Icon: TrendingUp,
    text: "All growth has come through the founder's own network and word-of-mouth. A new website and formal social media strategy are currently in progress.",
  },
];

// ─── Accent helpers ──────────────────────────────────────────────────────────
const ACCENT = {
  yellow:    { bar: 'bg-amg-yellow',    bg: 'bg-amg-yellow-bg',    text: 'text-amg-teal',        border: 'border-amg-yellow/30' },
  turquoise: { bar: 'bg-amg-turquoise', bg: 'bg-amg-turquoise-bg', text: 'text-amg-turquoise-2', border: 'border-amg-turquoise/30' },
  teal:      { bar: 'bg-amg-teal',      bg: 'bg-amg-teal-bg',      text: 'text-amg-teal',        border: 'border-amg-teal/30' },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
const Eyebrow = ({ children }) => (
  <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-amg-turquoise-2 mb-4">
    {children}
  </div>
);

const H2 = ({ children, className = '' }) => (
  <h2 className={`font-serif text-[36px] md:text-[48px] font-medium text-amg-teal leading-tight tracking-tight ${className}`}>
    {children}
  </h2>
);

const HRule = () => <div className="h-px bg-amg-line my-16" />;

// ─── Component ───────────────────────────────────────────────────────────────
export default function AboutUs() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-amg-line">
        <div className="absolute inset-0 grid-paper pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-28 relative">
          <nav className="flex items-center gap-2 text-[12px] text-amg-mute mb-8">
            <Link to="/" className="hover:text-amg-teal transition-colors">Home</Link>
            <span>/</span>
            <span className="text-amg-teal">About Us</span>
          </nav>
          <Eyebrow>About Us</Eyebrow>
          <h1 className="font-serif text-[52px] sm:text-[68px] lg:text-[80px] font-medium text-amg-teal leading-[1.0] tracking-tight max-w-4xl">
            Global Consulting for{' '}
            <em className="not-italic text-amg-turquoise-2">Founders</em>{' '}
            Who Are Ready to Raise.
          </h1>
          <p className="mt-7 text-[17px] lg:text-[19px] leading-relaxed text-amg-teal/75 max-w-2xl">
            AMG Venture Partners is a global business consulting and technology product firm operating
            across North American and European markets — partnering with incubators, accelerators, and
            founders from pre-seed to Series A.
          </p>
        </div>
      </section>

      {/* STICKY TAB NAV */}
      <div className="sticky top-[68px] z-40 bg-white/95 backdrop-blur-sm border-b border-amg-line shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex items-center overflow-x-auto scrollbar-none">
            {ABOUT_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className="shrink-0 px-5 py-4 text-[13px] font-medium text-amg-teal/65 hover:text-amg-teal border-b-2 border-transparent hover:border-amg-turquoise transition-all whitespace-nowrap"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20">

        {/* ── WHO WE ARE ─────────────────────────────────────────────────── */}
        <section id="who-we-are" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            {/* Left */}
            <div className="lg:col-span-5">
              <Eyebrow>Who We Are</Eyebrow>
              <H2 className="mb-6">Practical Insight.<br />Real Results.</H2>
              <p className="text-[15px] text-amg-teal/75 leading-relaxed mb-4">
                We partner with incubators, accelerators, and founders globally to deliver
                high-quality investment-readiness content and fundraising services to tech startup CEOs.
                We also partner directly with startup CEOs on everything fundraising.
              </p>
              <p className="text-[15px] text-amg-teal/75 leading-relaxed">
                Whether you are a first-time founder or an accelerator looking to elevate your entire
                cohort, we meet you where you are and build toward where you need to be.
              </p>

              {/* AMG name card */}
              <div className="mt-8 p-6 bg-amg-yellow-bg border border-amg-yellow/30 rounded-lg">
                <div className="text-[10.5px] tracking-[0.22em] uppercase font-semibold text-amg-teal mb-2">
                  The Name
                </div>
                <p className="text-[14px] text-amg-teal leading-relaxed">
                  <strong>AMG</strong> stands for Gaurav's family — A, M, and G are the initials of
                  his father, mother, and himself. His parents' support and motivation have played a
                  key role in his journey from a small tier-3 town in India to founding AMG Venture Partners.
                </p>
              </div>
            </div>

            {/* Right — stats */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s) => {
                  const a = ACCENT[s.accent];
                  return (
                    <div key={s.value} className={`rounded-lg p-6 border ${a.bg} ${a.border}`}>
                      <div className={`font-serif text-[42px] font-medium leading-none ${a.text}`}>
                        {s.value}
                      </div>
                      <div className="mt-2 text-[14px] font-semibold text-amg-teal">{s.label}</div>
                      <div className="text-[12px] text-amg-teal/55 mt-0.5">{s.sub}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <HRule />

        {/* ── FOUNDER ────────────────────────────────────────────────────── */}
        <section id="founder" className="scroll-mt-36">
          <Eyebrow>Founder Background</Eyebrow>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start mt-6">

            {/* Founder card */}
            <div className="lg:col-span-4">
              <div className="card-pro shadow-soft overflow-hidden">
                <div className="h-1 bg-amg-yellow" />
                <div className="p-7">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-amg-teal text-amg-yellow flex items-center justify-center font-serif text-[28px] font-medium mb-5">
                    G
                  </div>
                  <div className="font-serif text-[26px] font-medium text-amg-teal">Gaurav</div>
                  <div className="text-[11px] tracking-[0.18em] uppercase font-semibold text-amg-turquoise-2 mt-1 mb-5">
                    Founder & CEO
                  </div>
                  <div className="hr-thin mb-5" />

                  <div className="space-y-3">
                    {[
                      { label: 'Investments', val: '35+ across 10 countries' },
                      { label: 'Deal Experience', val: 'US$2Bn+ IPOs, M&A, PE' },
                      { label: 'Angel Syndicates', val: '520+ globally (member)' },
                      { label: 'Portfolio Startups', val: '50+ investments' },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-start gap-3">
                        <span className="text-[12px] text-amg-mute shrink-0">{item.label}</span>
                        <span className="text-[12.5px] font-semibold text-amg-teal text-right">{item.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="hr-thin mt-5 mb-5" />
                  <a
                    href="https://www.linkedin.com/in/gauravbansalventurecapital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-amg-turquoise-2 hover:text-amg-turquoise transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn Profile
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-8">
              <H2 className="mb-6">Tech Investor.<br />Advisor. Operator.</H2>
              <div className="space-y-4 text-[15px] text-amg-teal/75 leading-relaxed">
                <p>
                  Gaurav is a tech investor and advisor with a portfolio of over 35+ VC investments
                  across 10 countries and experience in US$2Bn+ worth of IPOs, M&A, and private equity
                  deals. He is the Founder & CEO at AMG Venture Partners, where he manages his family
                  investment portfolio (50+ startups and member of 520+ global angel syndicates) and
                  supports founders on investment readiness and fundraising.
                </p>
                <p>
                  Gaurav serves as an Expert in Residence and Mentor across startup programs in North
                  America, Europe, and LATAM — specialising in investment readiness, AI/ML strategy, and
                  global expansion. He is also an anonymous Evaluator for various government grant
                  programs in North America and Europe.
                </p>
                <p>
                  His journey from a small tier-3 town in India to global VC circles reflects the same
                  entrepreneurial conviction he brings to every founder he works with.
                </p>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {['North America', 'Europe', 'LATAM', 'AI/ML Strategy', 'Investment Readiness', 'Global Expansion'].map((tag) => (
                  <span key={tag} className="tag-pill text-[12px]">
                    <span className="dot bg-amg-turquoise" />{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <HRule />

        {/* ── WHAT WE DO ─────────────────────────────────────────────────── */}
        <section id="services" className="scroll-mt-36">
          <Eyebrow>What We Do</Eyebrow>
          <H2 className="mb-10">Three Ways We Partner.</H2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES_LIST.map((svc) => {
              const a = ACCENT[svc.accent];
              return (
                <div key={svc.num} className="card-pro shadow-soft overflow-hidden flex flex-col">
                  <div className={`h-1 ${a.bar}`} />
                  <div className="p-7 flex-1 flex flex-col">
                    <div className={`font-serif text-[42px] font-medium leading-none mb-4 ${a.text}`}>
                      {svc.num}
                    </div>
                    <div className="font-serif text-[20px] font-medium text-amg-teal leading-tight mb-5">
                      {svc.title}
                    </div>
                    <div className="hr-thin mb-5" />
                    <ul className="space-y-2.5 flex-1">
                      {svc.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-amg-teal/70 leading-snug">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${a.bar}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA to services */}
          <div className="mt-10 text-center">
            <Link to="/founder-services" className="btn-outline inline-flex items-center gap-2">
              View All Founder Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <HRule />

        {/* ── CLIENTS ────────────────────────────────────────────────────── */}
        <section id="clients" className="scroll-mt-36">
          <Eyebrow>Clients — Last 2 Years</Eyebrow>
          <H2 className="mb-10">Results Built on Trust<br />and Word of Mouth.</H2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {CLIENT_BULLETS.map(({ Icon, text }, i) => (
              <div key={i} className="p-7 rounded-lg border border-amg-line bg-white shadow-soft hover-lift">
                <div className="w-11 h-11 rounded-md bg-amg-teal-bg border border-amg-teal/20 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-amg-teal" />
                </div>
                <p className="text-[14.5px] text-amg-teal/75 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Growth note */}
          <div className="flex items-start gap-5 p-7 bg-amg-teal-bg border border-amg-teal/20 rounded-lg">
            <Globe className="w-6 h-6 text-amg-teal shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-amg-teal text-[15px] mb-1">How We've Grown</div>
              <p className="text-[14.5px] text-amg-teal/75 leading-relaxed">
                All successes have been through the founder's personal network and word-of-mouth
                (LinkedIn — 17k followers). Our new website is under construction and a formal social
                media strategy is in progress.
              </p>
            </div>
          </div>
        </section>

      </div>

      <CTASection />
      <Footer />
    </>
  );
}
