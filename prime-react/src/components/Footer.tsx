import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubscribed(true);
  }

  return (
    <footer className="footer-full">

      {/* Newsletter strip */}
      <div className="footer-newsletter">
        <div className="footer-newsletter-inner">
          <div>
            <p className="footer-nl-heading">Stay at the table.</p>
            <p className="footer-nl-sub">Seasonal menus, events &amp; the occasional offer — straight to your inbox.</p>
          </div>
          {subscribed ? (
            <p className="footer-nl-thanks">You're in. ✓</p>
          ) : (
            <form className="footer-nl-form" onSubmit={handleNewsletter}>
              <input
                className="footer-nl-input"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="footer-nl-btn">Subscribe</button>
            </form>
          )}
        </div>
      </div>

      {/* Main footer */}
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">PRIME</div>
          <p className="footer-tagline">Steak &amp; Grill<br />Hertfordshire &amp; Buckinghamshire</p>
          <div className="footer-social">
            <a href="#" className="footer-social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a href="#" className="footer-social-link" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="footer-social-link" aria-label="TripAdvisor">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links-col">
          <p className="footer-col-heading">Visit</p>
          <Link to="/restaurants/st-albans">St Albans</Link>
          <Link to="/restaurants/chandlers-cross">Chandlers Cross</Link>
          <Link to="/restaurants/beaconsfield">Beaconsfield</Link>
          <Link to="/restaurants/berkhamsted">Berkhamsted</Link>
        </div>

        <div className="footer-links-col">
          <p className="footer-col-heading">Explore</p>
          <Link to="/menus">Menus</Link>
          <Link to="/events">Events</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/private-dining">Private Dining</Link>
          <Link to="/gift-vouchers">Gift Vouchers</Link>
        </div>

        <div className="footer-links-col">
          <p className="footer-col-heading">Company</p>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Prime Steak &amp; Grill Ltd · All rights reserved</p>
      </div>

    </footer>
  );
}
