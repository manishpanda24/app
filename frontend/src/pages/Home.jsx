import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, FileText, Sparkles, Calculator, TrendingUp, Users, ShieldCheck, MessageCircle, Briefcase, CheckCircle2, Star, Quote } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { STATS, SERVICES, TESTIMONIALS, PARTNERS, ARTICLES } from '../mock';

const ICONS = {
  'pitch-deck-review': FileText,
  'pitch-deck-creation': Sparkles,
  'financial-model': Calculator,
  'valuation': TrendingUp,
  'investor-outreach': Users,
  'investment-readiness': ShieldCheck,
  'ama-sessions': MessageCircle,
};

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
              <div className="badge-status mb-7">
                <span className="pulse"/>
                <span>Now accepting Spring 2026 cohort</span>
              </div>
              <h1 className="heading-display text-[52px] sm:text-[68px] lg:text-[88px] text-amg-ink">
                Raise capital with <em>conviction</em>.
              </h1>
              <p className="mt-7 text-[17px] lg:text-[19px] leading-relaxed text-amg-ink/70 max-w-2xl">
                AMG Venture Partners equips founders, incubators, and accelerators across North America and Europe with the strategic clarity, tools, and connections to close their rounds — from pre-seed to Series A.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <Link to="/founder-services" className="btn-primary">Explore services <ArrowRight className="w-4 h-4"/></Link>
                <Link to="/contact" className="btn-outline">Book a consultation</Link>
              </div>
              <div className="flex flex-wrap items-center gap-7 mt-12 text-[12px] text-amg-mute">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amg-teal"/>Pre-Seed · Seed · Series A</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amg-teal"/>NDA-first engagement</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amg-teal"/>Flat-fee, no surprises</div>
              </div>
            </div>

            <div className="lg:col-span-4 fade-in">
              <div className="card-pro shadow-soft-lg p-7 relative">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-amg-teal">Featured Program</span>
                  <span className="badge-status"><span className="pulse"/>Active</span>
                </div>
                <div className="font-serif text-[26px] text-amg-ink leading-tight mt-3 font-medium">Investment Readiness Cohort</div>
                <div className="mt-1 text-[13px] text-amg-mute">6-module program · Spring 2026</div>
                <div className="divider-line my-5"/>
                <ul className="space-y-3 text-[13.5px] text-amg-ink/80">
                  {['Fundraising strategy & dynamics','Investor-grade financial modeling','Pitch deck mastery','Targeted investor outreach'].map((t,i)=>(
                    <li key={i} className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-amg-teal"/> {t}</li>
                  ))}
                </ul>
                <Link to="/services/investment-readiness" className="mt-7 inline-flex items-center gap-2 text-amg-teal font-semibold link-under text-[13.5px]">Apply to program <ArrowRight className="w-4 h-4"/></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-amg-line bg-white/40">
          <div className="max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={i} className={`px-6 py-8 ${i!==0?'lg:border-l border-amg-line':''} ${i===1?'border-l border-amg-line':''} ${i===3?'lg:border-l border-amg-line':''} ${i>1?'border-t lg:border-t-0 border-amg-line':''}`}>
                <div className="font-serif text-[36px] lg:text-[42px] font-medium text-amg-ink leading-none">{s.value}</div>
                <div className="mt-2 text-[11px] tracking-[0.18em] uppercase font-semibold text-amg-teal">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="py-12 border-y border-amg-line bg-amg-cream-2/40 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center gap-8">
          <div className="text-[11px] tracking-[0.18em] uppercase font-semibold text-amg-mute whitespace-nowrap">Trusted by partners across</div>
          <div className="flex-1 overflow-hidden relative">
            <div className="marquee-track">
              {[...PARTNERS, ...PARTNERS].map((p, i) => (
                <div key={i} className="font-serif text-[20px] font-medium text-amg-ink/55 whitespace-nowrap">{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-4">For Founders</div>
              <h2 className="heading-display text-[40px] md:text-[56px] text-amg-ink">End-to-end fundraising <em>support</em>.</h2>
            </div>
            <div className="lg:col-span-5 flex lg:items-end">
              <p className="text-[15.5px] text-amg-ink/70 leading-relaxed">
                From your first pitch deck to your closing round — hands-on, stage-appropriate support tailored to your sector, geography, and target investor.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0,6).map((s, i) => {
              const Icon = ICONS[s.slug] || Briefcase;
              const dot = s.accent === 'yellow' ? 'bg-amg-yellow' : s.accent === 'turquoise' ? 'bg-amg-turquoise' : 'bg-amg-teal';
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="group card-pro shadow-soft p-7 hover-lift block">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-md bg-amg-cream-2 border border-amg-line flex items-center justify-center">
                      <Icon className="w-5 h-5 text-amg-ink"/>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${dot}`}/>
                      <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-amg-mute">0{i+1}</span>
                    </div>
                  </div>
                  <div className="font-serif text-[24px] font-medium text-amg-ink leading-tight">{s.title}</div>
                  <p className="mt-2.5 text-[14px] text-amg-ink/65 leading-relaxed">{s.tagline}</p>
                  <div className="hr-thin my-6"/>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-amg-teal">View service</span>
                    <ArrowUpRight className="w-4 h-4 text-amg-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/founder-services" className="btn-outline">View all services <ArrowRight className="w-4 h-4"/></Link>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="py-24 px-6 lg:px-10 bg-amg-cream-2/50 border-y border-amg-line">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="eyebrow mb-4">Our method</div>
            <h2 className="heading-display text-[40px] md:text-[52px] text-amg-ink">A repeatable system <em>to close rounds</em>.</h2>
            <p className="mt-6 text-[15.5px] text-amg-ink/70 max-w-md leading-relaxed">
              Our four-phase method is the same we apply with accelerator cohorts and individual founders — calibrated, never templated.
            </p>
            <Link to="/founder-services" className="mt-7 inline-flex items-center gap-2 text-amg-teal font-semibold link-under text-[13.5px]">See how we engage <ArrowRight className="w-4 h-4"/></Link>
          </div>
          <div className="lg:col-span-7 space-y-4">
            {[
              {n:'01', t:'Diagnose', d:'Audit deck, financial model, data room, narrative and legal structure.'},
              {n:'02', t:'Architect', d:'Sharpen the story, rebuild what is unfit, calibrate to your investor universe.'},
              {n:'03', t:'Equip', d:'Polished investor-grade materials and defensible numbers, ready for diligence.'},
              {n:'04', t:'Engage', d:'Targeted, warm investor outreach with weekly pipeline reviews.'},
            ].map((s, i) => (
              <div key={s.n} className="card-pro p-7 grid grid-cols-12 gap-5 items-start hover-lift">
                <div className="col-span-2 step-num">{s.n}</div>
                <div className="col-span-10">
                  <div className="font-serif text-[22px] text-amg-ink font-medium">{s.t}</div>
                  <div className="text-[14.5px] text-amg-ink/65 mt-1 leading-relaxed">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER / FOUNDER QUOTE */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <Quote className="w-10 h-10 text-amg-teal mx-auto mb-6"/>
          <p className="font-serif text-[28px] md:text-[36px] leading-[1.25] text-amg-ink">
            &ldquo;The work was meticulous, the feedback was direct, and the investor introductions were precisely matched to our thesis. We closed in eleven weeks.&rdquo;
          </p>
          <div className="mt-8 flex items-center gap-4 justify-center">
            <div className="w-11 h-11 rounded-full bg-amg-teal text-amg-cream font-semibold flex items-center justify-center text-[14px]">SC</div>
            <div className="text-left">
              <div className="text-[14px] font-semibold text-amg-ink">Sarah Chen</div>
              <div className="text-[12px] text-amg-mute">CEO, MediConnect AI · closed $2M Seed</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 lg:px-10 bg-amg-cream-2/50 border-y border-amg-line">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div>
              <div className="eyebrow mb-4">Founder Stories</div>
              <h2 className="heading-display text-[40px] md:text-[52px] text-amg-ink max-w-2xl">Outcomes, not opinions.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card-pro p-8 shadow-soft">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_,k)=>(<Star key={k} className="w-3.5 h-3.5 fill-amg-yellow text-amg-yellow"/>))}
                </div>
                <div className="font-serif text-[19px] leading-relaxed text-amg-ink">“{t.text}”</div>
                <div className="hr-thin my-6"/>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amg-teal text-amg-cream font-semibold flex items-center justify-center text-[13px]">{t.initials}</div>
                  <div>
                    <div className="font-semibold text-[13.5px] text-amg-ink">{t.name}</div>
                    <div className="text-[12px] text-amg-mute">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div>
              <div className="eyebrow mb-4">Insights</div>
              <h2 className="heading-display text-[40px] md:text-[52px] text-amg-ink">Notes from the founder room.</h2>
            </div>
            <Link to="/resources" className="btn-outline">All articles <ArrowRight className="w-4 h-4"/></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES.slice(0,3).map(a => (
              <article key={a.slug} className="card-pro p-7 hover-lift">
                <div className="flex items-center gap-3 mb-5">
                  <span className="tag-pill"><span className={`dot ${a.accent==='yellow'?'bg-amg-yellow':a.accent==='turquoise'?'bg-amg-turquoise':'bg-amg-teal'}`}/>{a.category}</span>
                  <span className="text-[11px] text-amg-mute font-medium">{a.readTime}</span>
                </div>
                <h3 className="font-serif text-[21px] font-medium text-amg-ink leading-snug">{a.title}</h3>
                <p className="mt-3 text-[14px] text-amg-ink/65 leading-relaxed line-clamp-3">{a.excerpt}</p>
                <div className="hr-thin my-6"/>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-amg-mute">{a.date}</span>
                  <span className="text-[13px] font-semibold text-amg-teal inline-flex items-center gap-1">Read article <ArrowRight className="w-4 h-4"/></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
