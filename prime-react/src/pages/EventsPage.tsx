import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useBooking } from '../components/BookingModal';
import { usePageTitle } from '../hooks/usePageTitle';

const events = [
  {
    date: 'Every Monday',
    title: 'BYO Mondays',
    tag: 'Weekly',
    tagStyle: 'gold',
    description:
      'Bring any bottle — wine, champagne, or spirits — and we\'ll serve it at no charge. Our full seasonal menu is available all evening. Walk-ins welcome.',
    price: 'No corkage · Regular menu prices',
    availability: 'Available now',
  },
  {
    date: 'Every Sunday',
    title: 'Sunday Roast',
    tag: 'Weekly',
    tagStyle: 'gold',
    description:
      'Our signature Sunday Roast. Prime rib, rack of lamb, free-range chicken, and pork belly — all served with every trimming we can think of. A proper British Sunday.',
    price: 'From £28 per person',
    availability: 'Book ahead',
  },
  {
    date: 'Last Wednesday of each month',
    title: 'Wine & Steak Evening',
    tag: 'Monthly',
    tagStyle: 'outline',
    description:
      'An intimate evening pairing five wines with five courses, hosted by our sommelier. Limited to 24 covers. A rare chance to taste through the cellar in one sitting.',
    price: '£85 per person · Wine included',
    availability: '4 seats remaining',
  },
  {
    date: '26 July 2026',
    title: 'Summer Garden Party',
    tag: 'Seasonal',
    tagStyle: 'outline',
    description:
      'An evening in the gardens at Chandlers Cross. Live acoustic music, a whole-animal barbecue, cocktails on arrival. One of our most beloved annual events.',
    price: '£65 per person',
    availability: 'Selling fast',
  },
  {
    date: '31 October 2026',
    title: 'Harvest Tasting Menu',
    tag: 'Seasonal',
    tagStyle: 'outline',
    description:
      'A six-course celebration of the autumn harvest. Our chef brigade works with local farms to create a menu that changes with the best of the season. A single sitting, candlelit.',
    price: '£95 per person · Optional wine pairing £45',
    availability: 'Coming soon',
  },
  {
    date: '24–31 December 2026',
    title: 'Christmas at Prime',
    tag: 'Christmas',
    tagStyle: 'dark',
    description:
      'Our festive menu runs across all four locations throughout December. Turkey, beef Wellington, and all the trimmings — along with our full à la carte. Christmas parties catered for.',
    price: 'From £55 per person',
    availability: 'Bookings open September',
  },
];

export default function EventsPage() {
  usePageTitle('Events');
  const { openBooking } = useBooking();

  return (
    <>
      <nav>
        <Link to="/" className="logo">PRIME</Link>
        <Link to="/" className="back-link">← Back home</Link>
      </nav>

      <div className="restaurant-hero">
        <span className="eyebrow">What's on</span>
        <h1>Events &amp; <em>occasions</em></h1>
        <div className="hero-divider" />
      </div>

      <div className="events-page">
        <div className="events-list">
          {events.map(event => (
            <div key={event.title} className="event-card">
              <div className="event-card-left">
                <div className="event-date">{event.date}</div>
                <div className="event-header-row">
                  <h2 className="event-title">{event.title}</h2>
                  <span className={`event-tag event-tag-${event.tagStyle}`}>{event.tag}</span>
                </div>
                <p className="event-description">{event.description}</p>
                <p className="event-price">{event.price}</p>
              </div>
              <div className="event-card-right">
                <span className={`event-availability ${event.availability === 'Selling fast' || event.availability === '4 seats remaining' ? 'urgent' : ''}`}>
                  {event.availability}
                </span>
                <button
                  className="btn-gold event-book-btn"
                  onClick={() => openBooking()}
                  disabled={event.availability === 'Coming soon' || event.availability === 'Bookings open September'}
                >
                  {event.availability === 'Coming soon' || event.availability === 'Bookings open September'
                    ? event.availability
                    : 'Reserve →'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="static-cta-box">
          <div>
            <p className="static-cta-text">Planning a private event?</p>
            <p style={{ color: '#5a4e44', fontSize: '13px', fontWeight: 300, marginTop: '0.25rem' }}>
              We host bespoke occasions across all four sites.
            </p>
          </div>
          <Link to="/private-dining" className="btn-gold" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Private Dining →
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
