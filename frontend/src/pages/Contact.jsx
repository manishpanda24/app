import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Search,
  Users,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  /* ─────────────────────────────────────────────
     FOUNDER FORM
  ───────────────────────────────────────────── */
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    companyWebsite: '',
    linkedin: '',
    location: '',
    locationOther: '',
    stage: '',
    stageOther: '',
    raiseAmount: '',
    raiseAmountOther: '',
    supportNeeded: '',
    supportNeededOther: '',
    targetCloseTimeline: '',
    targetCloseTimelineOther: '',
    mainChallenge: '',
  });

  /* ─────────────────────────────────────────────
     ACCELERATOR FORM
  ───────────────────────────────────────────── */
  const [acceleratorForm, setAcceleratorForm] =
    useState({
      name: '',
      company: '',
      email: '',
      linkedin: '',
      message: '',
    });

  const [isSubmitting, setIsSubmitting] =
    useState(false);
    const [
  isAcceleratorSubmitting,
  setIsAcceleratorSubmitting,
] = useState(false);

  /* ─────────────────────────────────────────────
     SNACKBAR
  ───────────────────────────────────────────── */
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    type: 'success',
  });

  const showSnackbar = (
    message,
    type = 'success'
  ) => {
    setSnackbar({
      open: true,
      message,
      type,
    });

    setTimeout(() => {
      setSnackbar(prev => ({
        ...prev,
        open: false,
      }));
    }, 3000);
  };

  const formSubmitUrl =
    'https://formsubmit.co/ajax/manishpanda24@gmail.com';
