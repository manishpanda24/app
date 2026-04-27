import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, CheckCircle2, Sparkles, TrendingUp, Users, Calculator, Briefcase, FileText, MessageCircle, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { STATS, SERVICE_PILLARS, SERVICES, TESTIMONIALS, PARTNERS, ARTICLES } from '../mock';

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
      <section className="relative overflow-hidden border-b-2 border-amg-ink">
        <div className="absolute inset-0 grid-paper pointer-events-none"/>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 flex-wrap mb-7">
                <span className="tag-pill bg-amg-yellow"><span className="w-1.5 h-1.5 rounded-full bg-amg-ink"/>Pre-Seed</span>
                <span className="tag-pill bg-amg-turquoise"><span className="w-1.5 h-1.5 rounded-full bg-amg-ink"/>Seed</span>
                <span className="tag-pill bg-amg-cream-2"><span className="w-1.5 h-1.5 rounded-full bg-amg-ink"/>Series A</span>
              </div>
              <h1 className="heading-display text-[52px] sm:text-[68px] lg:text-[92px] text-amg-ink">
                Raise Capital With <span className="italic text-amg-teal">Conviction.</span>
              </h1>
              <p className="mt-7 text-[17px] lg:text-[19px] leading-relaxed text-amg-ink/75 max-w-2xl">
                AMG Venture Partners equips founders, incubators, and accelerators across North America and Europe with the strategic clarity, tools, and connections to close their rounds.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-9">
                <Link to="/founder-services" className="btn-primary">Explore Services <ArrowUpRight className="w-4 h-4"/></Link>
                <Link to="/contact" className="btn-outline">Book a Consultation <ArrowRight className="w-4 h-4"/></Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-amg-turquoise border-2 border-amg-ink p-6 shadow-crisp-lg relative">
                <div className="absolute -top-3 -left-3 bg-amg-yellow border-2 border-amg-ink px-3 py-1 eyebrow text-amg-ink">Active</div>
                <div className="font-serif text-[28px] text-amg-ink leading-tight font-semibold">Investment Readiness Cohort</div>
                <div className="mt-1 text-[13px] text-amg-ink/70 font-semibold">6-module program · Spring 2026</div>
                <div className="divider-line my-5"/>
                <ul className="space-y-2.5 text-[14px] text-amg-ink font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/>Fundraising strategy</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/>Financial modeling</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/>Pitch deck mastery</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/>Investor outreach</li>
                </ul>
                <Link to="/services/investment-readiness" className="mt-5 inline-flex items-center gap-2 text-amg-ink font-semibold link-under">Apply now <ArrowRight className="w-4 h-4"/></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t-2 border-amg-ink bg-amg-cream-2">
          <div className="max-w-[1320px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x-2 divide-amg-ink border-amg-ink">
            {STATS.map((s, i) => (
              <div key={i} className="px-6 py-7">
                <div className="font-serif text-[36px] lg:text-[44px] font-semibold text-amg-ink leading-none">{s.value}</div>
                <div className="mt-2 eyebrow text-amg-teal">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="eyebrow text-amg-teal mb-3">What we do</div>
              <h2 className="heading-display text-[40px] md:text-[56px] text-amg-ink">Built for the moments that <span className="italic text-amg-teal">move rounds</span>.</h2>
            </div>
            <p className="text-amg-ink/70 text-[15px] max-w-md">Four pillars. One outcome — a founder ready to walk into any investor room with conviction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {SERVICE_PILLARS.map((p, i) => {
              const bg = p.accent === 'yellow' ? 'bg-amg-yellow' : p.accent === 'turquoise' ? 'bg-amg-turquoise' : 'bg-amg-teal text-amg-cream';
              return (
                <div key={i} className={`relative ${bg} border-2 border-amg-ink p-6 hover-lift shadow-crisp min-h-[220px] flex flex-col justify-between`}>
                  <div className="font-serif text-[12px] eyebrow opacity-70">0{i+1}</div>
                  <div>
                    <div className="font-serif text-[28px] font-semibold leading-tight">{p.title}</div>
                    <div className="mt-2 text-[14px] font-medium opacity-90">{p.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="py-10 border-y-2 border-amg-ink bg-amg-cream-2 overflow-hidden">
        <div className="flex items-center gap-6 px-6">
          <div className="eyebrow text-amg-teal whitespace-nowrap">Trusted across</div>
          <div className="flex-1 overflow-hidden relative">
            <div className="marquee-track">
              {[...PARTNERS, ...PARTNERS].map((p, i) => (
                <div key={i} className="font-serif text-[22px] font-semibold text-amg-ink/70 whitespace-nowrap">{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER SERVICES */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-7">
              <div className="eyebrow text-amg-teal mb-3">For Founders</div>
              <h2 className="heading-display text-[40px] md:text-[60px] text-amg-ink">Founder Services</h2>
              <p className="mt-5 text-[16px] text-amg-ink/75 leading-relaxed max-w-xl">
                From your first pitch deck to your closing round, we provide hands-on, stage-appropriate support at every critical step — tailored to your stage, sector, geography, and target investor.
              </p>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
              <Link to="/founder-services" className="btn-outline self-end">View all services <ArrowUpRight className="w-4 h-4"/></Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.slice(0,6).map((s, i) => {
              const Icon = ICONS[s.slug] || Briefcase;
              const accentColor = s.accent === 'yellow' ? 'bg-amg-yellow' : s.accent === 'turquoise' ? 'bg-amg-turquoise' : 'bg-amg-teal';
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="group bg-white border-2 border-amg-ink p-7 shadow-crisp hover-lift block">
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 ${accentColor} border-2 border-amg-ink flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${s.accent === 'teal' ? 'text-amg-cream' : 'text-amg-ink'}`} />
                    </div>
                    <span className="text-[12px] eyebrow text-amg-teal">0{i+1}</span>
                  </div>
                  <div className="font-serif text-[26px] font-semibold text-amg-ink leading-tight">{s.title}</div>
                  <p className="mt-2 text-[14px] text-amg-ink/70 leading-relaxed">{s.tagline}</p>
                  <div className="divider-line my-5"/>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-amg-ink">View details</span>
                    <ArrowUpRight className="w-5 h-5 text-amg-ink group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS / METHOD STRIP */}
      <section className="py-20 px-6 lg:px-10 bg-amg-cream-2 border-y-2 border-amg-ink">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow text-amg-teal mb-3">The Method</div>
            <h2 className="heading-display text-[40px] md:text-[52px] text-amg-ink">A repeatable system <span className="italic text-amg-teal">to close rounds</span>.</h2>
            <p className="mt-5 text-[15px] text-amg-ink/75 max-w-md">Our four-phase method is the same we apply with accelerator cohorts and individual founders. Calibrated, not templated.</p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {n:'01', t:'Diagnose', d:'Audit deck, model, data room, narrative.'},
              {n:'02', t:'Architect', d:'Sharpen story; rebuild what is unfit.'},
              {n:'03', t:'Equip', d:'Polished materials; defensible numbers.'},
              {n:'04', t:'Engage', d:'Targeted, warm investor outreach.'},
            ].map(s => (
              <div key={s.n} className="bg-amg-cream border-2 border-amg-ink p-6 shadow-crisp-sm">
                <div className="font-serif text-[44px] font-semibold text-amg-teal leading-none">{s.n}</div>
                <div className="mt-3 font-semibold text-amg-ink text-[18px]">{s.t}</div>
                <div className="text-[13px] text-amg-ink/70 mt-1">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div>
              <div className="eyebrow text-amg-teal mb-3">Founder Stories</div>
              <h2 className="heading-display text-[40px] md:text-[56px] text-amg-ink max-w-2xl">Trusted by founders who close their rounds.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`p-7 border-2 border-amg-ink shadow-crisp ${i%2===0?'bg-white':'bg-amg-yellow'}`}>
                <div className="font-serif text-[20px] leading-relaxed text-amg-ink">“{t.text}”</div>
                <div className="divider-line my-5"/>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-amg-teal text-amg-cream font-semibold flex items-center justify-center border-2 border-amg-ink">{t.initials}</div>
                  <div>
                    <div className="font-semibold text-[14px] text-amg-ink">{t.name}</div>
                    <div className="text-[12px] text-amg-ink/70">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-20 px-6 lg:px-10 bg-amg-cream-2 border-y-2 border-amg-ink">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div>
              <div className="eyebrow text-amg-teal mb-3">Featured Articles</div>
              <h2 className="heading-display text-[40px] md:text-[52px] text-amg-ink">Insights for founders raising now.</h2>
            </div>
            <Link to="/resources" className="btn-outline">All articles <ArrowUpRight className="w-4 h-4"/></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {ARTICLES.slice(0,3).map(a => (
              <article key={a.slug} className="bg-amg-cream border-2 border-amg-ink p-6 shadow-crisp hover-lift">
                <div className="flex items-center gap-2 mb-5">
                  <span className={`tag-pill ${a.accent==='yellow'?'bg-amg-yellow':a.accent==='turquoise'?'bg-amg-turquoise':'bg-amg-teal text-amg-cream border-amg-ink'}`}>{a.category}</span>
                  <span className="text-[11px] text-amg-ink/60 font-semibold uppercase tracking-wider">{a.readTime}</span>
                </div>
                <h3 className="font-serif text-[22px] font-semibold text-amg-ink leading-tight">{a.title}</h3>
                <p className="mt-3 text-[14px] text-amg-ink/70 leading-relaxed line-clamp-3">{a.excerpt}</p>
                <div className="divider-line my-5"/>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-amg-ink/60 font-semibold">{a.date}</span>
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
