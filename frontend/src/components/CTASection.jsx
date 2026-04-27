import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 px-6 lg:px-10">
      <div className="max-w-[1320px] mx-auto">
        <div className="relative bg-amg-ink text-amg-cream border-2 border-amg-ink shadow-crisp-lg">
          <div className="absolute inset-0 grid-paper pointer-events-none"/>
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 lg:p-16">
            <div className="lg:col-span-7">
              <div className="eyebrow text-amg-yellow mb-5">Not sure where to start?</div>
              <h2 className="heading-display text-[44px] md:text-[60px] text-amg-cream">
                Schedule a <span className="text-amg-yellow italic">free</span> strategy call.
              </h2>
              <p className="mt-5 text-amg-cream/75 max-w-xl text-[16px] leading-relaxed">
                Book a complimentary 30-minute call and we&rsquo;ll map the right service path for your stage — no obligation, no pitch, just clarity.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link to="/contact" className="btn-primary">Book a Free Strategy Call <ArrowUpRight className="w-4 h-4"/></Link>
                <Link to="/founder-services" className="text-amg-cream font-semibold link-under">Explore Services →</Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-amg-yellow text-amg-ink border-2 border-amg-ink p-6 shadow-crisp">
                <div className="eyebrow mb-3">What you get</div>
                <ul className="space-y-3 text-[14px] font-medium">
                  <li className="flex gap-3"><span className="font-serif font-bold">01.</span><span>Audit of your current fundraising readiness across 6 dimensions.</span></li>
                  <li className="flex gap-3"><span className="font-serif font-bold">02.</span><span>Honest investor-perspective feedback on your story and number.</span></li>
                  <li className="flex gap-3"><span className="font-serif font-bold">03.</span><span>A prioritised action roadmap — yours to keep, no strings.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
