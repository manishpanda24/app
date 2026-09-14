import { Link } from 'react-router-dom';
import React from 'react';
import {
  ArrowRight,
  Linkedin,
  Users,
  Clock,
  FileText,
  Search,
  DollarSign,
  Globe2,
  Target,
  TrendingUp,
  Building2,
  Leaf,
  ShoppingCart,
  HeartPulse,
  CreditCard,
  Cpu,
  Landmark,
  GraduationCap,
  Handshake,
  MapPin,
} from 'lucide-react';
import './AboutUs.css';
import GauravImage from '../images/Gaurav-hero.png';
import GauravImage2 from '../images/GauravFam.jpg';
import worldMap  from '../images/WorldMap.png';
import NatoDianaLogo from '../images/NatoDianaLogo.png';
import MedtechInnovatorLogo from '../images/MedtechInnovatorLogo.png';
import MassChallengeLogo from '../images/MassChallengeLogo.png';
import VentureLabLogo from '../images/VentureLabLogo.png';
import CommunitechLogo from '../images/CommunitechLogo.png';

import MixLogo from '../images/MixLogo.png';
import EitRawMaterialsLogo from '../images/EitRawMaterialsLogo.png';
import EitHealthLogo from '../images/EitHealthLogo.png';
import ScaleAiLogo from '../images/ScaleAiLogo.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

