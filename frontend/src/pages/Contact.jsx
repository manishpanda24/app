import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ShieldCheck,
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
    companyEmail: '',
    linkedin: '',

    hearAbout: '',
    hearAboutOther: '',

    location: '',
    locationOther: '',

    raiseAmount: '',
    raiseAmountOther: '',

    valuation: '',
    valuationOther: '',

    investorKit: '',
    investorKitOther: '',

    supportNeeded: '',
    supportNeededOther: '',

    serviceLookingFor: '',
    serviceLookingForOther: '',

    message: '',
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
      !form.location
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

      formData.append(
        'Inquiry Type',
        'Founder Inquiry'
      );

      formData.append('Full name', form.name);
      formData.append('Email', form.email);

      formData.append(
        'Company name',
        form.company
      );

      formData.append(
        'Company website',
        form.companyWebsite || '-'
      );

      formData.append(
        'Official company email',
        form.companyEmail || '-'
      );

      formData.append(
        'LinkedIn',
        form.linkedin || '-'
      );

      formData.append(
        'How did you hear about me',
        form.hearAbout === 'Others'
          ? form.hearAboutOther
          : form.hearAbout
      );

      formData.append(
        'Location',
        form.location === 'Others'
          ? form.locationOther
          : form.location
      );

      formData.append(
        'Raise Amount',
        form.raiseAmount === 'Others'
          ? form.raiseAmountOther
          : form.raiseAmount
      );

      formData.append(
        'Valuation',
        form.valuation === 'Others'
          ? form.valuationOther
          : form.valuation
      );

      formData.append(
        'Investor Kit',
        form.investorKit === 'Others'
          ? form.investorKitOther
          : form.investorKit
      );

      formData.append(
        'Support Needed',
        form.supportNeeded === 'Others'
          ? form.supportNeededOther
          : form.supportNeeded
      );

      formData.append(
        'Service Looking For',
        form.serviceLookingFor ===
          'Others'
          ? form.serviceLookingForOther
          : form.serviceLookingFor
      );

      formData.append(
        'Message',
        form.message || '-'
      );

      formData.append(
        '_subject',
        `New Founder Inquiry from ${form.name}`
      );

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
        companyEmail: '',
        linkedin: '',

        hearAbout: '',
        hearAboutOther: '',

        location: '',
        locationOther: '',

        raiseAmount: '',
        raiseAmountOther: '',

        valuation: '',
        valuationOther: '',

        investorKit: '',
        investorKitOther: '',

        supportNeeded: '',
        supportNeededOther: '',

        serviceLookingFor: '',
        serviceLookingForOther: '',

        message: '',
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

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-amg-line">
        <div className="absolute inset-0 grid-paper pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-24 relative">
          <nav className="flex items-center gap-2 text-[12px] text-amg-mute mb-8">
            <Link
              to="/"
              className="hover:text-amg-ink"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-amg-ink">
              Contact
            </span>
          </nav>

          <div className="eyebrow mb-4">
            Get in touch
          </div>

          <h1 className="heading-display text-[48px] md:text-[72px] text-amg-ink max-w-4xl">
            Let&rsquo;s start the{' '}
            <em>conversation</em>.
          </h1>

          <p className="mt-7 text-[17px] text-amg-ink/70 max-w-2xl leading-relaxed">
            Whether you&rsquo;re a founder
            ready to raise, an accelerator
            looking to support your cohort,
            or simply exploring how we can
            help — we&rsquo;d love to hear
            from you.
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* ─────────────────────────────
              FOUNDER FORM
          ───────────────────────────── */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-7 card-pro shadow-soft-lg p-8 lg:p-10"
          >
            <div className="eyebrow mb-2">
              Founder inquiry
            </div>

            <h2 className="font-serif text-[28px] font-medium text-amg-ink mb-7">
              Tell us about your raise.
            </h2>

            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                label="Full name *"
                value={form.name}
                onChange={v =>
                  update('name', v)
                }
                placeholder="Your full name"
              />

              <Field
                label="Email *"
                type="email"
                value={form.email}
                onChange={v =>
                  update('email', v)
                }
                placeholder="your@email.com"
              />
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <Field
                label="Company / Startup name *"
                value={form.company}
                onChange={v =>
                  update('company', v)
                }
                placeholder="Company name"
              />

              <Field
                label="Company website"
                value={form.companyWebsite}
                onChange={v =>
                  update(
                    'companyWebsite',
                    v
                  )
                }
                placeholder="https://yourcompany.com"
              />
            </div>

            {/* ROW 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <Field
                label="Official company email"
                type="email"
                value={form.companyEmail}
                onChange={v =>
                  update(
                    'companyEmail',
                    v
                  )
                }
                placeholder="hello@company.com"
              />

              <Field
                label="LinkedIn"
                value={form.linkedin}
                onChange={v =>
                  update('linkedin', v)
                }
                placeholder="linkedin.com/in/username"
              />
            </div>

            {/* HEAR ABOUT */}
            <div className="mt-5">
              <Label>
                How did you hear about me?
              </Label>

              <SelectField
                value={form.hearAbout}
                onChange={e =>
                  update(
                    'hearAbout',
                    e.target.value
                  )
                }
              >
                <option value="">
                  Select option
                </option>
                <option>LinkedIn</option>
                <option>Website</option>
                <option>
                  Anyone referred you to me?
                </option>
                <option>
                  Google / Yahoo Search
                </option>
                <option>Others</option>
              </SelectField>

              {form.hearAbout ===
                'Others' && (
                <OtherInput
                  value={
                    form.hearAboutOther
                  }
                  onChange={e =>
                    update(
                      'hearAboutOther',
                      e.target.value
                    )
                  }
                />
              )}
            </div>

            {/* LOCATION */}
            <div className="mt-5">
              <Label>
                Where are you located? *
              </Label>

              <SelectField
                value={form.location}
                onChange={e =>
                  update(
                    'location',
                    e.target.value
                  )
                }
              >
                <option value="">
                  Select option
                </option>

                <option>
                  United States
                </option>

                <option>Canada</option>

                <option>
                  United Kingdom
                </option>

                <option>Asia</option>

                <option>Europe</option>

                <option>Others</option>
              </SelectField>

              {form.location ===
                'Others' && (
                <OtherInput
                  value={
                    form.locationOther
                  }
                  onChange={e =>
                    update(
                      'locationOther',
                      e.target.value
                    )
                  }
                />
              )}
            </div>

            {/* RAISE */}
            <div className="mt-5">
              <Label>
                How much are you looking to
                raise?
              </Label>

              <SelectField
                value={form.raiseAmount}
                onChange={e =>
                  update(
                    'raiseAmount',
                    e.target.value
                  )
                }
              >
                <option value="">
                  Select option
                </option>

                <option>
                  Less than or equal to 1 Mn
                </option>

                <option>
                  Between 1Mn to 2Mn
                </option>

                <option>
                  Greater than 2Mn
                </option>

                <option>Not Sure</option>

                <option>Others</option>
              </SelectField>

              {form.raiseAmount ===
                'Others' && (
                <OtherInput
                  value={
                    form.raiseAmountOther
                  }
                  onChange={e =>
                    update(
                      'raiseAmountOther',
                      e.target.value
                    )
                  }
                />
              )}
            </div>
{/* ─────────────────────────────
    VALUATION
───────────────────────────── */}
<div className="mt-5">
  <Label>
    What valuation are you expecting or wanting to raise at (in your local currency)? *
  </Label>

  <SelectField
    value={form.valuation}
    onChange={e =>
      update('valuation', e.target.value)
    }
  >
    <option value="">Select option</option>

    <option>Between 2Mn to 5Mn</option>

    <option>Between 5Mn to 10Mn</option>

    <option>Between 10Mn to 20Mn</option>

    <option>Greater than 20Mn</option>

    <option>Not Sure</option>

    <option>Others</option>
  </SelectField>

  {form.valuation === 'Others' && (
    <OtherInput
      value={form.valuationOther}
      onChange={e =>
        update(
          'valuationOther',
          e.target.value
        )
      }
    />
  )}
