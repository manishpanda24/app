import { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', stage: 'Pre-Seed', message: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in name, email and message.');
      return;
    }
    const stored = JSON.parse(localStorage.getItem('amg_contacts') || '[]');
    stored.push({ ...form, ts: new Date().toISOString() });
    localStorage.setItem('amg_contacts', JSON.stringify(stored));
    toast.success('Thanks! We will be in touch within one business day.');
    setForm({ name: '', email: '', company: '', stage: 'Pre-Seed', message: '' });
  };

  return (
    <>
      <Navbar />

      <section className="border-b-2 border-amg-ink relative overflow-hidden">
        <div className="absolute inset-0 grid-paper pointer-events-none"/>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-20 lg:py-28 relative">
          <div className="eyebrow text-amg-teal mb-4">Get in touch</div>
          <h1 className="heading-display text-[48px] md:text-[78px] text-amg-ink max-w-4xl">Let&rsquo;s start the <span className="italic text-amg-teal">conversation</span>.</h1>
          <p className="mt-7 text-[17px] text-amg-ink/75 max-w-2xl leading-relaxed">
            Whether you&rsquo;re a founder ready to raise, an accelerator looking to support your cohort, or simply exploring how we can help — we&rsquo;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-7 bg-white border-2 border-amg-ink p-8 lg:p-10 shadow-crisp-lg">
            <div className="eyebrow text-amg-teal mb-2">Founder Inquiry</div>
            <h2 className="font-serif text-[28px] font-semibold text-amg-ink mb-7">Tell us about your raise.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Name *" value={form.name} onChange={(v)=>setForm({...form, name:v})} placeholder="Your full name"/>
              <Field label="Email *" value={form.email} onChange={(v)=>setForm({...form, email:v})} placeholder="your@email.com" type="email"/>
              <Field label="Company" value={form.company} onChange={(v)=>setForm({...form, company:v})} placeholder="Company name"/>
              <div>
                <label className="eyebrow text-amg-ink/70 mb-1.5 block">Funding Stage</label>
                <select value={form.stage} onChange={(e)=>setForm({...form, stage:e.target.value})} className="w-full bg-amg-cream border-2 border-amg-ink px-3 py-3 text-[14px] focus:outline-none focus:bg-amg-cream-2">
                  {['Pre-Seed','Seed','Series A','Series B','Accelerator','Other'].map(s=> <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label className="eyebrow text-amg-ink/70 mb-1.5 block">Message *</label>
              <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} rows={6} placeholder="What stage are you at, and what do you need help with?" className="w-full bg-amg-cream border-2 border-amg-ink px-3 py-3 text-[14px] focus:outline-none focus:bg-amg-cream-2 resize-none"/>
            </div>
            <button type="submit" className="btn-primary mt-7">Send Message <ArrowUpRight className="w-4 h-4"/></button>
            <p className="mt-4 text-[12px] text-amg-ink/60">We respond within one business day. Your details are never shared.</p>
          </form>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-amg-ink text-amg-cream border-2 border-amg-ink p-7 shadow-crisp">
              <div className="eyebrow text-amg-yellow mb-3">Direct contact</div>
              <div className="space-y-4 text-[14px]">
                <div className="flex items-start gap-3"><Mail className="w-4 h-4 mt-1 text-amg-yellow"/><a href="mailto:hello@amgventures.co" className="link-under">hello@amgventures.co</a></div>
                <div className="flex items-start gap-3"><Phone className="w-4 h-4 mt-1 text-amg-yellow"/><span>+1 (415) 555-0142</span></div>
                <div className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-1 text-amg-yellow"/><span>San Francisco · London · Toronto</span></div>
                <div className="flex items-start gap-3"><Linkedin className="w-4 h-4 mt-1 text-amg-yellow"/><a href="https://www.linkedin.com/in/gauravmishra-amg/" target="_blank" rel="noreferrer" className="link-under">Connect on LinkedIn</a></div>
              </div>
            </div>

            <div className="bg-amg-yellow border-2 border-amg-ink p-7 shadow-crisp">
              <div className="eyebrow mb-3">Office hours</div>
              <div className="font-serif text-[22px] font-semibold text-amg-ink leading-tight">Mon – Fri · 9am – 6pm PT</div>
              <p className="mt-2 text-[13px] text-amg-ink/80">All new founder engagements start with a free 30-minute strategy call.</p>
            </div>

            <div className="bg-amg-turquoise border-2 border-amg-ink p-7 shadow-crisp">
              <div className="eyebrow mb-3">For Accelerators</div>
              <p className="text-[14px] text-amg-ink/85">Looking to support your cohort with mentorship, EIR services, or demo day prep? We work with 15+ programs across NA &amp; Europe.</p>
              <a href="mailto:partners@amgventures.co" className="mt-4 inline-flex items-center gap-2 font-semibold border-2 border-amg-ink px-3 py-1.5 bg-amg-ink text-amg-turquoise text-[13px]">Email partnerships <ArrowUpRight className="w-3.5 h-3.5"/></a>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Field({ label, value, onChange, placeholder, type='text' }) {
  return (
    <div>
      <label className="eyebrow text-amg-ink/70 mb-1.5 block">{label}</label>
      <input type={type} value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder} className="w-full bg-amg-cream border-2 border-amg-ink px-3 py-3 text-[14px] focus:outline-none focus:bg-amg-cream-2"/>
    </div>
  );
}
