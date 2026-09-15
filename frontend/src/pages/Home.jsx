import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight,Rocket,Compass,Search, FileText, Sparkles, Calculator,Brain, X,Check,AlertTriangle,Building2,TrendingUp, Users, ShieldCheck, MessageCircle, Briefcase, CheckCircle2, Target, Globe, Linkedin, BadgeCheck, Laptop, HeartPulse, CreditCard, Leaf, Factory, ShoppingCart, ClipboardCheck, BarChart3, Award, Landmark, Handshake, Presentation } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import GauravImage from '../images/Gaurav-hero.png';

// AMG Logos
import MtLabLogo from '../images/amg_logos_jpgs/01_mt_lab.jpg';
import TechstarsLogo from '../images/amg_logos_jpgs/01_techstars.jpg';
import RichmondHillInnovationCentreLogo from '../images/amg_logos_jpgs/17_richmond_hill.jpg';
import MedTechInnovatorLogo from '../images/amg_logos_jpgs/02_medtech_innovator.jpg';
import YorkULogo from '../images/amg_logos_jpgs/02_york_u.jpg';
import boundlessLogo from '../images/amg_logos_jpgs/19_boundless_accelerator.jpg';
import BlackEntrepreneurshipAllianceLogo from '../images/amg_logos_jpgs/03_black_entrepreneurship_alliance.jpg';
import EdmontonUnlimitedLogo from '../images/amg_logos_jpgs/03_edmonton_unlimited.jpg';
import SparkCentreLogo from '../images/amg_logos_jpgs/11_spark_centre.jpg';
import MassChallengeLogo from '../images/amg_logos_jpgs/04_masschallenge.jpg';
import MississaugaDEALogo from '../images/amg_logos_jpgs/04_mississauga_dea.jpg';

import CommunitechLogo from '../images/amg_logos_jpgs/05_communitech.jpg';
import TechNordicGlobalTechAdvocatesLogo from '../images/amg_logos_jpgs/05_tech_nordic_global_tech_advocates.jpg';

import VentureLabLogo from '../images/amg_logos_jpgs/06_venturelab.jpg';
import ElevateLogo from '../images/amg_logos_jpgs/06_elevate.jpg';

import EITEuropeanInstituteLogo from '../images/amg_logos_jpgs/07_eit_european_institute_of_innovation.png';
import TechAllianceLogo from '../images/amg_logos_jpgs/07_techalliance.jpg';

import FintechCadenceLogo from '../images/amg_logos_jpgs/08_fintech_cadence.jpg';

import InnovationClusterLogo from '../images/amg_logos_jpgs/09_innovation_cluster.jpg';
import InvestNovaScotiaLogo from '../images/amg_logos_jpgs/09_invest_nova_scotia.jpg';

import EITHigherEducationLogo from '../images/amg_logos_jpgs/10_eit_higher_education_initiative.jpg';
import ForesightCanadaLogo from '../images/amg_logos_jpgs/10_foresight_canada.jpg';

import D2XcelLogo from '../images/amg_logos_jpgs/11_d2xcel.jpg';

import MedicalInnovationXchangeLogo from '../images/amg_logos_jpgs/12_medical_innovation_xchange.jpg';
import VoltaLogo from '../images/amg_logos_jpgs/12_volta.jpg';

import WesternMorissetteInstituteLogo from '../images/amg_logos_jpgs/13_western_morissette_institute.jpg';

import EITRawMaterialsLogo from '../images/amg_logos_jpgs/14_eit_rawmaterials.jpg';

import MarkhamBoardOfTradeLogo from '../images/amg_logos_jpgs/15_markham_board_of_trade.jpg';

import CatalystLogo from '../images/amg_logos_jpgs/16_catalyst.jpg';


import BramptonVentureZoneLogo from '../images/amg_logos_jpgs/18_brampton_venture_zone.jpg';

