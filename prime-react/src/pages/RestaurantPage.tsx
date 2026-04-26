import { useParams, Link, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useBooking } from '../components/BookingModal';
import { locations, getLocation } from '../data/locations';

export default function RestaurantPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = getLocation(slug ?? '');
  const { openBooking } = useBooking();

  if (!location) return <Navigate to="/" replace />;

  const others = locations.filter((l) => l.slug !== location.slug);

  return (
    <>
      {/* Nav */}
      <nav>
        <Link to="/" className="logo">PRIME</Link>
        <Link to="/" className="back-link">← All Restaurants</Link>
      </nav>

      {/* Hero */}
      <div className="restaurant-hero">
        <span className="eyebrow">Our Restaurants</span>
        <h1>Prime <em>{location.shortName}</em></h1>
        <div className="hero-divider" />
      </div>

      {/* Info + Map */}
      <div className="restaurant-content">
        <div className="restaurant-info">
          <p className="section-label">Find us</p>
          <h2>{location.name}</h2>

          <div className="detail-row">
            <span className="detail-label">Address</span>
            <span className="detail-value">
              {location.address}<br />
              {location.addressLine2}, {location.postcode}
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Phone</span>
            <span className="detail-value">{location.phone}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Hours</span>
            <span className="detail-value">
              {location.hours.split('\n').map((line, i) => (
                <span key={i}>{line}{i < 2 && <br />}</span>
              ))}
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Email</span>
            <span className="detail-value">{location.email}</span>
          </div>

          <div className="divider-line" />
          <button className="book-btn" onClick={() => openBooking(location.slug)}>Book a Table</button>
        </div>

        <div className="map-wrap">
          <iframe
            src={location.mapSrc}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map for ${location.name}`}
          />
        </div>
      </div>

      {/* Other locations */}
      <div className="other-locations">
        <h3>Other locations</h3>
        <div className="locations-list">
          {others.map((loc) => (
            <Link key={loc.slug} to={`/restaurants/${loc.slug}`} className="location-item">
              <div>
                <p className="location-name">{loc.shortName}</p>
                <p className="location-addr">{loc.address}, {loc.postcode}</p>
              </div>
              <span className="location-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
