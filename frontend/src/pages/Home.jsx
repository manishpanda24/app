import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight,Rocket,Compass,Search, FileText, Sparkles, Calculator,Brain, X,Check,AlertTriangle,Building2,TrendingUp, Users, ShieldCheck, MessageCircle, Briefcase, CheckCircle2, Target, Globe, Linkedin, BadgeCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import GauravImage from '../images/GauravImage.jpg';
import { HERO, SERVICE_PILLARS, SERVICES, FOUNDER_SERVICES_INTRO, WHO_WE_ARE } from '../mock';
import IndustriesGrid from '../components/IndustryGrid';
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
    desc: 'Evaluate investment readiness across your entire portfolio cohort with structured diagnostics',
  },
  {
    icon: Users,
    iconBg: 'bg-amg-turquoise-bg',
    iconColor: 'text-amg-turquoise-2',
    title: 'Workshop Programs',
    desc: 'Interactive fundraising and investor readiness workshops tailored for your cohort',
  },
  {
    icon: TrendingUp,
    iconBg: 'bg-amg-yellow-bg',
    iconColor: 'text-amg-teal',
    title: 'Demo Day Preparation',
    desc: 'End-to-end preparation support to ensure your founders shine in front of investors',
  },
  {
    icon: Globe,
    iconBg: 'bg-amg-teal-bg',
    iconColor: 'text-amg-teal',
    title: 'Investor Network Access',
    desc: 'Leverage our curated investor network to facilitate warm introductions for your portfolio',
  },
];

