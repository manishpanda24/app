import { Link } from 'react-router-dom';
import React from 'react';
import {
  ArrowRight,
  Linkedin,
  Users,
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
      width: '72%',
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

    <div className="about-hero-copy">

      <div className="about-eyebrow">
        WHY AMG
      </div>

      <h1 className="about-hero-title">
        Built on the
        <br />
        Investor Side.
        <br />
        <span>Now Working</span>
        <br />
        <span>for Founders.</span>
      </h1>

      <p className="about-hero-description">
        AMG combines venture investing, angel investing, investment
        banking, startup evaluation and hands-on founder advisory to
        help Pre-Seed to Series A companies become fundable and
        navigate the fundraising process with greater discipline.
      </p>

      <div className="about-hero-tags">
        <span>Ex-VC</span>
        <span>Angel Investor</span>
        <span>Ex-Investment Banker</span>
        <span>EIR</span>
        <span>Global Startup Evaluator</span>
        <span>Founder</span>
      </div>

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
          DARK METRICS BAR
      ========================================================= */}

          


      {/* =========================================================
          MEET GAURAV
      ========================================================= */}

      <section className="about-section about-founder-section">

        <div className="about-container about-founder-grid">

          <div className="about-founder-copy">

            <div className="about-eyebrow">
              MEET GAURAV BANSAL
            </div>

            <h2>
              You Get the Investor Lens
              <br />
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


          <div className="about-founder-cards">

            {[
              {
                icon: Users,
                title: '50+ Angel +',
                subtitle: '35+ VC Investments',
                text: 'Actual investment decision-making across sectors and stages.',
              },
              {
                icon: FileText,
                title: '20,000+ Decks &',
                subtitle: 'Models Reviewed',
                text: 'Pattern recognition that helps highlight what investors care about.',
              },
              {
                icon: Search,
                title: '100+ Due Diligences',
                subtitle: '',
                text: 'Understanding what happens after the pitch and what derails deals.',
              },
              {
                icon: DollarSign,
                title: '$2B+ Transactions',
                subtitle: '',
                text: 'Deal execution, valuation discipline and financial structure expertise.',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div className="about-founder-card" key={item.title}>

                  <Icon />

                  <div>
                    <h3>{item.title}</h3>

                    {item.subtitle && (
                      <h3>{item.subtitle}</h3>
                    )}

                    <p>{item.text}</p>
                  </div>

                </div>
              );
            })}

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


          <div className="about-panel about-map-panel">

            <div className="about-eyebrow">
              BUILT FOR CROSS-BORDER FUNDRAISING
            </div>

            <h2>
              Global Perspective.
              <br />
              Local Insight.
            </h2>
