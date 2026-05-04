// Content sourced from the AMG Venture Partners PDF brief.

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Founder Services', to: '/founder-services' },
 // { label: 'Pricing', to: '/pricing' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
  {label:'About Us', to: '/about'},
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
  eyebrow: 'Our Process',
  description:
    'A structured engagement designed to be efficient, collaborative, and output-driven — no bureaucracy, no back-and-forth chaos.',
};

const STANDARD_PRICING_NOTE = {
  eyebrow: 'Pricing',
  title: 'Transparent, Flat-Fee Pricing',
  description: 'No hourly surprises. Every engagement is scoped, priced, and agreed upon before we start.',
};

const PITCH_DECK_REVIEW_PRICING = [
  {
    tier: 'Written Review',
    price: '$650',
    sub: 'Async written feedback you can action and self-direct revisions from.',
    popular: false,
    features: [
      'Slide-by-slide annotated feedback',
      'Red & green flag analysis',
      'Market and competitive assessment',
      'Written summary report',
      'Metrics follow-up call',
    ],
    cta: 'Get Started',
  },
  {
    tier: 'Full Review + Expert',
    price: '$1,100',
    sub: 'The complete review experience — written analysis plus a live 60-minute session to align on your revision roadmap.',
    popular: true,
    features: [
      'Everything in Written Review',
      'Investor Q&A anticipation notes',
      'Traction and team section deep dive',
      '60-min live debrief call',
      'Revision prioritisation roadmap',
      '14-day post-debrief email Q&A',
    ],
    cta: 'Get Started',
  },
  {
    tier: 'Concierge Review',
    price: 'Custom',
    sub: 'For founders who want an active, senior day-to-day co-pilot on investment readiness and fundraising readiness.',
    popular: false,
    features: [
      'Structured evaluation calls',
      'Iterative pricing (per deck)',
      'Current-raise competitive insights',
      'Dedicated founder debrief sessions',
      'Demo day presentation recommendation',
      'Dedicated account coordinator',
    ],
    cta: 'Get Started',
  },
];

const PITCH_DECK_REVIEW_INCLUDES = [
  'Intake questionnaire and context review',
  'Slide-by-slide annotated feedback (every slide)',
  'Narrative flow and story arc assessment',
  'Market sizing logic and credibility review',
  'Competitive landscape framing analysis',
  'Traction and proof-point strength assessment',
  'Team narrative review',
  'Financial slide and ask review',
  'Red flag identification (investor deal-breakers)',
  'Investor Q&A anticipation notes (likely questions from your deck)',
  'Executive summary, top 3 strengths and top 3 critical improvements',
  '80-min live debrief call with walkthrough',
  'Post-call email with revision prioritisation list',
];

