import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Share2 } from 'lucide-react';

const COMPANY_INFO = {
  contactEmail: '[Email Address]',
  contactPhone: '[Phone Number]',
  address: '[Corporate Address]',
  linkedin: '[LinkedIn]',
};

export const ContactView = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', companyInterestedIn: 'Entrain EduHub', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const details = [
    { icon: Mail, label: 'Email', value: COMPANY_INFO.contactEmail },
    { icon: Phone, label: 'Phone', value: COMPANY_INFO.contactPhone },
    { icon: MapPin, label: 'Address', value: COMPANY_INFO.address },
    { icon: Share2, label: 'Social Media', value: COMPANY_INFO.linkedin },
  ];

  return (
    <section id="contact" className="home-contact-section">
      <div className="home-contact-shell">
        <header className="home-contact-heading">
          <div>
            <div className="home-section-badge" style={{ marginBottom: '12px' }}>
              <div className="home-section-badge-icon">
                <img src="/images/entraineduhub-navbar.png" alt="Entrain EduHub Logo" />
              </div>
              <span>DIRECT INQUIRY</span>
            </div>
            <h2>Get in Touch</h2>
          </div>
          <p>Contact Entrain EduHub or reach out to individual ventures, Entrain Academy, Entrain Lab, or Entrain Growth Lab.</p>
        </header>

        <div className="home-contact-grid">
          <aside className="home-contact-details">
            <div className="contact-details-header" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '34px', background: '#F1EDE4', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <img src="/images/entraineduhub-navbar.png" alt="Entrain EduHub" style={{ width: '18px', height: '28px', objectFit: 'contain' }} />
              </div>
              <h3 style={{ margin: 0 }}>Corporate Contact Details</h3>
            </div>
            {details.map(({ icon: Icon, label, value }) => (
              <div key={label}>
                <Icon size={17} />
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </aside>

          <div className="home-contact-form-card">
            {submitted ? (
              <div className="home-contact-success">
                <CheckCircle2 size={34} />
                <h3>Message Sent Successfully</h3>
                <p>Thank you for contacting Entrain EduHub. We will get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3>Professional Contact Form</h3>
                <div className="home-contact-fields">
                  <label>Name *<input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" /></label>
                  <label>Email *<input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="yourname@company.com" /></label>
                  <label>Phone<input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 Phone number" /></label>
                  <label>Company Interested In *
                    <select value={formData.companyInterestedIn} onChange={(e) => setFormData({ ...formData, companyInterestedIn: e.target.value })}>
                      <option>Entrain EduHub</option><option>Entrain Academy</option><option>Entrain Lab</option><option>Entrain Growth Lab</option>
                    </select>
                  </label>
                </div>
                <label>Message *<textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Type your message, course inquiry, or partnership request..." /></label>
                <button type="submit">Submit Message <Send size={15} /></button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
