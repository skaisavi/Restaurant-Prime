import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useBooking } from '../components/BookingModal';
import { usePageTitle } from '../hooks/usePageTitle';
import { menus } from '../data/menus';

export default function MenusPage() {
  usePageTitle('Menus');
  const [activeTab, setActiveTab] = useState(menus[0].id);
  const { openBooking } = useBooking();
  const tab = menus.find(m => m.id === activeTab)!;

  return (
    <>
      <nav>
        <Link to="/" className="logo">PRIME</Link>
        <Link to="/" className="back-link">← Back home</Link>
      </nav>

      {/* Hero */}
      <div className="restaurant-hero">
        <span className="eyebrow">{tab.eyebrow}</span>
        <h1>Our <em>menus</em></h1>
        <div className="hero-divider" />
      </div>

      {/* Tab bar */}
      <div className="menus-tab-bar">
        {menus.map(m => (
          <button
            key={m.id}
            className={`menus-tab${activeTab === m.id ? ' active' : ''}`}
            onClick={() => setActiveTab(m.id)}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Menu content */}
      <div className="menus-page">
        <div className="menus-intro">
          <p className="menus-intro-text">{tab.intro}</p>
        </div>

        <div className="menus-sections">
          {tab.sections.map(section => (
            <div key={section.heading} className="menus-section">
              <h3 className="menus-section-heading">{section.heading}</h3>
              <div className="menus-items">
                {section.items.map((item, i) => (
                  item.name === '' ? (
                    <p key={i} className="menus-note">{item.description}</p>
                  ) : (
                    <div key={item.name} className="menus-item">
                      <div className="menus-item-left">
                        <div className="menus-item-name-row">
                          <span className="menus-item-name">{item.name}</span>
                          {item.note && <span className="menus-item-badge">{item.note}</span>}
                        </div>
                        {item.description && (
                          <p className="menus-item-desc">{item.description}</p>
                        )}
                      </div>
                      {item.price && item.price !== '—' && (
                        <span className="menus-item-price">{item.price}</span>
                      )}
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Allergens note */}
        <p className="menus-allergen">
          Please inform your server of any allergies or dietary requirements before ordering.
          A full allergen menu is available on request. All prices include VAT.
        </p>

        {/* CTA */}
        <div className="menus-cta-bar">
          <div>
            <p className="menus-cta-label">Ready to experience it?</p>
            <p className="menus-cta-sub">Reserve your table in seconds.</p>
          </div>
          <button className="btn-gold" onClick={() => openBooking()}>
            Book a Table
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