export default function AboutUs() {
  return (
    <>
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      {/* =========================================================
    HERO
========================================================= */}

<section className="about-hero">

  <div className="about-hero-grid" />

  {/* =======================================================
      WORLD MAP BACKGROUND
      Inline SVG — no CSS changes required
  ======================================================= */}

  <svg
    className="about-world-map"
    aria-hidden="true"
    viewBox="0 0 1100 455"
    preserveAspectRatio="xMidYMid slice"
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
      width: '60%',
      height: '100%',
      zIndex: 1,
      pointerEvents: 'none',
      overflow: 'visible',
    }}
  >

    <defs>

      {/* Small cyan dots */}
      <pattern
        id="amg-world-dots"
        width="6"
        height="6"
        patternUnits="userSpaceOnUse"
      >
        <circle
          cx="2.5"
          cy="2.5"
          r="1"
          fill="#63cfd6"
        />
      </pattern>

      {/* Soft fading mask */}
      <linearGradient
        id="amg-world-fade"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
      >
        <stop
          offset="0%"
          stopColor="white"
          stopOpacity="0"
        />

        <stop
          offset="20%"
          stopColor="white"
          stopOpacity="0.45"
        />

        <stop
          offset="60%"
          stopColor="white"
          stopOpacity="0.85"
        />

        <stop
          offset="100%"
          stopColor="white"
          stopOpacity="0.25"
        />
      </linearGradient>

      <mask id="amg-world-mask">

        <g fill="white">

          {/* =================================================
              NORTH AMERICA
          ================================================= */}

          <path d="
            M70 105
            L95 75
            L135 65
            L170 70
            L195 60
            L230 75
            L250 95
            L235 112
            L210 116
            L195 135
            L170 140
            L160 165
            L135 160
            L115 142
            L90 140
            L70 125
            Z
          " />

          {/* Canada / northern islands */}
          <path d="
            M105 65
            L135 45
            L175 42
            L205 55
            L185 70
            L145 70
            Z
          " />

          {/* Alaska */}
          <path d="
            M52 92
            L72 78
            L92 84
            L82 105
            L60 110
            Z
          " />

          {/* Central America */}
          <path d="
            M160 160
            L180 170
            L185 188
            L174 205
            L162 195
            L155 177
            Z
          " />

          {/* =================================================
              SOUTH AMERICA
          ================================================= */}

          <path d="
            M265 215
            L292 225
            L305 250
            L302 275
            L290 305
            L276 335
            L260 352
            L245 335
            L238 305
            L242 278
            L230 255
            L240 232
            Z
          " />

          {/* =================================================
              GREENLAND
          ================================================= */}

          <path d="
            M300 45
            L335 28
            L375 35
            L395 55
            L378 75
            L340 78
            L310 65
            Z
          " />

          {/* =================================================
              EUROPE
          ================================================= */}

          <path d="
            M470 92
            L495 75
            L525 76
            L545 88
            L535 103
            L512 110
            L488 105
            Z
          " />

          {/* Scandinavia */}
          <path d="
            M500 58
            L520 42
            L540 48
            L548 68
            L530 78
            L510 72
            Z
          " />

          {/* =================================================
              ASIA
          ================================================= */}

          <path d="
            M535 92
            L570 70
            L615 63
            L655 72
            L700 67
            L745 78
            L785 95
            L815 112
            L805 130
            L775 135
            L750 150
            L715 145
            L685 157
            L650 147
            L620 155
            L590 140
            L560 130
            L540 112
            Z
          " />

          {/* Arabian peninsula */}
          <path d="
            M600 145
            L635 150
            L655 175
            L640 195
            L610 184
            L590 160
            Z
          " />

          {/* India */}
          <path d="
            M680 145
            L705 157
            L700 180
            L682 205
            L665 190
            L670 165
            Z
          " />

          {/* Southeast Asia */}
          <path d="
            M730 170
            L755 175
            L770 195
            L755 210
            L738 198
            Z
          " />

          {/* Japan */}
          <path d="
            M825 115
            L837 105
            L844 120
            L837 137
            L827 145
            L821 132
            Z
          " />

          {/* =================================================
              AFRICA
          ================================================= */}

          <path d="
            M485 135
            L515 128
            L545 145
            L555 175
            L548 205
            L530 235
            L515 265
            L495 280
            L475 258
            L465 225
            L455 195
            L462 165
            Z
          " />

          {/* Madagascar */}
          <path d="
            M565 265
            L575 280
            L570 305
            L560 315
            L554 292
            Z
          " />

          {/* =================================================
              AUSTRALIA
          ================================================= */}

          <path d="
            M785 270
            L820 255
            L860 262
            L885 280
            L880 305
            L855 320
            L820 318
            L792 302
            L778 285
            Z
          " />

          {/* New Zealand */}
          <path d="
            M900 315
            L912 305
            L918 320
            L910 335
            L900 330
            Z
          " />

        </g>

      </mask>

    </defs>


    {/* =====================================================
        LARGE GLOBAL ARC
    ===================================================== */}

    <ellipse
      cx="650"
      cy="225"
      rx="440"
      ry="265"
      fill="none"
      stroke="#69d6dd"
      strokeWidth="2"
      opacity="0.55"
    />


    {/* =====================================================
        WORLD MAP DOTS
    ===================================================== */}

    <rect
      x="25"
      y="20"
      width="950"
      height="370"
      fill="url(#amg-world-dots)"
      mask="url(#amg-world-mask)"
      opacity="0.72"
    />


    {/* =====================================================
        VERY LIGHT MAP GLOW
    ===================================================== */}

    <rect
      x="25"
      y="20"
      width="950"
      height="370"
      fill="url(#amg-world-fade)"
      mask="url(#amg-world-mask)"
      opacity="0.32"
    />


    {/* =====================================================
        GLOBAL LATITUDE LINE
    ===================================================== */}

    <ellipse
      cx="650"
      cy="225"
      rx="440"
      ry="135"
      fill="none"
      stroke="#76dbe1"
      strokeWidth="1"
      strokeDasharray="3 7"
      opacity="0.3"
    />


    {/* =====================================================
        GLOBAL LONGITUDE LINE
    ===================================================== */}

    <ellipse
      cx="650"
      cy="225"
      rx="220"
      ry="265"
      fill="none"
      stroke="#76dbe1"
      strokeWidth="1"
      strokeDasharray="3 7"
      opacity="0.22"
    />

  </svg>


  {/* =======================================================
      HERO CONTENT
  ======================================================= */}

  <div
    className="about-container about-hero-inner"
    style={{
      zIndex: 2,
    }}
  >

    {/* =====================================================
        LEFT — HERO COPY
    ===================================================== */}

