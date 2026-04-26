import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from './BookingModal';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  return (
    <nav>
      <Link to="/" className="logo">PRIME</Link>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><Link to="/menus" onClick={() => setMenuOpen(false)}>Menus</Link></li>
        <li><a href="#restaurants" onClick={() => setMenuOpen(false)}>Restaurants</a></li>
        <li><a href="#events" onClick={() => setMenuOpen(false)}>Events</a></li>
      </ul>

      <button
        className="hamburger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Open menu"
      >
        <span />
        <span />
        <span />
      </button>

      <button className="book-btn" onClick={() => openBooking()}>Book a Table</button>
    </nav>
  );
}
