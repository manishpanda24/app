import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Search, Download } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { ARTICLES } from '../mock';

const CATEGORIES = ['All', 'Pitch Deck', 'Financial Model', 'Valuation', 'Investor Outreach', 'Investment Readiness'];

export default function Resources() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');
  const filtered = ARTICLES.filter(a => (active === 'All' || a.category === active) && (a.title.toLowerCase().includes(query.toLowerCase()) || a.excerpt.toLowerCase().includes(query.toLowerCase())));

  return (
    <>
      <Navbar />
      <section className="border-b-2 border-amg-ink relative overflow-hidden">
        <div className="absolute inset-0 grid-paper pointer-events-none"/>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-20 lg:py-24 relative">
          <div className="eyebrow text-amg-teal mb-4">Resources</div>
          <h1 className="heading-display text-[48px] md:text-[78px] text-amg-ink">Insights for <span className="italic text-amg-teal">raising</span> founders.</h1>
          <p className="mt-6 text-[17px] text-amg-ink/75 max-w-2xl leading-relaxed">Practical, opinionated articles and downloads from advisors who&apos;ve sat on both sides of the table.</p>
        </div>
      </section>

      {/* Featured downloads */}
      <section className="py-16 px-6 lg:px-10 border-b-2 border-amg-ink">
        <div className="max-w-[1320px] mx-auto">
          <div className="eyebrow text-amg-teal mb-6">Featured Downloads</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amg-yellow border-2 border-amg-ink p-7 shadow-crisp hover-lift flex items-start gap-5">
              <div className="w-12 h-12 bg-amg-cream border-2 border-amg-ink flex items-center justify-center shrink-0"><Download className="w-5 h-5"/></div>
              <div className="flex-1">
                <div className="font-serif text-[22px] font-semibold text-amg-ink">Investor-Grade Financial Model Template</div>
                <p className="mt-1 text-[14px] text-amg-ink/75">5-year P&amp;L, cash flow, cohort and unit economics modules.</p>
                <button className="mt-4 inline-flex items-center gap-2 font-semibold border-2 border-amg-ink px-3 py-1.5 bg-amg-ink text-amg-yellow text-[13px]">Download (Google Sheets) <ArrowUpRight className="w-3.5 h-3.5"/></button>
              </div>
            </div>
            <div className="bg-amg-turquoise border-2 border-amg-ink p-7 shadow-crisp hover-lift flex items-start gap-5">
              <div className="w-12 h-12 bg-amg-cream border-2 border-amg-ink flex items-center justify-center shrink-0"><Download className="w-5 h-5"/></div>
              <div className="flex-1">
                <div className="font-serif text-[22px] font-semibold text-amg-ink">Pitch Deck Skeleton (12 Slides)</div>
                <p className="mt-1 text-[14px] text-amg-ink/85">The exact structure used by founders who&apos;ve closed seed and Series A.</p>
                <button className="mt-4 inline-flex items-center gap-2 font-semibold border-2 border-amg-ink px-3 py-1.5 bg-amg-ink text-amg-turquoise text-[13px]">Download (Google Slides) <ArrowUpRight className="w-3.5 h-3.5"/></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
            <h2 className="heading-display text-[36px] md:text-[44px] text-amg-ink">All articles</h2>
            <div className="flex items-center gap-3 bg-white border-2 border-amg-ink shadow-crisp-sm px-4 py-2.5 w-full lg:w-[360px]">
              <Search className="w-4 h-4 text-amg-ink"/>
              <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search articles" className="bg-transparent flex-1 text-[14px] focus:outline-none placeholder:text-amg-ink/50" />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {CATEGORIES.map(c => (
              <button key={c} onClick={()=>setActive(c)} className={`px-4 py-2 border-2 border-amg-ink text-[12px] font-semibold uppercase tracking-wider transition-colors ${active===c?'bg-amg-ink text-amg-yellow':'bg-amg-cream hover:bg-amg-cream-2'}`}>{c}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map(a => (
              <article key={a.slug} className="bg-white border-2 border-amg-ink p-6 shadow-crisp hover-lift">
                <div className="flex items-center gap-2 mb-5">
                  <span className={`tag-pill ${a.accent==='yellow'?'bg-amg-yellow':a.accent==='turquoise'?'bg-amg-turquoise':'bg-amg-teal text-amg-cream border-amg-ink'}`}>{a.category}</span>
                  <span className="text-[11px] text-amg-ink/60 font-semibold uppercase tracking-wider">{a.readTime}</span>
                </div>
                <h3 className="font-serif text-[22px] font-semibold text-amg-ink leading-tight">{a.title}</h3>
                <p className="mt-3 text-[14px] text-amg-ink/70 leading-relaxed line-clamp-3">{a.excerpt}</p>
                <div className="divider-line my-5"/>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-amg-ink/60 font-semibold">{a.date}</span>
                  <span className="text-[13px] font-semibold text-amg-teal inline-flex items-center gap-1">Read article <ArrowRight className="w-4 h-4"/></span>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-amg-ink/60">No articles match your search.</div>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
