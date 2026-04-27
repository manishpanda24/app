import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, Plus, Minus, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { SERVICE_BY_SLUG, SERVICES } from '../mock';

function Faq({ q, a, i }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <div className="card-pro">
      <button onClick={()=>setOpen(!open)} className="w-full flex items-center justify-between gap-6 p-6 lg:p-7 text-left">
        <span className="font-serif text-[18px] lg:text-[20px] font-medium text-amg-ink">{q}</span>
        <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${open?'bg-amg-ink text-amg-cream':'bg-amg-cream-2 text-amg-ink'}`}>
          {open ? <Minus className="w-4 h-4"/> : <Plus className="w-4 h-4"/>}
        </span>
      </button>
      {open && (
        <div className="px-6 lg:px-7 pb-6 lg:pb-7 text-[14.5px] text-amg-ink/70 leading-relaxed border-t border-amg-line pt-5">{a}</div>
      )}
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICE_BY_SLUG[slug];
  if (!service) return <Navigate to="/founder-services" replace />;

  const accentDot = service.accent === 'yellow' ? 'bg-amg-yellow' : service.accent === 'turquoise' ? 'bg-amg-turquoise' : 'bg-amg-teal';
  const heroBg = service.accent === 'yellow' ? 'bg-soft-yellow' : service.accent === 'turquoise' ? 'bg-soft-turquoise' : 'bg-soft-teal';

  const otherServices = SERVICES.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className={`relative overflow-hidden ${heroBg} border-b border-amg-line`}>
        <div className="absolute inset-0 grid-paper pointer-events-none opacity-40"/>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24 relative">
          <Link to="/founder-services" className="inline-flex items-center gap-2 mb-8 text-[12.5px] font-semibold text-amg-ink/70 hover:text-amg-ink">
            <ArrowLeft className="w-4 h-4"/> All founder services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 mb-5 tag-pill">
                <span className={`dot ${accentDot}`}/> Founder Service
              </div>
              <h1 className="heading-display text-[44px] md:text-[72px] leading-[0.98] text-amg-ink">{service.title}</h1>
              <p className="mt-6 text-[18px] lg:text-[20px] text-amg-ink/80 max-w-2xl leading-relaxed">{service.tagline}</p>
            </div>
            <div className="lg:col-span-4">
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Get started <ArrowRight className="w-4 h-4"/></Link>
                <a href="#pricing" className="btn-outline">View pricing</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Why founders need this</div>
            <h2 className="heading-display text-[36px] md:text-[44px] text-amg-ink">The cost of getting this <em>wrong</em>.</h2>
            <p className="mt-5 text-[15.5px] text-amg-ink/70 leading-relaxed max-w-md">{service.why}</p>
          </div>
          <div className="lg:col-span-7 space-y-4">
            {service.pains.map((p, i) => (
              <div key={i} className="flex items-start gap-5 card-pro p-6">
                <div className="w-10 h-10 rounded-md bg-amg-cream-2 border border-amg-line flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-4 h-4 text-amg-ink"/>
                </div>
                <p className="text-[15px] text-amg-ink leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVER */}
      <section className="py-24 px-6 lg:px-10 bg-amg-cream-2/50 border-y border-amg-line">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-4">What we deliver</div>
            <h2 className="heading-display text-[36px] md:text-[48px] text-amg-ink">Tangible outputs, no <em>vapor</em>.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.deliver.map((d, i) => (
              <div key={i} className="card-pro p-7 flex items-start gap-5 hover-lift">
                <div className="step-num w-12 shrink-0">0{i+1}</div>
                <div>
                  <div className="text-[16px] text-amg-ink font-semibold leading-snug">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-4">How we engage</div>
            <h2 className="heading-display text-[36px] md:text-[48px] text-amg-ink">A clear, repeatable methodology.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {service.process.map((p, i) => (
              <div key={i} className="card-pro shadow-soft p-7 min-h-[200px] flex flex-col justify-between relative">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-amg-ink text-amg-cream flex items-center justify-center text-[12px] font-semibold">{i+1}</div>
                  <div className="text-[10.5px] tracking-[0.2em] uppercase font-semibold text-amg-mute">Step</div>
                </div>
                <div>
                  <div className="font-serif text-[22px] font-medium text-amg-ink leading-tight">{p.step}</div>
                  <p className="mt-2 text-[14px] text-amg-ink/70 leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="rounded-2xl card-dark relative overflow-hidden">
            <div className="absolute inset-0 grid-paper pointer-events-none opacity-50"/>
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 p-10 lg:p-16">
              <div className="lg:col-span-5">
                <div className="text-[11px] tracking-[0.18em] uppercase text-amg-yellow font-semibold mb-4">What&rsquo;s included</div>
                <h2 className="heading-display text-[36px] md:text-[48px] text-amg-cream">Every detail, transparent.</h2>
                <p className="mt-6 text-[15px] text-amg-cream/65 leading-relaxed max-w-md">No surprises. Each engagement is scoped, priced, and agreed upon before we start — with mutual NDA in place.</p>
              </div>
              <div className="lg:col-span-7">
                <ul className="divide-y divide-amg-cream/10">
                  {service.included.map((it, i) => (
                    <li key={i} className="flex items-start gap-4 py-4">
                      <div className="w-6 h-6 rounded-full bg-amg-yellow text-amg-ink flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5"/>
                      </div>
                      <span className="text-[15px] text-amg-cream/90 leading-relaxed pt-0.5">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 lg:px-10 bg-amg-cream-2/50 border-y border-amg-line">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-4">Pricing</div>
            <h2 className="heading-display text-[36px] md:text-[48px] text-amg-ink">Transparent, flat-fee pricing.</h2>
            <p className="mt-4 text-[15.5px] text-amg-ink/70">No hourly surprises. Every engagement is scoped, priced, and agreed upon before we start.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {service.pricing.map((p, i) => {
              const featured = i === 1;
              return (
                <div key={i} className={`relative rounded-xl p-9 ${featured ? 'card-dark shadow-soft-lg' : 'card-pro shadow-soft'}`}>
                  {featured && <div className="absolute -top-3 right-6 bg-amg-yellow text-amg-ink text-[10.5px] tracking-[0.18em] uppercase font-semibold px-3 py-1 rounded-full">Most popular</div>}
                  <div className={`text-[11px] tracking-[0.18em] uppercase font-semibold ${featured?'text-amg-yellow':'text-amg-teal'}`}>{p.tier}</div>
                  <div className={`font-serif text-[52px] font-medium leading-none mt-4 ${featured?'text-amg-cream':'text-amg-ink'}`}>{p.price}</div>
                  <div className={`text-[13px] mt-2 ${featured?'text-amg-cream/65':'text-amg-mute'}`}>{p.sub}</div>
                  <div className={`my-7 h-px ${featured?'bg-amg-cream/15':'bg-amg-line'}`}/>
                  <ul className="space-y-2.5">
                    {service.included.slice(0,4).map((it, k) => (
                      <li key={k} className={`flex items-start gap-2.5 text-[13.5px] ${featured?'text-amg-cream/80':'text-amg-ink/75'}`}>
                        <Check className={`w-4 h-4 mt-0.5 ${featured?'text-amg-yellow':'text-amg-teal'} shrink-0`}/>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`mt-7 inline-flex items-center gap-2 px-4 py-2.5 rounded-md font-semibold text-[13.5px] ${featured?'bg-amg-yellow text-amg-ink hover:bg-amg-yellow-soft':'bg-amg-ink text-amg-cream hover:bg-amg-ink-2'} transition-colors`}>
                    Get started <ArrowRight className="w-4 h-4"/>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="eyebrow mb-4">FAQs</div>
          <h2 className="heading-display text-[36px] md:text-[48px] text-amg-ink mb-10">Common founder questions.</h2>
          <div className="space-y-4">
            {service.faqs.map((f, i) => (<Faq key={i} q={f.q} a={f.a} i={i} />))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-24 px-6 lg:px-10 bg-amg-cream-2/50 border-y border-amg-line">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
            <div>
              <div className="eyebrow mb-4">Continue exploring</div>
              <h2 className="heading-display text-[32px] md:text-[40px] text-amg-ink">Related services.</h2>
            </div>
            <Link to="/founder-services" className="btn-outline">All services <ArrowRight className="w-4 h-4"/></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map(s => {
              const dot = s.accent === 'yellow' ? 'bg-amg-yellow' : s.accent === 'turquoise' ? 'bg-amg-turquoise' : 'bg-amg-teal';
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="card-pro shadow-soft p-7 hover-lift block">
                  <div className="flex items-center gap-2 mb-5">
                    <span className={`w-2 h-2 rounded-full ${dot}`}/>
                    <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-amg-mute">Service</span>
                  </div>
                  <div className="font-serif text-[22px] font-medium leading-tight text-amg-ink">{s.title}</div>
                  <p className="mt-2 text-[14px] text-amg-ink/65 leading-relaxed">{s.tagline}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-amg-teal">Learn more <ArrowUpRight className="w-4 h-4"/></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