{/* =====================================================
    LEFT — HERO COPY
===================================================== */}

{/* =====================================================
    LEFT — HERO COPY
===================================================== */}

<div className="about-hero-copy">

  <div className="about-eyebrow">
    ABOUT AMG
  </div>

  <h1 className="about-hero-title">
    Built on the
  
    Investor Side.
    <br />
    <span>Now Working for Founders.</span>
  </h1>

  <p className="about-hero-description">
    AMG Venture Partners helps Pre-Seed to Series A founders
    diagnose fundability gaps, become investor-ready, identify the right
    investors globally, and execute a sharper fundraising process
    through diligence and close.
  </p>

  <p className="about-hero-description about-hero-description-second">
    We work with founders, accelerators, and startup ecosystems across
    North America and Europe through diagnostics, fundraising execution,
    and investment-readiness programming.
  </p>

</div>
    {/* =====================================================
        RIGHT — GAURAV + QUOTE
    ===================================================== */}

    <div className="about-hero-founder">

      <img
        src={GauravImage}
        alt="Gaurav Bansal"
        className="gaurav-hero-image"
      />

      <div className="about-hero-quote">

        <div className="quote-mark">
          "
        </div>

        <p>
          I've evaluated thousands of startups and invested in many.
          Today, I help founders see their company through an
          investor's eyes—and get ready for the capital they deserve.
        </p>

        <strong>
          — Gaurav Bansal
        </strong>

        <small>
          Founder & CEO, AMG Venture Partners
        </small>

      </div>

    </div>

  </div>

</section>


{/* =========================================================
    INVESTOR READINESS / FUNDRAISING SERVICES
========================================================= */}

<section className="investor-readiness-section">

  <div className="investor-readiness-container">

    <div className="readiness-cards">

      {/* CARD 1 */}
      <div className="readiness-card readiness-card-teal">

        <div className="readiness-icon">
          <FileText size={38} />
        </div>

        <h3>
          Investor Readiness
          
          Diagnostic
        </h3>

        <div className="readiness-divider" />

        <ul>
          <li>Investment readiness review report</li>
          <li>Gap analysis scorecard</li>
          <li>Priority fix list</li>
          <li>Personalized fundraising roadmap</li>
        </ul>

      </div>


      {/* CARD 2 */}
      <div className="readiness-card">

        <div className="readiness-icon">
          <Users size={38} />
        </div>

        <h3>
          Full Fundraising
          
          Support
        </h3>

        <div className="readiness-divider" />

        <ul>
          <li>Investor kit & investment case</li>
          <li>Target investor mapping</li>
          <li>Warm-intro paths & outreach</li>
          <li>Due diligence, negotiation & close support</li>
        </ul>

      </div>


      {/* CARD 3 */}
      <div className="readiness-card readiness-card-teal">

        <div className="readiness-icon">
          <TrendingUp size={38} />
        </div>

        <h3>
          Investment
          
          Readiness Program
        </h3>

        <div className="readiness-divider" />

        <ul>
          <li>Fundraising curriculum</li>
          <li>Founder workshops</li>
          <li>Practical guidance</li>
          <li>Accountability & readiness</li>
        </ul>

      </div>


      {/* CARD 4 */}
      <div className="readiness-card">

        <div className="readiness-icon">
          <Handshake size={38} />
        </div>

        <h3>
          Ecosystem
          
          Partnerships
        </h3>

        <div className="readiness-divider" />

        <ul>
          <li>Growth coaching</li>
          <li>Speaker sessions</li>
          <li>Startup evaluation</li>
          <li>EIR-style support</li>
        </ul>

      </div>

    </div>


    {/* TAGLINE */}

    <div className="readiness-tagline">

      <span></span>

      <p>
        Built around your stage, sector, business model, and target investor markets —
        <br />
        not a generic fundraising playbook.
      </p>

      <span></span>

    </div>

  </div>

