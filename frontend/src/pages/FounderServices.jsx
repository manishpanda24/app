import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  FileText,
  Sparkles,
  Calculator,
  TrendingUp,
  Users,
  ShieldCheck,
  MessageCircle,
  Briefcase,
} from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

import {
  SERVICES,
  FOUNDER_SERVICES_INTRO,
  
} from '../mock';

const ICONS = {
  'pitch-deck-review': FileText,
  'pitch-deck-creation': Sparkles,
  'financial-model': Calculator,
  'valuation': TrendingUp,
  'investor-outreach': Users,
  'investment-readiness': ShieldCheck,
  'ama-sessions': MessageCircle,
};

export default function FounderServices() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-amg-line bg-[#fafbfd]">

        <div className="absolute inset-0 grid-paper pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-32 pb-16 relative">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] text-amg-teal/55 mb-10">

            <Link
              to="/"
              className="hover:text-amg-teal transition-colors"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-amg-teal font-medium">
              Founder Services
            </span>

          </nav>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">

            {/* Left */}
            <div className="lg:col-span-7">

              <div className="eyebrow mb-5">
                {FOUNDER_SERVICES_INTRO.eyebrow}
              </div>

              <h1 className="heading-display text-[48px] md:text-[76px] text-amg-teal leading-[0.98] max-w-5xl">
                {FOUNDER_SERVICES_INTRO.title}
              </h1>

              {/* Trust Strip */}
              <div className="flex flex-wrap gap-3 mt-10">

                {[
                  'Pre-Seed',
                  'Seed',
                  'Series A',
                  'North America',
                  'Europe',
                ].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-full border border-amg-line bg-white text-[13px] text-amg-teal/72"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

            {/* Right */}
            <div className="lg:col-span-5">

              <p className="text-[17px] text-amg-teal/72 leading-relaxed">
                {FOUNDER_SERVICES_INTRO.description}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 lg:px-10 bg-white">

        <div className="max-w-[1280px] mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {SERVICES.map((s, i) => {

              const Icon = ICONS[s.slug] || Briefcase;

              const accent =
                s.accent === 'yellow'
                  ? {
                      border: 'border-amg-yellow',
                      iconBg: 'bg-amg-yellow-bg',
                      dot: 'bg-amg-yellow',
                    }
                  : s.accent === 'turquoise'
                  ? {
                      border: 'border-amg-turquoise',
                      iconBg: 'bg-amg-turquoise-bg',
                      dot: 'bg-amg-turquoise',
                    }
                  : {
                      border: 'border-amg-dodgerblue',
                      iconBg: 'bg-amg-teal-bg',
                      dot: 'bg-amg-teal',
                    };

              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className={`group rounded-[28px] border border-amg-line border-t-[4px] ${accent.border} bg-[#fafbfd] min-h-[320px] shadow-soft-sm hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all block overflow-hidden`}
                >

                  <div className="p-8 h-full flex flex-col">

                    {/* Top */}
                    <div className="flex items-center justify-between mb-8">

                      <div
                        className={`w-14 h-14 rounded-2xl ${accent.iconBg} flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-amg-teal" />
                      </div>

                      <div className="flex items-center gap-2">

                        <span
                          className={`w-2.5 h-2.5 rounded-full ${accent.dot}`}
                        />

                        <span className="text-[12px] tracking-[0.18em] uppercase font-semibold text-amg-teal/55">
                          0{i + 1}
                        </span>

                      </div>

                    </div>

                    {/* Content */}
                    <div className="flex-1">

                      <h3 className="font-serif text-[28px] text-amg-teal leading-[1.12] max-w-[320px]">
                        { s.title}
                      </h3>

                      <p className="mt-4 text-[15px] text-amg-teal/68 leading-relaxed max-w-[340px]">
                        {s.tagline}
                      </p>

                    </div>

                    {/* Bottom */}
                    <div className="border-t border-amg-line mt-8 pt-7">

                      <div className="flex items-center justify-between">

                        <span className="text-[13px] font-semibold text-amg-turquoise-2">
                          View Service
                        </span>

                        <ArrowUpRight className="w-4 h-4 text-amg-turquoise-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />

                      </div>

                    </div>

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