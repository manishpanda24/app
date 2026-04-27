// Content sourced exclusively from the AMG Venture Partners PDF brief.

export const NAV_LINKS = [
  { label: 'Founder Services', to: '/founder-services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
];

export const HERO = {
  eyebrowTags: ['Pre-Seed', 'Seed', 'Series A'],
  title: 'Raise Capital With Conviction.',
  description:
    'AMG Venture Partners equips founders, incubators, and accelerators across North America and Europe with the strategic clarity, tools, and connections to close their rounds.',
  primaryCta: { label: 'Explore Services', to: '/founder-services' },
  secondaryCta: { label: 'Book a Consultation', to: '/contact' },
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

export const INVESTOR_PIPELINE_CTA = {
  title: 'Start Building Your Investor Pipeline.',
  description:
    "Let's map your investor universe and build an outreach strategy designed to convert.",
  cta: { label: 'Book a Free Strategy Call', to: '/contact' },
  note: 'No obligation. 30 minutes. All new engagements start here.',
};

export const SERVICES = [
  {
    slug: 'pitch-deck-review',
    title: 'Pitch Deck Review',
    tagline: 'Sharpen your story before you step into the room.',
    accent: 'yellow',
    why: 'A meticulous, investor-perspective critique of your existing pitch deck designed to identify narrative gaps, structural weaknesses, and missed opportunities before they cost you a term sheet.',
    included: [
      'Annotated slide-by-slide feedback',
      'Narrative structure recommendations',
    ],
  },
  {
    slug: 'pitch-deck-creation',
    title: 'Pitch Deck Creation',
    tagline: 'Your story, told with clarity and conviction.',
    accent: 'turquoise',
    why: 'We build investor-grade pitch decks from the ground up — crafting the narrative architecture, structuring each slide for maximum impact, and delivering a polished presentation that opens doors and moves investors to act.',
    included: [
      'Full 12–15 slide investor pitch deck',
      '90-minute founder discovery session',
      'Slide-by-slide copy and messaging development',
      'Narrative architecture document and slide outline',
      'Traction and proof-point storytelling',
      'Market sizing and competitive landscape framing',
      'Two full rounds of revisions based on your feedback',
      'Presentation-ready PDF export',
      'Editable PowerPoint file (fully yours to update)',
      'Live deck walkthrough session (60 min)',
      'Presentation coaching: how to deliver the story verbally',
    ],
  },
  {
    slug: 'financial-model',
    title: 'Financial Model',
    tagline: 'Numbers that tell a story investors trust.',
    accent: 'teal',
    why: 'We build rigorous, investor-grade financial models from scratch — structured around how your business actually operates, with explicit assumptions investors can interrogate and scenarios that hold up under diligence.',
    included: [],
  },
  {
    slug: 'valuation',
    title: 'Valuation',
    tagline: 'Know your worth and defend it.',
    accent: 'yellow',
    why: 'Defensible, market-grounded valuation analyses using the methodologies that institutional investors apply — comparable companies, precedent transactions, and DCF — calibrated to your stage, sector, and geography.',
    included: [],
  },
  {
    slug: 'investor-outreach',
    title: 'Investor Outreach',
    tagline: 'The right investor, at the right time.',
    accent: 'turquoise',
    why: 'Strategic, targeted investor outreach built on thesis alignment, stage fit, and sector expertise — paired with warm introductions from our established network across North America and Europe.',
    included: [],
    pipelineCta: true,
  },
  {
    slug: 'investment-readiness',
    title: 'Investment Readiness',
    tagline: 'Identify gaps before investors do.',
    accent: 'teal',
    why: 'A comprehensive diagnostic of your entire fundraising package — deck, financials, data room, legal structure, and founder narrative — ensuring you present a watertight investment case before you approach a single investor.',
    included: [],
    deliver: {
      title: 'A complete audit of your fundraising readiness across six dimensions.',
      description:
        'We evaluate every component of your fundraising package against institutional investor standards and give you a clear roadmap to close every gap.',
      items: [
        {
          title: 'Pitch Deck Audit',
          text: 'Narrative clarity, story structure, investor-appropriateness, and slide-by-slide gap analysis against your target investor profile.',
        },
        {
          title: 'Financial Package Review',
          text: 'Financial model integrity, unit economics strength, projection credibility, and consistency between your deck and your model.',
        },
        {
          title: 'Data Room Assessment',
          text: "Completeness and organization of your data room against institutional due diligence standards with a detailed checklist of what's missing.",
        },
      ],
    },
  },
  {
    slug: 'ama-sessions',
    title: 'AMA Sessions',
    tagline: "Ask the questions you can't afford to get wrong.",
    accent: 'yellow',
    why: 'Structured one-on-one advisory sessions with experienced venture investors and startup operators. Bring any challenge, any question — and get direct, unfiltered answers from people who have lived the fundraising journey from both sides of the table.',
    included: [],
    amaIntro: {
      title: 'Direct, actionable answers from experienced operators and investors.',
      description:
        'No fluff, no theory. Every AMA session is built around your specific situation and designed to produce decisions you can act on immediately.',
    },
    amaFeatures: [
      {
        title: 'Investor-Perspective Feedback',
        text: 'Our advisors have evaluated hundreds of deals from the investor seat. They tell you what a VC is actually thinking — not what you want to hear.',
      },
      {
        title: 'Fundraise Strategy Guidance',
        text: "Round sizing, valuation anchoring, sequencing, timing, term sheet navigation — whatever aspect of your fundraise you're wrestling with.",
      },
      {
        title: 'Pitch and Narrative Coaching',
        text: "Real-time feedback on how you're presenting your story — what's working, what's confusing, what's losing investor attention.",
      },
      {
        title: 'Materials Spot Review',
        text: 'Share a specific slide, a financial assumption, or a section of your deck and get direct feedback in the session.',
      },
      {
        title: 'Investor Relationship Advice',
        text: "Navigating specific investor dynamics, follow-up strategy, managing multiple processes simultaneously — we've been in these situations.",
      },
      {
        title: 'Next-Day Session Notes',
        text: 'Written summary of key discussion points and recommended next steps delivered the following business day.',
      },
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
];

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));
