import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

export default function NotFoundPage() {
  usePageTitle('Page Not Found');

  return (
    <div className="not-found">
      <Link to="/" className="logo not-found-logo">PRIME</Link>
      <p className="not-found-code">404</p>
      <h1 className="not-found-title">This table doesn't exist.</h1>
      <p className="not-found-sub">
        The page you're looking for has moved, or never existed.<br />
        Let us take you somewhere better.
      </p>
      <div className="not-found-links">
        <Link to="/" className="btn-gold" style={{ textDecoration: 'none' }}>Back to Home</Link>
        <Link to="/menus" className="btn-outline not-found-outline" style={{ textDecoration: 'none' }}>View Menus</Link>
      </div>
    </div>
  );
}