</section>


{/* =========================================================
    MEET GAURAV
========================================================= */}

{/* =========================================================
    MEET GAURAV
========================================================= */}

<section className="about-section about-founder-section">

  <div className="about-container about-founder-grid">

    {/* =====================================================
        LEFT — FOUNDER CONTENT
    ===================================================== */}

    <div className="about-founder-copy">

      <div className="about-eyebrow">
        MEET GAURAV BANSAL
      </div>

      <h2>
        You Get the Investor Lens
        
        Before You Face Investors.
      </h2>

      <p>
        Gaurav has spent his career looking at companies from multiple
        sides of the capital table—advising on transactions as an
        investment banker, evaluating companies as a VC, investing
        personally as an angel, managing portfolio companies, and
        assessing startups for global innovation programs.
      </p>

      <p>
        Today, that experience sits behind every AMG engagement.
        The objective is not simply to make a deck look better. It is
        to identify what investors are likely to question, strengthen
        the underlying investment case, and help founders run a more
        credible fundraising process.
      </p>
<div className="about-founder-tags">

  <span>
    <DollarSign size={18} />
    Ex-VC
  </span>

  <span>
    <Users size={18} />
    Angel Investor
  </span>

  <span>
    <Landmark size={18} />
    Ex-Investment Banker
  </span>

  <span>
    <Leaf size={18} />
    Founder Growth Coach
  </span>


  

</div>
      <a
        href="https://www.linkedin.com/in/gauravbansalventurecapital/"
        target="_blank"
        rel="noopener noreferrer"
        className="about-button"
      >
        View Gaurav's LinkedIn
        <Linkedin size={15} />
      </a>

    </div>


    {/* =====================================================
        RIGHT — INVESTOR EXPERIENCE METRICS
    ===================================================== */}

    <div className="about-metrics-section">

      <div className="about-metrics-cards">

        {/* 14+ YEARS */}

        <div className="about-metric-card about-metric-card-teal">

          <div className="about-metric-icon">
            <Clock size={32} strokeWidth={1.8} />
          </div>

          <strong>14+</strong>

          <span>
            Years of investor &<br />
            operator experience
          </span>

        </div>


        {/* 50+ ANGEL */}

        <div className="about-metric-card">

          <div className="about-metric-icon">
            <Users size={32} strokeWidth={1.8} />
          </div>

          <strong>50+</strong>

          <span>
            Angel investments
          </span>

        </div>


        {/* 20,000+ DECKS */}

        <div className="about-metric-card">

          <div className="about-metric-icon">
            <FileText size={32} strokeWidth={1.8} />
          </div>

          <strong>20,000+</strong>

          <span>
            Decks & financial<br />
            models reviewed
          </span>

        </div>


        {/* $2B+ TRANSACTIONS */}

        <div className="about-metric-card about-metric-card-teal">

          <div className="about-metric-icon">
            <DollarSign size={34} strokeWidth={1.8} />
          </div>

          <strong>$2B+</strong>

          <span>
            Transactions<br />
            exposure
          </span>

        </div>

      </div>

    </div>

  </div>

</section>


      {/* =========================================================
          WHY AMG
      ========================================================= */}



      {/* =========================================================
          ECOSYSTEM
      ========================================================= */}


      {/* =========================================================
          SECTOR EXPERIENCE
      ========================================================= */}

      <section className="about-section">

        <div className="about-container about-two-column">

       <div className="about-story-panel">

            <div className="about-eyebrow">
              THE AMG STORY
            </div>

          

           <p>
  AMG contains the initials of Gauravs father, mother and Gaurav himself. The name shows where the journey started. With family, values and a belief in making something

</p>
<br></br>
<p>
Growing up in a town in India Gauravs life moved from engineering and technology to finance, investing and finally to the world of startups.
</p>
<br></br>
<p>
  Along the way Gaurav felt a pull to work closely with founders. To understand their challenges share the knowledge Gaurav has gained and help them navigate the path of building a company.
