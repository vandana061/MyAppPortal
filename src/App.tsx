import { useEffect, useState, type MouseEvent } from 'react';
import Contact from './Contact';
import About from './About';
import Testimonials from './Testimonials';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const modalContent: Record<string, { title: string; body: string; points: string[] }> = {
    consultation: {
      title: 'Quick consultation',
      body: 'Share your requirement and one of our advisors will get back to you within 24 hours with clear next steps.',
      points: ['Free initial call', 'Response within 24 hours', 'No obligation'],
    },
    incorporation: {
      title: 'Company incorporation',
      body: 'We help you register your firm quickly and correctly, handling documentation, approvals, and filings end to end.',
      points: [
        'Private limited, LLP, or proprietorship',
        'Document preparation and filing',
        'DSC and DIN support',
        'Typical turnaround: 7 to 10 working days',
      ],
    },
    gst: {
      title: 'GST and ITR support',
      body: 'Fast, accurate GST registration, return filing, and income tax return support for individuals and businesses.',
      points: ['GST registration and returns', 'ITR filing for individuals and firms', 'Reconciliation support'],
    },
    compliance: {
      title: 'Compliance reminder',
      body: 'Stay ahead of ROC, DSC, and other statutory deadlines with ongoing compliance tracking and reminders.',
      points: ['ROC annual filings', 'DSC renewal tracking', 'Deadline reminders'],
    },
  };

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    window.history.pushState(null, '', `#${targetId}`);
    setMenuOpen(false);
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = ['top', 'services', 'about', 'contact'];
    const navLinks = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove('active-link'));
            const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
            activeLink?.classList.add('active-link');
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell" id="top">
      <div className="site-header reveal-on-scroll">
        <div className="info-strip">
          <div className="info-strip-inner">
            <div className="info-left">
              <a href="mailto:legaltackleadvisor@gmail.com">legaltackleadvisor@gmail.com</a>
              <span className="sep">&bull;</span>
              <a href="tel:+918375052108">+91 8375052108</a>
            </div>
            <div className="info-right">
              <span className="follow">Follow Us:</span>
              <a href="#" aria-label="Facebook" className="social-circle">f</a>
              <a href="https://www.instagram.com/legaltackle?igsh=Z2s4cWRxOTdyeTht" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-circle">
                <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-circle">in</a>
            </div>
          </div>
        </div>
        <header className="topbar">
          <div className="topbar-inner">
            <div className="brand">
              <span className="brand-mark">
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="LegalTackleAdvisor logo" className="brand-logo" />
              </span>
              <span className="brand-name">Legal Tackle Advisor</span>
            </div>
            <button
              className="menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
            <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
              <a href="#top" onClick={(event) => handleSectionClick(event, 'top')}>Home</a>
              <a href="#services" onClick={(event) => handleSectionClick(event, 'services')}>Services</a>
              <a href="#about" onClick={(event) => handleSectionClick(event, 'about')}>About</a>
              <a href="#contact" onClick={(event) => handleSectionClick(event, 'contact')}>Contact</a>
              <a href="#contact" className="nav-cta" onClick={(event) => handleSectionClick(event, 'contact')}>Book a consultation</a>
            </nav>
          </div>
        </header>
      </div>

      <section className="hero reveal-on-scroll">
        <div className="hero-copy reveal-on-scroll">
          <p className="eyebrow">Trusted tax & legal advisory</p>
          <h1>Reliable tax and legal support for every stage of your business</h1>
          <p>
            Legal Tackle Advisor delivers dependable assistance for individuals, startups, and growing businesses with accurate filings, timely compliance, and practical legal guidance.
          </p>
          <div className="hero-actions reveal-on-scroll">
            <a href="#contact" className="btn btn-primary" onClick={(event) => handleSectionClick(event, 'contact')}>Book a consultation</a>
            <a href="#services" className="btn btn-secondary" onClick={(event) => handleSectionClick(event, 'services')}>Explore services</a>
          </div>
          <div className="hero-badges reveal-on-scroll">
            <span>GST</span>
            <span>ITR</span>
            <span>Audit</span>
            <span>ROC</span>
            <span>Company formation</span>
            <span>DSC</span>
          </div>
        </div>
        <div className="hero-panel reveal-on-scroll">
          <img
            src={`${import.meta.env.BASE_URL}hero-image.jpg`}
            alt="Legal and tax advisory team at work"
            className="hero-image"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="hero-panel-card">
            <p>GST & Tax</p>
            <h3>Seamless filing, return management and tax support</h3>
          </div>
          <div className="hero-panel-card">
            <p>Registrations & ROC</p>
            <h3>Company incorporation, firm registration, DSC and ROC filings</h3>
          </div>
        </div>
      </section>

      <section className="section help-strip reveal-on-scroll">
        <div className="help-strip-inner">
          <p>Need help with filings, registrations, or compliance?</p>
          <div className="help-strip-actions">
            <span>Fast response &bull; Clear pricing &bull; Legal expertise</span>
            <a href="#contact" className="btn btn-secondary" onClick={(event) => handleSectionClick(event, 'contact')}>Talk to an advisor</a>
          </div>
        </div>
      </section>

      <section className="section quick-access reveal-on-scroll">
        <div className="quick-grid">
          <article className="quick-card reveal-on-scroll">
            <h3>Quick consultation</h3>
            <p>Send your details and we'll contact you with a clear next step.</p>
            <button className="quick-link" onClick={() => setActiveModal('consultation')}>Contact now</button>
          </article>
          <article className="quick-card reveal-on-scroll">
            <h3>Company incorporation</h3>
            <p>Register your firm quickly with expert support for documents and filings.</p>
            <button className="quick-link" onClick={() => setActiveModal('incorporation')}>Learn more</button>
          </article>
          <article className="quick-card reveal-on-scroll">
            <h3>GST & ITR support</h3>
            <p>Get fast help for GST registration, returns, and income tax filing.</p>
            <button className="quick-link" onClick={() => setActiveModal('gst')}>Get started</button>
          </article>
          <article className="quick-card reveal-on-scroll">
            <h3>Compliance reminder</h3>
            <p>Stay ahead of deadlines with ongoing ROC, DSC, and legal compliance support.</p>
            <button className="quick-link" onClick={() => setActiveModal('compliance')}>Request help</button>
          </article>
        </div>
      </section>

      <About />

      <section className="section reveal-on-scroll">
        <div className="section-heading">
          <p className="eyebrow">Why clients trust us</p>
          <h2>Practical legal and tax support that feels clear, calm, and dependable</h2>
        </div>
        <div className="features-grid">
          <article className="feature-card">
            <h3>Fast response</h3>
            <p>We help you move quickly from questions to action with responsive communication and clear next steps.</p>
          </article>
          <article className="feature-card">
            <h3>End-to-end guidance</h3>
            <p>From registration to filing to ongoing compliance, we support the full journey with consistency.</p>
          </article>
          <article className="feature-card">
            <h3>Transparent process</h3>
            <p>You get simple explanations, realistic timelines, and dependable follow-through for every matter.</p>
          </article>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="section-heading">
          <p className="eyebrow">Our services</p>
          <h2>Practical support for registrations, compliance, filings, and business growth</h2>
          <p className="section-intro">
            From day-to-day compliance to business setup and documentation, we provide clear, dependable support tailored to your goals.
          </p>
        </div>
        <div className="cards-grid">
          <article className="card reveal-on-scroll">
            <h3>ITR Filing</h3>
            <p>Accurate income tax return filing for individuals, professionals, and businesses with timely support.</p>
          </article>
          <article className="card reveal-on-scroll">
            <h3>GST Registration & Returns</h3>
            <p>GST enrollment, return filing, reconciliation, and ongoing compliance support.</p>
          </article>
          <article className="card reveal-on-scroll">
            <h3>Company Incorporation</h3>
            <p>Start-up and corporate entity formation with documentation, approval support, and guidance.</p>
          </article>
          <article className="card reveal-on-scroll">
            <h3>Firm Registrations</h3>
            <p>Partnership, proprietorship, LLP, and other firm registration services with full legal assistance.</p>
          </article>
          <article className="card reveal-on-scroll">
            <h3>Trademark / Logo</h3>
            <p>Trademark search, registration and logo protection to safeguard your brand identity.</p>
          </article>
          <article className="card reveal-on-scroll">
            <h3>Audit & Assurance</h3>
            <p>Statutory and internal audit support with clean financial reporting and compliance discipline.</p>
          </article>
          <article className="card reveal-on-scroll">
            <h3>Accounting Services</h3>
            <p>Bookkeeping, financial statements, payroll handling, and business financial advisory.</p>
          </article>
          <article className="card reveal-on-scroll">
            <h3>DSC & ROC</h3>
            <p>Digital signature procurement and Registrar of Companies filings for smooth corporate compliance.</p>
          </article>
        </div>
      </section>

      <Testimonials />

      <Contact />

      <footer className="footer">
        <div className="footer-bottom">
          <p>&copy; 2026 LegalTackleAdvisor. We are a private advisory firm helping clients with tax, audit, DSC, ROC and compliance work.</p>
        </div>
      </footer>

      <a href="tel:+918375052108" className="floating-contact" aria-label="Call LegalTackleAdvisor">
        Call now
      </a>

      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" aria-label="Close" onClick={() => setActiveModal(null)}>&times;</button>
            <h3>{modalContent[activeModal].title}</h3>
            <p>{modalContent[activeModal].body}</p>
            <ul className="modal-points">
              {modalContent[activeModal].points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(event) => {
                setActiveModal(null);
                handleSectionClick(event, 'contact');
              }}
            >
              Enquire now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
