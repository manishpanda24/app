// Mock data for AMG Venture Partners frontend

export const NAV_LINKS = [
  { label: 'Founder Services', to: '/founder-services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
];

export const STATS = [
  { value: '125+', label: 'Founders Supported' },
  { value: '15+', label: 'Accelerator Partnerships' },
  { value: '120+', label: 'Programs Delivered' },
  { value: '$2B+', label: 'IPO / M&A Experience' },
];

export const SERVICE_PILLARS = [
  { title: 'Financial Models', desc: 'Investor-grade, defensible analysis.', accent: 'yellow' },
  { title: 'Pitch Decks', desc: 'Compelling, narrative-led storytelling.', accent: 'turquoise' },
  { title: 'Investor Network', desc: 'Warm intros across NA & Europe.', accent: 'teal' },
  { title: 'Valuation', desc: 'Comps, precedent transactions, DCF.', accent: 'yellow' },
];

export const SERVICES = [
  {
    slug: 'pitch-deck-review',
    title: 'Pitch Deck Review',
    tagline: 'Sharpen your story before you step into the room.',
    accent: 'yellow',
    why: 'A meticulous, investor-perspective critique of your existing pitch deck designed to identify narrative gaps, structural weaknesses, and missed opportunities before they cost you a term sheet.',
    pains: [
      'Founders rarely get honest feedback before they meet investors.',
      'Most rejections happen because of how a story is framed, not the business.',
      'Slide-by-slide gaps signal a lack of preparation to top-tier VCs.',
    ],
    deliver: [
      'Annotated slide-by-slide written feedback',
      'Narrative & structure recommendations',
      'Investor-perspective critique aligned to your stage',
      '60-min walkthrough call with action plan',
    ],
    process: [
      { step: 'Submit', text: 'Share your current deck and target investor profile.' },
      { step: 'Review', text: 'We critique the deck against institutional standards.' },
      { step: 'Walkthrough', text: 'Live 60-minute working session with founder.' },
      { step: 'Refine', text: 'You receive a written action document with revisions.' },
    ],
    included: [
      'Slide-by-slide annotated PDF',
      'Narrative architecture recommendations',
      'Traction & proof-point sharpening',
      'Founder Q&A simulation',
      '5-day turnaround standard',
    ],
    pricing: [
      { tier: 'Essential Review', price: '$1,500', sub: '5 business days · Written critique' },
      { tier: 'Founder Workshop', price: '$2,800', sub: '60-min live session + revisions' },
    ],
    faqs: [
      { q: 'Do you review decks for any stage?', a: 'Yes — Pre-Seed through Series A across most sectors.' },
      { q: 'How fast is turnaround?', a: 'Standard 5 business days. 48-hour rush available.' },
      { q: 'Do you sign NDAs?', a: 'Mutual NDAs are standard for every engagement.' },
    ],
  },
  {
    slug: 'pitch-deck-creation',
    title: 'Pitch Deck Creation',
    tagline: 'Your story, told with clarity and conviction.',
    accent: 'turquoise',
    why: 'We build investor-grade pitch decks from the ground up — crafting the narrative architecture, structuring each slide for maximum impact, and delivering a polished presentation that opens doors and moves investors to act.',
    pains: [
      'Most founder decks bury the insight under jargon.',
      'Inconsistent narrative between deck and conversation kills trust.',
      'Design alone never sells a round — story does.',
    ],
    deliver: [
      'Full 12–15 slide investor deck',
      'Narrative architecture document',
      'Editable PowerPoint + presentation PDF',
      'Live deck walkthrough & coaching session',
    ],
    process: [
      { step: 'Discovery', text: '90-min founder discovery session to extract the real story.' },
      { step: 'Architecture', text: 'We map narrative arc, slide structure & key proof points.' },
      { step: 'Design', text: 'Slides built, copy refined, visuals tested.' },
      { step: 'Coaching', text: 'Live walkthrough + presentation coaching.' },
    ],
    included: [
      '90-minute founder discovery session',
      'Slide-by-slide copy and messaging',
      'Narrative architecture document',
      'Traction and proof-point storytelling',
      'Market sizing & competitive framing',
      'Two full rounds of revisions',
      'Presentation-ready PDF + editable PPTX',
      '60-min live deck walkthrough',
    ],
    pricing: [
      { tier: 'Pre-Seed Deck', price: '$5,500', sub: '12 slides · 3 weeks · 2 revisions' },
      { tier: 'Seed / Series A', price: '$9,500', sub: '15 slides · 4 weeks · Coaching included' },
    ],
    faqs: [
      { q: 'Who writes the slides?', a: 'A senior partner leads the narrative; you co-create the story.' },
      { q: 'Do you do design?', a: 'Yes, polished investor-ready visual design is included.' },
      { q: 'What if I need updates later?', a: 'You receive the editable PPTX — fully yours.' },
    ],
  },
  {
    slug: 'financial-model',
    title: 'Financial Model',
    tagline: 'Numbers that tell a story investors trust.',
    accent: 'teal',
    why: 'We build rigorous, investor-grade financial models from scratch — structured around how your business actually operates, with explicit assumptions investors can interrogate and scenarios that hold up under diligence.',
    pains: [
      'Spreadsheet errors destroy investor confidence in seconds.',
      'Top-down forecasts get ignored by serious VCs.',
      'Bad unit economics signal a misunderstanding of your own business.',
    ],
    deliver: [
      'Bottoms-up 5-year financial model',
      'Driver-based revenue & cost structure',
      'Three scenarios: base / upside / downside',
      'Investor-ready summary + assumption deck',
    ],
    process: [
      { step: 'Discover', text: 'Map your business mechanics and key drivers.' },
      { step: 'Build', text: 'Construct model with auditable assumptions.' },
      { step: 'Stress', text: 'Run scenarios and sensitivity analysis.' },
      { step: 'Handoff', text: 'Editable model + walkthrough with founder.' },
    ],
    included: [
      'Excel / Google Sheets model (fully editable)',
      '5-year P&L, cash flow & balance sheet',
      'Cohort & unit economics module',
      'Hiring plan & runway calculator',
      'Scenario toggles (base / upside / downside)',
      'Assumption documentation',
      'Investor summary slide',
    ],
    pricing: [
      { tier: 'Pre-Revenue', price: '$4,500', sub: 'For pre-seed founders' },
      { tier: 'Revenue Stage', price: '$7,500', sub: 'For seed / Series A' },
    ],
    faqs: [
      { q: 'Do you build in Excel or Sheets?', a: 'Either — your preference.' },
      { q: 'Can investors audit it?', a: 'Yes, every assumption is explicit and traceable.' },
      { q: 'How long does it take?', a: '3–4 weeks depending on complexity.' },
    ],
  },
  {
    slug: 'valuation',
    title: 'Valuation',
    tagline: 'Know your worth and defend it.',
    accent: 'yellow',
    why: 'Defensible, market-grounded valuation analyses using the methodologies that institutional investors apply — comparable companies, precedent transactions, and DCF — calibrated to your stage, sector, and geography.',
    pains: [
      'Founders anchor valuations on hope, not evidence.',
      'Mispricing kills deals before term sheets land.',
      'Investors test your number; few founders are ready to defend it.',
    ],
    deliver: [
      'Comparable companies analysis',
      'Precedent transactions screen',
      'DCF with transparent assumptions',
      'Defensible valuation memo for investors',
    ],
    process: [
      { step: 'Scope', text: 'Define the right comp set and time window.' },
      { step: 'Analyse', text: 'Comps, precedents, and DCF triangulation.' },
      { step: 'Calibrate', text: 'Adjust for stage, geography & sector.' },
      { step: 'Defend', text: 'Equip you to answer every investor question.' },
    ],
    included: [
      'Trading comps analysis',
      'M&A precedent transactions',
      'DCF with sensitivities',
      'Pre-money / post-money waterfall',
      'Investor-facing valuation memo',
      'Founder defense playbook',
    ],
    pricing: [
      { tier: 'Valuation Memo', price: '$3,500', sub: '2 weeks · Comps + DCF' },
      { tier: 'Defense Package', price: '$6,000', sub: 'Adds founder coaching & live Q&A prep' },
    ],
    faqs: [
      { q: 'Will VCs accept your valuation?', a: 'They negotiate every number — but our memos hold up under diligence.' },
      { q: 'Do you cover all sectors?', a: 'SaaS, fintech, marketplaces, healthtech, deeptech, climate.' },
      { q: 'How fast?', a: 'Standard 2 weeks; rush available.' },
    ],
  },
  {
    slug: 'investor-outreach',
    title: 'Investor Outreach',
    tagline: 'The right investor, at the right time.',
    accent: 'turquoise',
    why: 'Strategic, targeted investor outreach built on thesis alignment, stage fit, and sector expertise — paired with warm introductions from our established network across North America and Europe.',
    pains: [
      'Spray-and-pray outreach burns your reputation.',
      'Cold emails from unknown founders rarely land meetings.',
      'Pipeline without thesis fit wastes founder time.',
    ],
    deliver: [
      'Curated investor universe (50–100 funds)',
      'Thesis-fit scoring for every target',
      'Warm introductions where relationships exist',
      'Outreach sequencing & messaging templates',
    ],
    process: [
      { step: 'Mapping', text: 'Identify investors by thesis, stage & geography.' },
      { step: 'Scoring', text: 'Rank by warmth, fit & conversion likelihood.' },
      { step: 'Outreach', text: 'Warm intros + sequenced cold outreach.' },
      { step: 'Manage', text: 'Pipeline tracking & follow-up cadence.' },
    ],
    included: [
      'Investor research dossier (50–100 funds)',
      'Tailored outreach copy per investor type',
      'Warm introduction routing where available',
      'CRM pipeline & weekly status updates',
      '8 weeks of active outreach',
    ],
    pricing: [
      { tier: 'Targeted Sprint', price: '$6,500', sub: '4 weeks · 30 investors' },
      { tier: 'Full Round', price: '$12,000', sub: '8 weeks · up to 80 investors' },
    ],
    faqs: [
      { q: 'Do you guarantee meetings?', a: 'No. We guarantee process quality and warm intros where relevant.' },
      { q: 'Can you raise the round for me?', a: 'No — only the founder can lead the round.' },
      { q: 'Geography coverage?', a: 'North America and Europe primarily.' },
    ],
  },
  {
    slug: 'investment-readiness',
    title: 'Investment Readiness',
    tagline: 'Identify gaps before investors do.',
    accent: 'teal',
    why: 'A comprehensive diagnostic of your entire fundraising package — deck, financials, data room, legal structure, and founder narrative — ensuring you present a watertight investment case before you approach a single investor.',
    pains: [
      'Founders enter the room before they are ready.',
      'A weak data room kills deals during diligence.',
      'Inconsistencies between deck and financials erode trust.',
    ],
    deliver: [
      'Pitch deck audit',
      'Financial package review',
      'Data room assessment',
      'Founder narrative & legal readiness review',
    ],
    process: [
      { step: 'Diagnose', text: 'Audit across 6 fundraising readiness dimensions.' },
      { step: 'Score', text: 'Weighted readiness score with risk callouts.' },
      { step: 'Prioritise', text: 'Action roadmap with sequencing.' },
      { step: 'Close gaps', text: 'Direct support to remediate the highest-risk items.' },
    ],
    included: [
      'Pitch deck gap analysis',
      'Financial model integrity review',
      'Data room completeness check',
      'Cap table & legal structure review',
      'Founder narrative coaching',
      'Readiness scorecard',
    ],
    pricing: [
      { tier: 'Diagnostic', price: '$3,200', sub: '2 weeks · Full report' },
      { tier: 'Diagnostic + Roadmap', price: '$5,800', sub: 'Adds 4 advisory hours' },
    ],
    faqs: [
      { q: 'How long does it take?', a: 'Standard 2 weeks for the diagnostic.' },
      { q: 'Do you fix the gaps too?', a: 'Yes, via our other services or as ad-hoc advisory.' },
      { q: 'Confidentiality?', a: 'Mutual NDA is the default before any engagement.' },
    ],
  },
  {
    slug: 'ama-sessions',
    title: 'AMA Sessions',
    tagline: 'Ask the questions you can\'t afford to get wrong.',
    accent: 'yellow',
    why: 'Structured one-on-one advisory sessions with experienced venture investors and startup operators. Bring any challenge, any question — and get direct, unfiltered answers from people who have lived the fundraising journey from both sides of the table.',
    pains: [
      'Founders make critical fundraising decisions in isolation.',
      'Most advisors give theory; founders need decisions.',
      'You only get one shot at the right investor — preparation matters.',
    ],
    deliver: [
      'Investor-perspective feedback',
      'Fundraise strategy guidance',
      'Pitch & narrative coaching',
      'Materials spot review',
      'Investor relationship advice',
      'Next-day session notes',
    ],
    process: [
      { step: 'Brief', text: 'Share your situation 24h before the session.' },
      { step: 'Session', text: '60-min structured working session.' },
      { step: 'Notes', text: 'Written summary delivered next business day.' },
      { step: 'Follow-up', text: 'Optional 30-min follow-up within 30 days.' },
    ],
    included: [
      '60-min structured 1:1 session',
      'Investor-perspective feedback',
      'Fundraise strategy guidance',
      'Real-time pitch coaching',
      'Spot review of any materials',
      'Next-day written notes',
    ],
    pricing: [
      { tier: 'Single Session', price: '$650', sub: '60 min · Notes included' },
      { tier: 'Pack of 4', price: '$2,200', sub: 'Use within 90 days' },
    ],
    faqs: [
      { q: 'Who runs the session?', a: 'A partner with direct VC and operator experience.' },
      { q: 'What can I bring?', a: 'Any question, slide, model, term sheet — anything.' },
      { q: 'Refunds?', a: 'Reschedule anytime up to 24h before.' },
    ],
  },
];

export const ARTICLES = [
  {
    slug: 'ten-things-investors-look-for',
    category: 'Pitch Deck',
    readTime: '8 min read',
    date: 'April 12, 2026',
    title: 'The 10 Things Every Investor Looks for in a Pitch Deck (and Where Most Founders Fall Short)',
    excerpt: 'After evaluating thousands of early-stage decks, patterns emerge quickly. Here are the exact criteria institutional investors apply and the most common places founders lose the room.',
    accent: 'yellow',
  },
  {
    slug: 'why-financial-model-rejected',
    category: 'Financial Model',
    readTime: '7 min read',
    date: 'March 28, 2026',
    title: 'Why Your Financial Model Gets Rejected (Even When the Business is Strong)',
    excerpt: 'A weak financial model doesn\'t just lose you credibility on the numbers — it signals a fundamental gap in how a founder understands their own business. Here\'s how to fix it before you walk into a meeting.',
    accent: 'turquoise',
  },
  {
    slug: 'anchor-pre-money-valuation',
    category: 'Valuation',
    readTime: '6 min read',
    date: 'March 14, 2026',
    title: 'How to Anchor Your Pre-Money Valuation Without Guessing',
    excerpt: 'Early-stage valuation is part analysis, part negotiation, and part conviction. Here is the framework we use to triangulate a defensible number.',
    accent: 'teal',
  },
  {
    slug: 'investor-outreach-playbook',
    category: 'Investor Outreach',
    readTime: '9 min read',
    date: 'February 27, 2026',
    title: 'The Investor Outreach Playbook: From Cold Email to Term Sheet',
    excerpt: 'A pragmatic, step-by-step outreach system used by founders who close their rounds in weeks — not quarters.',
    accent: 'yellow',
  },
  {
    slug: 'data-room-checklist',
    category: 'Investment Readiness',
    readTime: '5 min read',
    date: 'February 09, 2026',
    title: 'The Data Room Checklist Investors Actually Use',
    excerpt: 'A clear, opinionated checklist of what belongs in your data room — and what to leave out — calibrated to seed and Series A diligence.',
    accent: 'turquoise',
  },
  {
    slug: 'series-a-readiness-signals',
    category: 'Pitch Deck',
    readTime: '7 min read',
    date: 'January 22, 2026',
    title: 'The Five Series A Readiness Signals VCs Quietly Look For',
    excerpt: 'Series A is not a bigger seed. Investors look for specific signals beyond traction. Here are the five we see in every successful raise.',
    accent: 'teal',
  },
];

export const TESTIMONIALS = [
  { name: 'Sarah Chen', role: 'CEO, MediConnect AI', initials: 'SC', text: 'AMG transformed our fundraising approach. Their pitch deck guidance and investor matchmaking helped us close a $2M seed round in 3 months.' },
  { name: 'Marcus Rodriguez', role: 'Founder, PayFlow Solutions', initials: 'MR', text: 'The Investment Readiness work was game-changing. Their financial modeling rigor gave us the confidence to approach top-tier VCs.' },
  { name: 'Emily Watson', role: 'Co-founder, LogiChain Pro', initials: 'EW', text: 'Their investor network and strategic guidance led to introductions with 15+ VCs, resulting in multiple term sheets.' },
  { name: 'David Kim', role: 'CEO, AutoMech Systems', initials: 'DK', text: 'The cohort workshops were dense with actionable insight. The financial model template alone saved us weeks.' },
];

export const PARTNERS = ['SOSV','Techstars','500 Global','Plug and Play','Antler','MassChallenge','Founders Factory','Endeavor'];

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICES.map(s => [s.slug, s]));
