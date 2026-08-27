import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import Logo from '../images/download.png';

const footerGroups = [
  {
    title: 'Services',
    links: [
      { label: 'Investment Readiness Program', to: '/pricing' },
      { label: 'Diagnostic Review', to: '/contact' },
      { label: 'Fundraising Execution', to: '/founder-services' },
    ],
  },
  {
    title: 'Who We Work With',
    links: [
      { label: 'Founders', to: '/founder-services' },
      { label: 'Accelerators & Ecosystems', to: '/contact' },
      { label: 'Pre-Seed to Series A', to: '/pricing' },
      { label: 'North America & Europe', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Gaurav', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Privacy', to: '/' },
      { label: 'Terms', to: '/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer-dark mt-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="footer-main-grid">
          <div className="footer-brand-panel">
            <Link to="/" className="footer-brand-link">
              <img
                src={Logo}
                alt="AMG Venture Partners"
                className="w-[86px] h-[86px] object-contain shrink-0"
              />

              <div>
                <div className="footer-logo-text">AMG</div>
                <div className="footer-logo-subtext">Venture Partners</div>
              </div>
            </Link>

            <p>
              Empowering founders across North America & Europe to raise capital with clarity and conviction.
            </p>

            <Link to="/contact" className="footer-fit-button">
              Book a Fit Call <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/gauravbansalventurecapital/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:info@amgventurepartners.com" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="footer-link-column">
              <h3>{group.title}</h3>
              <div className="footer-heading-line" />
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>
                      <ChevronRight className="w-4 h-4" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            <span className="footer-shield">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <span>&copy; 2026 AMG Venture Partners. All rights reserved.</span>
          </div>

          <div className="footer-legal">
            <a href="mailto:info@amgventurepartners.com">
              <span className="footer-mail-icon"><Mail className="w-5 h-5" /></span>
              info@amgventurepartners.com
            </a>
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
