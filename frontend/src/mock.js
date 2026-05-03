// Content sourced from the AMG Venture Partners PDF brief.

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Founder Services', to: '/founder-services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
  { label: 'About Us', to: '/about' }
  // {label:'Investment Readiness Program', to: '/investment-readiness-program'},
];

export const HERO = {
  eyebrowTags: ['Pre-Seed', 'Seed', 'Series A'],
  title: 'Raise Capital With Conviction.',
  description:
    'AMG Venture Partners equips founders, incubators, and accelerators across North America and Europe with the strategic clarity, tools, and connections to close their rounds.',
  primaryCta: { label: 'Explore Services', to: '/founder-services' },
  secondaryCta: { label: 'Book a Consultation', to: '/contact' },
};

export const WHO_WE_ARE = {
  eyebrow: 'Who We Are',
  title: 'Practical Insight. Real Results.',
  paragraphs: [
    'AMG Venture Partners was founded by operators and investors who have lived on both sides of the table. We provide the exact frameworks, documents, and introductions that move fundraising processes forward.',
    'Whether you are a first-time founder or an accelerator looking to elevate your entire cohort, we meet you where you are and build toward where you need to be.',
  ],
  bullets: [
    'Hands-on, founder-first methodology',
    'Deep North American & European investor networks',
    'Stage-appropriate advice from pre-seed to Series A',
  ],
  stat: { label: 'Avg. Time to First Term Sheet', value: '8–12 Weeks' },
  image:
    'https://images.unsplash.com/photo-1680459575585-390ed5cfcae0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwzfHxzdGFydHVwJTIwZm91bmRlcnMlMjBjb2xsYWJvcmF0aXZlfGVufDB8fHx8MTc3NzI4NTI0OXww&ixlib=rb-4.1.0&q=85',
};

export const SERVICE_PILLARS = [
  { title: 'Financial Models', desc: 'Investor-grade.', accent: 'yellow' },
  { title: 'Pitch Decks', desc: 'Compelling narratives.', accent: 'turquoise' },
  { title: 'Investor Network', desc: 'Across North America & Europe.', accent: 'teal' },
  { title: 'Valuation', desc: 'Defensible analysis.', accent: 'yellow' },
];

export const FOUNDER_SERVICES_INTRO = {
  eyebrow: 'For Founders',
  title: 'Founder Services',
  description:
    'From your first pitch deck to your closing round, AMG Venture Partners provides hands-on, stage-appropriate support at every critical step of the fundraising journey. Each service is tailored to your specific context — your stage, sector, geography, and target investor.',
};

export const NOT_SURE_CTA = {
  eyebrow: 'Not Sure Where to Start?',
  title: 'Schedule a Free Consultation',
  description:
    "Book a free strategy call and we'll map the right service path for your current stage and fundraising journey.",
  cta: { label: 'Book a Free Strategy Call', to: '/contact' },
  note: 'No obligation. 30 minutes. All new engagements start here.',
};

export const PRICING_INTRO = {
  eyebrow: 'Pricing',
  title: 'Transparent, Flat-Fee Pricing',
  description:
    'No hourly surprises. Every engagement is scoped, priced, and agreed upon before we start.',
};

export const HOW_WE_WORK_INTRO = {
  eyebrow: 'How We Work Together',
  description:
    'A structured engagement designed to be efficient, collaborative, and output-driven — no bureaucracy, no back-and-forth chaos.',
};

const STANDARD_PRICING_NOTE = {
  eyebrow: 'Pricing',
  title: 'Transparent, Flat-Fee Pricing',
  description: 'No hourly surprises. Every engagement is scoped, priced, and agreed upon before we start.',
};

