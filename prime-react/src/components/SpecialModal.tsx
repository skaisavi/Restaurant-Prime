import { useEffect } from 'react';
import { useBooking } from './BookingModal';

export type SpecialType = 'sunday-roast' | 'byo-mondays' | null;

interface Props {
  type: SpecialType;
  onClose: () => void;
}

const content = {
  'sunday-roast': {
    label: 'Every Sunday',
    title: 'The Sunday Roast',
    subtitle: 'A British tradition, done properly.',
    price: '£32',
    priceNote: 'per person · children £18',
    sections: [
      {
        heading: 'Choose your cut',
        items: [
          'Prime rib of beef — slow-roasted, medium-rare',
          'Rack of lamb — herb crust, redcurrant jus',
          'Free-range chicken — lemon thyme butter',
          'Slow-roasted pork belly — crackling, apple sauce',
        ],
      },
      {
        heading: 'All the trimmings',
        items: [
          'Twice-cooked roast potatoes',
          'Cauliflower cheese',
          'Honey-glazed heritage carrots',
          'Buttered seasonal greens',
          'Giant Yorkshire pudding',
          'Proper beef-bone gravy',
        ],
      },
    ],
    note: 'Available every Sunday, 12pm – 8pm. Booking strongly recommended.',
    cta: 'Reserve a Table',
  },
  'byo-mondays': {
    label: 'Every Monday',
    title: 'BYO Mondays',
    subtitle: 'Your bottle. Our kitchen. No corkage.',
    price: '£0',
    priceNote: 'corkage · always',
    sections: [
      {
        heading: 'How it works',
        items: [
          'Bring any bottle — wine, champagne, or spirits',
          'Our team will chill, decant or serve it for you',
          'Our full seasonal menu is available all evening',
          'Groups of any size welcome',
        ],
      },
      {
        heading: 'Good to know',
        items: [
          'Available every Monday from 12pm',
          'No limit on bottles per table',
          'Walk-ins always welcome',
          'Booking recommended for groups of 6+',
        ],
      },
    ],
    note: 'A standing offer — no voucher or code needed. Just show up.',
    cta: 'Reserve a Table',
  },
};

export default function SpecialModal({ type, onClose }: Props) {
  const { openBooking } = useBooking();
  const isOpen = type !== null;
  const data = type ? content[type] : null;

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className={`story-overlay${isOpen ? ' open' : ''}`} onClick={onClose}>
      <div className="story-panel special-panel" onClick={(e) => e.stopPropagation()}>
        <button className="story-close" onClick={onClose} aria-label="Close">
          <span /><span />
        </button>

        {data && (
          <div className="special-modal-inner">
            {/* Header */}
            <div className="special-modal-header">
              <p className="section-label" style={{ color: 'var(--gold-light)' }}>{data.label}</p>
              <h2 className="special-modal-title">{data.title}</h2>
              <p className="special-modal-subtitle">{data.subtitle}</p>
              <div className="special-modal-price">
                <span className="special-price-amount">{data.price}</span>
                <span className="special-price-note">{data.priceNote}</span>
              </div>
            </div>

            {/* Content */}
            <div className="special-modal-body">
              {data.sections.map((section) => (
                <div key={section.heading} className="special-modal-section">
                  <p className="section-label">{section.heading}</p>
                  <ul className="special-modal-list">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <p className="special-modal-note">{data.note}</p>

              <button
                className="btn-gold special-modal-cta"
                onClick={() => { onClose(); openBooking(); }}
              >
                {data.cta}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
