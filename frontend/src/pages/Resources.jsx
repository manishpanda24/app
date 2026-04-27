import { Link } from 'react-router-dom';
import { ArrowRight, Search, Download } from 'lucide-react';
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
      <section className="relative overflow-hidden border-b border-amg-line">
        <div className="absolute inset-0 grid-paper pointer-events-none"/>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-24 relative">
          <nav className="flex items-center gap-2 text-[12px] text-amg-mute mb-8">
            <Link to="/" className="hover:text-amg-ink">Home</Link>
            <span>/</span>
            <span className="text-amg-ink">Resources</span>
          </nav>
          <div className="eyebrow mb-4">Insights & Tools</div>
          <h1 className="heading-display text-[48px] md:text-[72px] text-amg-ink max-w-4xl">Notes from the <em>founder room</em>.</h1>
          <p className="mt-6 text-[17px] text-amg-ink/70 max-w-2xl leading-relaxed">Practical, opinionated articles and downloads from advisors who&apos;ve sat on both sides of the table.</p>
        </div>
      </section>

      {/* Featured downloads */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="eyebrow mb-6">Featured downloads</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-pro shadow-soft p-7 hover-lift flex items-start gap-5">
              <div className="w-12 h-12 rounded-md bg-soft-yellow border border-amg-line flex items-center justify-center shrink-0">
                <Download className="w-5 h-5 text-amg-ink"/>
              </div>
              <div className="flex-1">
                <div className="text-[10.5px] tracking-[0.18em] uppercase font-semibold text-amg-teal mb-1">Spreadsheet template</div>
                <div className="font-serif text-[22px] font-medium text-amg-ink">Investor-Grade Financial Model</div>
                <p className="mt-1.5 text-[13.5px] text-amg-ink/70">5-year P&amp;L, cash flow, cohort and unit economics modules.</p>
                <button className="mt-5 inline-flex items-center gap-2 font-semibold text-[13px] text-amg-teal link-under">Download (Google Sheets) <ArrowRight className="w-4 h-4"/></button>
              </div>
            </div>
            <div className="card-pro shadow-soft p-7 hover-lift flex items-start gap-5">
              <div className="w-12 h-12 rounded-md bg-soft-turquoise border border-amg-line flex items-center justify-center shrink-0">
                <Download className="w-5 h-5 text-amg-ink"/>
              </div>
              <div className="flex-1">
                <div className="text-[10.5px] tracking-[0.18em] uppercase font-semibold text-amg-teal mb-1">Slide template</div>
                <div className="font-serif text-[22px] font-medium text-amg-ink">Pitch Deck Skeleton (12 Slides)</div>
                <p className="mt-1.5 text-[13.5px] text-amg-ink/70">The exact structure used by founders who close seed and Series A.</p>
                <button className="mt-5 inline-flex items-center gap-2 font-semibold text-[13px] text-amg-teal link-under">Download (Google Slides) <ArrowRight className="w-4 h-4"/></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 px-6 lg:px-10 border-t border-amg-line">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
            <h2 className="heading-display text-[32px] md:text-[40px] text-amg-ink">All articles</h2>
            <div className="flex items-center gap-3 card-pro px-4 py-2.5 w-full lg:w-[360px]">
              <Search className="w-4 h-4 text-amg-mute"/>
              <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search articles" className="bg-transparent flex-1 text-[14px] focus:outline-none placeholder:text-amg-mute" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map(c => (
              <button key={c} onClick={()=>setActive(c)} className={`px-3.5 py-2 rounded-full text-[12px] font-semibold transition-colors ${active===c?'bg-amg-ink text-amg-cream':'bg-white border border-amg-line text-amg-ink hover:border-amg-line-2'}`}>{c}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(a => (
              <article key={a.slug} className="card-pro shadow-soft p-7 hover-lift">
                <div className="flex items-center gap-3 mb-5">
                  <span className="tag-pill"><span className={`dot ${a.accent==='yellow'?'bg-amg-yellow':a.accent==='turquoise'?'bg-amg-turquoise':'bg-amg-teal'}`}/>{a.category}</span>
                  <span className="text-[11px] text-amg-mute font-medium">{a.readTime}</span>
                </div>
                <h3 className="font-serif text-[21px] font-medium text-amg-ink leading-snug">{a.title}</h3>
                <p className="mt-3 text-[14px] text-amg-ink/65 leading-relaxed line-clamp-3">{a.excerpt}</p>
                <div className="hr-thin my-6"/>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-amg-mute">{a.date}</span>
                  <span className="text-[13px] font-semibold text-amg-teal inline-flex items-center gap-1">Read article <ArrowRight className="w-4 h-4"/></span>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-amg-mute">No articles match your search.</div>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