export const SERVICES = [
  {
    slug: 'pitch-deck-review',
    title: 'Pitch Deck Review',
    tagline: 'Sharpen your story before you step into the room.',
    accent: 'yellow',
    why: 'A meticulous, investor-perspective critique of your existing pitch deck — designed to identify narrative gaps, structural weaknesses, and missed opportunities before they cost you a term sheet.',
    whyHeading: 'Most rejections happen because of how a story is told — not the business behind it.',
    whyPoints: [
      {
        title: 'Vague Feedback Is Useless',
        text: 'Most peer review gives polite, surface-level validation. What you actually need is a hard, investor-perspective critique — exactly what is unclear, what is unconvincing, and what is missing.',
      },
      {
        title: "You Can't See Your Own Blind Spots",
        text: 'You know your business too well. The assumptions, jumps, and shortcuts that feel obvious to you are exactly what confuses an investor reading your deck for the first time.',
      },
      {
        title: 'One Weak Slide Can Kill the Whole Deck',
        text: 'A single confusing slide, an unclear chart, or a missing proof point can derail an otherwise strong narrative. These gaps need to be caught before investors do.',
      },
    ],
     pricing: [
      { tier: 'Essential Review', price: '$1,500', sub: '5 business days · Written critique' },
      { tier: 'Founder Workshop', price: '$2,800', sub: '60-min live session + revisions' },
    ],
    deliverHeading: 'Investor-grade feedback that tells you exactly what to fix and why.',
    deliver: [
      { title: 'Slide-by-Slide Annotation', text: 'Every slide reviewed with detailed written annotations on copy, structure, evidence, and visual clarity.' },
      { title: 'Narrative Flow Analysis', text: 'Does your story compound, or fragment? We map the logical arc and flag where investor attention drops.' },
      { title: 'Market & Story Review', text: 'Pressure-test your market sizing, segmentation, and category framing for institutional credibility.' },
      { title: 'Red Flag Identification', text: 'We surface the questions a sophisticated investor will ask — before you walk into the room.' },
      { title: 'Investor Q&A Anticipation', text: 'A list of the toughest questions your deck will trigger, with suggested answers and supporting data.' },
      { title: 'Competitive & Team Review', text: 'Sharpen positioning against alternatives and stress-test how your team slide reads to investors.' },
    ],
    process: [
      { step: 'Intake & Context Setting', day: 'Day 1', text: 'You share your deck, target investor profile, and round context. We align on focus areas.' },
      { step: 'Deep Deck Analysis', day: 'Day 1–4', text: 'A senior partner reviews your deck slide-by-slide against an institutional evaluation framework.' },
      { step: 'Written Feedback Report', day: 'Day 5', text: 'You receive a written report with key strengths, critical gaps, and prioritised recommendations.' },
      { step: 'Live Debrief Session', day: 'Day 6', text: 'A 60-minute working session — discussing each finding, answering your questions, and creating a revision outline.' },
    ],
    pricingNote: STANDARD_PRICING_NOTE,
    finalCta: {
      title: 'Ready to Strengthen Your Deck?',
      description: 'Submit your deck and get a full investor-perspective review back within 5 business days.',
      cta: { label: 'Get Started', to: '/contact' },
    },
    faqs: [
      { q: 'How quickly can you turn around the review?', a: 'Standard turnaround is 5 business days from receipt of materials. Rush 48-hour turnaround is available for an additional fee.' },
      { q: 'Is this feedback from someone who has actually sat on the investor side?', a: 'Yes. Reviews are conducted by partners who have evaluated hundreds of decks from the investor seat — not generalist consultants.' },
      { q: 'Do you sign NDAs?', a: 'Mutual NDAs are standard for every engagement. Your deck and information are never shared.' },
      { q: 'Will you also help me rewrite the deck?', a: 'The review focuses on critique and recommendations. If you want hands-on rebuilding, our Pitch Deck Creation service is the right next step.' },
    ],
  },
  {
    slug: 'pitch-deck-creation',
    title: 'Pitch Deck Creation',
    tagline: 'Your story, told with clarity and conviction.',
    accent: 'turquoise',
    why: 'We build investor-grade pitch decks from the ground up — crafting the narrative architecture, structuring each slide for maximum impact, and delivering a polished presentation that opens doors and moves investors to act.',
    whyHeading: 'Most pitch decks fail before a founder ever steps into the room.',
    pricing: [
      { tier: 'Pre-Seed Deck', price: '$5,500', sub: '12 slides · 3 weeks · 2 revisions' },
      { tier: 'Seed / Series A', price: '$9,500', sub: '15 slides · 4 weeks · Coaching included' },
    ],
    whyPoints: [
      {
        title: 'You Have 3 Minutes to Make an Impression',
        text: 'Investors form a first impression within the first three slides. Without a tight narrative arc, the rest of the deck rarely gets a fair read.',
      },
      {
        title: 'Insider Jargon Loses the Room',
        text: "What is obvious to a founder is often opaque to an investor outside your sector. Clarity beats sophistication in every fundraise.",
      },
      {
        title: 'Design Without Narrative Is Decoration',
        text: 'Beautiful slides without a sharp story do not raise rounds. Story-first design is the only design that converts.',
      },
    ],
    deliverHeading: 'A purpose-built pitch deck that tells your story with precision.',
    deliver: [
      { title: 'Narrative Architecture', text: 'A logical, progressive story arc designed to answer investor questions before they arise.' },
      { title: 'Slide-by-Slide Development', text: 'Each slide written, edited, and designed with copy, data visualisation, and visual hierarchy optimised for investor consumption.' },
      { title: 'Market & Competitive Framing', text: 'Clear market sizing, competitive differentiation, and category framing that positions your company in a context investors understand.' },
      { title: 'Investor-Tailored Messaging', text: "Messaging tailored to your target investor profile — fund focus, thesis, portfolio fit — so the pitch resonates with the right audience." },
      { title: 'Traction Storytelling', text: 'We translate your traction data into compelling proof points that signal momentum and de-risk the investment.' },
      { title: 'Editable Deliverables', text: 'Final deck delivered as PDF and editable PowerPoint — fully yours to update and adapt.' },
    ],
    process: [
      { step: 'Founder Discovery Session', day: 'Day 1', text: 'A 90-minute working session to extract your real story, traction, and the proof points investors need to see.' },
      { step: 'Narrative Architecture', day: 'Day 2–7', text: 'We map the slide-by-slide flow and write a narrative document that locks the story before any design work begins.' },
      { step: 'Slide Build & Review', day: 'Day 8–18', text: 'Slides built, copy refined, visuals tested. Two full rounds of structured revisions based on your feedback.' },
      { step: 'Coaching & Walkthrough', day: 'Day 19–21', text: 'A 60-minute live deck walkthrough plus presentation coaching — how to deliver the story verbally, with confidence.' },
    ],
    pricingNote: STANDARD_PRICING_NOTE,
    finalCta: {
      title: 'Ready to Build a Deck That Converts?',
      description: 'Start with a free 30-minute consultation. We will map the right scope and timeline for your raise.',
      cta: { label: 'Get Started', to: '/contact' },
    },
    faqs: [
      { q: 'How long does the engagement take?', a: 'Typical timeline is 3–4 weeks from discovery session to final deck delivery, with two structured revision rounds built in.' },
      { q: 'Who actually writes the slides?', a: 'A senior partner leads the narrative and copy work. You co-create the story — no junior consultants doing the thinking.' },
      { q: 'Do you handle visual design too?', a: 'Yes. Every engagement includes polished, investor-ready visual design as a core deliverable.' },
      { q: 'Can I update the deck later?', a: 'Yes. You receive the editable PowerPoint file — fully yours to update for follow-on conversations and future rounds.' },
    ],
  },
  {
    slug: 'financial-model',
    title: 'Financial Model',
    tagline: 'Numbers that tell a story investors trust.',
    accent: 'teal',
    why: 'We build rigorous, investor-grade financial models from scratch — structured around how your business actually operates, with explicit assumptions investors can interrogate and scenarios that hold up under diligence.',
    whyHeading: 'Investors trust the model that survives scrutiny — not the spreadsheet that hides it.',
     pricing: [
      { tier: 'Pre-Revenue', price: '$4,500', sub: 'For pre-seed founders' },
      { tier: 'Revenue Stage', price: '$7,500', sub: 'For seed / Series A' },
    ],
     whyPoints: [
      {
        title: 'Top-Down Forecasts Get Ignored',
        text: 'Serious investors discount any forecast that is not built bottom-up from real operating drivers. A top-down model signals you have not thought through the business.',
      },
      {
        title: 'Errors Destroy Credibility Instantly',
        text: 'A single broken formula or implausible assumption can collapse an investor\u2019s confidence in the entire round. Models must be auditable, end to end.',
      },
      {
        title: 'Weak Unit Economics Kill the Round',
        text: 'If your contribution margin, payback, or LTV/CAC do not stand up to interrogation, no amount of narrative will fix it. Numbers must defend themselves.',
      },
    ],
    deliverHeading: 'A bottom-up, driver-based model engineered for institutional diligence.',
    deliver: [
      { title: '5-Year P&L, Cash Flow & Balance Sheet', text: 'Three integrated statements that tie back to a single set of explicit assumptions.' },
      { title: 'Driver-Based Revenue Build', text: 'Revenue modelled from the operating drivers that actually move your business — not a top-down growth percentage.' },
      { title: 'Cohort & Unit Economics Module', text: 'Cohort retention, contribution margin, payback, and LTV/CAC structured the way institutional investors expect to see them.' },
      { title: 'Hiring Plan & Runway Calculator', text: 'Headcount and burn modelled month-by-month with a clear view on cash runway across scenarios.' },
      { title: 'Scenario Toggles', text: 'Base, upside and downside scenarios driven by the same assumption sheet — no parallel models, no inconsistencies.' },
      { title: 'Investor Summary Page', text: 'A clean one-page summary of the model designed to slot directly into your deck or data room.' },
    ],
    process: [
      { step: 'Discovery & Driver Mapping', day: 'Day 1–3', text: 'We map how your business actually works and identify the operating drivers that should sit at the core of the model.' },
      { step: 'Model Build', day: 'Day 4–14', text: 'Bottom-up model built with explicit assumptions, three statements integrated, and unit economics structured for diligence.' },
      { step: 'Stress Test & Scenarios', day: 'Day 15–18', text: 'We pressure-test every assumption, run base / upside / downside scenarios, and surface where the model is most sensitive.' },
      { step: 'Walkthrough & Handoff', day: 'Day 19–21', text: 'Live walkthrough with the founding team and full handoff of the editable model with assumption documentation.' },
    ],
    pricingNote: STANDARD_PRICING_NOTE,
    finalCta: {
      title: 'Ready for an Investor-Grade Model?',
      description: 'Book a 30-minute scoping call. We will define the right model depth for your stage and round size.',
      cta: { label: 'Get Started', to: '/contact' },
    },
    faqs: [
      { q: 'Excel or Google Sheets?', a: 'Either — your preference. The model is fully editable and auditable in either format.' },
      { q: 'Can investors actually audit the assumptions?', a: 'Yes. Every assumption is explicit, sourced where relevant, and traceable through the model.' },
      { q: 'How long does it take?', a: '3–4 weeks for a full build, depending on business complexity. Faster turnarounds available for straightforward businesses.' },
      { q: 'Do you update the model after a raise?', a: 'Many founders engage us for a quarterly refresh after the round closes. The handoff model is yours to maintain in-house if you prefer.' },
    ],
  },
  {
    slug: 'valuation',
    title: 'Valuation',
    tagline: 'Know your worth and defend it.',
    accent: 'yellow',
    why: 'Defensible, market-grounded valuation analyses using the methodologies that institutional investors apply — comparable companies, precedent transactions, and DCF — calibrated to your stage, sector, and geography.',
    whyHeading: 'Valuation is where dollars are won and lost before term sheets are signed.',
     pricing: [
      { tier: 'Valuation Memo', price: '$3,500', sub: '2 weeks · Comps + DCF' },
      { tier: 'Defense Package', price: '$6,000', sub: 'Adds founder coaching & live Q&A prep' },
    ],
    whyPoints: [
      {
        title: 'Founders Anchor on Hope, Not Evidence',
        text: 'Pricing your round on aspiration rather than analysis loses you both the deal and the trust of the investor. Defensibility is everything.',
      },
      {
        title: 'Mispricing Kills Deals Quietly',
        text: 'Anchor too high and investors walk away without explaining why. Anchor too low and you give away the company. Both are recoverable only with a defensible number.',
      },
      {
        title: 'Investors Test Your Number — Are You Ready?',
        text: 'Every serious investor will probe your valuation. The founders who close at strong numbers are the ones who can defend each one.',
      },
    ],
    deliverHeading: 'A defensible valuation built on real market data — not optimism.',
    deliver: [
      { title: 'Comparable Companies Analysis', text: 'A trading-comps screen using the right comp set, time window, and valuation multiples for your stage and sector.' },
      { title: 'Precedent Transactions Screen', text: 'M&A and financing precedents that establish a defensible valuation range based on what investors have actually paid.' },
      { title: 'DCF With Sensitivities', text: 'A discounted cash flow model with explicit assumptions and full sensitivity tables — no black-box outputs.' },
      { title: 'Pre-Money / Post-Money Waterfall', text: 'A clear cap-table waterfall showing dilution, ownership, and the implications of different round structures.' },
      { title: 'Investor-Facing Valuation Memo', text: 'A concise written memo summarising methodology, key assumptions, and the defensible valuation range — built to be shared with investors.' },
      { title: 'Founder Defense Playbook', text: 'A prep document with the toughest valuation questions investors will ask — and the data-backed answers to defend your number.' },
    ],
    process: [
      { step: 'Scope & Comp Set Definition', day: 'Day 1–3', text: 'We agree on the right comparables universe, time window, and methodology weighting for your stage and sector.' },
      { step: 'Analysis & Triangulation', day: 'Day 4–10', text: 'Comps, precedents, and DCF run in parallel and triangulated into a defensible valuation range.' },
      { step: 'Calibration', day: 'Day 11–12', text: 'We calibrate for stage, geography, traction, and risk — and stress-test the range against current market conditions.' },
      { step: 'Memo & Coaching', day: 'Day 13–14', text: 'Written valuation memo delivered alongside a founder coaching session to prep you for investor questions.' },
    ],
    pricingNote: STANDARD_PRICING_NOTE,
    finalCta: {
      title: 'Ready to Defend Your Valuation?',
      description: 'Book a 30-minute scoping call. We will frame the right valuation approach for your raise.',
      cta: { label: 'Get Started', to: '/contact' },
    },
    faqs: [
      { q: 'Will VCs actually accept your valuation?', a: 'Investors will always negotiate. Our memos hold up under diligence and equip you to defend a strong number with evidence.' },
      { q: 'Which sectors do you cover?', a: 'SaaS, fintech, marketplaces, healthtech, deeptech, climate, and consumer. We engage where we have direct experience.' },
      { q: 'How fast can you turn this around?', a: 'Standard 2 weeks. Rush turnarounds available for time-sensitive negotiations.' },
      { q: 'Can you join the investor call to defend the number?', a: 'On request, and depending on stage. Many founders ask us to prep them rather than join — both work.' },
    ],
  },
  {
    slug: 'investor-outreach',
    title: 'Investor Outreach',
    tagline: 'The right investor, at the right time.',
    accent: 'turquoise',
    why: 'Strategic, targeted investor outreach built on thesis alignment, stage fit, and sector expertise — paired with warm introductions from our established network across North America and Europe.',
    whyHeading: 'A sharp pipeline beats a broad blast every time.',
    pricing: [
      { tier: 'Targeted Sprint', price: '$6,500', sub: '4 weeks · 30 investors' },
      { tier: 'Full Round', price: '$12,000', sub: '8 weeks · up to 80 investors' },
    ],
    whyPoints: [
      {
        title: 'Spray-and-Pray Burns Your Reputation',
        text: 'Cold outreach to dozens of mismatched funds signals desperation and damages your standing in tight investor communities.',
      },
      {
        title: 'Thesis-Fit Beats Volume',
        text: '20 investors with active thesis alignment will close your round faster than 200 random intros. Targeting is leverage.',
      },
      {
        title: 'Warm Beats Cold — Always',
        text: 'A warm introduction from a credible source is worth ten cold emails. Network access is what separates founders who close from those who chase.',
      },
    ],
    deliverHeading: 'Targeted outreach designed to convert — not just to generate noise.',
    deliver: [
      { title: 'Thesis-Aligned Targeting', text: 'A curated investor universe of 50–100 funds, scored on thesis fit, stage fit, sector focus, and warmth of relationship.' },
      { title: 'Warm Introduction Network', text: 'Direct, warm introductions to investors where we have an established relationship and the fit is real.' },
      { title: 'North America & Europe Coverage', text: 'Active investor relationships in both geographies — and the context to navigate the differences in investor expectations.' },
      { title: 'Tailored Outreach Materials', text: 'Outreach copy, follow-up sequencing, and supporting one-pagers tailored to each investor archetype.' },
      { title: 'Pipeline Management', text: 'A structured process for tracking responses, managing diligence requests, and maintaining momentum across the full pipeline.' },
      { title: 'Investor Relationship Preparation', text: 'Briefing notes on each investor — fund focus, partner background, recent investments — so you walk into every meeting informed.' },
    ],
    process: [
      { step: 'Investor Targeting & Research', day: 'Week 1–2', text: 'We map your investor universe, score each fund on fit, and finalise a target list with you.' },
      { step: 'Outreach Materials Development', day: 'Week 2–3', text: 'Tailored outreach copy, supporting one-pagers, and partner briefing notes prepared for each investor.' },
      { step: 'Introductions & Campaign Launch', day: 'Week 3–4', text: 'Warm introductions sent first, followed by sequenced cold outreach. Pipeline tracking begins immediately.' },
      { step: 'Active Pipeline Management', day: 'Week 4–8', text: 'Weekly pipeline reviews, diligence support, and follow-up cadence until the round closes.' },
    ],
    pricingNote: STANDARD_PRICING_NOTE,
    pipelineCta: true,
    finalCta: {
      title: 'Start Building Your Investor Pipeline.',
      description: "Let's map your investor universe and build an outreach strategy designed to convert.",
      cta: { label: 'Book a Free Strategy Call', to: '/contact' },
    },
    faqs: [
      { q: 'Do you guarantee meetings or term sheets?', a: 'No firm guarantees process quality. We commit to the right targeting, warm intros where relevant, and disciplined pipeline management.' },
      { q: 'Can you raise the round for me?', a: 'No. Only the founder can lead a round. Our role is to put you in front of the right investors, fully prepared.' },
      { q: 'What geographies do you cover?', a: 'North America and Europe primarily. Selective engagements in other regions where we have direct relationships.' },
      { q: 'How long is the engagement?', a: 'Typical engagements run 8 weeks of active outreach, with shorter targeted sprints available.' },
    ],
  },
  {
    slug: 'investment-readiness',
    title: 'Investment Readiness',
    tagline: 'Identify gaps before investors do.',
    accent: 'teal',
    why: 'A comprehensive diagnostic of your entire fundraising package — deck, financials, data room, legal structure, and founder narrative — ensuring you present a watertight investment case before you approach a single investor.',
    whyHeading: 'The majority of failed raises are preventable with the right preparation.',
     pricing: [
      { tier: 'Diagnostic', price: '$3,200', sub: '2 weeks · Full report' },
      { tier: 'Diagnostic + Roadmap', price: '$5,800', sub: 'Adds 4 advisory hours' },
    ],
    whyPoints: [
      {
        title: 'Inconsistencies Are Investor Deal-Breakers',
        text: 'When your deck, model, and data room tell different stories, investors lose trust before they even ask a question. Consistency is non-negotiable.',
      },
      {
        title: 'Missing Materials Stall Momentum',
        text: 'Diligence that pauses for missing documents is diligence that quietly dies. Preparedness is what keeps a process moving.',
      },
      {
        title: 'Hard Questions Will Come — Are You Ready?',
        text: 'Founders who can answer the hardest questions cleanly are the ones who close. Readiness Review prepares you for every angle.',
      },
    ],
    deliverHeading: 'A complete audit of your fundraising readiness across six dimensions.',
    deliver: [
      { title: 'Pitch Deck Audit', text: 'Narrative clarity, story structure, investor-appropriateness, and slide-by-slide gap analysis against your target investor profile.' },
      { title: 'Financial Package Review', text: 'Financial model integrity, unit economics strength, projection credibility, and consistency between your deck and your model.' },
      { title: 'Data Room Assessment', text: "Completeness and organisation of your data room against institutional due diligence standards with a detailed checklist of what's missing." },
      { title: 'Legal & Corporate Structure', text: 'Cap table, share structure, IP assignments, and material contracts reviewed for any flag that could complicate or delay a round.' },
      { title: 'Gap Analysis Report', text: 'A prioritised gap-analysis report showing what is investor-ready, what needs work, and what is high-risk before any meetings.' },
      { title: 'Mock Investor Session', text: 'A simulated investor Q&A session designed to surface weaknesses in your story, your numbers, and your readiness — before the real thing.' },
    ],
    process: [
      { step: 'Materials Collection', day: 'Day 1–2', text: 'You share your deck, financial model, data room, cap table, and key documents. NDAs in place from day one.' },
      { step: 'Structured Review (6 Dimensions)', day: 'Day 3–8', text: 'Senior review across the six readiness dimensions, with weighted scoring and risk flags surfaced.' },
      { step: 'Gap Analysis & Action Plan', day: 'Day 9–10', text: 'A written gap-analysis report with prioritised actions and clear sequencing — what to fix first, and how.' },
      { step: 'Debrief & Roadmap Session', day: 'Day 11', text: 'A 60-minute working session walking through every finding and confirming the action plan with the founding team.' },
    ],
    pricingNote: STANDARD_PRICING_NOTE,
    finalCta: {
      title: 'Ready Before You Walk in the Room?',
      description: 'Run the diagnostic before you approach a single investor. Two weeks could save you a quarter of lost momentum.',
      cta: { label: 'Get Started', to: '/contact' },
    },
    faqs: [
      { q: 'How is this different from just reviewing my pitch deck?', a: 'Pitch Deck Review focuses on the deck. Investment Readiness is a full-package audit — deck, model, data room, legal, narrative — all in one engagement.' },
      { q: "What if I don't have all my materials ready yet?", a: 'That is exactly when this engagement is most valuable. We will work with what you have and tell you precisely what to build before going out.' },
      { q: 'Do you help fix the gaps you identify, or just flag them?', a: 'Both. The diagnostic surfaces gaps. We can remediate the highest-risk items directly via our other services or as ad-hoc advisory.' },
      { q: 'Is this appropriate for first-time founders?', a: 'Especially for first-time founders. The diagnostic gives you a clear, written roadmap to investor-ready, with no guesswork.' },
      { q: 'Can accelerators use this as a pre-demo-day program?', a: 'Yes. We run cohort-format Investment Readiness diagnostics for several accelerator partners across North America and Europe.' },
    ],
  },
  {
    slug: 'ama-sessions',
    title: 'AMA Sessions',
    tagline: "Ask the questions you can't afford to get wrong.",
    accent: 'yellow',
    why: 'Structured one-on-one advisory sessions with experienced venture investors and startup operators. Bring any challenge, any question — and get direct, unfiltered answers from people who have lived the fundraising journey from both sides of the table.',
    whyHeading: "Sometimes you don't need a full engagement. You need one hour with the right person.",
     pricing: [
      { tier: 'Single Session', price: '$650', sub: '60 min · Notes included' },
      { tier: 'Pack of 4', price: '$2,200', sub: 'Use within 90 days' },
    ],
    whyPoints: [
      {
        title: 'Generic Advice Is Everywhere — Specific Advice Is Rare',
        text: 'Blog posts and articles give you frameworks. An AMA session gives you advice calibrated to your stage, your team, and your specific situation.',
      },
      {
        title: "The Questions You Don't Know to Ask Are the Most Dangerous",
        text: 'Experienced investors surface the risks and decisions you would not have spotted yourself. Outside perspective changes outcomes.',
      },
      {
        title: 'Fast Access to Expertise Changes Outcomes',
        text: 'Founders who get the right feedback before a critical decision close better rounds, sign better terms, and avoid avoidable mistakes.',
      },
    ],
    deliverHeading: 'Direct, actionable answers from experienced operators and investors.',
    deliver: [
      { title: 'Investor-Perspective Feedback', text: 'Our advisors have evaluated hundreds of deals from the investor seat. They tell you what a VC is actually thinking — not what you want to hear.' },
      { title: 'Fundraise Strategy Guidance', text: "Round sizing, valuation anchoring, sequencing, timing, term sheet navigation — whatever aspect of your fundraise you're wrestling with." },
      { title: 'Pitch and Narrative Coaching', text: "Real-time feedback on how you're presenting your story — what's working, what's confusing, what's losing investor attention." },
      { title: 'Materials Spot Review', text: 'Share a specific slide, a financial assumption, or a section of your deck and get direct feedback in the session.' },
      { title: 'Investor Relationship Advice', text: "Navigating specific investor dynamics, follow-up strategy, managing multiple processes simultaneously — we've been in these situations." },
      { title: 'Next-Day Session Notes', text: 'Written summary of key discussion points and recommended next steps delivered the following business day.' },
    ],
    process: [
      { step: 'Pre-Session Brief', day: '24h before', text: 'You share a short brief on your situation, the questions you want to cover, and any materials for review.' },
      { step: 'Structured 60-Minute Session', day: 'Session day', text: 'A focused working session with a senior partner — direct answers, no fluff, calibrated to your specific situation.' },
      { step: 'Session Notes & Action Items', day: 'Next business day', text: 'Written summary of key discussion points, recommended next steps, and any open questions to track.' },
      { step: 'Follow-Up Window', day: '14 days after', text: 'Async follow-up access for 14 days to clarify any question that emerges as you start implementing.' },
    ],
    pricingNote: STANDARD_PRICING_NOTE,
    finalCta: {
      title: 'Ready to Get the Answer You Need?',
      description: 'Book a single AMA session or a pack of four. Both start with a free 15-minute fit call.',
      cta: { label: 'Book a Session', to: '/contact' },
    },
    faqs: [
      { q: 'What kinds of questions are best suited for an AMA session?', a: 'Anything tactical and time-sensitive: round sizing, term sheet review, valuation anchoring, investor relationship dynamics, deck or model spot-review.' },
      { q: 'Do I need to have a specific problem, or can I use it more generally?', a: 'Both work. Many founders use AMA for a specific decision; others book a pack of four to use across a quarter as questions arise.' },
      { q: 'How quickly can I book a session?', a: 'Standard availability is within 5 business days. Same-week and next-day availability is often possible for time-sensitive situations.' },
      { q: 'Who specifically will I be talking to?', a: 'A senior partner with direct VC and operator experience — not a generalist advisor.' },
      { q: 'Can I share materials in advance for the advisor to review?', a: 'Yes. Sharing materials 24 hours in advance lets us prepare and makes the session more productive.' },
      { q: 'Is this confidential?', a: 'Absolutely. Mutual NDAs are standard. Nothing discussed in the session is shared outside the engagement.' },
    ],
  },
];