</div>

{/* ─────────────────────────────
    INVESTOR KIT
───────────────────────────── */}
<div className="mt-5">
  <Label>
    Which of these investor kit items are ready to go? *
  </Label>

  <SelectField
    value={form.investorKit}
    onChange={e =>
      update(
        'investorKit',
        e.target.value
      )
    }
  >
    <option value="">Select option</option>

    <option>Financial model</option>

    <option>
      Valuation analysis
    </option>

    <option>
      Curated target investor list
    </option>

    <option>Data room</option>

    <option>Pitch Deck</option>

    <option>Others</option>
  </SelectField>

  {form.investorKit ===
    'Others' && (
    <OtherInput
      value={form.investorKitOther}
      onChange={e =>
        update(
          'investorKitOther',
          e.target.value
        )
      }
    />
  )}
</div>

{/* ─────────────────────────────
    SUPPORT NEEDED
───────────────────────────── */}
<div className="mt-5">
  <Label>
    What kind of support are you looking for in your fundraising process? *
  </Label>

  <SelectField
    value={form.supportNeeded}
    onChange={e =>
      update(
        'supportNeeded',
        e.target.value
      )
    }
  >
    <option value="">Select option</option>

    <option>
      It's time draining — I wish
      someone would just do it for me
    </option>

    <option>
      This is difficult, but I just
      need a "wingman" to get me over
      the hurdle
    </option>

    <option>
      I've got this — I just need a
      second pair of eyes so I can DIY
      it
    </option>

    <option>Others</option>
  </SelectField>

  {form.supportNeeded ===
    'Others' && (
    <OtherInput
      value={form.supportNeededOther}
      onChange={e =>
        update(
          'supportNeededOther',
          e.target.value
        )
      }
    />
  )}