const STATS = [
  { value: '200+',          label: 'Founders and Sectors Supported',     color: 'text-amg-turquoise-2' },
  { value: '$100M+',        label: 'Raised by Founders',    color: 'text-amg-turquoise-2' },
  { value: 'Pre-Seed →  Series A', label: 'Stage Coverage',         color: 'text-amg-yellow' },
  { value: '2 Continents',  label: 'North America & Europe', color: 'text-amg-teal' },
];
const ACCELERATORSTATS = [
  { value: '15+',          label: 'Ecosystem',     color: 'text-amg-turquoise-2' },
  { value: '150+',        label: 'Workshops Conducted',    color: 'text-amg-turquoise-2' },
  { value: '3000', label: 'Mentoring hours',         color: 'text-amg-yellow' },
  { value: '2 Continents',  label: 'North America & Europe', color: 'text-amg-teal' },
];
const HOME_SERVICE_COPY = {
  'pitch-deck-review': {
    title: 'Pitch Deck Review',
    tagline: 'Fix gaps before investors see them',
  },
  'pitch-deck-creation': {
    title: 'Pitch Deck Creation',
    tagline: 'Build a clear, convincing investor pitch',
  },
  'financial-model': {
    title: 'Financial Model Support',
    tagline: 'Build numbers investors can trust',
  },
  valuation: {
    title: 'Startup Valuation Support',
    tagline: 'Set a realistic, defensible valuation',
  },
  'investor-outreach': {
    title: 'Investor Outreach',
    tagline: 'Reach the right investors with a focused plan',
  },
  'investment-readiness': {
    title: 'Fundraising Readiness Review',
    tagline: 'Find weak spots before investor outreach',
  },
  'ama-sessions': {
    title: 'Founder Q&A Sessions',
    tagline: 'Get answers to your fundraising questions',
  },
};
const HOW_WE_WORK_STEPS = [
  {
    step: 'Intake & Context Setting',
    day: 'Day 1',
    text: 'You share your deck along with context: your stage, target investors, geography, fundraising goal, and any specific areas of concern',
    output: 'Context brief reviewed by our team',
  },
  {
    step: 'Deep Deck Analysis',
    day: 'Day 2–4',
    text: 'We conduct a thorough review of your deck using a structured investor evaluation framework — narrative, market, traction, team, financials, and ask',
    output: 'Internal scoring and annotation across all slides',
  },
  {
    step: 'Written Feedback Report',
    day: 'Day 5',
    text: 'You receive a detailed written report: slide-by-slide annotations, an executive summary of key strengths and critical gaps, and prioritized improvement recommendations',
    output: 'Written feedback report (PDF)',
  },
  {
    step: 'Live Debrief Session',
    day: 'Day 6',
    text: 'We walk through the report together in a 60-minute call — discussing each finding, answering your questions, and mapping a revision roadmap',
    output: 'Clear prioritized action plan for your revision',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />  

    {/* HERO SECTION */}
{/* HERO SECTION */}
<section className="hero-visual-bg relative overflow-hidden border-b border-amg-line bg-white">
  <div className=" mx-auto px-6 lg:px-10 pt-9 lg:pt-12 pb-20 relative">
    <div className="flex flex-col items-center text-center">

      {/* Tags */}
      <div className="flex items-center gap-3 flex-wrap justify-center mb-8">
        {['Pre-Seed', 'Seed', 'Series A'].map((tag, i) => (
          <span key={tag} className="tag-pill">
            <span
              className={`dot ${
                i === 0
                  ? 'bg-amg-yellow'
                  : i === 1
                  ? 'bg-amg-turquoise'
                  : 'bg-amg-teal'
              }`}
            />
            {tag}
          </span>
        ))}
      </div>

      {/* Heading */}
      <h1 className="heading-display text-[54px] sm:text-[64px] lg:text-[76px] leading-[0.95] text-amg-teal ">
        Raise Capital With Confidence
      </h1>

      {/* Subheading */}
      <p className="mt-8 text-[18px] lg:text-[20px] leading-relaxed text-amg-teal/75 max-w-2xl">
        We help tech founders sharpen their pitch, financials,
        valuation, and fundraising plan before meeting investors
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
        <Link to="/contact" className="btn-yellow">
          Assess Your Readiness
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link to="/founder-services" className="btn-outline">
          Explore Founder Services
        </Link>
      </div>

    </div>
  </div>
</section>
   
 <section className="py-7 px-6 lg:px-10 border-t border-amg-line bg-white-50">
        {/* Stats strip */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-amg-line rounded-lg px-7 py-7 text-center shadow-[0_2px_10px_rgba(13,31,30,0.06)] hover:border-amg-teal hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(13,31,30,0.10)] transition-all duration-200 ease-out"
              >
                <div className={`font-serif text-[25px] md:text-[30px] font-medium leading-none ${s.color}`}>
                  {s.value}
                </div>
                <div className="mt-3 text-[13px] leading-snug text-amg-teal/75 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
          
     </section>

     {/* WHY FOUNDERS FAIL FUNDRAISING */}
<section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-white">

  <div className="max-w-8xl mx-auto">

    {/* Top Content */}
    <div className="text-center max-w-4xl  mx-auto">

      <div className="tag-pill inline-flex mb-5">
        <span className="dot bg-amg-yellow" />
        Fundraising Reality
      </div>

      <h2 className="heading-display text-[34px] md:text-[48px] text-amg-teal leading-[1.03]">
        Good products still need a strong pitch
      </h2>

      <p className="mt-7 text-[16px] md:text-[17px] text-black/70 leading-relaxed ">
        Investors hesitate when the story, numbers, or timing do not hold up
      </p>

    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">

      {[
        {
          title: 'An Unclear Startup Story',
          text: 'The idea sounds promising but investors do not quickly understand why it matters',
        },
        {
          title: 'An Unrealistic Valuation',
          text: 'Founders lose credibility when the valuation does not match their stage, traction, or market',
        },
        {
          title: 'Fundraising Too Early',
          text: 'Many startups contact investors before their metrics, story, or traction are ready',
        },
        {
          title: 'A Confusing Business Model',
          text: 'If investors cannot quickly understand how the startup makes money, interest disappears',
        },
        {
          title: 'Incomplete Fundraising Materials',
          text: 'Missing data, a weak deck, or inconsistent financials create immediate concerns',
        },
        {
          title: 'Unclear Financial Planning',
          text: 'Weak assumptions and unclear runway planning reduce investor confidence quickly',
        },
      ].map((item, i) => (
        <div
          key={i}
          className={`
  rounded-[22px]
  border
  p-6
  shadow-soft-sm
  hover-lift
  ${
    i % 3 === 0
      ? 'bg-gradient-teal border-gradient-teal'
      : i % 3 === 1
      ? 'bg-gradient-yellow border-gradient-yellow'
      : 'bg-gradient-turquoise border-gradient-turquoise'
  }
`}
        >

          <div className={`
  w-11 h-11 rounded-xl flex items-center justify-center mb-5
  ${
    i % 3 === 0
      ? 'bg-amg-teal'
      : i % 3 === 1
      ? 'bg-amg-yellow'
      : 'bg-amg-turquoise'
  }
`}>
            <ShieldCheck className="w-4 h-4 text-white" />
          </div>

          <h3 className="text-[20px] font-serif text-amg-teal leading-snug">
            {item.title}
          </h3>

          <p className="mt-3 text-[14.5px] text-amg-teal/65 leading-relaxed">
            {item.text}
          </p>

        </div>
      ))}

    </div>

  </div>

</section>
{/* HOW INVESTORS THINK */}
<section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-white">

  <div className="max-w-8xl mx-auto">

    {/* Heading */}
    <div className="text-center max-w-4xl mx-auto">

      <div className="tag-pill inline-flex mb-5">
        <span className="dot bg-amg-turquoise" />
        Investor Psychology
      </div>

      <h2 className="heading-display text-[34px] md:text-[52px] text-amg-teal leading-[1.03]">
        Investors back clear, credible plans
      </h2>

      <p className="mt-7 text-[16px] md:text-[17px] text-black/70 leading-relaxed  mx-auto">
        Your deck, financial model, and valuation should show clear thinking,
        market understanding, and a realistic path to growth
      </p>

    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

      {[
        {
          title: 'A Clear Startup Story',
          text: 'Can the founder clearly explain the problem, market, and growth plan?',
        },
        {
          title: 'A Realistic Action Plan',
          text: 'Does the startup show clear priorities and realistic next steps?',
        },
        {
          title: 'Strong Growth Potential',
          text: 'Can this startup grow into a large and valuable business?',
        },
        {
          title: 'Smart Use of Funding',
          text: 'Will the founder use the investment wisely to reach clear milestones?',
        },
      ].map((item, i) => (
        <div
          key={i}
          className={`rounded-2xl border p-7 shadow-soft-sm hover-lift ${
            i === 3
              ? 'bg-gradient-yellow border-gradient-yellow'
              : i % 3 === 0
              ? 'bg-gradient-teal border-gradient-teal'
              : i % 3 === 1
              ? 'bg-gradient-yellow border-gradient-yellow'
              : 'bg-gradient-turquoise border-gradient-turquoise'
          }`}
        >

          <div className={`w-11 h-11 rounded-full flex items-center justify-center mb-6 ${
            i === 3
              ? 'bg-amg-yellow-bg'
              : i % 3 === 0
              ? 'bg-amg-teal-soft'
              : i % 3 === 1
              ? 'bg-amg-yellow-bg'
              : 'bg-amg-turquoise-bg'
          }`}>
            <Target className={`w-5 h-5 ${
              i === 3 || i % 3 === 1 ? 'text-amg-yellow' : 'text-amg-turquoise-2'
            }`} />
          </div>

          <h3 className="font-serif text-[22px] text-amg-teal leading-snug">
            {item.title}
          </h3>

          <p className="mt-3 text-[14.5px] text-amg-teal/65 leading-relaxed">
            {item.text}
          </p>

        </div>
      ))}

    </div>

  </div>

</section>
{/* WHY AMG */}
<section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-white">

  <div className="max-w-[1280px] mx-auto">

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">

      {/* LEFT */}
      <div className="lg:col-span-5">

        <div className="tag-pill inline-flex mb-5">
          <span className="dot bg-amg-teal" />
          Why AMG
        </div>

        <h2 className="heading-display text-[42px] md:text-[64px] text-amg-teal leading-[1.03]">
          More Than a Pitch Deck
        </h2>

      </div>

      {/* RIGHT */}
      <div className="lg:col-span-7">

        <p className="text-[17px] md:text-[18px] text-amg-teal/75 leading-relaxed">
          AMG Venture Partners helps North American tech founders prepare
          for investor scrutiny with strategic fundraising support designed
          around how venture investors actually evaluate startups
        </p>

        <p className="mt-6 text-[17px] md:text-[18px] text-amg-teal/75 leading-relaxed">
          We strengthen your story, numbers, valuation, and fundraising plan
        </p>

        {/* What We Challenge */}
        <div className="mt-10 rounded-3xl border border-amg-line bg-white p-8 shadow-soft">

          <div className="text-[13px] uppercase tracking-[0.18em] text-amg-teal/50 font-semibold mb-7">
            What We Challenge
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {[
              'Inflated valuations',
              'Weak investor narratives',
              'Unclear GTM strategies',
              'Vanity metrics',
              'Poor fundraising timing',
              'Weak financial assumptions',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4"
              >

                <div className="w-9 h-9 rounded-full bg-amg-yellow-bg flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-amg-teal" />
                </div>

                <span className="text-[15px] text-amg-teal/75 leading-snug">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* MEET THE FOUNDER */}
<section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-white">

  <div className="max-w-[1280px] mx-auto">

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">

      {/* LEFT IMAGE */}
      <div className="lg:col-span-5 relative">

        <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] shadow-soft-lg border border-amg-line">

          <img
            src={GauravImage}
            alt="Gaurav Bansal"
            className="w-full h-full object-cover object-top"
          />

          {/* Floating Badge */}
          <div className="absolute top-5 left-5 bg-white/90 backdrop-blur rounded-full px-4 py-2 shadow-soft border border-amg-line">

            <div className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-amg-yellow" />

              <span className="text-[12px] font-semibold text-amg-teal">
                VC Turned Founder
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div className="lg:col-span-7">

        <div className="tag-pill inline-flex mb-5">
          <span className="dot bg-amg-turquoise" />
          Meet The Founder
        </div>

        <h2 className="heading-display text-[42px] md:text-[64px] text-amg-teal leading-[1.03]">
          Investor Experience for Founders
        </h2>

        <p className="mt-7 text-[17px] md:text-[18px] text-amg-teal/75 leading-relaxed max-w-3xl">
          Founded by Gaurav Bansal — a VC, investor, and operator with
          experience in startup investing and fundraising strategy
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

          {[
            '14+ years across VC, investment banking & consulting',
            '50+ startup investments',
            '20k+ pitch decks reviewed',
            '$2Bn+ investment banking deal exposure',
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-amg-line bg-[#fafbfd] p-5"
            >

              <div className="w-10 h-10 rounded-full bg-amg-turquoise-bg flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-amg-turquoise-2" />
              </div>

              <span className="text-[15px] text-amg-teal/75 leading-relaxed">
                {item}
              </span>

            </div>
          ))}

        </div>

        {/* CTA */}
        <a
          href="https://www.linkedin.com/in/gauravbansalventurecapital/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 bg-amg-teal hover:bg-amg-turquoise-2 text-white px-7 py-3 rounded-full text-[14px] font-semibold transition-colors"
        >

          <Linkedin className="w-4 h-4" />

          View LinkedIn Profile

        </a>

      </div>

    </div>

  </div>

</section>
{/* INDUSTRIES WE SERVE */}
{/* INDUSTRIES WE SERVE */}
<section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-white">

  <div className="mx-auto">

    {/* Heading */}
  {/* Heading */}
<div className="text-center  mx-auto mb-20">

  <div className="tag-pill inline-flex mb-5">
    <span className="dot bg-amg-yellow" />
    Industry Focus
  </div>

  <h2 className="heading-display text-[42px] md:text-[64px] leading-[1.03] text-amg-teal">
    Built for Tech Founders
  </h2>

  <p className="mt-8 text-[17px] md:text-[18px] text-amg-teal/72 leading-relaxed max-w-4xl mx-auto">
    We support startups across sectors where clarity, strong numbers,
    and investor-ready materials matter
  </p>

</div>

    {/* Industries Grid */}
    <section className="pt-2 bg-white">

      <IndustriesGrid
        title="Industries"
        highlight="We Serve"
        highlightColor="text-amg-turquoise"
        showHeader={false}
      />

    </section>

  </div>

</section>
    {/* FOUNDER SERVICES */}
      {/* <section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-amg-cream-2/40"> */}
      <section className="py-24 px-6 lg:px-10 border-t border-gray-100 bg-white">
  <div className=" mx-auto">

    {/* Heading */}
  {/* Heading */}
<div className="text-center mx-auto mb-20">

  <div className="tag-pill inline-flex mb-5">
    <span className="dot bg-amg-yellow" />
    Strategic Fundraising Support
  </div>

  <h2 className="heading-display text-[38px] md:text-[48px] leading-[1.03] text-amg-teal">
    Fundraising Support That Covers the Gaps
  </h2>

  <p className="mt-8 text-[17px] md:text-[18px] text-amg-teal/72 leading-relaxed max-w-4xl mx-auto">
    Practical support for your pitch, financials, valuation,
    investor outreach, and fundraising readiness
  </p>

</div>
    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {SERVICES.map((s, i) => {

        const Icon = ICONS[s.slug] || Briefcase;
        const homeCopy = HOME_SERVICE_COPY[s.slug] || s;

        const accent =
          s.accent === 'yellow'
            ? {
                border: 'border-amg-yellow',
                iconBg: 'bg-amg-yellow-bg',
                dot: 'bg-amg-yellow',
              }
            : s.accent === 'turquoise'
            ? {
                border: 'border-amg-turquoise',
                iconBg: 'bg-amg-turquoise-bg',
                dot: 'bg-amg-turquoise',
              }
            : {
                border: 'border-amg-teal',
                iconBg: 'bg-amg-teal-bg',
                dot: 'bg-amg-teal',
              };

        return (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className={`group rounded-[20px] border border-amg-line border-t-[3px] ${accent.border} bg-white shadow-soft-sm hover-lift block overflow-hidden transition-all`}
          >

            <div className="px-6 pt-6 pb-4">

              {/* Top */}
              <div className="flex items-center justify-between mb-5">

                <div
                  className={`w-11 h-11 rounded-xl ${accent.iconBg} flex items-center justify-center`}
                >
                  <Icon className="w-5 h-5 text-amg-teal" />
                </div>

                <div className="flex items-center gap-2">

                  <span className={`w-2 h-2 rounded-full ${accent.dot}`} />

                  <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-amg-teal/55">
                    0{i + 1}
                  </span>

                </div>

              </div>

              {/* Title */}
              <h3 className="font-serif text-[23px] text-amg-teal leading-[1.1] max-w-[300px]">
                {homeCopy.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[14px] text-amg-teal/68 leading-[1.6] max-w-[340px]">

                {homeCopy.tagline}

              </p>

              {/* Divider */}
              <div className="border-t border-amg-line mt-4 pt-3">

                <div className="flex items-center justify-between">

                  <span className="text-[13px] font-semibold text-amg-turquoise-2">
                    Learn More
                  </span>

                  <ArrowUpRight className="w-4 h-4 text-amg-turquoise-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />

                </div>

              </div>

            </div>

          </Link>
        );
      })}

    </div>

  </div>
</section>


{/* HOW WE WORK */}
{/* HOW WE WORK */}
<section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-white">

  <div className=" mx-auto">

    {/* Heading */}
  {/* Heading */}
<div className="text-center  mx-auto mb-20">

  <div className="tag-pill inline-flex mb-5">
    <span className="dot bg-amg-yellow" />
    Process
  </div>

  <h2 className="heading-display text-[42px] md:text-[48px] leading-[1.03] text-amg-teal">
    How We Prepare You for Investors
  </h2>

  <p className="mt-8 text-[17px] md:text-[18px] text-amg-teal/72 leading-relaxed max-w-4xl mx-auto">
    A focused process to find gaps, strengthen your pitch,
    and prepare for outreach
  </p>

</div>

    {/* Process Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

      {[
        {
          step: '01',
          title: 'Review Your Startup',
          text: 'We review your story, numbers, and readiness',
          icon: Search,
        },
        {
          step: '02',
          title: 'Improve Your Pitch',
          text: 'We sharpen your pitch and fundraising plan',
          icon: Compass,
        },
        {
          step: '03',
          title: 'Prepare for Investors',
          text: 'We prepare your materials, valuation, and answers',
          icon: ShieldCheck,
        },
        {
          step: '04',
          title: 'Get Fundraising Support',
          text: 'We support you through investor conversations',
          icon: Rocket,
        },
      ].map((item, i) => {

        const Icon = item.icon;

        return (
          <div
            key={i}
            className={`group rounded-[20px] border p-6 shadow-soft-sm hover-lift transition-all ${
              i % 3 === 0
                ? 'bg-gradient-teal border-gradient-teal'
                : i % 3 === 1
                ? 'bg-gradient-yellow border-gradient-yellow'
                : 'bg-gradient-turquoise border-gradient-turquoise'
            }`}
          >

            {/* Top */}
            <div className="flex items-center justify-between mb-5">

              <div className={`w-11 h-11 rounded-full flex items-center justify-center ${
                i % 3 === 0
                  ? 'bg-amg-teal-soft'
                  : i % 3 === 1
                  ? 'bg-amg-yellow-bg'
                  : 'bg-amg-turquoise-bg'
              }`}>
                <Icon className={`w-5 h-5 ${
                  i % 3 === 1 ? 'text-amg-yellow' : 'text-amg-turquoise-2'
                }`} />
              </div>

              <span className="text-[12px] tracking-[0.16em] uppercase font-semibold text-amg-teal/45">
                {item.step}
              </span>

            </div>

            {/* Content */}
            <h3 className="font-serif text-[23px] text-amg-teal leading-[1.1]">
              {item.title}
            </h3>

            <p className="mt-3 text-[14px] text-amg-teal/68 leading-[1.6]">
              {item.text}
            </p>

          </div>
        );
      })}

    </div>

  </div>