export const ARTICLES = [
  {
    slug: 'ten-things-investors-look-for',
    category: 'Pitch Deck',
    readTime: '8 min read',
    date: 'April 12, 2026',
    title:
      'The 10 Things Every Investor Looks for in a Pitch Deck (and Where Most Founders Fall Short)',
    excerpt:
      'After evaluating thousands of early-stage decks, patterns emerge quickly. Here are the exact criteria institutional investors apply and the most common places founders lose the room.',
    accent: 'yellow',
  },
  {
    slug: 'why-financial-model-rejected',
    category: 'Financial Model',
    readTime: '7 min read',
    date: 'March 28, 2026',
    title: 'Why Your Financial Model Gets Rejected (Even When the Business is Strong)',
    excerpt:
      "A weak financial model doesn't just lose you credibility on the numbers — it signals a fundamental gap in how a founder understands their own business. Here's how to fix it before you walk into a meeting.",
    accent: 'turquoise',
  },
  {
    slug: 'anchor-pre-money-valuation',
    category: 'Valuation',
    readTime: '6 min read',
    date: 'March 14, 2026',
    title: 'How to Anchor Your Pre-Money Valuation Without Guessing',
    excerpt:
      'Early-stage valuation is part analysis, part negotiation, and part conviction. Here is the framework we use to triangulate a defensible number.',
    accent: 'teal',
  },
];

