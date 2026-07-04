function About() {
  return (
    <section id="about" className="section about">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Professional advisory with a calm, client-first approach</h2>
        <p className="section-intro">
          LegalTackleAdvisor is a trusted tax and legal support firm offering practical solutions for registrations, filings, audits, and compliance matters for individuals and businesses.
        </p>
      </div>
      <div className="about-split">
        <div>
          <ul className="about-list">
            <li>Reliable support for ITR, GST and audit compliance</li>
            <li>Clear guidance for incorporation and registration needs</li>
            <li>Professional handling of DSC, ROC and legal documentation</li>
            <li>Transparent communication and dependable follow-through</li>
          </ul>
        </div>
        <div className="about-panel">
          <div className="about-card">
            <h3>Focused on results</h3>
            <p>We combine legal precision and tax expertise to help you move forward with confidence.</p>
          </div>
          <div className="about-card">
            <h3>Built for growth</h3>
            <p>Whether you are launching a business or managing ongoing compliance, we offer steady support at every stage.</p>
          </div>
          <div className="about-card team-card">
            <h3>Our Team</h3>
            <div className="team">
              <div className="team-member">
                <strong>Adv. Arun Sharma</strong>
                <span>Senior Advocate</span>
              </div>
              <div className="team-member">
                <strong>Adv. Vandana Sharma</strong>
                <span>Advocate & Legal Advisor</span>
              </div>
              <div className="team-member">
                <strong>CA Neelam Sharma</strong>
                <span>Chartered Accountant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
