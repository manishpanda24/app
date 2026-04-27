import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, ArrowRight, Check, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { SERVICE_BY_SLUG, SERVICES } from '../mock';

function Faq({ q, a, i }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <div className="border-2 border-amg-ink bg-white shadow-crisp-sm">
      <button onClick={()=>setOpen(!open)} className="w-full flex items-center justify-between gap-6 p-5 lg:p-6 text-left">
        <span className="font-serif text-[18px] lg:text-[20px] font-semibold text-amg-ink">{q}</span>
        <span className={`w-9 h-9 flex items-center justify-center border-2 border-amg-ink ${open?'bg-amg-yellow':'bg-amg-cream'}`}>
          {open ? <Minus className="w-4 h-4"/> : <Plus className="w-4 h-4"/>}
        </span>
      </button>
      {open && (
        <div className="px-5 lg:px-6 pb-5 lg:pb-6 text-[15px] text-amg-ink/75 leading-relaxed border-t-2 border-amg-ink pt-5">{a}</div>
      )}
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICE_BY_SLUG[slug];
  if (!service) return <Navigate to="/founder-services" replace />;

  const accentBg = service.accent === 'yellow' ? 'bg-amg-yellow' : service.accent === 'turquoise' ? 'bg-amg-turquoise' : 'bg-amg-teal';
  const accentText = service.accent === 'teal' ? 'text-amg-cream' : 'text-amg-ink';

  const otherServices = SERVICES.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className={`border-b-2 border-amg-ink relative overflow-hidden ${accentBg} ${accentText}`}>
        <div className="absolute inset-0 grid-paper pointer-events-none opacity-30"/>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-16 lg:py-24 relative">
          <Link to="/founder-services" className="inline-flex items-center gap-2 mb-8 text-[13px] font-semibold link-under">
            <ArrowLeft className="w-4 h-4"/> Back to Founder Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-4 opacity-80">Founder Service</div>
              <h1 className="heading-display text-[48px] md:text-[78px] leading-[0.96]">{service.title}</h1>
              <p className="mt-6 text-[18px] lg:text-[22px] font-medium max-w-2xl">{service.tagline}</p>
            </div>
            <div className="lg:col-span-4">
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Get Started <ArrowUpRight className="w-4 h-4"/></Link>
                <a href="#pricing" className="btn-outline">View Pricing <ArrowRight className="w-4 h-4"/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 px-6 lg:px-10 border-b-2 border-amg-ink">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="eyebrow text-amg-teal mb-3">Why founders need this</div>
            <h2 className="heading-display text-[36px] md:text-[48px] text-amg-ink">The cost of getting this <span className="italic text-amg-teal">wrong</span>.</h2>
            <p className="mt-5 text-[15px] text-amg-ink/75 leading-relaxed max-w-md">{service.why}</p>
          </div>
          <div className="lg:col-span-7 space-y-4">
            {service.pains.map((p, i) => (
              <div key={i} className="flex items-start gap-5 bg-amg-cream-2 border-2 border-amg-ink p-5 shadow-crisp-sm">
                <div className="w-10 h-10 bg-amg-yellow border-2 border-amg-ink flex items-center justify-center font-serif font-bold text-[18px] shrink-0">!</div>
                <p className="text-[15px] text-amg-ink leading-relaxed font-medium">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="py-20 px-6 lg:px-10 bg-amg-cream-2 border-b-2 border-amg-ink">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div>
              <div className="eyebrow text-amg-teal mb-3">What we deliver</div>
              <h2 className="heading-display text-[36px] md:text-[52px] text-amg-ink max-w-2xl">Tangible outputs, no <span className="italic text-amg-teal">vapor</span>.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliver.map((d, i) => (
              <div key={i} className="bg-amg-cream border-2 border-amg-ink p-6 shadow-crisp flex items-start gap-4">
                <div className="font-serif text-[36px] font-semibold text-amg-teal leading-none w-14 shrink-0">0{i+1}</div>
                <div className="text-[16px] text-amg-ink font-medium leading-relaxed">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 lg:px-10 border-b-2 border-amg-ink">
        <div className="max-w-[1320px] mx-auto">
          <div className="mb-12">
            <div className="eyebrow text-amg-teal mb-3">What&rsquo;s our process</div>
            <h2 className="heading-display text-[36px] md:text-[52px] text-amg-ink">A clear, repeatable methodology.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <div key={i} className="relative bg-white border-2 border-amg-ink p-6 shadow-crisp min-h-[200px] flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${i%2===0?'bg-amg-yellow':'bg-amg-turquoise'} border-2 border-amg-ink flex items-center justify-center font-serif font-bold`}>{i+1}</div>
                  <div className="eyebrow text-amg-teal">Step</div>
                </div>
                <div>
                  <div className="font-serif text-[24px] font-semibold text-amg-ink leading-tight">{p.step}</div>
                  <p className="mt-2 text-[14px] text-amg-ink/75 leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-20 px-6 lg:px-10 bg-amg-ink text-amg-cream border-b-2 border-amg-ink">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="eyebrow text-amg-yellow mb-3">What&rsquo;s included</div>
            <h2 className="heading-display text-[36px] md:text-[52px] text-amg-cream">Every detail, transparent.</h2>
            <p className="mt-5 text-[15px] text-amg-cream/70 leading-relaxed max-w-md">No surprises. Each engagement is scoped, priced, and agreed upon before we start.</p>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-amg-cream text-amg-ink border-2 border-amg-yellow p-6 lg:p-8 shadow-crisp-yellow">
              <ul className="divide-y-2 divide-amg-ink/15">
                {service.included.map((it, i) => (
                  <li key={i} className="flex items-start gap-4 py-3.5">
                    <div className="w-7 h-7 bg-amg-turquoise border-2 border-amg-ink flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-amg-ink"/>
                    </div>
                    <span className="text-[15px] text-amg-ink font-medium leading-relaxed">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 lg:px-10 border-b-2 border-amg-ink">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div>
              <div className="eyebrow text-amg-teal mb-3">Pricing</div>
              <h2 className="heading-display text-[36px] md:text-[52px] text-amg-ink">Transparent, flat-fee pricing.</h2>
              <p className="mt-3 text-[15px] text-amg-ink/70 max-w-xl">No hourly surprises. Every engagement is scoped, priced, and agreed upon before we start.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-4xl">
            {service.pricing.map((p, i) => {
              const featured = i === 1;
              return (
                <div key={i} className={`relative border-2 border-amg-ink p-8 shadow-crisp ${featured ? 'bg-amg-yellow' : 'bg-white'}`}>
                  {featured && <div className="absolute -top-3 right-5 bg-amg-ink text-amg-yellow eyebrow px-3 py-1">Most popular</div>}
                  <div className="font-serif text-[22px] font-semibold text-amg-ink">{p.tier}</div>
                  <div className="font-serif text-[56px] font-semibold text-amg-ink leading-none mt-3">{p.price}</div>
                  <div className="text-[13px] text-amg-ink/70 mt-2 font-medium">{p.sub}</div>
                  <Link to="/contact" className={`mt-6 inline-flex items-center gap-2 font-semibold border-2 border-amg-ink px-4 py-2.5 ${featured?'bg-amg-ink text-amg-yellow':'bg-amg-yellow'} hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform`}>
                    Get Started <ArrowUpRight className="w-4 h-4"/>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 lg:px-10 bg-amg-cream-2">
        <div className="max-w-[1100px] mx-auto">
          <div className="eyebrow text-amg-teal mb-3">FAQs</div>
          <h2 className="heading-display text-[36px] md:text-[52px] text-amg-ink mb-10">Common founder questions.</h2>
          <div className="space-y-4">
            {service.faqs.map((f, i) => (<Faq key={i} q={f.q} a={f.a} i={i} />))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
            <div>
              <div className="eyebrow text-amg-teal mb-3">Continue exploring</div>
              <h2 className="heading-display text-[32px] md:text-[44px] text-amg-ink">Other services.</h2>
            </div>
            <Link to="/founder-services" className="btn-outline">All services <ArrowUpRight className="w-4 h-4"/></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map(s => {
              const bg = s.accent === 'yellow' ? 'bg-amg-yellow' : s.accent === 'turquoise' ? 'bg-amg-turquoise' : 'bg-amg-teal text-amg-cream';
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className={`${bg} border-2 border-amg-ink p-6 shadow-crisp hover-lift block`}>
                  <div className="font-serif text-[26px] font-semibold leading-tight">{s.title}</div>
                  <p className="mt-2 text-[14px] opacity-90">{s.tagline}</p>
                  <div className="mt-5 inline-flex items-center gap-2 font-semibold">Read more <ArrowUpRight className="w-4 h-4"/></div>
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