export const FEATURED_DOWNLOADS = [
  {
    label: 'Spreadsheet template',
    title: 'Investor-Grade Financial Model',
    cta: 'Download (Google Sheets)',
    accent: 'yellow',
  },
  {
    label: 'Slide template',
    title: 'Pitch Deck Skeleton',
    cta: 'Download (Google Slides)',
    accent: 'turquoise',
  },
   {
    label: 'Finance',
    title: 'Burn Runaway Modeler',
    cta: 'Plug in your expense and MRR, see your runway instantly.Know when to fundraise before its too late.',
    accent: 'turquoise',
    route:'/burnrunway',
  }, {
    label: 'Growth',
    title: 'Revenue Projector',
    cta: 'Model month-on-month growth scenerio.Bull,bear and base cases.',
    accent: 'yellow',
    route: '/revenueprojector',
  }, {
    label: 'Fundraising',
    title: 'SAFE dilution Modeler',
    cta: 'Stack multiple SAFE rounds, see dilution impact before your priced round. Know what you are giving away before you sign the term sheet. ',
    accent: 'yellow',
    route: '/safedilution',
  },
];

export const INVESTOR_PIPELINE_CTA = {
  title: 'Start Building Your Investor Pipeline.',
  description:
    "Let's map your investor universe and build an outreach strategy designed to convert.",
  cta: { label: 'Book a Free Strategy Call', to: '/contact' },
  note: 'No obligation. 30 minutes. All new engagements start here.',
};

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));
