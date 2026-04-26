import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const roles = [
  {
    title: 'Head Chef',
    location: 'St Albans',
    type: 'Full-time',
    description:
      'We\'re looking for a creative, technically excellent Head Chef to lead the brigade at our St Albans site. You\'ll have full creative latitude over the seasonal menu, working directly with our producers and suppliers.',
  },
  {
    title: 'Sous Chef',
    location: 'Berkhamsted',
    type: 'Full-time',
    description:
      'A fantastic opportunity for an ambitious Sous Chef ready to step into a lead role. You\'ll support the Head Chef in all aspects of kitchen management and play a key part in shaping the menu.',
  },
  {
    title: 'Front of House Manager',
    location: 'Chandlers Cross',
    type: 'Full-time',
    description:
      'We need an exceptional Front of House Manager to lead the team at The Clarendon. You\'ll be responsible for delivering the Prime dining experience — consistent, warm, and effortlessly professional.',
  },
  {
    title: 'Sommelier',
    location: 'Any location',
    type: 'Full-time',
    description:
      'A rare opportunity for a passionate sommelier to take ownership of our wine programme across all four sites. WSET Level 3 minimum. Experience with natural and biodynamic wines is a bonus.',
  },
  {
    title: 'Waiting Staff',
    location: 'All locations',
    type: 'Full & part-time',
    description:
      'We\'re always looking for warm, switched-on people to join our front of house teams. No experience necessary — we\'ll train the right person. What matters is how you make people feel.',
  },
];

const benefits = [
  { icon: '🍽', label: 'Staff meals on every shift' },
  { icon: '📈', label: 'Clear progression paths' },
  { icon: '💷', label: 'Competitive pay, always above living wage' },
  { icon: '🎓', label: 'Training & development budget' },
  { icon: '🍷', label: 'Staff discount at all locations' },
  { icon: '🎉', label: 'Annual team events & incentives' },
];

export default function CareersPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <nav>
        <Link to="/" className="logo">PRIME</Link>
        <Link to="/" className="back-link">← Back home</Link>
      </nav>

      <div className="restaurant-hero">
        <span className="eyebrow">Join the team</span>
        <h1>Work at <em>Prime</em></h1>
        <div className="hero-divider" />
      </div>

      <div className="static-page">

        <div className="static-intro">
          <p className="section-label">Who we are</p>
          <h2 className="static-h2">More than a job.</h2>
          <p className="static-lead">
            We built Prime on the belief that great hospitality starts with great people.
            We invest in our teams, give them room to grow, and try to make every shift
            feel worthwhile. If you care about food, people, and doing things properly —
            we'd love to hear from you.
          </p>
        </div>

        {/* Benefits */}
        <div className="careers-benefits">
          {benefits.map(b => (
            <div key={b.label} className="careers-benefit">
              <span className="careers-benefit-icon">{b.icon}</span>
              <span className="careers-benefit-label">{b.label}</span>
            </div>
          ))}
        </div>

        {/* Roles */}
        <div className="careers-roles-header">
          <p className="section-label">Current openings</p>
          <h3 className="static-h3">We're hiring</h3>
        </div>

        <div className="careers-roles">
          {roles.map(role => (
            <div key={role.title} className="careers-role">
              <button
                className="careers-role-header"
                onClick={() => setOpen(open === role.title ? null : role.title)}
              >
                <div className="careers-role-left">
                  <span className="careers-role-title">{role.title}</span>
                  <div className="careers-role-meta">
                    <span>{role.location}</span>
                    <span className="careers-dot">·</span>
                    <span>{role.type}</span>
                  </div>
                </div>
                <span className={`careers-chevron${open === role.title ? ' open' : ''}`}>›</span>
              </button>

              {open === role.title && (
                <div className="careers-role-body">
                  <p>{role.description}</p>
                  <a
                    href="mailto:careers@primesteakandgrill.com"
                    className="link-gold"
                    style={{ marginTop: '1rem', display: 'inline-block' }}
                  >
                    Apply for this role →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="static-cta-box">
          <p className="static-cta-text">
            Don't see the right role? Send us your CV anyway.
          </p>
          <a href="mailto:careers@primesteakandgrill.com" className="btn-gold" style={{ textDecoration: 'none', display: 'inline-block' }}>
            careers@primesteakandgrill.com
          </a>
        </div>

      </div>

      <Footer />
    </>
  );
}
