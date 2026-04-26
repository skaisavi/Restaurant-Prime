import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';

const rooms = [
  {
    location: 'St Albans',
    room: 'The Garden Room',
    capacity: '10–24 guests',
    description: 'A light-filled private room overlooking the courtyard garden. Perfect for celebrations and intimate corporate dinners.',
    features: ['Dedicated front of house team', 'Private bar', 'Bespoke menu', 'AV available on request'],
  },
  {
    location: 'Chandlers Cross',
    room: 'The Clarendon Suite',
    capacity: '20–50 guests',
    description: 'Our largest private space, set within the historic Clarendon building. Exceptional for weddings, large celebrations, and corporate events.',
    features: ['Full venue hire available', 'Live music permitted', 'Bespoke catering', 'Dedicated event coordinator'],
  },
  {
    location: 'Beaconsfield',
    room: 'The Cellar Room',
    capacity: '8–16 guests',
    description: 'An intimate, candlelit room beneath the main restaurant. Our most requested private dining space — moody, memorable, and entirely yours.',
    features: ['Wine wall display', 'Chef\'s table option', 'Bespoke tasting menus', 'Sommelier on request'],
  },
  {
    location: 'Berkhamsted',
    room: 'The Secret Garden',
    capacity: '12–30 guests',
    description: 'An outdoor terrace enclosed by old stone walls and draped in wisteria. Available May–September for al fresco dining and garden parties.',
    features: ['Outdoor heaters', 'Weather contingency indoor space', 'Cocktail receptions', 'Lawn games available'],
  },
];

export default function PrivateDiningPage() {
  usePageTitle('Private Dining');
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState('Celebration');
  const [guests, setGuests] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (name && email) setSent(true);
  }

  return (
    <>
      <nav>
        <Link to="/" className="logo">PRIME</Link>
        <Link to="/" className="back-link">← Back home</Link>
      </nav>

      <div className="restaurant-hero">
        <span className="eyebrow">Exclusively yours</span>
        <h1>Private <em>dining</em></h1>
        <div className="hero-divider" />
      </div>

      <div className="static-page">
        <div className="static-intro">
          <p className="section-label">For every occasion</p>
          <h2 className="static-h2">Your table. Your evening.</h2>
          <p className="static-lead">
            Whether it's an intimate birthday dinner or a celebration for fifty,
            each of our four locations offers a private space that becomes entirely
            yours for the evening. A dedicated team, a bespoke menu, and the
            full Prime experience — without the outside world.
          </p>
        </div>

        {/* Rooms */}
        <div className="pd-rooms">
          {rooms.map(room => (
            <div key={room.room} className="pd-room">
              <div className="pd-room-header">
                <div>
                  <p className="section-label">{room.location}</p>
                  <h3 className="pd-room-name">{room.room}</h3>
                  <span className="pd-room-capacity">{room.capacity}</span>
                </div>
              </div>
              <p className="pd-room-desc">{room.description}</p>
              <ul className="pd-room-features">
                {room.features.map(f => (
                  <li key={f}><span className="pd-feature-dot">—</span>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enquiry form */}
        <div className="pd-enquiry">
          <div className="pd-enquiry-header">
            <p className="section-label">Get in touch</p>
            <h2 className="static-h2">Make an enquiry</h2>
            <p className="static-lead">
              Tell us about your event and we'll come back to you within one business day.
            </p>
          </div>

          {sent ? (
            <div className="contact-success" style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div className="booking-tick">✓</div>
              <h3 className="static-h3" style={{ marginTop: '1.25rem' }}>Enquiry received.</h3>
              <p className="static-lead" style={{ margin: '0.5rem auto' }}>
                Thanks {name} — our events team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form className="pd-form" onSubmit={handleSubmit}>
              <div className="booking-form-row">
                <div className="contact-field">
                  <label className="booking-field-label">Your name *</label>
                  <input className="booking-input" type="text" value={name}
                    onChange={e => setName(e.target.value)} placeholder="Jane Smith" required />
                </div>
                <div className="contact-field">
                  <label className="booking-field-label">Email *</label>
                  <input className="booking-input" type="email" value={email}
                    onChange={e => setEmail(e.target.value)} placeholder="jane@example.com" required />
                </div>
              </div>

              <div className="booking-form-row">
                <div className="contact-field">
                  <label className="booking-field-label">Type of event</label>
                  <select className="booking-input contact-select" value={eventType}
                    onChange={e => setEventType(e.target.value)}>
                    {['Celebration','Corporate dinner','Wedding reception','Birthday','Anniversary','Christmas party','Other'].map(t =>
                      <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div className="contact-field">
                  <label className="booking-field-label">Number of guests</label>
                  <input className="booking-input" type="number" value={guests}
                    onChange={e => setGuests(e.target.value)} placeholder="e.g. 20" min={1} />
                </div>
              </div>

              <div className="contact-field">
                <label className="booking-field-label">Preferred date</label>
                <input className="booking-input" type="text" value={date}
                  onChange={e => setDate(e.target.value)} placeholder="e.g. Saturday 12 July 2026" />
              </div>

              <div className="contact-field">
                <label className="booking-field-label">Tell us more <span style={{ opacity: 0.45 }}>(optional)</span></label>
                <textarea className="booking-input booking-textarea" rows={4} value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Dietary requirements, preferred location, budget, any special requests..." />
              </div>

              <button type="submit" className="btn-gold contact-submit">
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