const webhookUrl ="https://script.google.com/macros/s/AKfycbwR-X0sAeAdi6qR12Uzk3IYBvP0LWN8lgkJ7UEXgdDk_LOpxgAPk3qqhR4eV0tHrvjvyg/exec";
  const update = (key, val) =>
    setForm(prev => ({
      ...prev,
      [key]: val,
    }));

  const updateAccelerator = (key, val) =>
    setAcceleratorForm(prev => ({
      ...prev,
      [key]: val,
    }));

  /* ─────────────────────────────────────────────
     FOUNDER SUBMIT
  ───────────────────────────────────────────── */
  const onSubmit = async e => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.company ||
      !form.location ||
      !form.stage ||
      !form.raiseAmount ||
      !form.supportNeeded ||
      !form.targetCloseTimeline
    ) {
      showSnackbar(
        'Please fill in all required fields.',
        'error'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();

      formData.append('Inquiry Type', 'Founder Inquiry');
      formData.append('Full name', form.name);
      formData.append('Email', form.email);
      formData.append('Company name', form.company);
      formData.append('Company website', form.companyWebsite || '-');
      formData.append('Founder LinkedIn', form.linkedin || '-');
      formData.append(
        'Location',
        form.location === 'Others' ? form.locationOther : form.location
      );
      formData.append(
        'Stage',
        form.stage === 'Other' ? form.stageOther : form.stage
      );
      formData.append(
        'Amount planning to raise',
        form.raiseAmount === 'Other' ? form.raiseAmountOther : form.raiseAmount
      );
      formData.append(
        'Support needed',
        form.supportNeeded === 'Other' ? form.supportNeededOther : form.supportNeeded
      );
      formData.append(
        'Target close timeline',
        form.targetCloseTimeline === 'Other'
          ? form.targetCloseTimelineOther
          : form.targetCloseTimeline
      );
      formData.append(
        'Biggest fundraising challenge',
        form.mainChallenge || '-'
      );
      formData.append('_webhook', webhookUrl);
      formData.append('_subject', `New Founder Inquiry from ${form.name}`);
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      const response = await fetch(
        formSubmitUrl,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(
          'Unable to send your message.'
        );
      }

      showSnackbar(
        "Thanks! We'll be in touch shortly.",
        'success'
      );

      setForm({
        name: '',
        email: '',
        company: '',
        companyWebsite: '',
        linkedin: '',
        location: '',
        locationOther: '',
        stage: '',
        stageOther: '',
        raiseAmount: '',
        raiseAmountOther: '',
        supportNeeded: '',
        supportNeededOther: '',
        targetCloseTimeline: '',
        targetCloseTimelineOther: '',
        mainChallenge: '',
      });
    } catch (error) {
      showSnackbar(
        error.message ||
          'Unable to send your message.',
        'error'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* =========================================================
          CONTACT PAGE — DESKTOP STRUCTURE
          Left: Hero + Founder Form
          Right: What to Expect + Next Steps + Accelerator
      ========================================================= */}

      <main className="relative overflow-hidden bg-[#fafbfd]">

        {/* Technical grid across the complete page */}
        <div className="absolute inset-0 grid-paper pointer-events-none" />

        {/* Subtle decorative glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '620px',
            height: '620px',
            right: '-220px',
            top: '-150px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(8,127,136,0.055) 0%, rgba(8,127,136,0) 68%)',
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* =====================================================
                LEFT COLUMN
            ===================================================== */}

            <div className="lg:col-span-8">

              {/* =================================================
                  HERO
              ================================================= */}

              <section className="pt-2 md:pt-1 pb-5">

                {/* Breadcrumb */}

                <nav className="flex items-center gap-2 text-[13px] md:text-[14px] text-amg-teal/55 mb-7">
                  <Link
                    to="/"
                    className="hover:text-amg-teal transition-colors"
                  >
                    Home
                  </Link>

                  <span className="text-amg-teal/35">
                    /
                  </span>

                  <span className="text-amg-teal font-medium">
                    Contact
                  </span>
                </nav>


                {/* Eyebrow */}

                <div className="eyebrow mb-5">
                  FUNDRAISING FIT CALL
                </div>


                {/* Main heading */}

                <h1
                  className="
                    heading-display
                    text-amg-teal
                    leading-[0.94]
                    tracking-[-0.035em]
                    text-[54px]
                    md:text-[68px]
                    lg:text-[72px]
                    max-w-[780px]
                    mb-5
                  "
                >
                  Start With a
                  <br />
                  Fundraising Fit Call
                </h1>


                {/* Description */}

                <p
                  className="
                    text-amg-teal/65
                    text-[15px]
                    md:text-[16px]
                    leading-[1.58]
                    max-w-[720px]
                    mb-5
                  "
                >
                  Tell us where you are, what you're raising, and what support
                  you need. We'll determine whether the Investment Readiness
                  Program, Investor Readiness Diagnostic, or Full Fundraising
                  Support is the right next step.
                </p>


                {/* Fit pills */}

                <div className="flex flex-wrap gap-2.5">

                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-amg-line bg-white text-amg-teal/75 text-[12px] md:text-[13px] font-medium shadow-[0_2px_8px_rgba(6,63,72,0.03)]">
                    <span className="text-[14px]">◷</span>
                    30-minute intro
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-amg-line bg-white text-amg-teal/75 text-[12px] md:text-[13px] font-medium shadow-[0_2px_8px_rgba(6,63,72,0.03)]">
                    <span className="text-[14px]">♙</span>
                    Founder confidential
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-amg-line bg-white text-amg-teal/75 text-[12px] md:text-[13px] font-medium shadow-[0_2px_8px_rgba(6,63,72,0.03)]">
                    <span className="text-[14px]">↗</span>
                    Pre-Seed to Series A
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-amg-line bg-white text-amg-teal/75 text-[12px] md:text-[13px] font-medium shadow-[0_2px_8px_rgba(6,63,72,0.03)]">
                    <span className="text-[14px]">✓</span>
                    No obligation
                  </div>

                </div>

              </section>


              {/* =================================================
                  FOUNDER FORM
              ================================================= */}

              <form
                onSubmit={onSubmit}
                className="card-pro shadow-soft-lg p-6 md:p-7 lg:p-6 mb-10"
              >

                <div className="mb-5">

                  <h2 className="font-serif text-[25px] md:text-[27px] font-semibold text-amg-ink mb-1.5">
                    Tell us about your startup
                  </h2>

                  <p className="text-[12px] md:text-[13px] text-amg-teal/65 leading-relaxed">
                    This short intake helps us understand your goals and determine the right AMG pathway.
                  </p>

                </div>


                {/* Row 1 */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">

                  <Field
                    label="Full name *"
                    value={form.name}
                    onChange={v => update('name', v)}
                    placeholder="Your full name"
                  />

                  <Field
                    label="Email *"
                    type="email"
                    value={form.email}
                    onChange={v => update('email', v)}
                    placeholder="your@email.com"
                  />

                </div>


                {/* Row 2 */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 mt-4">

                  <Field
                    label="Company / Startup name *"
                    value={form.company}
                    onChange={v => update('company', v)}
                    placeholder="Company name"
                  />

                  <Field
                    label="Company website"
                    value={form.companyWebsite}
                    onChange={v => update('companyWebsite', v)}
                    placeholder="https://yourcompany.com"
                  />

                </div>


                {/* Row 3 */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 mt-4">

                  <Field
                    label="Founder LinkedIn"
                    value={form.linkedin}
                    onChange={v => update('linkedin', v)}
                    placeholder="linkedin.com/in/username"
                  />

                  <div>
                    <Label>Where are you located? *</Label>

                    <SelectField
                      value={form.location}
                      onChange={e => update('location', e.target.value)}
                    >
                      <option value="">Select your location</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Asia</option>
                      <option>Europe</option>
                      <option>Others</option>
                    </SelectField>

                    {form.location === 'Others' && (
                      <OtherInput
                        value={form.locationOther}
                        onChange={e =>
                          update('locationOther', e.target.value)
                        }
                      />
                    )}
                  </div>

                </div>


                {/* Row 4 */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 mt-4">

                  <div>
                    <Label>Stage *</Label>

                    <SelectField
                      value={form.stage}
                      onChange={e => update('stage', e.target.value)}
                    >
                      <option value="">Select your stage</option>
                      <option>Pre-Seed</option>
                      <option>Seed</option>
                      <option>Series A</option>
                      <option>Series B</option>
                      <option>Other</option>
                    </SelectField>

                    {form.stage === 'Other' && (
                      <OtherInput
                        value={form.stageOther}
                        onChange={e =>
                          update('stageOther', e.target.value)
                        }
                      />
                    )}
                  </div>


                  <div>
                    <Label>Amount planning to raise *</Label>

                    <SelectField
                      value={form.raiseAmount}
                      onChange={e =>
                        update('raiseAmount', e.target.value)
                      }
                    >
                      <option value="">Select amount range</option>
                      <option>Less than $500K</option>
                      <option>$500K – $1M</option>
                      <option>$1M – $2M</option>
                      <option>$2M – $5M</option>
                      <option>Greater than $5M</option>
                      <option>Not sure</option>
                      <option>Other</option>
                    </SelectField>

                    {form.raiseAmount === 'Other' && (
                      <OtherInput
                        value={form.raiseAmountOther}
                        onChange={e =>
                          update('raiseAmountOther', e.target.value)
                        }
                      />
                    )}
                  </div>

                </div>


                {/* Row 5 */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 mt-4">

                  <div>
                    <Label>
                      What kind of support are you looking for? *
                    </Label>

                    <SelectField
                      value={form.supportNeeded}
                      onChange={e =>
                        update('supportNeeded', e.target.value)
                      }
                    >
                      <option value="">Select support type</option>
                      <option>Investment Readiness Program</option>
                      <option>Investor Readiness Diagnostic</option>
                      <option>Full Fundraising Support</option>
                      <option>Not sure — need guidance</option>
                      <option>Other</option>
                    </SelectField>

                    {form.supportNeeded === 'Other' && (
                      <OtherInput
                        value={form.supportNeededOther}
                        onChange={e =>
                          update('supportNeededOther', e.target.value)
                        }
                      />
                    )}
                  </div>


                  <div>
                    <Label>Target close timeline *</Label>

                    <SelectField
                      value={form.targetCloseTimeline}
                      onChange={e =>
                        update(
                          'targetCloseTimeline',
                          e.target.value
                        )
                      }
                    >
                      <option value="">Select timeline</option>
                      <option>Less than 1 month</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>6+ months</option>
                      <option>Not sure</option>
                      <option>Other</option>
                    </SelectField>

                    {form.targetCloseTimeline === 'Other' && (
                      <OtherInput
                        value={form.targetCloseTimelineOther}
                        onChange={e =>
                          update(
                            'targetCloseTimelineOther',
                            e.target.value
                          )
                        }
                      />
                    )}
                  </div>

                </div>


                {/* Challenge */}

                <div className="mt-4">

                  <Label>
                    Biggest fundraising challenge
                  </Label>

                  <textarea
                    rows={2}
                    value={form.mainChallenge}
                    onChange={e =>
                      update('mainChallenge', e.target.value)
                    }
                    placeholder="What's your biggest challenge or priority right now?"
                    className="w-full bg-white border border-amg-line rounded-md px-3.5 py-2.5 text-[13px] text-amg-ink resize-none focus:border-amg-teal focus:outline-none"
                  />

                </div>


                {/* Submit */}

                <div className="mt-4 flex flex-col md:flex-row md:items-center gap-3">

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary disabled:opacity-70 min-w-[190px] justify-center"
                  >
                    {isSubmitting
                      ? 'Sending…'
                      : 'Request a Fit Call'}

                    <ArrowRight className="w-4 h-4" />
                  </button>


                  <p className="text-[10px] md:text-[11px] text-amg-mute leading-[1.35] max-w-[280px]">
                    If there is a fit, we'll recommend the right next step and let you know what additional materials may be useful.
                  </p>


                  <div className="flex items-center gap-2 text-[10px] md:text-[11px] text-amg-mute whitespace-nowrap">

                    <ShieldCheck className="w-4 h-4" />

                    Founder information kept confidential.

                  </div>

                </div>

              </form>

            </div>


            {/* =====================================================
                RIGHT COLUMN
            ===================================================== */}

            <aside className="lg:col-span-4 pt-8 lg:pt-[321px] space-y-5">

              {/* =================================================
                  WHAT TO EXPECT
              ================================================= */}

              <div className="card-pro shadow-soft-lg p-6">

                <h3 className="font-serif text-[21px] md:text-[22px] leading-tight text-amg-ink mb-5">
                  What to expect
                </h3>

                <div className="space-y-4">

                  {[
                    '30 minutes',
                    'Right-fit guidance',
                    'No obligation',
                    'Next-step clarity',
                  ].map(item => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2
                        className="w-[17px] h-[17px] flex-shrink-0"
                        style={{
                          color: '#f2c200',
                          fill: '#f2c200',
                        }}
                      />

                      <span className="text-[13px] text-amg-teal/70">
                        {item}
                      </span>

                    </div>
                  ))}

                </div>

              </div>


              {/* =================================================
                  POSSIBLE NEXT STEPS
              ================================================= */}

              <div className="card-pro shadow-soft-lg p-5">

                <h3 className="font-serif text-[21px] leading-tight text-amg-ink mb-4">
                  Possible next steps
                </h3>

                <div className="space-y-2.5">


                  {/* Investment Readiness */}

                  <div className="group flex items-center gap-3 rounded-lg border border-amg-line bg-white p-3.5 transition-all duration-200 hover:shadow-soft-lg">

                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: '#063f48',
                        color: '#ffffff',
                      }}
                    >
                      <BarChart3 className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">

                      <h4 className="font-serif text-[15px] font-semibold text-amg-ink leading-tight">
                        Investment Readiness Program
                      </h4>

                      <p className="text-[11px] text-amg-teal/65 leading-[1.35] mt-1">
                        Build your fundraising foundation.
                      </p>

                    </div>

                    {/* <ArrowRight className="w-4 h-4 flex-shrink-0 text-amg-teal transition-transform duration-200 group-hover:translate-x-1" /> */}

                  </div>


                  {/* Diagnostic */}

                  <div className="group flex items-center gap-3 rounded-lg border border-amg-line bg-white p-3.5 transition-all duration-200 hover:shadow-soft-lg">

                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: '#6c9ba3',
                        color: '#ffffff',
                      }}
                    >
                      <Search className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">

                      <h4 className="font-serif text-[15px] font-semibold text-amg-ink leading-tight">
                        Diagnostic Review
                      </h4>

                      <p className="text-[11px] text-amg-teal/65 leading-[1.35] mt-1">
                        Get an investor-readiness assessment.
                      </p>

                    </div>

                    {/* <ArrowRight className="w-4 h-4 flex-shrink-0 text-amg-teal transition-transform duration-200 group-hover:translate-x-1" /> */}

                  </div>


                  {/* Full Fundraising Support */}

                  <div className="group flex items-center gap-3 rounded-lg border border-amg-line bg-white p-3.5 transition-all duration-200 hover:shadow-soft-lg">

                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: '#6c9ba3',
                        color: '#ffffff',
                      }}
                    >
                      <Users className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">

                      <h4 className="font-serif text-[15px] font-semibold text-amg-ink leading-tight">
                        Full Fundraising Support
                      </h4>

                      <p className="text-[11px] text-amg-teal/65 leading-[1.35] mt-1">
                        End-to-end support through your raise.
                      </p>

                    </div>

                    {/* <ArrowRight className="w-4 h-4 flex-shrink-0 text-amg-teal transition-transform duration-200 group-hover:translate-x-1" /> */}

                  </div>

                </div>

              </div>


              {/* =================================================
                  ACCELERATOR
              ================================================= */}

              {/* =================================================
                  ACCELERATOR / ECOSYSTEM CTA
              ================================================= */}

              <div className="card-pro shadow-soft-lg p-6">

                <div className="text-[10px] tracking-[0.18em] uppercase text-amg-teal font-semibold mb-3">
                  FOR ACCELERATORS & ECOSYSTEMS
                </div>

                <h3 className="font-serif text-[24px] leading-tight text-amg-ink mb-3">
                  Let’s build together.
                </h3>

                <p className="text-[13px] text-amg-teal/65 leading-[1.55] mb-5 max-w-[330px]">
                  Looking for workshops, mentor support, evaluation, or EIR-style partnership?
                </p>

                <button
                  type="button"
                  onClick={() => {
                    const founderForm = document.querySelector(
                      'form.card-pro'
                    );

                    if (founderForm) {
                      founderForm.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                      });
                    }
                  }}
                  className="btn-primary"
                >
                  Partner with AMG
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>

            </aside>

          </div>

        </div>

      </main>


      {/* =========================================================
          SNACKBAR
      ========================================================= */}

      {snackbar.open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">

          <div
            className={`px-6 py-4 rounded-xl shadow-2xl text-white text-[14px] font-medium backdrop-blur-md transition-all duration-300 ${
              snackbar.type === 'success'
                ? 'bg-[#0f766e]'
                : 'bg-red-600'
            }`}
          >
            {snackbar.message}
          </div>

        </div>
      )}

      <Footer />
    </>
  );

}

/* ─────────────────────────────────────────────
   FIELD
───────────────────────────────────────────── */
function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}) {
  return (
    <div>
      <Label>{label}</Label>

      <input
        type={type}
        value={value}
        onChange={e =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        className="w-full bg-white border border-amg-line rounded-md px-3.5 py-3 text-[14px] text-amg-ink focus:border-amg-teal"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   LABEL
───────────────────────────────────────────── */
function Label({ children }) {
  return (
    <label className="block text-[11px] tracking-[0.16em] uppercase font-semibold text-amg-mute mb-2">
      {children}
    </label>
  );
}

/* ─────────────────────────────────────────────
   SELECT
───────────────────────────────────────────── */
function SelectField({
  children,
  value,
  onChange,
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full bg-white border border-amg-line rounded-md px-3.5 py-3 text-[14px] text-amg-ink focus:border-amg-teal"
    >
      {children}
    </select>
  );
}

/* ─────────────────────────────────────────────
   OTHER INPUT
───────────────────────────────────────────── */
function OtherInput({
  value,
  onChange,
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Please specify"
      className="w-full mt-2 bg-white border border-amg-line rounded-md px-3.5 py-3 text-[14px] text-amg-ink focus:border-amg-teal"
    />
  );
}