</section>
{/* ECOSYSTEM & PARTNERS */}
<section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-white">

  <div className="max-w-[1280px] mx-auto">

    {/* Heading */}
  {/* Heading */}
<div className="text-center  mx-auto mb-20">  

  <div className="tag-pill inline-flex mb-5">
    <span className="dot bg-amg-turquoise" />
    Ecosystem & Partnerships
  </div>

  <h2 className="heading-display text-[42px] md:text-[48px] leading-[1.03] text-amg-teal">
    Supporting Startup Communities
  </h2>

  <p className="mt-8 text-[17px] md:text-[18px] text-amg-teal/72 leading-relaxed max-w-4xl mx-auto">
    We partner with accelerators, incubators, and founder communities
    to improve fundraising readiness
  </p>

</div>
    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        {
          title: 'Support for Accelerators',
          text: 'Readiness reviews, fundraising workshops, and practical preparation for startup cohorts',
          icon: Rocket,
        },
        {
          title: 'Support for Incubators',
          text: 'Fundraising guidance and investor preparation for early-stage startup communities',
          icon: Building2,
        },
        {
          title: 'Support for Founder Communities',
          text: 'Educational sessions, Q&A discussions, and practical fundraising guidance for founders',
          icon: Users,
        },
      ].map((item, i) => {

        const Icon = item.icon;

        return (
          <div
            key={i}
            className="group rounded-[28px] border border-amg-line bg-[#fafbfd] p-8 shadow-soft-sm hover-lift transition-all"
          >

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-amg-turquoise-bg flex items-center justify-center mb-7">
              <Icon className="w-6 h-6 text-amg-teal" />
            </div>

            {/* Content */}
            <h3 className="font-serif text-[28px] text-amg-teal leading-[1.12]">
              {item.title}
            </h3>

            <p className="mt-4 text-[15px] text-amg-teal/68 leading-relaxed">
              {item.text}
            </p>

          </div>
        );
      })}

    </div>

  </div>

