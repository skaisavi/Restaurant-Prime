import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { locations } from '../data/locations';

const subjects = [
  'General enquiry',
  'Table booking',
  'Private dining & events',
  'Gift vouchers',
  'Press & media',
  'Supplier enquiry',
  'Feedback',
  'Other',
];

export default function ContactPage() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [subject, setSubject] = useState(subjects[0]);
  const [message, setMessage] = useState('');
  const [sent, setSent]       = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSent(true);
  }

  return (
    <>
      <nav>
        <Link to="/" className="logo">PRIME</Link>
        <Link to="/" className="back-link">← Back home</Link>
      </nav>

      <div className="restaurant-hero">
        <span className="eyebrow">We'd love to hear from you</span>
        <h1>Get in <em>touch</em></h1>
        <div className="hero-divider" />
      </div>

      <div className="contact-page">

        {/* Left — form */}
        <div className="contact-form-col">
          {sent ? (
            <div className="contact-success">
              <div className="booking-tick">✓</div>
              <h2 className="static-h2" style={{ marginTop: '1.25rem' }}>Message sent.</h2>
              <p className="static-lead">
                Thanks for getting in touch, {name}. We aim to respond within one business day.
              </p>
              <button className="btn-gold" style={{ marginTop: '1.5rem' }} onClick={() => setSent(false)}>
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="section-label" style={{ marginBottom: '1.5rem' }}>Send us a message</p>

              <div className="contact-field">
                <label className="booking-field-label">Your name *</label>
                <input className="booking-input" type="text" placeholder="Jane Smith"
                  value={name} onChange={e => setName(e.target.value)} required />
              </div>

              <div className="contact-field">
                <label className="booking-field-label">Email address *</label>
                <input className="booking-input" type="email" placeholder="jane@example.com"
                  value={email} onChange={e => setEmail(e.target.value)} required />
              </div>

              <div className="contact-field">
                <label className="booking-field-label">Subject</label>
                <select className="booking-input contact-select" value={subject}
                  onChange={e => setSubject(e.target.value)}>
                  {subjects.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              <div className="contact-field">
                <label className="booking-field-label">Message *</label>
                <textarea className="booking-input booking-textarea" rows={5}
                  placeholder="How can we help?"
                  value={message} onChange={e => setMessage(e.target.value)} required />
              </div>

              <button type="submit" className="btn-gold contact-submit">
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Right — info */}
        <div className="contact-info-col">
          <div className="contact-info-block">
            <p className="section-label">General</p>
            <p className="contact-info-line">
              <span className="contact-info-label">Email</span>
              <a href="mailto:hello@primesteakandgrill.com" className="contact-info-value link-gold">
                hello@primesteakandgrill.com
              </a>
            </p>
            <p className="contact-info-line">
              <span className="contact-info-label">Press</span>
              <a href="mailto:press@primesteakandgrill.com" className="contact-info-value link-gold">
                press@primesteakandgrill.com
              </a>
            </p>
          </div>

          <div className="contact-info-block">
            <p className="section-label">Our restaurants</p>
            {locations.map(loc => (
              <Link key={loc.slug} to={`/restaurants/${loc.slug}`} className="contact-location-row">
                <div>
                  <p className="contact-loc-name">{loc.shortName}</p>
                  <p className="contact-loc-addr">{loc.address}, {loc.postcode}</p>
                </div>
                <span style={{ color: 'var(--gold)' }}>→</span>
              </Link>
            ))}
          </div>

          <div className="contact-info-block">
            <p className="section-label">Private dining</p>
            <p className="contact-info-body">
              All four of our restaurants offer private dining rooms for celebrations,
              corporate events, and special occasions. Get in touch to discuss options.
            </p>
            <a href="mailto:events@primesteakandgrill.com" className="link-gold" style={{ marginTop: '0.75rem', display: 'inline-block' }}>
              events@primesteakandgrill.com
            </a>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}