export const SERVICES = [
  {
    slug: 'pitch-deck-review',
    introTitle: 'Pitch Deck Review',
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
        text: 'You get one shot with investors.If your deck doesn’t click in the first 20 seconds, the meeting evaporates.Your pitch deck needs to be clear, compelling, and investor-ready',
      },
    ],
     pricing: PITCH_DECK_REVIEW_PRICING,
    whatsIncluded: PITCH_DECK_REVIEW_INCLUDES,
    deliverHeading: 'Investor-grade feedback that tells you exactly what to fix and why.',
   deliver: [
  {
    title: 'Investor-Readiness Score',
    text: 'A single score out of 10 reflecting how a Seed–Series B partner would actually rate your deck. Indicates whether you are ready for outreach today, in weeks, or in months.'
  },
  {
    title: 'Scoring Summary (11 Dimensions)',
    text: 'Independent scoring across narrative, market, solution, business model, go-to-market, traction, competition, team, financials, and design. Color-coded to highlight strengths and risk areas instantly.'
  },
  {
    title: 'Slide-by-Slide Feedback',
    text: 'Every slide reviewed with score, strengths, investor concerns, and concrete rewrite suggestions. No generic advice — only actionable edits you can implement immediately.'
  },
  {
    title: 'What’s Missing',
    text: 'Identification of missing but critical slides such as competition, unit economics, use of funds, and risk mitigation — tailored to your stage and sector.'
  },
  {
    title: 'Recommended Slide Order',
    text: 'A restructured 13–16 slide flow aligned with investor expectations and your business model, ensuring narrative clarity and logical progression.'
  },
  {
    title: 'Prioritized Action Plan',
    text: 'A sequenced 10–14 day rebuild roadmap ranked by impact, helping you improve investor readiness efficiently with the highest ROI changes first.'
  }
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
    introTitle: 'Pitch Deck Creation',
    title: 'Pitch Deck Creation',
    tagline: 'Your story, told with clarity and conviction.',
    accent: 'turquoise',
    why: 'We build investor-grade pitch decks from the ground up — crafting the narrative architecture, structuring each slide for maximum impact, and delivering a polished presentation that opens doors and moves investors to act.',
    whyHeading: 'Most pitch decks fail before a founder ever steps into the room.',
    pricing: [
      {
        tier: 'Startup & Copy',
        price: '$1,800',
        sub: 'For founders who need the story structured and the slides written — design not included.',
        popular: false,
        features: [
          'Founder discovery session',
          'Narrative architecture doc',
          'Slide-by-slide copy writing',
          'Investor-tailored messaging',
          '2 revision rounds',
          'File delivery (editable)',
        ],
        cta: 'Get Started',
      },
      {
        tier: 'Full Deck',
        price: '$3,500',
        sub: 'The complete pitch deck experience — story, copy, design, and presentation coaching.',
        popular: true,
        features: [
          'Everything in Startup & Copy',
          'Custom slide visualisations and brand',
          'Market sizing and competitive landscape',
          'You full rounds of revision based on your feedback',
          'Editable PowerPoint file (fully yours to update)',
          'Live walkthrough session (60 min)',
        ],
        cta: 'Get Started',
      },
      {
        tier: 'Concierge / Custom',
        price: 'Custom',
        sub: 'For founders building to raise across multiple rounds, access to our senior advisory network.',
        popular: false,
        features: [
          'Iterative pricing',
          'Unlimited revisions (per deck)',
          'Current-raise competitive insights',
          'Senior day-to-day advisory',
          'Demo day presentation coaching',
          'Dedicated account coordinator',
        ],
        cta: 'Get Started',
      },
    ],
    whatsIncluded: [
      'Full 90-min investor discovery session',
      'Slide-by-slide copy and messaging development',
      'Narrative one-page pitch outline',
      'Presentation-ready PDF export',
      'We conduct founder discovery sessions',
      'Custom slide visualisations and brand elements',
      'Market sizing and competitive landscape framing',
      'You full rounds of revision based on your feedback',
      'Narrative architecture across your story',
      'Investor profile messaging customisation',
      'Editable PowerPoint file (fully yours to update)',
      'Live walkthrough session (60 min)',
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
  {
    step: 'Founder Discovery Session',
    day: 'Day 1',
    text: 'A 90-minute deep-dive interview to extract your story — the problem, the solution, the market insight, the traction, the team, and your vision for the company.',
    output: 'Discovery brief and initial story hypotheses'
  },
  {
    step: 'Narrative Architecture',
    day: 'Day 2–3',
    text: 'We design the logical flow of your deck — slide sequence, key messages per slide, and the overall investment argument. You review and align before we build.',
    output: 'Slide-by-slide outline and narrative map'
  },
  {
    step: 'First Draft Development',
    day: 'Day 4–8',
    text: 'We develop the full deck: copy, charts, data visualizations, and visual design. Every slide is built for investor comprehension, not internal reporting.',
    output: 'First full draft (12–15 slides)'
  },
  {
    step: 'Revision Rounds',
    day: 'Day 9–13',
    text: 'Two complete revision rounds based on your feedback, ensuring the deck reflects your voice, your vision, and is investor-ready at every slide.',
    output: 'Revised and refined deck'
  },
  {
    step: 'Final Delivery & Walkthrough',
    day: 'Day 14',
    text: 'Final deck delivered in editable PowerPoint and presentation-ready PDF. Live 60-minute walkthrough session covering how to present and defend each section.',
    output: 'Final deck + presentation coaching session'
  },
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
    introTitle: 'Financial Model',
    title: 'Financial Model',
    tagline: 'Numbers that tell a story investors trust.',
    accent: 'teal',
    why: 'We build rigorous, investor-grade financial models from scratch — structured around how your business actually operates, with explicit assumptions investors can interrogate and scenarios that hold up under diligence.',
    whyHeading: 'Investors trust the model that survives scrutiny — not the spreadsheet that hides it.',
    pricing: [
      {
        tier: 'Starter',
        price: '$1,500',
        sub: 'For pre-revenue founders who need a clean model to anchor their raise.',
        popular: false,
        features: [
          '3-statement integrated model',
          'Driver-based revenue model',
          'Basic unit economics',
          'KPI summary dashboard',
          '2 revision rounds',
          'Live walkthrough session',
        ],
        cta: 'Get Started',
      },
      {
        tier: 'Full Model',
        price: '$2,800',
        sub: 'The complete financial model experience — bottom-up build, investor-grade unit economics, and a live debrief for due diligence.',
        popular: true,
        features: [
          'Everything in Starter',
          'Driver-based cohort and unit analysis',
          'Scenario analysis dashboard',
          'Sensitivity analysis dashboard',
          'Investor-profile scenario modelling',
          'Flat model review',
          'Live model walkthrough session',
          '30-day post-debrief email support',
        ],
        cta: 'Get Started',
      },
      {
        tier: 'Enterprise',
        price: 'Custom',
        sub: 'For complex businesses, multi-product scenarios, or those raising to institutional investors.',
        popular: false,
        features: [
          'Anything in Starter',
          'Multi-product / segment modelling',
          'Investor debt add-ins',
          'Ongoing model maintenance',
          'Board reporting support',
          'Priority turnaround',
        ],
        cta: 'Get Started',
      },
    ],
    whatsIncluded: [
      'Fully integrated 3-statement model (P&L, balance sheet, cash flow)',
      'Unit economics: LTV/CAC, payback period, gross margin by cohort',
      'Sensitivity analysis on key revenue and cost drivers',
      'Live model walkthrough session (60 min)',
      'Driver-based revenue model with your actual growth mechanics',
      'Base, best and worst case scenario analysis with driver toggles',
      'Capex requirements and fundraising schedule modelling',
      'Update support through closure (60 days)',
      'Hiring plan and headcount build (by role and timing)',
      'Executive-level 1-through summary (your profitability)',
      '30-day post-delivery Q&A support (email)',
    ],
    whyPoints: [
      {
        title: 'Investors Will Challenge Every Assumption',
        text: 'VCs and angels dont just glance at your revenue projections — they dissect them. A model built on weak logic or missing drivers will collapse under even basic questions.',
      },
      {
        title: 'A Bad Model Destroys Credibility',
        text: 'If you can\'t explain where your numbers come from, investors lose confidence in you as a business leader. The model reflects your strategic clarity.',
      },
      {
        title: 'You Need It Before You Walk In the Room',
        text: 'Most founders start building the model too late. By the time you\'re in investor meetings, your financials need to be airtight, not a work in progress.',
      },
    ],
    deliverHeading: 'An investor-ready financial model built on the logic of your actual business.',
    deliver: [
  { 
    title: '3-Statement Model', 
    text: 'Fully integrated P&L, balance sheet, and cash flow statement with all supporting schedules tied together dynamically.' 
  },
  { 
    title: 'Revenue Build', 
    text: 'Granular, driver-based revenue model built around your actual growth levers — pricing, volume, cohorts, channels, or contracts.' 
  },
  { 
    title: 'Unit Economics', 
    text: 'CAC, LTV, payback period, gross margin by cohort — the metrics investors will ask about, modeled with precision.' 
  },
  { 
    title: 'Headcount Planning', 
    text: 'Bottom-up hiring plan tied to revenue milestones, with salary bands, timing, and the resulting cost structure.' 
  },
  { 
    title: 'Scenario Analysis', 
    text: 'Base, bull, and bear cases that reflect genuine business risk and opportunity — not just ±10% on a single revenue line.' 
  },
  { 
    title: 'KPI Dashboard', 
    text: 'A clean investor-facing summary: MRR/ARR, burn, runway, CAC, LTV, gross margin — all in one view.' 
  }
],
    process: [
      { step: 'Business Model Deep Dive', day: 'Day 1–2', text: 'We map your business drivers, pricing mechanics, acquisition channels, and cost structure to ensure the model reflects how your business actually works.', output: 'Driver mapping and model architecture doc' },
      { step: 'Model Architecture & Build', day: 'Day 3–7', text: 'We construct the full bottom-up model with all supporting schedules, revenue build, unit costs, capex, headcount, and financing assumptions.', output: 'Working and functional model' },
      { step: 'Scenario Analysis', day: 'Day 8–12', text: 'We build best, base, and worst-case scenarios tied to specific operating levers — pricing, volume, growth assumptions.', output: 'Scenario toggle dashboard' },
      { step: 'Review & Refinement', day: 'Day 13–14', text: 'We review the model with you, discussion assumptions and any needed refinements. Test edge-cases, validate logic.', output: 'Final refined model review' },
      { step: 'Walkthrough & Handoff', day: 'Day 15–16', text: 'Final live walkthrough of all model assumptions so you can speak to every number in investor meetings. Full handoff with documentation.', output: 'Model handover documentation and commentary' },
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
  introTitle: 'Valuation',
  title: 'Valuation',
  tagline: 'Know what your startup is worth — before you walk into the room.',
  accent: 'yellow',

  why: 'A defensible, investor-ready pre-money valuation built on five industry-standard methods, real precedent transactions, and the same data sources VCs use. Delivered in 5 business days.',
  
  whyHeading: 'Most founders lose leverage before the negotiation even begins.',

  pricing: [
    {
      tier: 'Essential',
      price: '$1,950',
      sub: 'For Idea or Development-stage startups, pre-revenue or under $250K ARR.',
      popular: false,
      features: [
        'All 5 methods + BVM triangulation',
        'Excel calculator + PDF report',
        '30-min walkthrough call',
        '14-day delivery',
      ],
      cta: 'Get Started',
    },
    {
      tier: 'Standard',
      price: '$3,450',
      sub: 'For Startup or Expansion-stage companies, $250K–$3M ARR.',
      popular: true,
      features: [
        'Everything in Essential',
        '60-min walkthrough + scenario session',
        'Investor Defense Pack',
        '30-day email support',
        '7-day delivery',
      ],
      cta: 'Get Started',
    },
    {
      tier: 'Premium',
      price: '$6,950',
      sub: 'For Growth-stage companies, $3M+ ARR or complex cap tables.',
      popular: false,
      features: [
        'Everything in Standard',
        'Cap-table modeling + dilution waterfall',
        '90-min walkthrough + investor Q&A prep',
        'Two free re-runs (12 months)',
        '5-day delivery',
      ],
      cta: 'Get Started',
    },
  ],

  whatsIncluded: [
    'Scorecard, Checklist (Berkus), VC, DCF (LTG & Multiples) methods',
    'Precedent transaction analysis (5–10 comparable rounds)',
    'Pre-money valuation range (low / mid / high)',
    'Country, industry, and stage-specific benchmarks',
    'Excel valuation calculator (15 tabs, 296 formulas)',
    'Investor-ready valuation report (~25 pages)',
    'Sensitivity analysis and risk assessment',
    'Investor Q&A defense pack',
    '30-day post-delivery support',
  ],

  whyPoints: [
    {
      title: 'Anchors the Negotiation',
      text: 'With five methods and comparable transactions, you are no longer defending a number — you are explaining methodology.',
    },
    {
      title: 'Prevents Mispricing',
      text: 'Overpricing stalls rounds. Underpricing costs equity forever. A defensible valuation avoids both.',
    },
    {
      title: 'Survives Investor Diligence',
      text: 'Every number is sourced — Damodaran, Crunchbase, BLS — making your valuation audit-ready.',
    },
  ],

  deliverHeading: 'A defensible valuation built on real data — not guesswork.',

  deliver: [
    {
      title: 'Valuation Report (~25 pages)',
      text: 'Executive summary, valuation range, method-by-method breakdown, precedent transactions, sensitivity analysis, and full data appendix.',
    },
    {
      title: 'Excel Valuation Calculator',
      text: 'Fully formula-driven workbook with 15 tabs. Change inputs → valuation updates instantly. No hardcoded outputs.',
    },
    {
      title: 'Investor Defense Pack',
      text: '2-page summary + investor Q&A prep designed to shorten diligence and strengthen negotiation.',
    },
    {
      title: 'Five-Method Valuation',
      text: 'Scorecard, Checklist, VC, and two DCF approaches blended using stage-based weights.',
    },
    {
      title: 'Precedent Transactions',
      text: 'Real comparable funding rounds filtered by industry, geography, and stage.',
    },
    {
      title: 'Data-Backed Inputs',
      text: 'Parameters sourced from Damodaran, Crunchbase, Trading Economics, and global statistical datasets.',
    },
  ],

  process: [
    {
      step: 'Founder Intake',
      day: 'Day 1',
      text: 'Structured intake covering company profile, projections, and capital strategy.',
      output: 'Complete dataset and assumptions baseline',
    },
    {
      step: 'Market Research',
      day: 'Day 1–2',
      text: 'Load country, industry, and stage-specific parameters from global datasets.',
      output: 'Validated input parameters',
    },
    {
      step: 'Valuation Modelling',
      day: 'Day 2–4',
      text: 'Run all five valuation methods and triangulate against precedent transactions.',
      output: 'Low / mid / high valuation range',
    },
    {
      step: 'Delivery & Walkthrough',
      day: 'Day 5',
      text: 'Deliver report, Excel model, and conduct a full walkthrough.',
      output: 'Investor-ready valuation + founder clarity',
    },
  ],

  pricingNote: STANDARD_PRICING_NOTE,

  finalCta: {
    title: 'Ready to know what you’re worth?',
    description:
      'The next conversation you have with an investor will go better with a defensible number behind you.',
    cta: { label: 'Get Your Valuation', to: '/contact' },
  },

  faqs: [
    {
      q: 'Will investors accept this valuation?',
      a: 'Investors negotiate — but this shifts the conversation from numbers to assumptions.',
    },
    {
      q: 'Can pre-revenue startups be valued?',
      a: 'Yes. Qualitative methods dominate early-stage valuation and carry the most weight.',
    },
    {
      q: 'How long does it take?',
      a: '5–7 business days depending on the engagement tier.',
    },
    {
      q: 'Do you support multiple geographies?',
      a: 'Yes — US, UK, Canada, EU, India, and more with localized parameters.',
    },
  ],
},
  {
    slug: 'investor-outreach',
    introTitle: 'Investor Outreach',
    title: 'Investor Outreach',
    tagline: 'The right investor, at the right time.',
    accent: 'turquoise',
    why: 'Strategic, targeted investor outreach built on thesis alignment, stage fit, and sector expertise — paired with warm introductions from our established network across North America and Europe.',
    whyHeading: 'A sharp pipeline beats a broad blast every time.',
    pricing: [
      {
        tier: 'Targeting & Strategy',
        price: '$1,400',
        sub: 'For founders who need a curated target list and outreach strategy — execution not included.',
        popular: false,
        features: [
          'Curated long list (50–75 firms), prioritised by fit',
          'Fund summary doc (for each 5)',
          'Tier segmentation (priority / secondary / long-list)',
          'Personalised email sequences (3 emails per investor)',
          'Warm introduction (3 per week)',
          '60-min strategy session',
        ],
        cta: 'Get Started',
      },
      {
        tier: 'Full Outreach Program',
        price: '$3,000',
        sub: 'The complete investor outreach — from targeting to introductions to pipeline management.',
        popular: true,
        features: [
          'Everything in Targeting & Strategy',
          'Full investor long-list (75–150 investors)',
          'Warm introductions via our network',
          'Personalised email sequences for each investor',
          'Personalised social outreach (LinkedIn + email)',
          'Campaign launch and co-ordination',
          'Pipeline launch and 180 responses',
          'In-week pipeline management and investor co-ordination',
          'Weekly status report and action alignment',
          'Post-closing follow-up and close-out report',
        ],
        cta: 'Get Started',
      },
      {
        tier: 'Dedicated Program',
        price: 'Custom',
        sub: 'For founders who want an active, senior day-to-day co-pilot on investor relations for the full raise.',
        popular: false,
        features: [
          'Content investor mapping',
          'Daily/weekly investor tracking and management',
          'Warm intro, multiple rounds',
          'Investor deck review',
          'Contact investor, multiple sectors',
          'Investor relationship management',
          'Post-close follow-up and close-out',
          'Priority response within 24 hours',
        ],
        cta: 'Get Started',
      },
    ],
    whatsIncluded: [
      'Curated long list (up to 150 firms) reviewed against your stage, sector, geography',
      'Tier segmentation (priority / secondary / long-list)',
      'Introduction pathway: introduction route vs. cold outreach',
      'Investor one-pager / teaser format (used for outreach)',
      'Personalised email sequences for each investor',
      'Warm network via our North America and Europe connections',
      'Outreach launch coordination (100M+ investors)',
      'Investor one-page / teaser newsletter for outreach',
      'Follow-up cadence management (each 1-week per campaign)',
      'Weekly pipeline status report and action alignment',
      'Post-meeting material and ideas (and quick questions)',
      'Post-closing follow-up and investor feedback synthesis',
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
      { step: 'Investors Targeting & Research', day: 'Day 1–5', text: 'We build a curated, scored investor long-list (50–150 firms). We segment by tier: thesis fit, stage, geography, and likely relationship to introduction.', output: 'Target investor long-list and tier segmentation document' },
      { step: 'Outreach Strategy Design', day: 'Day 6–7', text: 'We design full outreach methodology, timing, and approach. We write and customise outreach copy, personalise for each firm type, and align on campaign launch date.', output: 'Themed outreach strategy document' },
      { step: 'Materials Development', day: 'Day 8–10', text: 'We develop all investor-facing materials for the campaign: one-pager, teaser email, subject lines for each firm type. All materials are reviewed by our team before launch.', output: 'Three investor outreach materials (per target)' },
      { step: 'Introductions & Campaign Launch', day: 'Day 11–15', text: 'We launch the outreach and pipeline tracking. We start introductions via our network, followed by personalised email sequences for each firm.', output: 'Active pipeline with weekly reporting and actions aligned' },
      { step: 'Pipeline Management & Follow-Up', day: 'Ongoing (4–8 weeks)', text: 'We track your investor pipeline, manage follow-ups, and provide co-ordination support throughout the process. Weekly status reports and investor feedback aligned.', output: 'Weekly pipeline status report with each action co-ordinated' },
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
  introTitle: 'Investment Readiness Review',
  title: 'Investment Readiness Review & Fundraising Roadmap',
  tagline: 'Identify gaps before investors do.',
  accent: 'teal',

  why: 'A comprehensive diagnostic of your entire fundraising package — deck, financials, data room, legal structure, and founder narrative — ensuring you present a watertight investment case before approaching investors.',

  whyHeading: 'The majority of failed raises are preventable with the right preparation.',

  pricing: [
    {
      tier: 'Essentials Audit',
      price: '$1,500',
      sub: 'For founders who need a fast diagnostic of their core materials before approaching investors.',
      popular: false,
      features: [
        'Pitch deck gap analysis',
        'Financial package review',
        'Written findings report',
        'Top priority action items',
        'Key risk identification',
        '60-min debrief call',
      ],
      cta: 'Get Started',
    },
    {
      tier: 'Full Readiness',
      price: '$3,200',
      sub: 'Complete investment readiness diagnostic for founders preparing to launch their raise with confidence.',
      popular: true,
      features: [
        'Everything in Essentials Audit',
        'Data room completeness audit',
        'Cap table and legal structure review',
        '6-dimension gap analysis framework',
        'Prioritised action plan (investor-impact scoring)',
        'Mock investor Q&A session (60 min)',
        '30-day support window',
      ],
      cta: 'Get Started',
    },
    {
      tier: 'Cohort Program',
      price: 'Custom',
      sub: 'For accelerators running readiness diagnostics across a full cohort before demo day.',
      popular: false,
      features: [
        'Cohort-wide readiness diagnostics',
        'Benchmarking across startups',
        'Risk flagging across cohort',
        'Structured reporting for program teams',
        'Data aggregation and insights',
        'Priority response within 24 hours',
      ],
      cta: 'Get Started',
    },
  ],

  whatsIncluded: [
    'Full fundraising materials review (deck, financials, data room, cap table)',
    'Pitch deck audit (narrative, clarity, investor positioning)',
    'Financial model integrity and consistency review',
    'Data room completeness checklist',
    '6-dimension readiness scoring framework',
    'Prioritised action plan (30-day roadmap)',
    '60-min debrief session',
    'Mock investor Q&A session',
    'Written gap analysis report (PDF)',
    'Follow-up action summary email',
    'Post-improvement check-in review',
  ],

  whyPoints: [
    {
      title: 'Inconsistencies Are Investor Deal-Breakers',
      text: 'When your deck, model, and data room tell different stories, investor trust breaks instantly. Consistency is non-negotiable.',
    },
    {
      title: 'Missing Materials Stall Momentum',
      text: 'Incomplete data rooms delay diligence and slow down fundraising. Prepared founders move faster.',
    },
    {
      title: 'Hard Questions Will Come — Are You Ready?',
      text: 'The strongest founders are those who can answer investor questions clearly and confidently. Preparation determines outcomes.',
    },
  ],

  deliverHeading: 'A complete audit of your fundraising readiness across six dimensions.',

  deliver: [
    {
      title: 'Pitch Deck Audit',
      text: 'Narrative clarity, structure, investor messaging, and slide-by-slide gap analysis aligned with your target investor profile.',
    },
    {
      title: 'Financial Package Review',
      text: 'Model integrity, unit economics, projection credibility, and consistency with your narrative.',
    },
    {
      title: 'Data Room Assessment',
      text: 'Completeness and organisation of your data room against institutional due diligence standards.',
    },
    {
      title: 'Legal & Corporate Structure',
      text: 'Cap table, share structure, and documentation reviewed for risks that could delay or derail a round.',
    },
    {
      title: 'Gap Analysis Report',
      text: 'Clear identification of what is ready, what needs improvement, and what is high-risk before investor meetings.',
    },
    {
      title: 'Mock Investor Session',
      text: 'Simulated investor Q&A designed to stress-test your narrative, numbers, and positioning.',
    },
  ],

  process: [
    {
      step: 'Materials Collection',
      day: 'Day 1–2',
      text: 'You share your deck, financial model, data room, and key documents. NDAs in place from day one.',
      output: 'Structured document set and review checklist',
    },
    {
      step: 'Structured Review (6 Dimensions)',
      day: 'Day 3–8',
      text: 'Systematic evaluation across narrative, financials, data room, legal, team, and investor positioning.',
      output: 'Dimension-by-dimension readiness analysis',
    },
    {
      step: 'Gap Analysis & Action Plan',
      day: 'Day 9–10',
      text: 'We identify gaps and prioritise improvements based on investor impact.',
      output: 'Prioritised action plan (PDF)',
    },
    {
      step: 'Debrief & Roadmap Session',
      day: 'Day 11',
      text: '60-minute walkthrough of findings, implications, and execution roadmap.',
      output: 'Aligned roadmap and next steps',
    },
    {
      step: 'Mock Investor Q&A',
      day: 'Day 14',
      text: 'Simulated investor session using the toughest likely questions.',
      output: 'Q&A preparation document',
    },
    {
      step: 'Post-Improvement Check-In',
      day: 'Day 30 (Post)',
      text: 'Final review after improvements to confirm investor readiness.',
      output: 'Final readiness confirmation',
    },
  ],

  pricingNote: STANDARD_PRICING_NOTE,

  finalCta: {
    title: 'Ready Before You Walk in the Room?',
    description: 'Run the diagnostic before approaching investors. Two weeks of preparation can save months of lost momentum.',
    cta: { label: 'Get Started', to: '/contact' },
  },

  faqs: [
    {
      q: 'How is this different from a pitch deck review?',
      a: 'Pitch Deck Review focuses on the deck. Investment Readiness evaluates your entire fundraising stack — deck, financials, data room, and narrative.',
    },
    {
      q: "What if I don't have all materials ready?",
      a: 'That is exactly when this is most useful. We help you identify what is missing and what needs to be built.',
    },
    {
      q: 'Do you help fix the gaps?',
      a: 'Yes — we identify gaps and can support remediation through advisory or related services.',
    },
    {
      q: 'Is this suitable for first-time founders?',
      a: 'Yes — especially valuable for first-time founders navigating fundraising for the first time.',
    },
    {
      q: 'Can accelerators use this?',
      a: 'Yes — we run cohort-based readiness diagnostics for accelerator programs globally.',
    },
  ],
},
 {
  slug: 'ama-sessions',
  introTitle: 'AMA Sessions',
  title: 'AMA Sessions',
  tagline: "Ask the questions you can't afford to get wrong.",
  accent: 'yellow',

  why: 'Structured one-on-one advisory sessions with experienced venture investors and startup operators. Bring any challenge, any question — and get direct, unfiltered answers from people who have lived the fundraising journey from both sides of the table.',

  whyHeading: "Sometimes you don't need a full engagement. You need one hour with the right person.",

  whyPoints: [
    {
      title: 'Generic Advice Is Everywhere — Specific Advice Is Rare',
      text: 'Frameworks are abundant. Real, situation-specific advice is not. AMA sessions are tailored to your stage, team, and fundraising context.'
    },
    {
      title: "The Questions You Don't Know to Ask Are the Most Dangerous",
      text: 'Experienced investors surface blind spots, risks, and second-order effects you would not identify yourself.'
    },
    {
      title: 'Fast Access to Expertise Changes Outcomes',
      text: 'Getting the right answer at the right time improves decisions, accelerates fundraising, and prevents costly mistakes.'
    }
  ],

  deliverHeading: 'Direct, actionable answers from experienced operators and investors.',

  deliver: [
    {
      title: 'Investor-Perspective Feedback',
      text: 'Get direct insight into how investors actually evaluate your situation, your deck, and your strategy.'
    },
    {
      title: 'Fundraise Strategy Guidance',
      text: 'Round sizing, valuation anchoring, sequencing, timing, and term sheet navigation — tailored to your raise.'
    },
    {
      title: 'Pitch and Narrative Coaching',
      text: 'Real-time feedback on your story — what is landing, what is confusing, and where investor attention drops.'
    },
    {
      title: 'Materials Spot Review',
      text: 'Share specific slides, financial assumptions, or sections of your deck and get targeted feedback.'
    },
    {
      title: 'Investor Relationship Advice',
      text: 'Handling investor conversations, follow-ups, competing offers, and managing multiple processes simultaneously.'
    },
    {
      title: 'Next-Day Session Notes',
      text: 'Clear written summary of key discussion points and recommended next steps delivered the next business day.'
    }
  ],

  process: [
    {
      step: 'Pre-Session Brief',
      day: '24 hours before',
      text: 'You share context, key questions, and materials. We prepare specifically for your situation.',
      output: 'Prepared context and focused discussion plan'
    },
    {
      step: 'Structured 60-Minute Session',
      day: 'Session day',
      text: 'A focused working session addressing your highest priority questions and decisions.',
      output: 'Clear answers and immediate next steps'
    },
    {
      step: 'Session Notes & Action Items',
      day: 'Next business day',
      text: 'Written summary with key insights, recommendations, and follow-up actions.',
      output: 'Session summary (PDF)'
    },
    {
      step: '48-Hour Follow-Up Window',
      day: 'Post-session',
      text: 'Follow-up support for clarifications and immediate questions as you implement.',
      output: 'Clarifications and follow-up answers'
    }
  ],

  whatsIncluded: [
    'Pre-session context review (deck, model, or materials)',
    '60-minute live advisory session',
    'Real-time feedback and coaching',
    'Written session notes and action summary',
    '48-hour follow-up support window',
    'Optional session recording (on request)'
  ],

  pricing: [
    {
      tier: 'Single Session',
      price: '$450',
      sub: 'One focused advisory session on any pressing question or decision.',
      popular: false,
      features: [
        'Pre-session review',
        '60-minute advisory session',
        'Session notes',
        '48-hour follow-up',
        'Optional recording'
      ],
      cta: 'Get Started'
    },
    {
      tier: 'Session Bundle',
      price: '$1,100',
      sub: 'Three sessions across your fundraising journey.',
      popular: true,
      features: [
        'Everything in Single Session × 3',
        'Priority scheduling',
        'Session summaries',
        'Async email support between sessions',
        'Flexible usage across fundraise'
      ],
      cta: 'Get Started'
    },
    {
      tier: 'Monthly Advisory',
      price: '$1,800 / month',
      sub: 'Ongoing advisory support throughout your fundraise.',
      popular: false,
      features: [
        '4 sessions per month',
        'Unlimited async email access',
        'Material reviews',
        'Deal and term sheet support',
        'Priority response within 24 hours'
      ],
      cta: 'Get Started'
    }
  ],

  pricingNote: STANDARD_PRICING_NOTE,

  finalCta: {
    title: 'Ready to Get the Answer You Need?',
    description: 'Book a single AMA session or a bundle. Start with a free 15-minute fit call.',
    cta: {
      label: 'Book a Session',
      to: '/contact'
    }
  },

  faqs: [
    {
      q: 'What kinds of questions are best suited for an AMA session?',
      a: 'Tactical, time-sensitive questions — fundraising strategy, valuation, investor dynamics, pitch review, or decision-making.'
    },
    {
      q: 'Do I need a specific problem?',
      a: 'Not necessarily. Some founders come with one question, others use sessions as ongoing advisory support.'
    },
    {
      q: 'How quickly can I book?',
      a: 'Typically within 5 business days. Faster slots available for urgent needs.'
    },
    {
      q: 'Who will I speak with?',
      a: 'A senior partner with direct VC and operator experience.'
    },
    {
      q: 'Can I share materials in advance?',
      a: 'Yes — sharing materials 24 hours prior improves session quality significantly.'
    },
    {
      q: 'Is it confidential?',
      a: 'Yes. All sessions are strictly confidential, and NDAs can be signed if needed.'
    }
  ]
}
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