</section>
{/* INVESTMENT READINESS PROGRAM */}
<section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-white overflow-hidden">

  <div className="max-w-[1280px] mx-auto">

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

      {/* LEFT */}
      <div className="lg:col-span-7">

        <div className="tag-pill inline-flex mb-5">
          <span className="dot bg-amg-yellow" />
          Investment Readiness Program
        </div>

        <h2 className="heading-display text-[42px] md:text-[64px] text-amg-teal leading-[1.03]">
          A Practical Fundraising Readiness Program
        </h2>

        <p className="mt-7 text-[17px] md:text-[18px] text-amg-teal/72 leading-relaxed max-w-3xl">
          IRP helps founders strengthen their pitch, numbers,
          and preparation before investor outreach
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

          {[
            'Fundraising readiness diagnostics',
            'Investor narrative refinement',
            'Financial clarity workshops',
            'Mock investor Q&A sessions',
            'Valuation & fundraising strategy',
            'Founder mentoring & guidance',
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-amg-line bg-white p-5 shadow-soft-sm"
            >

              <div className="w-10 h-10 rounded-full bg-amg-yellow-bg flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-amg-teal" />
              </div>

              <span className="text-[15px] text-amg-teal/75 leading-relaxed">
                {item}
              </span>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center gap-4 mt-10">

          <a
            href="https://investorreadinessprogram.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow"
          >
            Explore IRP
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            to="/contact"
            className="btn-outline"
          >
            Partner With Us
          </Link>

        </div>

      </div>

      {/* RIGHT */}
      <div className="lg:col-span-5 relative">

        {/* Main Card */}
        <div className="rounded-[32px] border border-amg-line bg-white p-8 shadow-soft-lg relative z-10">

          <div className="flex items-center justify-between mb-8">

            <div>
              <div className="text-[12px] uppercase tracking-[0.18em] text-amg-teal/45 font-semibold">
                Founder Readiness
              </div>

              <div className="text-[42px] font-serif text-amg-teal mt-2">
                IRP
              </div>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-amg-yellow-bg flex items-center justify-center">
              <Rocket className="w-7 h-7 text-amg-teal" />
            </div>

          </div>

          <div className="space-y-5">

            {[
              'Structured fundraising curriculum',
              'Investor readiness frameworks',
              'Live founder workshops',
              'Practical fundraising guidance',
              'Founder accountability support',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-amg-line pb-4"
              >

                <span className="text-[15px] text-amg-teal/72">
                  {item}
                </span>

                <CheckCircle2 className="w-4 h-4 text-amg-turquoise-2" />

              </div>
            ))}

          </div>

        </div>

        {/* Floating Badge */}
        <div className="hidden lg:flex mt-6 bg-amg-teal text-white rounded-2xl shadow-soft-lg px-6 py-5 items-center gap-4 w-fit">

          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>

          <div>

            <div className="text-[28px] font-serif leading-none">
              Founder-Led
            </div>

            <div className="text-[13px] text-white/70 mt-1">
              Built for early-stage founders
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* CASE STUDIES / TRANSFORMATIONS */}
<section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-white">

  <div className="max-w-[1280px] mx-auto">

    {/* Heading */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">

      <div className="lg:col-span-7">

        <div className="tag-pill inline-flex mb-5">
          <span className="dot bg-amg-yellow" />
          Founder Transformations
        </div>

        <h2 className="heading-display text-[42px] md:text-[64px] text-amg-teal leading-[1.03]">
          From Unclear to Investor-Ready
        </h2>

      </div>

      <div className="lg:col-span-5 flex lg:items-end">

        <p className="text-[16px] md:text-[17px] text-amg-teal/70 leading-relaxed">
          We help founders improve their pitch, build investor confidence,
          and prepare before important investor conversations
        </p>

      </div>

    </div>

    {/* Case Study Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* BEFORE */}
      <div className="rounded-[30px] border border-amg-line bg-[#fafbfd] p-9 shadow-soft-sm">

        <div className="flex items-center gap-3 mb-8">

          <div className="w-11 h-11 rounded-full bg-red-100 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>

          <div>

            <div className="text-[12px] uppercase tracking-[0.18em] text-red-500 font-semibold">
              Before AMG
            </div>

            <div className="text-[22px] font-serif text-amg-teal mt-1">
              Common Fundraising Challenges
            </div>

          </div>

        </div>

        <div className="space-y-5">

          {[
            'An unclear startup story and weak market position',
            'Financial assumptions that investors do not trust',
            'No clear fundraising plan',
            'Important information missing from investor materials',
            'Not enough preparation for investor questions',
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 border-b border-amg-line pb-5"
            >

              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-4 h-4 text-red-500" />
              </div>

              <span className="text-[15px] text-amg-teal/72 leading-relaxed">
                {item}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* AFTER */}
      <div className="rounded-[30px] border border-amg-teal bg-amg-teal p-9 shadow-soft-sm text-white relative overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10">

          <div className="flex items-center gap-3 mb-8">

            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-amg-yellow" />
            </div>

            <div>

              <div className="text-[12px] uppercase tracking-[0.18em] text-amg-yellow font-semibold">
                After AMG
              </div>

              <div className="text-[22px] font-serif text-white mt-1">
              Better Fundraising Preparation
              </div>

            </div>

          </div>

          <div className="space-y-5">

            {[
              'A clearer startup story and market position',
              'Financial assumptions investors can understand',
              'A practical fundraising plan and clear next steps',
              'Stronger investor confidence during conversations',
              'Better preparation for detailed investor questions',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 border-b border-white/10 pb-5"
              >

                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-amg-yellow" />
                </div>

                <span className="text-[15px] text-white/82 leading-relaxed">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* AI VS STRATEGIC ADVISORY */}
<section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-white overflow-hidden">

  <div className="max-w-[1280px] mx-auto">

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

      {/* LEFT CONTENT */}
      <div className="lg:col-span-7">

        <div className="tag-pill inline-flex mb-5">
          <span className="dot bg-amg-turquoise" />
          AI vs Strategic Judgment
        </div>

        <h2 className="heading-display text-[42px] md:text-[48px] text-amg-teal leading-[1.03]">
          AI Saves Time Human Judgment Wins Rounds
        </h2>

        <p className="mt-7 text-[17px] md:text-[18px] text-amg-teal/72 leading-relaxed max-w-3xl">
          AI speeds up the work, but a successful raise still depends
          on clarity, timing, positioning, and experience
        </p>

        {/* Points */}
        <div className="space-y-5 mt-10">

          {[
            'AI cannot test whether your startup story will convince investors',
            'AI cannot challenge an unrealistic valuation',
            'AI cannot prepare you for real investor questions',
            'AI cannot replace fundraising experience and human judgment',
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-amg-line bg-white p-5 shadow-soft-sm"
            >

              <div className="w-10 h-10 rounded-full bg-amg-turquoise-bg flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-amg-turquoise-2" />
              </div>

              <span className="text-[15px] text-amg-teal/75 leading-relaxed">
                {item}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* RIGHT VISUAL */}
      <div className="lg:col-span-5 relative">

        <div className="rounded-[32px] border border-amg-line bg-white shadow-soft-lg overflow-hidden">

          {/* Top */}
          <div className="p-8 border-b border-amg-line">

            <div className="flex items-center justify-between mb-7">

              <div>

                <div className="text-[12px] uppercase tracking-[0.18em] text-amg-teal/45 font-semibold">
                  Strategic Advantage
                </div>

                <div className="text-[38px] font-serif text-amg-teal mt-2">
                  Human Insight
                </div>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-amg-yellow-bg flex items-center justify-center">
                <Brain className="w-7 h-7 text-amg-teal" />
              </div>

            </div>

            <p className="text-[15px] text-amg-teal/68 leading-relaxed">
              Strategic fundraising still requires experience, pattern recognition,
              investor understanding, and founder judgment
            </p>

          </div>

          {/* Comparison */}
          <div className="p-8 space-y-5">

            {[
              {
                left: 'Generate generic decks',
                right: 'Craft investor conviction',
              },
              {
                left: 'Automate templates',
                right: 'Challenge weak assumptions',
              },
              {
                left: 'Summarize information',
                right: 'Prepare founders strategically',
              },
              {
                left: 'Produce outputs',
                right: 'Improve fundraising outcomes',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center border-b border-amg-line pb-4"
              >

                <div className="text-[14px] text-amg-teal/55">
                  AI
                </div>

                <ArrowRight className="w-4 h-4 text-amg-yellow shrink-0" />

                <div className="text-[14px] font-semibold text-amg-teal text-right">
                  {item.right}
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
