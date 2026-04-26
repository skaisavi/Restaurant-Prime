import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import OurStoryModal from '../components/OurStoryModal';
import SpecialModal, { SpecialType } from '../components/SpecialModal';
import { useBooking } from '../components/BookingModal';
import { locations } from '../data/locations';

export default function HomePage() {
  const [storyOpen, setStoryOpen] = useState(false);
  const [specialOpen, setSpecialOpen] = useState<SpecialType>(null);
  const navigate = useNavigate();
  const { openBooking } = useBooking();

  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/steak.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <span className="hero-eyebrow">Steak &amp; Grill — Hertfordshire</span>
          <h1>London quality,<br /><em>without the journey.</em></h1>
          <span className="hero-sub">Seasonal menus. The finest cuts. Four locations.</span>
          <div className="hero-ctas">
            <button className="btn-gold" onClick={() => openBooking()}>Reserve a Table</button>
            <Link to="/menus" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>View Menus</Link>
          </div>
        </div>
      </section>

      {/* Location strip */}
      <div className="strip">
        St Albans &nbsp;·&nbsp; Chandlers Cross &nbsp;·&nbsp; Beaconsfield &nbsp;·&nbsp; Berkhamsted
      </div>

      {/* Philosophy */}
      <section className="philosophy">
        <div className="philosophy-text">
          <p className="section-label">Our philosophy</p>
          <h2>From farm to fork<br />with finesse</h2>
          <p>
            Our chef brigade are given the freedom to use the highest quality produce,
            preparing a seasonally changing menu — no compromises, every time.
          </p>
          <button
            className="link-gold"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}
            onClick={() => setStoryOpen(true)}
          >
            Our story →
          </button>
        </div>
        <div className="philosophy-img">
          <img src="/steak.avif" alt="Prime restaurant interior" />
        </div>
      </section>

      {/* Specials */}
      <section className="specials" id="events">
        <div className="specials-header">
          <p className="section-label">What's on</p>
          <h2>Reasons to visit</h2>
        </div>
        <div className="specials-grid">
          <div className="special-card" onClick={() => setSpecialOpen('sunday-roast')}>
            <div className="special-icon">☀</div>
            <div>
              <h3>Sunday Roast</h3>
              <p>Signature potatoes, crispy Yorkshires &amp; Prime cuts of the finest meats.</p>
              <span className="special-link">Learn more →</span>
            </div>
          </div>
          <div className="special-card" onClick={() => setSpecialOpen('byo-mondays')}>
            <div className="special-icon">🍷</div>
            <div>
              <h3>BYO Mondays</h3>
              <p>Corkage-free every Monday. Bring your bottle, bring your friends.</p>
              <span className="special-link">Learn more →</span>
            </div>
          </div>
          <div className="special-card" onClick={() => navigate('/gift-vouchers')}>
            <div className="special-icon">🎁</div>
            <div>
              <h3>Gift Vouchers</h3>
              <p>Give the gift of great steak. Perfect for any occasion.</p>
              <span className="special-link">Purchase →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <p className="section-label" style={{ color: 'var(--gold-light)', textAlign: 'center', marginBottom: '2rem' }}>What people say</p>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <blockquote className="testimonial-quote">
              "The best steak I've had outside of London. The ribeye was cooked to absolute perfection — we've already booked again."
            </blockquote>
            <p className="testimonial-author">Sarah T. <span>· St Albans</span></p>
          </div>
          <div className="testimonial-card testimonial-featured">
            <div className="testimonial-press">The Times</div>
            <blockquote className="testimonial-quote">
              "Prime has quietly become one of the finest steakhouses in the Home Counties. Exceptional produce, warm service, and a room that feels genuinely special."
            </blockquote>
            <p className="testimonial-author">Restaurant Review <span>· 2025</span></p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <blockquote className="testimonial-quote">
              "Brought the whole family for a Sunday roast and every single person left full and happy. The Yorkshire puddings alone are worth the trip."
            </blockquote>
            <p className="testimonial-author">Marcus L. <span>· Berkhamsted</span></p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="locations" id="restaurants">
        <div className="locations-header">
          <p className="section-label">Find us</p>
          <h2>Our restaurants</h2>
          <p>Four locations across Hertfordshire &amp; Buckinghamshire</p>
        </div>
        <div className="locations-list">
          {locations.map((loc) => (
            <Link key={loc.slug} to={`/restaurants/${loc.slug}`} className="location-item">
              <div>
                <p className="location-name">{loc.shortName}</p>
                <p className="location-addr">
                  {loc.address}, {loc.postcode}
                </p>
              </div>
              <span className="location-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-bar">
        <h2>Ready to dine?</h2>
        <p>Reserve your table online in seconds.<br />Walk-ins always welcome.</p>
        <button className="btn-dark" onClick={() => openBooking()}>Book Now</button>
      </section>

      <Footer />

      <OurStoryModal isOpen={storyOpen} onClose={() => setStoryOpen(false)} />
      <SpecialModal type={specialOpen} onClose={() => setSpecialOpen(null)} />
    </>
  );
}
