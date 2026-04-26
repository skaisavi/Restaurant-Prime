import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';

const photos = [
  { src: '/steak.avif',          alt: 'Prime cut steak',            span: 'wide' },
  { src: '/restaurant-img.jpg',  alt: 'Restaurant interior',        span: 'tall' },
  { src: '/steak.avif',          alt: 'Ribeye on the grill',        span: 'normal' },
  { src: '/restaurant-img.jpg',  alt: 'Dining room at dusk',        span: 'normal' },
  { src: '/steak.avif',          alt: 'Chef preparing cuts',        span: 'tall' },
  { src: '/restaurant-img.jpg',  alt: 'The bar at Chandlers Cross', span: 'wide' },
  { src: '/steak.avif',          alt: 'Sunday roast plating',       span: 'normal' },
  { src: '/restaurant-img.jpg',  alt: 'Private dining room',        span: 'normal' },
  { src: '/steak.avif',          alt: 'Dessert — chocolate fondant',span: 'normal' },
  { src: '/restaurant-img.jpg',  alt: 'The team',                   span: 'wide' },
];

export default function GalleryPage() {
  usePageTitle('Gallery');
  const [lightbox, setLightbox] = useState<number | null>(null);

  function prev() { setLightbox(i => i !== null ? (i - 1 + photos.length) % photos.length : null); }
  function next() { setLightbox(i => i !== null ? (i + 1) % photos.length : null); }

  return (
    <>
      <nav>
        <Link to="/" className="logo">PRIME</Link>
        <Link to="/" className="back-link">← Back home</Link>
      </nav>

      <div className="restaurant-hero">
        <span className="eyebrow">A visual story</span>
        <h1>The <em>gallery</em></h1>
        <div className="hero-divider" />
      </div>

      <div className="gallery-page">
        <div className="gallery-grid">
          {photos.map((photo, i) => (
            <button
              key={i}
              className={`gallery-item gallery-${photo.span}`}
              onClick={() => setLightbox(i)}
              aria-label={`View photo: ${photo.alt}`}
            >
              <img src={photo.src} alt={photo.alt} />
              <div className="gallery-item-overlay">
                <span className="gallery-item-label">{photo.alt}</span>
              </div>
            </button>
          ))}
        </div>

        <p className="gallery-note">
          Photography by [Your Photographer] · New images added seasonally
        </p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <button className="lightbox-prev" onClick={e => { e.stopPropagation(); prev(); }}>‹</button>
          <div className="lightbox-img-wrap" onClick={e => e.stopPropagation()}>
            <img src={photos[lightbox].src} alt={photos[lightbox].alt} />
            <p className="lightbox-caption">{photos[lightbox].alt}</p>
          </div>
          <button className="lightbox-next" onClick={e => { e.stopPropagation(); next(); }}>›</button>
        </div>
      )}

      <Footer />
    </>
  );
}
