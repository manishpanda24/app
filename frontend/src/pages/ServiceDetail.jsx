import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { SERVICE_BY_SLUG, SERVICES, INVESTOR_PIPELINE_CTA } from '../mock';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICE_BY_SLUG[slug];
  if (!service) return <Navigate to="/founder-services" replace />;

  const heroBg = service.accent === 'yellow' ? 'bg-soft-yellow' : service.accent === 'turquoise' ? 'bg-soft-turquoise' : 'bg-soft-teal';
  const accentDot = service.accent === 'yellow' ? 'bg-amg-yellow' : service.accent === 'turquoise' ? 'bg-amg-turquoise' : 'bg-amg-teal';

  const otherServices = SERVICES.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className={`relative overflow-hidden ${heroBg} border-b border-amg-line`}>
        <div className="absolute inset-0 grid-paper pointer-events-none opacity-40"/>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24 relative">
          <Link to="/founder-services" className="inline-flex items-center gap-2 mb-8 text-[12.5px] font-semibold text-amg-teal/75 hover:text-amg-teal">
            <ArrowLeft className="w-4 h-4"/> Back to Founder Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 mb-5 tag-pill">
                <span className={`dot ${accentDot}`}/> Founder Service
              </div>
              <h1 className="heading-display text-[44px] md:text-[72px] leading-[0.98] text-amg-teal">{service.title}</h1>
              <p className="mt-6 text-[18px] lg:text-[20px] text-amg-teal/85 max-w-2xl leading-relaxed">{service.tagline}</p>
            </div>
            <div className="lg:col-span-4">
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-yellow">Get Started <ArrowRight className="w-4 h-4"/></Link>
                <Link to="/pricing" className="btn-outline">View Pricing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-4">Why It Matters</div>
          </div>
          <div className="lg:col-span-8">
            <p className="font-serif text-[24px] md:text-[30px] leading-[1.32] text-amg-teal">{service.why}</p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      {service.included && service.included.length > 0 && (
        <section className="py-24 px-6 lg:px-10 bg-amg-cream-2/40 border-y border-amg-line">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-2xl mb-12">
              <div className="eyebrow mb-4">What&rsquo;s Included</div>
              <h2 className="heading-display text-[36px] md:text-[44px] text-amg-teal">Everything you receive.</h2>
            </div>
            <div className="card-pro shadow-soft p-2 lg:p-4">
              <ul className="divide-y divide-amg-line">
                {service.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 py-4 px-4 lg:px-6">
                    <div className="w-7 h-7 rounded-full bg-amg-turquoise-bg border border-amg-turquoise flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-amg-teal"/>
                    </div>
                    <span className="text-[15px] text-amg-teal leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* WHAT WE DELIVER (Investment Readiness) */}
      {service.deliver && (
        <section className="py-24 px-6 lg:px-10 bg-amg-cream-2/40 border-y border-amg-line">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-3xl mb-12">
              <div className="eyebrow mb-4">What We Deliver</div>
              <h2 className="heading-display text-[32px] md:text-[42px] text-amg-teal leading-tight">{service.deliver.title}</h2>
              <p className="mt-5 text-[15.5px] text-amg-teal/75 leading-relaxed">{service.deliver.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.deliver.items.map((it, i) => {
                const bar = i===0?'bg-amg-yellow':i===1?'bg-amg-turquoise':'bg-amg-teal';
                return (
                  <div key={i} className="card-pro shadow-soft overflow-hidden">
                    <div className={`h-1 ${bar}`}/>
                    <div className="p-7">
                      <div className="font-serif text-[22px] font-medium text-amg-teal leading-tight">{it.title}</div>
                      <p className="mt-3 text-[14.5px] text-amg-teal/75 leading-relaxed">{it.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* AMA Sessions Features */}
      {service.amaFeatures && (
        <section className="py-24 px-6 lg:px-10 bg-amg-cream-2/40 border-y border-amg-line">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-3xl mb-12">
              <div className="eyebrow mb-4">AMA Sessions</div>
              <h2 className="heading-display text-[32px] md:text-[42px] text-amg-teal leading-tight">{service.amaIntro.title}</h2>
              <p className="mt-5 text-[15.5px] text-amg-teal/75 leading-relaxed">{service.amaIntro.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.amaFeatures.map((f, i) => {
                const bar = i%3===0?'bg-amg-yellow':i%3===1?'bg-amg-turquoise':'bg-amg-teal';
                return (
                  <div key={i} className="card-pro shadow-soft overflow-hidden">
                    <div className={`h-1 ${bar}`}/>
                    <div className="p-7">
                      <div className="font-serif text-[20px] font-medium text-amg-teal leading-tight">{f.title}</div>
                      <p className="mt-2.5 text-[14px] text-amg-teal/75 leading-relaxed">{f.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Investor Outreach pipeline CTA */}
      {service.pipelineCta && (
        <section className="py-24 px-6 lg:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="relative rounded-2xl overflow-hidden card-dark">
              <div className="absolute inset-0 grid-paper pointer-events-none opacity-50"/>
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 lg:p-16 items-center">
                <div className="lg:col-span-8">
                  <h2 className="heading-display text-[36px] md:text-[52px] text-amg-cream">{INVESTOR_PIPELINE_CTA.title}</h2>
                  <p className="mt-5 text-amg-cream/70 max-w-xl text-[15.5px] leading-relaxed">{INVESTOR_PIPELINE_CTA.description}</p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <Link to={INVESTOR_PIPELINE_CTA.cta.to} className="inline-flex items-center gap-2 bg-amg-yellow hover:bg-amg-yellow-2 text-amg-teal font-semibold px-5 py-3 rounded-md text-[14px] transition-colors">
                    {INVESTOR_PIPELINE_CTA.cta.label} <ArrowRight className="w-4 h-4"/>
                  </Link>
                  <div className="mt-4 text-[12px] text-amg-cream/60">{INVESTOR_PIPELINE_CTA.note}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="py-24 px-6 lg:px-10 bg-amg-cream-2/40 border-y border-amg-line">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
            <div>
              <div className="eyebrow mb-4">Continue exploring</div>
              <h2 className="heading-display text-[32px] md:text-[40px] text-amg-teal">Other services.</h2>
            </div>
            <Link to="/founder-services" className="btn-outline">All Services <ArrowRight className="w-4 h-4"/></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map(s => {
              const bar = s.accent === 'yellow' ? 'bg-amg-yellow' : s.accent === 'turquoise' ? 'bg-amg-turquoise' : 'bg-amg-teal';
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="card-pro shadow-soft hover-lift block overflow-hidden">
                  <div className={`h-1 ${bar}`}/>
                  <div className="p-7">
                    <div className="font-serif text-[22px] font-medium leading-tight text-amg-teal">{s.title}</div>
                    <p className="mt-2 text-[14px] text-amg-teal/70 leading-relaxed">{s.tagline}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-amg-turquoise-2">Learn more <ArrowRight className="w-4 h-4"/></div>
                  </div>
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