</div>

{/* ─────────────────────────────
    SERVICES
───────────────────────────── */}
<div className="mt-5">
  <Label>
    What services are you looking for? *
  </Label>

  <SelectField
    value={form.serviceLookingFor}
    onChange={e =>
      update(
        'serviceLookingFor',
        e.target.value
      )
    }
  >
    <option value="">Select option</option>

    <option>
      Pitch Deck Review
    </option>

    <option>
      Pitch Deck Creation
    </option>

    <option>
      Financial Modelling
    </option>

    <option>Valuation</option>

    <option>
      Investor Outreach
    </option>

    <option>
      Investor Readiness
    </option>

    <option>
      Ask Me Anything Session
    </option>

    <option>Others</option>
  </SelectField>

  {form.serviceLookingFor ===
    'Others' && (
    <OtherInput
      value={
        form.serviceLookingForOther
      }
      onChange={e =>
        update(
          'serviceLookingForOther',
          e.target.value
        )
      }
    />
  )}
</div>
            {/* MESSAGE */}
            <div className="mt-5">
              <Label>Message</Label>

              <textarea
                rows={4}
                value={form.message}
                onChange={e =>
                  update(
                    'message',
                    e.target.value
                  )
                }
                placeholder="Anything else you'd like to share?"
                className="w-full bg-white border border-amg-line rounded-md px-3.5 py-3 text-[14px] resize-none focus:border-amg-teal"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary mt-7 disabled:opacity-70"
            >
              {isSubmitting
                ? 'Sending…'
                : 'Submit Inquiry'}

              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="mt-5 flex items-center gap-2 text-[12px] text-amg-mute">
              <ShieldCheck className="w-3.5 h-3.5" />

              All inquiries protected under
              mutual NDA on request.
            </div>
          </form>

          {/* ─────────────────────────────
              RIGHT SIDEBAR
          ───────────────────────────── */}
          <aside className="lg:col-span-5 space-y-5">
            {/* ACCELERATOR FORM */}
            <form
              onSubmit={async e => {
                e.preventDefault();

                if (
                  !acceleratorForm.name ||
                  !acceleratorForm.company ||
                  !acceleratorForm.email
                ) {
                  showSnackbar(
                    'Please fill in all required accelerator fields.',
                    'error'
                  );
                  return;
                }

                try {
                  const formData =
                    new FormData();

                  formData.append(
                    'Inquiry Type',
                    'Accelerator / Partner'
                  );

                  formData.append(
                    'Name',
                    acceleratorForm.name
                  );

                  formData.append(
                    'Company Name',
                    acceleratorForm.company
                  );

                  formData.append(
                    'Company Email',
                    acceleratorForm.email
                  );

                  formData.append(
                    'LinkedIn',
                    acceleratorForm.linkedin ||
                      '-'
                  );

                  formData.append(
                    'Message',
                    acceleratorForm.message ||
                      '-'
                  );

                  formData.append(
                    '_subject',
                    `New Accelerator Inquiry from ${acceleratorForm.company}`
                  );

                  formData.append(
                    '_captcha',
                    'false'
                  );

                  formData.append(
                    '_template',
                    'table'
                  );

                  const response =
                    await fetch(
                      formSubmitUrl,
                      {
                        method: 'POST',
                        headers: {
                          Accept:
                            'application/json',
                        },
                        body: formData,
                      }
                    );

                  if (!response.ok) {
                    throw new Error(
                      'Unable to send inquiry.'
                    );
                  }

                  showSnackbar(
                    'Accelerator inquiry submitted successfully.',
                    'success'
                  );

                  setAcceleratorForm({
                    name: '',
                    company: '',
                    email: '',
                    linkedin: '',
                    message: '',
                  });
                } catch (error) {
                  showSnackbar(
                    error.message ||
                      'Unable to submit inquiry.',
                    'error'
                  );
                }
              }}
              className="card-pro shadow-soft-lg p-7"
            >
              <div className="text-[11px] tracking-[0.18em] uppercase text-amg-teal font-semibold mb-3">
                For Accelerators
              </div>

              <h3 className="font-serif text-[28px] leading-tight text-amg-ink mb-6">
                Partner with us for your
                cohort.
              </h3>

              <div className="space-y-4">
                <Field
                  label="Full name *"
                  value={acceleratorForm.name}
                  onChange={v =>
                    updateAccelerator(
                      'name',
                      v
                    )
                  }
                  placeholder="Your full name"
                />

                <Field
                  label="Company / Accelerator name *"
                  value={
                    acceleratorForm.company
                  }
                  onChange={v =>
                    updateAccelerator(
                      'company',
                      v
                    )
                  }
                  placeholder="Company name"
                />

                <Field
                  label="Company email *"
                  type="email"
                  value={
                    acceleratorForm.email
                  }
                  onChange={v =>
                    updateAccelerator(
                      'email',
                      v
                    )
                  }
                  placeholder="hello@company.com"
                />

                <Field
                  label="LinkedIn"
                  value={
                    acceleratorForm.linkedin
                  }
                  onChange={v =>
                    updateAccelerator(
                      'linkedin',
                      v
                    )
                  }
                  placeholder="linkedin.com/in/username"
                />

                <div>
                  <Label>Message</Label>

                  <textarea
                    rows={4}
                    value={
                      acceleratorForm.message
                    }
                    onChange={e =>
                      updateAccelerator(
                        'message',
                        e.target.value
                      )
                    }
                    placeholder="Tell us about your accelerator or partnership needs..."
                    className="w-full bg-white border border-amg-line rounded-md px-3.5 py-3 text-[14px] resize-none focus:border-amg-teal"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary mt-6"
              >
                Submit Inquiry

                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

          
          </aside>
        </div>
      </section>

      {/* SNACKBAR */}
      {snackbar.open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
          <div
            className={`px-6 py-4 rounded-xl shadow-2xl text-white text-[14px] font-medium backdrop-blur-md transition-all duration-300 ${
              snackbar.type ===
              'success'
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