import   {GraduationCap, DollarSign, Globe2,Cpu} from 'lucide-react';
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
      <h1 className="heading-display text-[52px] sm:text-[64px] lg:text-[76px] leading-[0.95] text-amg-teal max-w-7xl">
        From Pitch Deck to Closing the Round Raise Capital with Confidence
      </h1>

      <div className="mt-7 text-[28px] md:text-[36px] leading-tight font-medium text-amg-teal">
        ACE Fundability Framework™
      </div>

      {/* Subheading */}
      {/* <p className="mt-5 text-[18px] lg:text-[22px] leading-relaxed text-amg-teal/85 max-w-7xl font-medium">
        Assess Fundability Gaps · Create the Investor Kit & Become Investor-Ready · Execute a Structured, Targeted Fundraising Process
      </p> */}

      <p className="mt-8 text-[17px] lg:text-[20px] leading-relaxed text-amg-teal/80 max-w-7xl font-medium">
        AMG helps Pre-Seed to Series A founders diagnose fundability gaps, build a compelling investment case and investor kit, identify the right investors globally, and execute the fundraising process from outreach through diligence and close.
      </p>

      <p className="mt-5 text-[16px] lg:text-[18px] leading-relaxed text-amg-teal/75 max-w-5xl font-medium">
        Every engagement is tailored to your stage, sector, business model, and target investor markets.
      </p>
       <div className="problem-path-row mt-9">
        {[
          'Fundability Gaps',
          'Investor Readiness',
          'Target Investors',
          'Outreach & Meetings',
          'Negotiation to Close',
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
        <Link to="/contact" className="btn-yellow">
          Assess Your Fundability
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link to="/contact" className="btn-outline">
          Explore Founder Services
        </Link>
      </div>

    </div>
  </div>
</section>
   
 {/* <section className="py-7 px-6 lg:px-10 border-t border-amg-line bg-white-50"> */}
        {/* Stats strip */}
           <section className="about-metrics-band">

        <div className="about-container">

          <div className="about-metrics-heading">
            EXPERIENCE THAT CHANGES HOW WE LOOK AT A RAISE
          </div>

          <div className="about-metrics-grid">

            {[
              {
                icon: GraduationCap,
                value: '14+',
                label: 'Years',
                sub: 'VC, investment banking & consulting',
              },
              {
                icon: Users,
                value: '50+',
                label: 'Angel',
                sub: 'Investments',
              },
               {
                icon: Users,
                value: '300+',
                label: 'Angel',
                sub: 'Syndicates',
              },
              {
                icon: Building2,
                value: '35+',
                label: 'VC Portfolio',
                sub: 'Investments',
              },
              {
                icon: FileText,
                value: '20,000+',
                label: 'Decks & Financial',
                sub: 'Models Reviewed',
              },
              {
                icon: Search,
                value: '100+',
                label: 'Due',
                sub: 'Diligences',
              },
              {
                icon: DollarSign,
                value: '$2B+',
                label: 'IPO, PE &',
                sub: 'Investment Banking Transactions',
              },
              {
                icon: Globe2,
                value: '200+',
                label: 'Founders',
                sub: 'Mentored Globally',
              },
              {
                icon: Users,
                value: '130+',
                label: 'Hours',
                sub: 'Workshops',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div className="about-metric" key={item.value}>

                  <Icon className="about-metric-icon" />

                  <strong>{item.value}</strong>

                  <span>{item.label}</span>

                  <small>{item.sub}</small>

                </div>
              );
            })}

          </div>
{/* 
          <div className="about-metric-bottom">
            <span>130+</span> Workshops
            <b>•</b>
            <span>150–200+</span> Founders Mentored
            <b>•</b>
            <span>300+</span> Angel Syndicates
          </div> */}

        </div>

      </section>
          
     {/* </section> */}

     {/* WHY FOUNDERS FAIL FUNDRAISING */}
{/* <section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-white">

  <div className="max-w-8xl mx-auto"> */}

    {/* Top Content */}
    {/* <div className="text-center max-w-4xl  mx-auto">

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

    </div> */}

    {/* Cards */}
    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">

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

    </div> */}

  {/* </div>

</section> */}
{/* HOW INVESTORS THINK */}
{/* <section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-white">

  <div className="max-w-8xl mx-auto"> */}

    {/* Heading */}
    {/* <div className="text-center max-w-4xl mx-auto">

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

    </div> */}

    {/* Grid */}
    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

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

    </div> */}

  {/* </div>

</section> */}
{/* WHY AMG */}
{/* <section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-white">

  <div className="max-w-[1280px] mx-auto">

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start"> */}

      {/* LEFT */}
      {/* <div className="lg:col-span-5">

        <div className="tag-pill inline-flex mb-5">
          <span className="dot bg-amg-teal" />
          Why AMG
        </div>

        <h2 className="heading-display text-[42px] md:text-[64px] text-amg-teal leading-[1.03]">
          More Than a Pitch Deck
        </h2>

      </div> */}

      {/* RIGHT */}
      {/* <div className="lg:col-span-7">

        <p className="text-[17px] md:text-[18px] text-amg-teal/75 leading-relaxed">
          AMG Venture Partners helps North American tech founders prepare
          for investor scrutiny with strategic fundraising support designed
          around how venture investors actually evaluate startups
        </p>

        <p className="mt-6 text-[17px] md:text-[18px] text-amg-teal/75 leading-relaxed">
          We strengthen your story, numbers, valuation, and fundraising plan
        </p>

        {/* What We Challenge */}
        {/* <div className="mt-10 rounded-3xl border border-amg-line bg-white p-8 shadow-soft">

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

      </div> */}

   {/* </div> */}

{/* //   </div>

// </section> */}