</p>
<br></br>
<p>
  <strong>
   AMG emerged from that journey: a bond, to family shaped by many years of experience and built to help founders move forward.
  </strong>
</p>

            <img
              src={GauravImage2}
              alt="AMG family"
              
            />

          </div>

<div className="about-panel about-map-panel about-global-card">

  <div className="about-global-header">

    <div className="about-global-copy">
      <div className="about-eyebrow">
        BUILT FOR CROSS-BORDER FUNDRAISING
      </div>

      <h2>
        Global Perspective.
        <br />
        <span>Local Insight.</span>
      </h2>

      <div className="about-global-accent" />

      <p>
        Investor targeting and fundraising strategy are built around
        where your company is located, where investors are active,
        and where the strongest capital fit exists.
      </p>
    </div>

    <div className="about-global-badge">
      <Globe2 size={18} />
      <span>5 MARKETS · GLOBAL INVESTOR NETWORK</span>
    </div>

  </div>


  {/* WORLD MAP */}
  {/* WORLD MAP IMAGE */}
<div className="about-global-map-wrap">
  <img
    src={worldMap}
    alt="AMG global investor network"
    className="about-global-map-image"
  />
</div>

  {/* MARKET CARDS */}

  {/* <div className="about-market-grid">

    <div className="about-market-item">
      <div className="about-market-icon">
        <MapPin size={18} />
      </div>

      <div>
        <strong>CANADA</strong>
        <span>Innovation-driven ecosystems</span>
      </div>
    </div>


    <div className="about-market-item">
      <div className="about-market-icon">
        <MapPin size={18} />
      </div>

      <div>
        <strong>UNITED STATES</strong>
        <span>Deep investor networks</span>
      </div>
    </div>


    <div className="about-market-item">
      <div className="about-market-icon">
        <MapPin size={18} />
      </div>

      <div>
        <strong>EUROPE</strong>
        <span>Strategic capital access</span>
      </div>
    </div>


    <div className="about-market-item">
      <div className="about-market-icon">
        <MapPin size={18} />
      </div>

      <div>
        <strong>UNITED KINGDOM</strong>
        <span>Global fundraising hub</span>
      </div>
    </div>

  </div> */}

</div>
        </div>

      </section>


{/* =========================================================
    CAREER TIMELINE
========================================================= */}


      {/* =========================================================
          STORY + PARTNERSHIPS
      ========================================================= */}

      {/* <section className="about-section">

        <div className="about-container about-two-column">

          <div className="about-story-panel">

            <div className="about-eyebrow">
              THE AMG STORY
            </div>

            <h2>Why "AMG"?</h2>

            <p>
              AMG carries the initials of Gaurav's father, mother and
              himself. The name reflects the family support behind his
              journey from a small town in India through education,
              corporate and venture capital experiences to building
              AMG Venture Partners.
            </p>

            <img
              src={GauravImage2}
              alt="AMG family"
              
            />

          </div>


          <div className="about-partnership-panel">

            <div className="about-eyebrow">
              FOR ACCELERATORS, INCUBATORS & ECOSYSTEMS
            </div>

            <h2>
              Partnerships That Strengthen
              <br />
              Founder Outcomes
            </h2>

            <div className="about-partnership-icons">

              {[
                ['Growth Coaching', Users],
                ['Investment Readiness Programs (IRP)', FileText],
                ['Workshops & Speaker Sessions', GraduationCap],
                ['Startup Evaluation & Due Diligence', Search],
                ['EIR & Advisory Support', Handshake],
                ['1:1 Founder Mentoring', Users],
              ].map(([label, Icon]) => (
                <div key={label}>
                  <Icon />
                  <span>{label}</span>
                </div>
              ))}

            </div>

            <button className="about-button">
              Explore Ecosystem Partnerships
              <ArrowRight size={15} />
            </button>

          </div>

        </div>

      </section> */}


      {/* <CTASection /> */}

      <Footer />
    </>
  );
}