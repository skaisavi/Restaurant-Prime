import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { locations } from '../data/locations';

// ─── Context ────────────────────────────────────────────────

interface BookingContextType {
  openBooking: (locationSlug?: string) => void;
}
const BookingContext = createContext<BookingContextType>({ openBooking: () => {} });
export function useBooking() { return useContext(BookingContext); }

// ─── Provider (renders modal at root level) ─────────────────

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialSlug, setInitialSlug] = useState<string | undefined>();

  function openBooking(locationSlug?: string) {
    setInitialSlug(locationSlug);
    setIsOpen(true);
  }

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} initialSlug={initialSlug} />
    </BookingContext.Provider>
  );
}

// ─── Helpers ────────────────────────────────────────────────

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAY_NAMES   = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

function buildCalendar(year: number, month: number): Array<Date | null> {
  const first = new Date(year, month, 1);
  const last  = new Date(year, month + 1, 0);
  let startDow = first.getDay() - 1;
  if (startDow < 0) startDow = 6;
  const days: Array<Date | null> = Array(startDow).fill(null);
  for (let d = 1; d <= last.getDate(); d++) days.push(new Date(year, month, d));
  while (days.length % 7 !== 0) days.push(null);
  return days;
}

const SLOTS = {
  weekday: ['12:00','12:30','13:00','13:30','14:00','18:00','18:30','19:00','19:30','20:00','20:30','21:00'],
  saturday:['11:00','11:30','12:00','12:30','13:00','13:30','14:00','18:00','18:30','19:00','19:30','20:00','20:30','21:00'],
  sunday:  ['12:00','12:30','13:00','13:30','14:00','14:30','15:00','18:00','18:30','19:00','20:00'],
};

function getSlotsForDate(date: Date) {
  const day = date.getDay();
  const list = day === 0 ? SLOTS.sunday : day === 6 ? SLOTS.saturday : SLOTS.weekday;
  return list.map(time => ({
    time,
    available: ((date.getDate() * 3 + parseInt(time.replace(':', ''))) % 5) !== 0,
  }));
}

function formatDate(d: Date) {
  return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

function generateRef() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return 'BK-' + Array.from({ length: 8 }, (_, i) =>
    (i === 4 ? '-' : '') + chars[Math.floor(Math.random() * chars.length)]
  ).join('');
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

// ─── Modal ──────────────────────────────────────────────────

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialSlug?: string;
}