{/* THE PROBLEM */}
{/* <section className="problem-section py-24 px-6 lg:px-10 border-t border-amg-line bg-white">
  <div className="max-w-[1280px] mx-auto">
    <div className="text-center max-w-8xl mx-auto">
      <div className="tag-pill inline-flex mb-5">
        <span className="dot bg-amg-yellow" />
        Why Founders Work With AMG
      </div>

      <h2 className="problem-heading text-amg-ink">
        Most founders don’t need more <span className="problem-strike">generic fundraising advice or investor lists</span>
      </h2>

      <p className="mt-7 text-[17px] md:text-[24px] text-amg-teal/72 leading-relaxed max-w-7xl mx-auto">
        They need a realistic fundability-gap analysis, investor-readiness from an investor lens, and a targeted path to the right active investors globally.
      </p>

      <p className="mt-5 text-[15.5px] md:text-[20px] leading-relaxed text-amg-teal/60 max-w-7xl mx-auto">
        AMG helps founders assess what could block the raise, strengthen the investment case, map relevant investors, run disciplined outreach and meetings, and support negotiations, diligence, and closing.
      </p>

   
    </div>
  </div>
</section> */}
{/* HOW AMG HELPS */}
<section className="amg-help-section py-24 px-6 lg:px-10 border-t border-amg-line bg-white">
  <div className="max-w-[1300px] mx-auto">
    <div className="text-center max-w-6xl mx-auto mb-10">
      <h2 className="amg-help-heading text-amg-ink">
        Three ways to work with AMG
      </h2>
      <p className="mt-4 text-[17px] md:text-[20px] leading-relaxed text-amg-teal/75">
        Start with the Diagnostic. Step into full execution when you are ready.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-6 max-w-[1300px] mx-auto items-stretch">
      <div className="amg-help-card bg-white border border-amg-line rounded-[20px] p-7 md:p-9 shadow-soft-sm flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-amg-teal-soft flex items-center justify-center">
              <Search className="w-7 h-7 text-amg-teal" />
            </div>
            <div className="text-[13px] tracking-[0.16em] uppercase text-amg-teal font-semibold">
              01 / Diagnostic Review
            </div>
          </div>
          <span className="rounded-full bg-amg-teal-soft px-4 py-2 text-[12px] font-semibold uppercase text-amg-teal">
            Best Place to Start
          </span>
        </div>

        <h3 className="font-serif text-[32px] md:text-[42px] leading-tight text-amg-ink">
          Investor Readiness Diagnostic
        </h3>

        <p className="mt-5 text-[16px] md:text-[18px] leading-relaxed text-amg-ink/75 max-w-3xl">
          A focused paid review for founders who want an investor's honest view before fundraising. We assess fundability gaps, pressure-test the investment case, and show exactly what needs to be fixed before investor outreach begins.
        </p>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-amg-line pt-7">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-amg-teal flex items-center justify-center">
                <ClipboardCheck className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-serif text-[22px] text-amg-teal">What we review</h4>
            </div>
            <ul className="space-y-3 text-[15px] text-amg-ink/85">
              {[
                'Deck, narrative & positioning',
                'Financial model, raise logic & milestones',
                'Valuation, dilution & investor objections',
                'Sector-, stage- & business-model-specific fundability gaps',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-amg-teal shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:border-l md:border-amg-line md:pl-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-amg-teal flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-serif text-[22px] text-amg-teal">What you get</h4>
            </div>
            <ul className="space-y-3 text-[15px] text-amg-ink/85">
              {[
                'Investment Readiness Review Report',
                'Gap Analysis Scorecard',
                'Priority Fix List',
                'Personalized Fundraising Roadmap',
                '3x 1:1 Expert Sessions',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-amg-teal shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          to="/contact"
          className="mt-auto inline-flex w-full items-center justify-center gap-3 rounded-md bg-amg-ink px-6 py-4 text-[16px] font-semibold text-white hover:bg-amg-teal transition-all"
        >
          Request Diagnostic <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="amg-help-card amg-help-card-dark border border-amg-teal rounded-[20px] p-7 md:p-9 shadow-soft-lg relative overflow-hidden flex flex-col">
        <div className="absolute top-7 right-7 rounded-full bg-amg-yellow px-5 py-2 text-[12px] font-semibold uppercase text-amg-ink">
          Flagship
        </div>

        <div className="text-[13px] tracking-[0.16em] uppercase text-amg-turquoise mb-9 font-semibold">
          02 / Full Fundraising Support
        </div>

        <h3 className="font-serif text-[30px] md:text-[38px] leading-tight text-white">
          Fundraising Execution Sprint
        </h3>

        <p className="mt-5 text-[16px] leading-relaxed text-white/80">
          For founders who need support beyond diagnosis - from investor-ready materials to targeted fundraising execution and close support.
        </p>

        <ul className="mt-8 space-y-5 text-[16px] text-white/90">
          {[
            'Everything in the Diagnostic',
            'Deck, model, valuation & Q&A rebuild',
            'Verified investor targeting across Canada, US & Europe',
            'Warm-intro paths, outreach & investor meetings',
            'Diligence, negotiation & close support',
          ].map((item) => (
            <li key={item} className="flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 mt-0.5 text-amg-turquoise shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="mt-auto inline-flex w-full items-center justify-center gap-3 rounded-md bg-amg-yellow px-6 py-4 text-[18px] font-semibold text-amg-ink hover:bg-amg-yellow-2 transition-all"
        >
          Explore Sprint <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </div>
</section>
{/* INVESTMENT READINESS PROGRAM */}
<section className="irp-section py-24 px-6 lg:px-10 border-t border-amg-line bg-white overflow-hidden">
  <div className="max-w-[1280px] mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      <div className="lg:col-span-6">
        <div className="tag-pill inline-flex mb-5">
          <span className="dot bg-amg-yellow" />
          03/Investment Readiness Program
        </div>

        <h3 className="heading-display text-[30px] md:text-[48px] text-amg-teal leading-[1.03]">
          Earlier in Your Fundraising Journey? Start Here.
        </h3>

        <div className="yellow-scribble" />

        <p className="mt-6 text-[17px] md:text-[19px] text-amg-ink/78 leading-relaxed max-w-3xl">
          For first-time founders and companies preparing ahead of a raise, the Investment Readiness Program gives you the frameworks, tools, and expert guidance to understand what investors expect and build the foundations for a successful fundraise.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {[
            'Understand How Investors Evaluate Your Company',
            'Identify Your Fundability Gaps',
            'Build Your Investor Narrative & Pitch',
            'Strengthen Financials, Valuation & Raise Strategy',
            'Prepare for Investor Q&A & Due Diligence',
            'Leave With a Personalized Fundraising Roadmap',
          ].map((item) => (
            <div key={item} className="irp-mini-card">
              <div className="w-11 h-11 rounded-full bg-amg-yellow-bg flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-amg-teal" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-5 mt-8">
          <a
            href="https://investorreadinessprogram.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow"
          >
            Explore the Investment Readiness Program
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link to="/contact" className="btn-ghost">
            See IRP Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="lg:col-span-6">
        <div className="irp-detail-card rounded-[28px] border border-amg-line bg-white shadow-soft-lg overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="text-[13px] uppercase tracking-[0.22em] text-amg-teal/45 font-semibold mb-7">
              Investment Readiness Program
            </div>

            <h3 className="font-serif text-[34px] md:text-[44px] leading-[1.08] text-amg-teal">
              Learn the Fundraising Game Before You Enter It
            </h3>

            <div className="mt-8 space-y-8">
              <div className="grid grid-cols-[48px_1fr] gap-5">
                <div className="w-11 h-11 rounded-full bg-amg-yellow-bg flex items-center justify-center">
                  <Users className="w-5 h-5 text-amg-teal" />
                </div>
                <div>
                  <h4 className="font-serif text-[24px] text-amg-teal mb-4">Built for</h4>
                  <ul className="space-y-3 text-[15px] text-amg-ink/82">
                    {[
                      'First-time fundraisers',
                      'Founders 6-12+ months from raising',
                      'Founders building their investor toolkit',
                      'Founders who want structured guidance before execution',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-amg-teal shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="h-px bg-amg-line" />

              <div className="grid grid-cols-[48px_1fr] gap-5">
                <div className="w-11 h-11 rounded-full bg-amg-yellow-bg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-amg-teal" />
                </div>
                <div>
                  <h4 className="font-serif text-[24px] text-amg-teal mb-4">What you’ll build</h4>
                  <ul className="space-y-3 text-[15px] text-amg-ink/82">
                    {[
                      'Investment readiness framework',
                      'Investor narrative',
                      'Financial & valuation foundations',
                      'Fundraising strategy',
                      'Investor Q&A readiness',
                      'Action roadmap',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-amg-teal shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="irp-card-footer px-8 md:px-10 py-7 flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="font-serif text-[24px] md:text-[22px] text-white leading-tight">
                Learn → Build → Become Investor-Ready
              </div>
              <p className="text-[15px] text-white/75 mt-1">
                A structured starting point for earlier-stage founders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* HOW WE WORK */}
<section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-white">
  <div className="max-w-[1280px] mx-auto">
    <div className="text-center mx-auto mb-16">
      <div className="tag-pill inline-flex mb-5">
        <span className="dot bg-amg-teal" />
        Process
      </div>

      <h2 className="heading-display text-[38px] md:text-[48px] leading-[1.03] text-amg-teal">
        A disciplined raise runs on four core disciplines
      </h2>

      <p className="mt-8 text-[17px] md:text-[20px] text-amg-teal/72 leading-relaxed max-w-4xl mx-auto">
        We combine investor judgment, fundraising strategy, targeted investor access,
        and disciplined execution to help founders move from preparation to close.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {[
        {
          step: '01',
          title: 'Investor Diagnostic Review',
          text: 'An investor-lens pressure test of your deck, model, valuation, raise strategy, milestones, and narrative - so you know what could block the round before outreach begins.',
          icon: Search,
        },
        {
          step: '02',
          title: 'Investment Readiness',
          text: 'We fix the gaps the diagnostic surfaces: sharper narrative, stronger deck and model, valuation support, and investor Q&A preparation until the company is genuinely ready to raise.',
          icon: Compass,
        },
        {
          step: '03',
          title: 'Target Investors & Outreach',
          text: 'Relevant, active investor targeting across geographies, warm-intro path mapping, and disciplined outreach designed to start the right investor conversations.',
          icon: Users,
        },
        {
          step: '04',
          title: 'Diligence, Negotiation & Close',
          text: 'Data room readiness, diligence support, meeting follow-ups, investor management, and negotiation guidance through term sheet and close.',
          icon: FileText,
        },
      ].map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            className={`group min-h-[285px] rounded-[20px] border p-7 shadow-soft-sm hover-lift transition-all ${
              i % 3 === 0
                ? 'bg-gradient-teal border-gradient-teal'
                : i % 3 === 1
                ? 'bg-gradient-yellow border-gradient-yellow'
                : 'bg-gradient-turquoise border-gradient-turquoise'
            }`}
          >
            <div className="flex items-center justify-between mb-8">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                i % 3 === 0
                  ? 'bg-amg-teal-soft'
                  : i % 3 === 1
                  ? 'bg-amg-yellow-bg'
                  : 'bg-amg-turquoise-bg'
              }`}>
                <Icon className={`w-7 h-7 ${
                  i % 3 === 1 ? 'text-amg-yellow' : 'text-amg-turquoise-2'
                }`} />
              </div>

              <span className={`text-[24px] font-medium ${i % 3 === 1 ? 'text-amg-yellow' : 'text-amg-teal/70'}`}>
                {item.step}
              </span>
            </div>

            <h3 className="font-serif text-[24px] text-amg-teal leading-[1.12]">
              {item.title}
            </h3>

            <p className="mt-4 text-[16px] text-amg-ink/78 leading-relaxed">
              {item.text}
            </p>
          </div>
        );
          })}
    </div>

    {/* WHAT WE DON'T DO */}
    <div className="amg-not-do-grid">

      {/* COLUMN 1 */}
      <div className="amg-not-do-intro">
        <span>WHAT WE DON'T DO</span>

        <h3>
          No shortcuts.
          <br />
          No generic playbooks.
        </h3>
      </div>

      {/* COLUMN 2 */}
      <div className="amg-not-do-item">
        <div className="amg-not-do-x">×</div>

        <div>
          <h1>Generic fundraising advice</h1>
        </div>
      </div>

      {/* COLUMN 3 */}
      <div className="amg-not-do-item">
        <div className="amg-not-do-x">×</div>

        <div>
          <h2>Investor directory lists</h2>
        </div>
      </div>

      {/* COLUMN 4 */}
      <div className="amg-not-do-item">
        <div className="amg-not-do-x">×</div>

        <div>
          <h3>One-size-fits-all templates</h3>
        </div>
      </div>

    </div>

  </div>
</section>
{/* INDUSTRIES WE SERVE */}
{/* <section className="sector-section py-24 px-6 lg:px-10 border-t border-amg-line bg-white">
  <div className="max-w-[1280px] mx-auto">
    <div className="text-center mx-auto mb-14">
      <div className="tag-pill inline-flex mb-5">
        <span className="dot bg-amg-yellow" />
        Sector Experience
      </div>

      <h2 className="heading-display text-[42px] md:text-[64px] leading-[1.03] text-amg-teal">
        Built for founders across sectors
      </h2>

      <p className="mt-8 text-[17px] md:text-[20px] text-amg-ink/80 leading-relaxed max-w-5xl mx-auto">
        We work with companies across technology, healthcare, financial services, climate, industrial,
        consumer, and other sectors where a clear investment case and disciplined fundraising matter.
      </p>

      <p className="mt-5 text-[15.5px] md:text-[18px] text-amg-teal/60 leading-relaxed max-w-4xl mx-auto">
        The fundability lens is tailored to your sector, stage, business model, and capital path - not built around a one-size-fits-all playbook.
      </p>
    </div>

     <div className="about-sector-grid1">

              {[
                ['SaaS / AI / Software', Cpu],
                ['Life Sciences / Healthcare / Med Devices', HeartPulse],
                ['Fintech / Payments / Insurtech', CreditCard],
                ['Climate / Energy / Sustainability', Leaf],
                ['Industrial / Robotics / Advanced Manufacturing', Building2],
                ['Consumer / Marketplace / Commerce', ShoppingCart],
              ].map(([label, Icon]) => (
                <div key={label}>
                  <Icon />
                  <span>{label}</span>
                </div>
              ))}

            
    </div>


    <p className="mt-12 text-center text-[16px] md:text-[18px] text-amg-teal/60">
      And other sectors where clarity, credible numbers, and investor-ready materials matter.
    </p>
  </div>
</section> */}

<section className="about-sectors-section">

  <div className="about-container">

    <div className="about-eyebrow">
      SECTORS WE WORK WITH
    </div>

    <h2 className="about-sectors-title">
      Built for ambitious companies
    
      across high-growth sectors.
    </h2>
 <p className="mt-8 text-[17px] md:text-[20px] text-amg-ink/80 leading-relaxed max-w-5xl mx-auto">
        We work with companies across technology, healthcare, financial services, climate, industrial,
        consumer, and other sectors where a clear investment case and disciplined fundraising matter.
      </p>

      <p className="mt-5 text-[15.5px] md:text-[18px] text-amg-teal/60 leading-relaxed max-w-4xl mx-auto">
        The fundability lens is tailored to your sector, stage, business model, and capital path - not built around a one-size-fits-all playbook.
      </p>
    <div className="about-sectors-grid">

      <div className="about-sector-card">
        <div className="about-sector-icon">
          <Cpu size={22} strokeWidth={1.7} />
        </div>
        <div className="about-sector-content">
          <h3>SaaS / AI / Software</h3>
          <p>Technology businesses building scalable products.</p>
        </div>
      </div>

      <div className="about-sector-card">
        <div className="about-sector-icon">
          <HeartPulse size={22} strokeWidth={1.7} />
        </div>
        <div className="about-sector-content">
          <h3>Life Sciences / Healthcare</h3>
          <p>Healthcare, medtech and life sciences ventures.</p>
        </div>
      </div>

      <div className="about-sector-card">
        <div className="about-sector-icon">
          <CreditCard size={22} strokeWidth={1.7} />
        </div>
        <div className="about-sector-content">
          <h3>Fintech / Payments / Insurtech</h3>
          <p>Financial technology and insurance innovation.</p>
        </div>
      </div>

      <div className="about-sector-card">
        <div className="about-sector-icon">
          <Leaf size={22} strokeWidth={1.7} />
        </div>
        <div className="about-sector-content">
          <h3>Climate / Energy / Sustainability</h3>
          <p>Businesses solving energy and sustainability challenges.</p>
        </div>
      </div>

      <div className="about-sector-card">
        <div className="about-sector-icon">
          <Factory size={22} strokeWidth={1.7} />
        </div>
        <div className="about-sector-content">
          <h3>Industrial / Robotics / Advanced Manufacturing</h3>
          <p>Industrial technology and next-generation manufacturing.</p>
        </div>
      </div>

      <div className="about-sector-card">
        <div className="about-sector-icon">
          <ShoppingCart size={22} strokeWidth={1.7} />
        </div>
        <div className="about-sector-content">
          <h3>Consumer / Marketplace / Commerce</h3>
          <p>Consumer brands, platforms and commerce businesses.</p>
        </div>
      </div>

    </div>

    <p className="about-sectors-footer">
      And other sectors where clarity, credible numbers, and investor-ready
      materials matter.
    </p>

  </div>

</section>
{/* MEET THE FOUNDER */}
{/* MEET THE FOUNDER */}
<section className="founder-proof-section py-20 px-6 lg:px-10 border-t border-amg-line bg-white">
  <div className="max-w-[1320px] mx-auto">

    {/* TOP FOUNDER SECTION */}
    <div className="founder-modern-grid">

      {/* ================= LEFT : GAURAV IMAGE ================= */}
    {/* ================= LEFT COLUMN ================= */}
<div className="founder-modern-left">

  {/* GAURAV IMAGE */}
  <div className="founder-modern-image-wrap">
    <div className="founder-modern-image">

      <img
        src={GauravImage}
        style={{ transform: "scaleX(-1)" }}
        alt="Gaurav Bansal"
        className="founder-modern-photo"
      />

      <div className="founder-modern-quote">
        <div className="founder-quote-mark">
          &ldquo;
        </div>

        <p>
          I've sat on the other side of the table - as an investor,
          operator, and dealmaker. Now I help founders get investor-ready
          before they fundraise.
        </p>
      </div>

    </div>
  </div>


  {/* =====================================================
      TRUSTED ON BOTH SIDES OF THE TABLE
      THIS NOW SITS DIRECTLY BELOW THE IMAGE
      ===================================================== */}

  <div className="ecosystem-side-card">

    <div className="ecosystem-side-eyebrow">
      TRUSTED ON BOTH SIDES OF THE TABLE
    </div>

    <h3>
      Selected by Leading
      <br />
      Startup Ecosystems
    </h3>

    <div className="ecosystem-side-scribble" />

    <p className="ecosystem-side-description">
      Leading accelerators, innovation programs, and founder
      ecosystems trust Gaurav to evaluate startups, mentor
      founders, and assess investment readiness.
    </p>

    <div className="ecosystem-side-note">
      <Handshake className="ecosystem-side-note-icon" />

      <span>
        Beyond founder advisory, Gaurav also partners with
        accelerators, incubators, and innovation ecosystems
        as a Growth Coach, Speaker, Workshop Leader,
        Evaluator, and EIR-style expert.
      </span>
    </div>

  </div>

</div>



      {/* ================= RIGHT : FOUNDER CONTENT ================= */}
      <div className="founder-modern-content">

        <div className="founder-modern-eyebrow">
          MEET THE FOUNDER
        </div>

        <h2 className="founder-modern-heading">
          Built by an Investor.
          <span>Now on the Founder's Side.</span>
        </h2>

        <div className="founder-modern-scribble" />

        <p className="founder-modern-intro">
          Gaurav Bansal brings 14+ years across venture capital, angel
          investing, investment banking and consulting - helping founders
          see their companies the way investors do before they enter the
          fundraising market.
        </p>


        {/* ================= EXPERIENCE POINTERS ================= */}
        <div className="founder-experience-list">

          {/* 01 */}
          <div className="founder-experience-item">

            <div className="founder-experience-icon">
              <Briefcase className="w-6 h-6" />
            </div>

            <div className="founder-experience-content">
              <h3>14+ Years</h3>

              <p>
                Across venture capital, angel investing, investment banking,
                technology consulting and startup advisory, with a strong
                focus on commercialization, investment readiness and growth
                financing.
              </p>
            </div>

          </div>


          {/* 02 */}
          <div className="founder-experience-item">

            <div className="founder-experience-icon">
              <Users className="w-6 h-6" />
            </div>

            <div className="founder-experience-content">
              <h3>50+ Angel Investments</h3>

              <p>
                50+ personal angel investments, membership in 300+ angel
                syndicates globally, and VC portfolio experience across
                30+ startups in 10 countries.
              </p>
            </div>

          </div>


          {/* 03 */}
          <div className="founder-experience-item">

            <div className="founder-experience-icon">
              <Landmark className="w-6 h-6" />
            </div>

            <div className="founder-experience-content">
              <h3>US$2B+ Transactions</h3>

              <p>
                Investment-banking transactions, including IPO, private-equity
                and strategic transaction experience, giving me a strong
                grounding in financial analysis, valuation, capital structuring
                and investment decision-making.
              </p>
            </div>

          </div>


          {/* 04 */}
          <div className="founder-experience-item">

            <div className="founder-experience-icon">
              <ClipboardCheck className="w-6 h-6" />
            </div>

            <div className="founder-experience-content">
              <h3>20,000+ Startups Reviewed</h3>

              <p>
                250+ formal startup and innovation evaluations, 100+ detailed
                due diligences, and review of 20,000+ pitch decks and financial
                models across multiple technology sectors.
              </p>
            </div>

          </div>


          {/* 05 */}
          <div className="founder-experience-item">

            <div className="founder-experience-icon">
              <GraduationCap className="w-6 h-6" />
            </div>

            <div className="founder-experience-content">
              <h3>3,000+ Founder Mentoring Hours</h3>

              <p>
                With 200+ founders and 150+ workshops and programs covering
                fundraising, financial modelling, valuation, investor readiness,
                business models, GTM and investment strategy.
              </p>
            </div>

          </div>

        </div>


        {/* ================= ROLE TAGS ================= */}
        <div className="founder-modern-role-row">
          {[
            'Ex-VC',
            'Angel Investor',
            'Ex-Investment Banker',
            'Portfolio Operator',
            'Founder'
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>


        {/* ================= BOTTOM COPY + BUTTONS ================= */}
        <div className="founder-modern-actions">

          <p>
            That experience now sits behind every AMG engagement - from
            identifying fundability gaps and strengthening the investment
            case to investor targeting, diligence, negotiation and close.
          </p>

          <div className="founder-modern-buttons">

            <Link
              to="/about"
              className="founder-modern-primary-btn"
            >
              Learn More About Gaurav
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://www.linkedin.com/in/gauravbansalventurecapital/"
              target="_blank"
              rel="noopener noreferrer"
              className="founder-modern-linkedin-btn"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn Profile
            </a>

          </div>

        </div>

      </div>

    </div>
</div>
</section>

    {/* =========================================================
        KEEP YOUR EXISTING ECOSYSTEM SECTION HERE
       ========================================================= */}
{/* TRUSTED ECOSYSTEMS + COMPANY LOGOS */}

<div className="amg-company-ecosystem">

  {/* LEFT CONTENT */}
  <div className="amg-company-copy">

    <span className="amg-company-eyebrow">
      TRUSTED ACROSS THE ECOSYSTEM
    </span>

    <h2>
      Trusted by Leading
      <br />
      Startup Ecosystems
    </h2>

    <div className="amg-company-underline"></div>

    <p>
      Helping leading innovation networks evaluate, mentor,
      and support ambitious founders.
    </p>

  </div>


  {/* RIGHT — COMPANY LOGOS */}
  <div className="amg-company-logos">

    <div className="amg-company-logo-grid">

      {/* ROW 1 */}

      <div className="amg-company-logo">
        <img src={MtLabLogo} alt="MT Lab" />
      </div>

      <div className="amg-company-logo">
        <img src={TechstarsLogo} alt="Techstars" />
      </div>

      <div className="amg-company-logo">
        <img src={MedTechInnovatorLogo} alt="MedTech Innovator" />
      </div>

      <div className="amg-company-logo">
        <img src={YorkULogo} alt="York University" />
      </div>

      <div className="amg-company-logo">
        <img
          src={BlackEntrepreneurshipAllianceLogo}
          alt="Black Entrepreneurship Alliance"
        />
      </div>

      <div className="amg-company-logo">
        <img
          src={EdmontonUnlimitedLogo}
          alt="Edmonton Unlimited"
        />
      </div>

      <div className="amg-company-logo">
        <img
          src={MassChallengeLogo}
          alt="MassChallenge"
        />
      </div>

      <div className="amg-company-logo">
        <img
          src={MississaugaDEALogo}
          alt="IDEA Mississauga"
        />
      </div>


      {/* ROW 2 */}

      <div className="amg-company-logo">
        <img
          src={TechNordicGlobalTechAdvocatesLogo}
          alt="Tech Nordic Global Tech Advocates"
        />
      </div>

      <div className="amg-company-logo">
        <img
          src={CommunitechLogo}
          alt="Communitech"
        />
      </div>

      <div className="amg-company-logo">
        <img
          src={ElevateLogo}
          alt="Elevate"
        />
      </div>

      <div className="amg-company-logo">
        <img
          src={VentureLabLogo}
          alt="ventureLAB"
        />
      </div>

      <div className="amg-company-logo">
        <img
          src={EITEuropeanInstituteLogo}
          alt="EIT Higher Education Initiative"
        />
      </div>

      <div className="amg-company-logo">
        <img
          src={InnovationClusterLogo}
          alt="Innovation Cluster"
        />
      </div>

      <div className="amg-company-logo">
        <img
          src={ForesightCanadaLogo}
          alt="Foresight Canada"
        />
      </div>

      <div className="amg-company-logo">
        <img
          src={D2XcelLogo}
          alt="D2XCEL"
        />
      </div>


      {/* ROW 3 */}

      <div className="amg-company-logo">
        <img
          src={InvestNovaScotiaLogo}
          alt="Invest Nova Scotia"
        />
      </div>

      <div className="amg-company-logo">
        <img
          src={VoltaLogo}
          alt="Volta"
        />
      </div>

      <div className="amg-company-logo">
        <img
          src={FintechCadenceLogo}
          alt="Fintech Cadence"
        />
      </div>

      <div className="amg-company-logo">
        <img
          src={EITRawMaterialsLogo}
          alt="EIT RawMaterials"
        />
      </div>

      <div className="amg-company-logo">
        <img
          src={TechAllianceLogo}
          alt="TechAlliance"
        />
      </div>

      <div className="amg-company-logo">
        <img
          src={CatalystLogo}
          alt="Catalyst"
        />
      </div>

      <div className="amg-company-logo">
        <img
          src={SparkCentreLogo}
          alt="Spark Centre"
        />
      </div>

      <div className="amg-company-logo">
        <img
          src={BramptonVentureZoneLogo}
          alt="Brampton Venture Zone"
        />
      </div>
          <div className="amg-company-logo">
        <img
          src={WesternMorissetteInstituteLogo}
          alt="Western Morissette Institute"
        />
      </div>    <div className="amg-company-logo">
        <img
          src={MarkhamBoardOfTradeLogo}
          alt="Markham Board of Trade"
        />
      </div>    <div className="amg-company-logo">
        <img
          src={RichmondHillInnovationCentreLogo}
          alt="Richmond Hill Innovation Centre"
        />
      </div>    <div className="amg-company-logo">
        <img
          src={boundlessLogo}
          alt="Boundless Accelerator"
        />
      </div>

    </div>

  </div>

</div>    

      {/* KEEP EVERYTHING YOU CURRENTLY HAVE INSIDE
          ecosystem-proof EXACTLY AS IT IS */}
{/* INDUSTRIES WE SERVE */}

    {/* FOUNDER SERVICES */}
      {/* <section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-amg-cream-2/40"> */}
      {/* <section className="py-24 px-6 lg:px-10 border-t border-gray-100 bg-white">
  <div className=" mx-auto"> */}

    {/* Heading */}
  {/* Heading */}
{/* <div className="text-center mx-auto mb-20">

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

</div> */}
    {/* Cards */}
    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

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
              {/* <div className="flex items-center justify-between mb-5">

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

              </div> */}

              {/* Title */}
              {/* <h3 className="font-serif text-[23px] text-amg-teal leading-[1.1] max-w-[300px]">
                {homeCopy.title}
              </h3> */}

              {/* Description */}
              {/* <p className="mt-3 text-[14px] text-amg-teal/68 leading-[1.6] max-w-[340px]">

                {homeCopy.tagline}

              </p> */}

              {/* Divider */}
              {/* <div className="border-t border-amg-line mt-4 pt-3">

                <div className="flex items-center justify-between">

                  <span className="text-[13px] font-semibold text-amg-turquoise-2">
                    Learn More
                  </span>

                  <ArrowUpRight className="w-4 h-4 text-amg-turquoise-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />

                </div>

              </div> */}

            {/* </div>

          </Link>
        );
      })} 

    </div> */}

  {/* </div>
</section> */}



{/* ECOSYSTEM & PARTNERS */}
{/* <section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-white">

  <div className="max-w-[1280px] mx-auto"> */}

    {/* Heading */}
  {/* Heading */}
{/* <div className="text-center  mx-auto mb-20">  

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

</div> */}
    {/* Grid */}
    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

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
            {/* <div className="w-14 h-14 rounded-2xl bg-amg-turquoise-bg flex items-center justify-center mb-7">
              <Icon className="w-6 h-6 text-amg-teal" />
            </div>

            {/* Content */}
            {/* <h3 className="font-serif text-[28px] text-amg-teal leading-[1.12]"> 
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

</section>  */}

{/* CASE STUDIES / TRANSFORMATIONS */}
{/* <section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-white">

  <div className="max-w-[1280px] mx-auto"> */}

    {/* Heading */}
    {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">

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

    </div> */}

    {/* Case Study Grid */}
    {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> */}

      {/* BEFORE */}
      {/* <div className="rounded-[30px] border border-amg-line bg-[#fafbfd] p-9 shadow-soft-sm">

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

      </div> */}

      {/* AFTER */}
      {/* <div className="rounded-[30px] border border-amg-teal bg-amg-teal p-9 shadow-soft-sm text-white relative overflow-hidden"> */}

        {/* Glow */}
        {/* <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

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

</section> */}
{/* AI VS STRATEGIC ADVISORY */}
{/* <section className="py-24 px-6 lg:px-10 border-t border-amg-line bg-white overflow-hidden">

  <div className="max-w-[1280px] mx-auto">

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center"> */}

      {/* LEFT CONTENT */}
      {/* <div className="lg:col-span-7">

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
        </p> */}

        {/* Points */}
        {/* <div className="space-y-5 mt-10">

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

      </div> */}

      {/* RIGHT VISUAL */}
      {/* <div className="lg:col-span-5 relative">

        <div className="rounded-[32px] border border-amg-line bg-white shadow-soft-lg overflow-hidden"> */}

          {/* Top */}
          {/* <div className="p-8 border-b border-amg-line">

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

          </div> */}

          {/* Comparison */}
          {/* <div className="p-8 space-y-5">

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

</section> */}
    
      <CTASection />
      <Footer />
    </>
  );
}
