import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const sections = [
  {
    heading: 'Who we are',
    body: `Prime Steak & Grill Ltd ("Prime", "we", "us") operates four restaurants across Hertfordshire and Buckinghamshire. This policy explains how we collect, use, and protect your personal data when you visit our website, make a reservation, or contact us.

Our registered address is: Prime Steak & Grill Ltd, 83–85 London Road, St Albans, AL1 1LN. If you have any questions about this policy, email us at privacy@primesteakandgrill.com.`,
  },
  {
    heading: 'What data we collect',
    body: `We collect information you give us directly, including:

• Reservation data — name, email address, phone number, date, time, party size, and any special requests you provide when booking a table.
• Contact form submissions — name, email, subject, and message content.
• Gift voucher purchases — recipient name, delivery email, and personal message.
• Communications — any emails or messages you send to us.

We also collect limited technical data automatically when you visit our website, including your IP address, browser type, and pages visited. This is used solely for website analytics and security.`,
  },
  {
    heading: 'How we use your data',
    body: `We use your personal data to:

• Process and manage your table reservations and send confirmation communications.
• Respond to enquiries and contact form submissions.
• Send transactional emails related to gift voucher purchases.
• Improve our website and services through anonymised analytics.
• Comply with any legal obligations.

We do not use your data for automated decision-making or profiling. We do not send marketing emails without your explicit consent.`,
  },
  {
    heading: 'Sharing your data',
    body: `We do not sell, rent, or trade your personal data. We may share it with trusted third parties only where necessary to deliver our services, including:

• Reservation management software providers.
• Email delivery services for booking confirmations.
• Payment processors for gift voucher transactions (we never store card details ourselves).

All third-party providers are carefully selected and required to handle your data in accordance with applicable data protection law.`,
  },
  {
    heading: 'Cookies',
    body: `Our website uses essential cookies to function correctly. We do not use advertising or tracking cookies. Analytics cookies (used to understand how visitors use our site) are anonymised and do not identify you personally.

You can disable cookies in your browser settings at any time, though this may affect the functionality of certain parts of the website.`,
  },
  {
    heading: 'Data retention',
    body: `We retain reservation and contact data for a period of 24 months, after which it is securely deleted. You may request deletion of your data at any time by contacting us at privacy@primesteakandgrill.com.`,
  },
  {
    heading: 'Your rights',
    body: `Under UK GDPR, you have the right to:

• Access the personal data we hold about you.
• Request correction of inaccurate data.
• Request deletion of your data ("right to be forgotten").
• Object to or restrict how we process your data.
• Data portability — receive your data in a structured, machine-readable format.
• Withdraw consent at any time, where processing is based on consent.

To exercise any of these rights, please contact us at privacy@primesteakandgrill.com. We will respond within 30 days. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.`,
  },
  {
    heading: 'Changes to this policy',
    body: `We may update this Privacy Policy from time to time. Any significant changes will be communicated on this page with an updated effective date. We encourage you to review this policy periodically.

This policy was last updated: April 2026.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <nav>
        <Link to="/" className="logo">PRIME</Link>
        <Link to="/" className="back-link">← Back home</Link>
      </nav>

      <div className="restaurant-hero">
        <span className="eyebrow">Legal</span>
        <h1>Privacy <em>Policy</em></h1>
        <div className="hero-divider" />
      </div>

      <div className="static-page privacy-page">
        <p className="privacy-effective">Effective date: April 2026</p>

        {sections.map(s => (
          <div key={s.heading} className="privacy-section">
            <h2 className="privacy-heading">{s.heading}</h2>
            <div className="privacy-body">
              {s.body.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        ))}

        <div className="static-cta-box">
          <p className="static-cta-text">Questions about your data?</p>
          <a href="mailto:privacy@primesteakandgrill.com" className="btn-gold"
            style={{ textDecoration: 'none', display: 'inline-block' }}>
            privacy@primesteakandgrill.com
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