export default function BookingModal({ isOpen, onClose, initialSlug }: Props) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [step, setStep]             = useState(1);
  const [locationSlug, setLocation] = useState(initialSlug ?? locations[0].slug);
  const [viewYear, setViewYear]     = useState(today.getFullYear());
  const [viewMonth, setViewMonth]   = useState(today.getMonth());
  const [date, setDate]             = useState<Date | null>(null);
  const [time, setTime]             = useState<string | null>(null);
  const [guests, setGuests]         = useState(2);
  const [firstName, setFirstName]   = useState('');
  const [lastName, setLastName]     = useState('');
  const [email, setEmail]           = useState('');
  const [phone, setPhone]           = useState('');
  const [requests, setRequests]     = useState('');
  const [bookingRef]                = useState(generateRef);

  // Sync pre-selected location when modal opens
  useEffect(() => {
    if (isOpen) {
      setLocation(initialSlug ?? locations[0].slug);
      setStep(1);
      setDate(null);
      setTime(null);
    }
  }, [isOpen, initialSlug]);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [onClose]);

  const calDays  = buildCalendar(viewYear, viewMonth);
  const slots    = date ? getSlotsForDate(date) : [];
  const maxDate  = new Date(today); maxDate.setMonth(today.getMonth() + 6);
  const canNext  = !!date && !!time;
  const canBook  = firstName && lastName && email && phone;
  const location = locations.find(l => l.slug === locationSlug)!;

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }
  function canGoPrev() {
    return viewYear > today.getFullYear() || viewMonth > today.getMonth();
  }

  function selectDate(d: Date) {
    setDate(d);
    setTime(null);
  }

  return (
    <div
      className={`booking-overlay${isOpen ? ' open' : ''}`}
      onClick={onClose}
    >
      <div className="booking-panel" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="booking-header">
          <span className="booking-logo">PRIME</span>
          {step < 3 && (
            <div className="booking-steps">
              <span className={`booking-step${step === 1 ? ' active' : step > 1 ? ' done' : ''}`}>1</span>
              <span className="booking-step-line" />
              <span className={`booking-step${step === 2 ? ' active' : step > 2 ? ' done' : ''}`}>2</span>
            </div>
          )}
          <button className="booking-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* ── Step 1: Visit details ── */}
        {step === 1 && (
          <div className="booking-body">
            <p className="section-label" style={{ marginBottom: '0.4rem' }}>Reserve a table</p>
            <h2 className="booking-title">Your visit</h2>

            {/* Location */}
            <div className="booking-field-group">
              <p className="booking-field-label">Location</p>
              <div className="booking-location-grid">
                {locations.map(loc => (
                  <button
                    key={loc.slug}
                    type="button"
                    className={`booking-location-btn${locationSlug === loc.slug ? ' active' : ''}`}
                    onClick={() => setLocation(loc.slug)}
                  >
                    {loc.shortName}
                  </button>
                ))}
              </div>
            </div>

            {/* Guests */}
            <div className="booking-field-group">
              <p className="booking-field-label">Guests</p>
              <div className="booking-guests">
                <button
                  type="button"
                  className="booking-guests-btn"
                  onClick={() => setGuests(g => Math.max(1, g - 1))}
                >−</button>
                <span className="booking-guests-count">{guests}</span>
                <button
                  type="button"
                  className="booking-guests-btn"
                  onClick={() => setGuests(g => Math.min(20, g + 1))}
                >+</button>
                <span className="booking-guests-label">
                  {guests === 1 ? 'guest' : guests > 12 ? 'guests — we\'ll be in touch' : 'guests'}
                </span>
              </div>
            </div>

            {/* Calendar */}
            <div className="booking-field-group">
              <p className="booking-field-label">Date</p>
              <div className="booking-calendar">
                <div className="cal-nav">
                  <button
                    type="button"
                    className="cal-nav-btn"
                    onClick={prevMonth}
                    disabled={!canGoPrev()}
                  >‹</button>
                  <span className="cal-month-label">
                    {MONTH_NAMES[viewMonth]} {viewYear}
                  </span>
                  <button type="button" className="cal-nav-btn" onClick={nextMonth}>›</button>
                </div>
                <div className="cal-grid">
                  {DAY_NAMES.map(d => (
                    <span key={d} className="cal-day-name">{d}</span>
                  ))}
                  {calDays.map((d, i) => {
                    if (!d) return <span key={`e${i}`} />;
                    const isPast    = d < today;
                    const isFuture  = d > maxDate;
                    const isToday   = isSameDay(d, today);
                    const isSelected = date ? isSameDay(d, date) : false;
                    return (
                      <button
                        key={d.toISOString()}
                        type="button"
                        disabled={isPast || isFuture}
                        className={[
                          'cal-day',
                          isPast || isFuture ? 'disabled' : '',
                          isToday   ? 'today'    : '',
                          isSelected ? 'selected' : '',
                        ].join(' ')}
                        onClick={() => selectDate(d)}
                      >
                        {d.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Time slots */}
            {date && (
              <div className="booking-field-group">
                <p className="booking-field-label">Time</p>
                <div className="booking-slots">
                  {slots.map(({ time: t, available }) => (
                    <button
                      key={t}
                      type="button"
                      disabled={!available}
                      className={[
                        'booking-slot',
                        !available ? 'unavailable' : '',
                        time === t ? 'selected' : '',
                      ].join(' ')}
                      onClick={() => available && setTime(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              className="btn-gold booking-cta"
              disabled={!canNext}
              onClick={() => setStep(2)}
            >
              Continue →
            </button>
          </div>
        )}

        {/* ── Step 2: Contact details ── */}
        {step === 2 && (
          <div className="booking-body">
            <p className="section-label" style={{ marginBottom: '0.4rem' }}>Almost there</p>
            <h2 className="booking-title">Your details</h2>

            {/* Summary pill */}
            <div className="booking-summary-pill">
              <span>{location.shortName}</span>
              <span className="bsp-dot">·</span>
              <span>{date ? formatDate(date) : ''}</span>
              <span className="bsp-dot">·</span>
              <span>{time}</span>
              <span className="bsp-dot">·</span>
              <span>{guests} {guests === 1 ? 'guest' : 'guests'}</span>
              <button className="bsp-edit" onClick={() => setStep(1)}>Edit</button>
            </div>

            <div className="booking-form-row">
              <div className="booking-field">
                <label className="booking-field-label">First name *</label>
                <input className="booking-input" type="text" value={firstName}
                  onChange={e => setFirstName(e.target.value)} placeholder="Jane" />
              </div>
              <div className="booking-field">
                <label className="booking-field-label">Last name *</label>
                <input className="booking-input" type="text" value={lastName}
                  onChange={e => setLastName(e.target.value)} placeholder="Smith" />
              </div>
            </div>

            <div className="booking-field">
              <label className="booking-field-label">Email *</label>
              <input className="booking-input" type="email" value={email}
                onChange={e => setEmail(e.target.value)} placeholder="jane@example.com" />
            </div>

            <div className="booking-field">
              <label className="booking-field-label">Phone *</label>
              <input className="booking-input" type="tel" value={phone}
                onChange={e => setPhone(e.target.value)} placeholder="+44 7700 000000" />
            </div>

            <div className="booking-field">
              <label className="booking-field-label">
                Special requests <span style={{ opacity: 0.45 }}>(optional)</span>
              </label>
              <textarea
                className="booking-input booking-textarea"
                value={requests}
                onChange={e => setRequests(e.target.value)}
                placeholder="Dietary requirements, celebrations, high chairs..."
                rows={3}
              />
            </div>

            <div className="booking-actions">
              <button type="button" className="booking-back" onClick={() => setStep(1)}>
                ← Back
              </button>
              <button
                className="btn-gold booking-cta"
                disabled={!canBook}
                onClick={() => setStep(3)}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}

        {/* ── Step 3: Confirmation ── */}
        {step === 3 && (
          <div className="booking-body booking-confirmed">
            <div className="booking-tick">✓</div>
            <p className="section-label" style={{ color: 'var(--gold)', margin: '1.25rem 0 0.4rem' }}>
              Booking confirmed
            </p>
            <h2 className="booking-title">See you soon,<br /><em>{firstName}.</em></h2>
            <p className="booking-confirmed-sub">
              A confirmation has been sent to <strong>{email}</strong>
            </p>

            <div className="booking-confirm-card">
              <div className="bcc-row">
                <span className="bcc-label">Location</span>
                <span className="bcc-value">{location.name}</span>
              </div>
              <div className="bcc-row">
                <span className="bcc-label">Date</span>
                <span className="bcc-value">{date ? formatDate(date) : ''}</span>
              </div>
              <div className="bcc-row">
                <span className="bcc-label">Time</span>
                <span className="bcc-value">{time}</span>
              </div>
              <div className="bcc-row">
                <span className="bcc-label">Guests</span>
                <span className="bcc-value">{guests}</span>
              </div>
              {requests && (
                <div className="bcc-row">
                  <span className="bcc-label">Requests</span>
                  <span className="bcc-value">{requests}</span>
                </div>
              )}
              <div className="bcc-ref">{bookingRef}</div>
            </div>

            <button className="btn-gold booking-cta" onClick={onClose}>
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