<div className="about-map">

  {/* =====================================================
      DOTTED WORLD MAP BACKGROUND
      Inline SVG — no CSS changes required
  ===================================================== */}

  <svg
    aria-hidden="true"
    viewBox="0 0 700 180"
    preserveAspectRatio="xMidYMid meet"
    style={{
      position: 'absolute',
      left: '0',
      top: '-25px',
      width: '100%',
      height: '180px',
      zIndex: 0,
      pointerEvents: 'none',
      opacity: 0.55,
    }}
  >

    <defs>

      <pattern
        id="mapDots"
        width="5"
        height="5"
        patternUnits="userSpaceOnUse"
      >
        <circle
          cx="2"
          cy="2"
          r="0.9"
          fill="#70cbd2"
        />
      </pattern>

      <mask id="worldMapMask">

        <g fill="white">

          {/* NORTH AMERICA */}

          <path d="
            M35 42
            L52 27
            L78 21
            L105 25
            L127 18
            L151 29
            L166 43
            L158 55
            L140 59
            L128 71
            L108 72
            L101 88
            L83 84
            L72 73
            L54 72
            L42 62
            Z
          " />

          {/* Canada / northern region */}

          <path d="
            M47 30
            L65 16
            L92 12
            L118 17
            L139 25
            L125 34
            L95 33
            L70 39
            Z
          " />

          {/* Greenland */}

          <path d="
            M168 10
            L191 3
            L215 10
            L220 23
            L203 32
            L181 29
            L169 20
            Z
          " />

          {/* CENTRAL AMERICA */}

          <path d="
            M101 85
            L113 91
            L117 102
            L108 111
            L99 102
            L96 92
            Z
          " />

          {/* SOUTH AMERICA */}

          <path d="
            M156 104
            L176 110
            L185 128
            L182 145
            L173 161
            L162 174
            L150 165
            L146 149
            L149 134
            L141 120
            L146 110
            Z
          " />

          {/* EUROPE */}

          <path d="
            M334 48
            L349 38
            L368 39
            L382 47
            L376 57
            L360 61
            L344 57
            Z
          " />

          {/* Scandinavia */}

          <path d="
            M351 31
            L364 20
            L379 23
            L384 36
            L373 43
            L359 40
            Z
          " />

          {/* ASIA */}

          <path d="
            M380 47
            L405 33
            L438 29
            L468 35
            L500 31
            L532 38
            L558 49
            L579 61
            L570 74
            L548 77
            L529 87
            L505 83
            L482 91
            L456 83
            L435 88
            L414 78
            L394 73
            L381 62
            Z
          " />

          {/* INDIA */}

          <path d="
            M477 86
            L495 91
            L493 106
            L481 120
            L469 111
            L471 97
            Z
          " />

          {/* AFRICA */}

          <path d="
            M356 78
            L379 74
            L398 86
            L404 107
            L398 128
            L387 147
            L374 163
            L359 151
            L353 130
            L347 111
            L351 91
            Z
          " />

          {/* AUSTRALIA */}

          <path d="
            M552 134
            L576 125
            L602 130
            L620 143
            L617 158
            L599 168
            L575 166
            L557 156
            L547 146
            Z
          " />

          {/* JAPAN */}

          <path d="
            M592 69
            L600 62
            L605 72
            L600 83
            L594 87
            L590 78
            Z
          " />

        </g>

      </mask>

      <linearGradient
        id="mapFade"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
      >
        <stop
          offset="0%"
          stopColor="#ffffff"
          stopOpacity="0"
        />

        <stop
          offset="25%"
          stopColor="#ffffff"
          stopOpacity="0.75"
        />

        <stop
          offset="65%"
          stopColor="#ffffff"
          stopOpacity="1"
        />

        <stop
          offset="100%"
          stopColor="#ffffff"
          stopOpacity="0.25"
        />
      </linearGradient>

    </defs>


    {/* WORLD MAP */}

    <rect
      x="15"
      y="5"
      width="610"
      height="175"
      fill="url(#mapDots)"
      mask="url(#worldMapMask)"
    />


    {/* SOFT FADE */}

    <rect
      x="15"
      y="5"
      width="610"
      height="175"
      fill="url(#mapFade)"
      mask="url(#worldMapMask)"
      opacity="0.35"
    />

  </svg>


  {/* =====================================================
      INVESTOR ROUTE
  ===================================================== */}

  <svg
    className="about-map-line"
    viewBox="0 0 460 60"
    preserveAspectRatio="none"
    aria-hidden="true"
    style={{
      zIndex: 2,
    }}
  >

    {/* Main Canada → Europe → UK route */}

    <path
      d="M20,28 C120,28 155,28 230,28 C300,28 350,28 440,28"
    />

    {/* Canada → United States branch */}

    <path
      d="M20,28 C50,30 65,42 105,48"
    />

  </svg>


  {/* =====================================================
      LOCATION MARKERS
  ===================================================== */}

  {[
    ['Canada', 'top'],
    ['United States', 'bottom'],
    ['Europe', 'top'],
    ['United Kingdom', 'top'],
  ].map(([label, pos]) => (

    <div
      className={`about-map-point about-map-point-${pos}`}
      key={label}
      style={{
        zIndex: 3,
      }}
    >

      <span className="about-map-dot" />

      <span className="about-map-label">
        {label}
      </span>

    </div>

  ))}

</div>

            <p>
              Investor targeting and fundraising strategy are built around
              where your company is located, where investors are active,
              and where the strongest capital fit exists.
            </p>

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