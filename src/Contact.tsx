import { useState } from 'react';

function Contact() {
  const mapAddress = encodeURIComponent('Opp Metro Pillar No. 564, Meerut Road, Ghaziabad, Uttar Pradesh, India');
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/legaltackleadvisor@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          message: formData.message,
          _subject: `New enquiry from ${formData.name || 'website visitor'}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (!response.ok) {
        throw new Error('Unable to send enquiry');
      }

      setFormData({ name: '', mobile: '', email: '', message: '' });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <section className="section contact reveal-on-scroll" id="contact">
      <div className="section-heading contact-heading">
        <p className="eyebrow">Contact us</p>
        <h2>Let's make your next filing, registration, or compliance step simple.</h2>
        <p className="contact-subheading">If you have any questions or suggestions, please feel free to reach out to us.</p>
      </div>

      <div className="contact-form-card reveal-on-scroll">
        <div className="contact-form-intro">
          <p className="eyebrow">Enquiry form</p>
          <h3>Tell us about your requirement</h3>
          <p>Share your details and we'll get back to you with the right guidance.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Name
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Mobile
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </label>
          </div>
          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} value={formData.message} onChange={handleChange} required />
          </label>
          {submitStatus === 'success' && (
            <p className="form-status success">Thank you! Your enquiry has been sent to the owner.</p>
          )}
          {submitStatus === 'error' && (
            <p className="form-status error">Sorry, your enquiry could not be sent. Please email legaltackleadvisor@gmail.com directly.</p>
          )}
          <button type="submit" className="btn btn-primary" disabled={submitStatus === 'sending'}>
            {submitStatus === 'sending' ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>

      <div className="contact-card contact-grid reveal-on-scroll">
        <div className="contact-details">
          <div className="contact-item">
            <h3>Phone</h3>
            <p>+91 8375052108</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>legaltackleadvisor@gmail.com</p>
          </div>
          <div className="contact-item">
            <h3>Office</h3>
            <p>Opp Metro Pillar No. 564, Meerut Road, Ghaziabad, Uttar Pradesh, India</p>
          </div>
          <div className="contact-item social-item">
            <h3>Follow us</h3>
            <a
              href="https://www.instagram.com/legaltackle?igsh=Z2s4cWRxOTdyeTht"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="Visit Instagram"
            >
              <svg viewBox="0 0 24 24" className="social-link-icon" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div className="map-card">
          <iframe
            title="Office Location"
            src={`https://www.google.com/maps?q=${mapAddress}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
