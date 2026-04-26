import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AMOUNTS = [25, 50, 75, 100, 150, 200];

function generateCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'PRIME-';
  for (let i = 0; i < 8; i++) {
    if (i === 4) code += '-';
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export default function GiftVouchersPage() {
  const [amount, setAmount] = useState<number>(100);
  const [custom, setCustom] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [voucherCode] = useState(generateCode);

  const finalAmount = custom ? parseInt(custom) || 0 : amount;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!recipient || !email || finalAmount < 10) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <>
        <nav>
          <Link to="/" className="logo">PRIME</Link>
          <Link to="/" className="back-link">← Back home</Link>
        </nav>

        <div className="voucher-success">
          <div className="voucher-success-inner">
            <div className="voucher-success-icon">✓</div>
            <p className="section-label" style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Order confirmed</p>
            <h1 className="voucher-success-title">Your gift is on its way.</h1>
            <p className="voucher-success-sub">
              A voucher for <strong>£{finalAmount}</strong> has been sent to <strong>{email}</strong>.
            </p>

            <div className="voucher-card">
              <div className="voucher-card-top">
                <span className="voucher-card-logo">PRIME</span>
                <span className="voucher-card-label">Gift Voucher</span>
              </div>
              <div className="voucher-card-amount">£{finalAmount}</div>
              <p className="voucher-card-recipient">For {recipient}</p>
              {message && <p className="voucher-card-message">"{message}"</p>}
              <div className="voucher-card-code">{voucherCode}</div>
              <p className="voucher-card-terms">Valid at all Prime locations · No expiry</p>
            </div>

            <Link to="/" className="btn-gold" style={{ display: 'inline-block', marginTop: '2rem' }}>
              Back to Prime
            </Link>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <nav>
        <Link to="/" className="logo">PRIME</Link>
        <Link to="/" className="back-link">← Back home</Link>
      </nav>

      {/* Hero */}
      <div className="restaurant-hero">
        <span className="eyebrow">For someone special</span>
        <h1>Give the gift<br /><em>of Prime</em></h1>
        <div className="hero-divider" />
      </div>

      <div className="voucher-page">
        <form className="voucher-form" onSubmit={handleSubmit}>

          {/* Amount */}
          <div className="voucher-section">
            <p className="section-label">Choose an amount</p>
            <div className="voucher-amounts">
              {AMOUNTS.map((a) => (
                <button
                  key={a}
                  type="button"
                  className={`voucher-amount-btn${amount === a && !custom ? ' active' : ''}`}
                  onClick={() => { setAmount(a); setCustom(''); }}
                >
                  £{a}
                </button>
              ))}
              <input
                className={`voucher-custom-input${custom ? ' active' : ''}`}
                type="number"
                placeholder="Custom £"
                min={10}
                value={custom}
                onChange={(e) => { setCustom(e.target.value); }}
                onFocus={() => setAmount(0)}
              />
            </div>
            {finalAmount > 0 && (
              <p className="voucher-total">Total: <strong>£{finalAmount}</strong></p>
            )}
          </div>

          <div className="voucher-divider" />

          {/* Details */}
          <div className="voucher-section">
            <p className="section-label">Recipient details</p>

            <div className="voucher-field">
              <label className="voucher-label">Recipient's name *</label>
              <input
                className="voucher-input"
                type="text"
                placeholder="e.g. Sarah"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                required
              />
            </div>

            <div className="voucher-field">
              <label className="voucher-label">Delivery email *</label>
              <input
                className="voucher-input"
                type="email"
                placeholder="their@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="voucher-field">
              <label className="voucher-label">Personal message <span style={{ opacity: 0.5 }}>(optional)</span></label>
              <textarea
                className="voucher-input voucher-textarea"
                placeholder="Write something thoughtful..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
              />
            </div>
          </div>

          <div className="voucher-divider" />

          {/* Payment (fake) */}
          <div className="voucher-section">
            <p className="section-label">Payment</p>
            <div className="voucher-fake-card">
              <div className="voucher-field">
                <label className="voucher-label">Card number</label>
                <input className="voucher-input" type="text" placeholder="1234 5678 9012 3456" maxLength={19} />
              </div>
              <div className="voucher-row">
                <div className="voucher-field">
                  <label className="voucher-label">Expiry</label>
                  <input className="voucher-input" type="text" placeholder="MM / YY" maxLength={7} />
                </div>
                <div className="voucher-field">
                  <label className="voucher-label">CVV</label>
                  <input className="voucher-input" type="text" placeholder="···" maxLength={3} />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="btn-gold voucher-submit">
            Purchase Gift Voucher · £{finalAmount || '—'}
          </button>

          <p className="voucher-secure">🔒 Secure checkout · Delivered instantly by email · Valid at all locations</p>

        </form>
      </div>

      <Footer />
    </>
  );
}
