import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative rounded-2xl overflow-hidden card-dark">
          <div className="absolute inset-0 grid-paper pointer-events-none opacity-50"/>
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 lg:p-16">
            <div className="lg:col-span-7">
              <div className="kicker-row text-amg-yellow text-[11px] tracking-[0.18em] uppercase font-semibold mb-6">Free strategy call</div>
              <h2 className="heading-display text-[40px] md:text-[56px] text-amg-cream">
                Schedule a 30-minute <em className="text-amg-yellow not-italic font-serif" style={{fontStyle:'italic'}}>working session</em> with a partner.
              </h2>
              <p className="mt-6 text-amg-cream/65 max-w-xl text-[15.5px] leading-relaxed">
                No obligation, no pitch. We&apos;ll map the right service path for your stage and leave you with a prioritised action roadmap.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-9">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-amg-yellow hover:bg-amg-yellow-soft text-amg-ink font-semibold px-5 py-3 rounded-md text-[14px] transition-colors">
                  Book a free call <ArrowRight className="w-4 h-4"/>
                </Link>
                <Link to="/founder-services" className="text-amg-cream/85 hover:text-amg-cream font-medium text-[14px] link-under">Explore services →</Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl bg-amg-ink-2/70 border border-amg-cream/10 p-7">
                <div className="text-[11px] tracking-[0.18em] uppercase text-amg-yellow font-semibold mb-4">What you take away</div>
                <ul className="space-y-4 text-[14px]">
                  {[
                    'Diagnostic of your fundraising readiness across six dimensions.',
                    'Honest, investor-perspective view on your story and number.',
                    'A prioritised, written action roadmap — yours to keep.',
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-amg-cream/85">
                      <CheckCircle2 className="w-4 h-4 text-amg-turquoise mt-0.5 shrink-0"/>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-amg-cream/10 text-[12px] text-amg-cream/55">
                  Average response time: under 1 business day.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
