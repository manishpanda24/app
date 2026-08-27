import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarDays,
  ClipboardCheck,
  Clock,
  GraduationCap,
  ShieldCheck,
  Star,
  Target,
  Users,
} from 'lucide-react';

const paths = [
  {
    icon: GraduationCap,
    title: 'Investment Readiness Program (IRP)',
    text: 'Learn and build the foundations to become investor-ready.',
  },
  {
    icon: ClipboardCheck,
    title: 'Investor Readiness Diagnostic',
    text: 'Get an investor assessment and a clear, prioritized roadmap.',
  },
  {
    icon: Target,
    title: 'Full Fundraising Execution',
    text: 'Hands-on support to prepare, engage, and close your raise.',
  },
];

const fitBenefits = [
  {
    icon: Clock,
    title: '30 minutes',
    text: 'A focused conversation about your stage, goals, and fundraising needs.',
  },
  {
    icon: ShieldCheck,
    title: 'No obligation',
    text: 'Get clarity on next steps - whether you work with us or not.',
  },
  {
    icon: Users,
    title: 'Right-fit guidance',
    text: "We'll recommend the best path based on where you are today.",
  },
];

export default function CTASection() {
  return (
    <section className="py-20 px-6 lg:px-10 bg-white">
      <div className="max-w-[1320px] mx-auto">
        <div className="fit-call-card relative overflow-hidden rounded-[28px] p-8 md:p-12 lg:p-16 shadow-soft-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-7 flex flex-col">
              <div className="text-[13px] tracking-[0.18em] uppercase text-amg-yellow font-semibold">
                Not Sure Which Path Fits?
              </div>
              <div className="mt-4 h-[3px] w-10 rounded-full bg-amg-yellow" />

              <h2 className="mt-6 font-serif text-[42px] md:text-[60px] lg:text-[68px] leading-[1.02] text-white">
                Start With a Fundraising Fit Call
              </h2>

              <p className="mt-7 max-w-3xl text-[17px] md:text-[20px] leading-relaxed text-white/84 font-medium">
                Tell us where you are, what you're raising, and what support you need.
                We'll determine whether the IRP, Investor Readiness Diagnostic,
                or full Fundraising Execution offering is the right next step.
              </p>

              <div className="fit-path-heading mt-12">
                <span />
                We'll Help You Find the Right Path
                <span />
              </div>

              <div className="fit-path-grid mt-7">
                {paths.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="fit-path-item">
                      <div className="fit-path-icon">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center lg:border-l lg:border-white/18 lg:pl-12">
              <Link to="/contact" className="fit-call-button">
                <CalendarDays className="w-7 h-7" />
                <span>Book a 30-Minute Fit Call</span>
                <ArrowRight className="w-6 h-6" />
              </Link>

              <p className="mt-6 text-center text-[15px] md:text-[17px] leading-relaxed text-white/72 font-medium">
                No obligation <span>•</span> 30 minutes <span>•</span> For founders considering AMG services
              </p>

              <div className="mt-9 pt-8 border-t border-white/14 space-y-8">
                {fitBenefits.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="fit-benefit">
                      <div className="fit-benefit-icon">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="fit-note mt-12">
            <Star className="w-5 h-5 fill-amg-yellow text-amg-yellow" />
            <span>New Diagnostic and Fundraising engagements begin here.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
