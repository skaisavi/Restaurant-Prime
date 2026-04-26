import { useEffect, useRef } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function OurStoryModal({ isOpen, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Scroll-triggered fade-ins inside the modal panel
  useEffect(() => {
    if (!isOpen) return;
    const panel = panelRef.current;
    if (!panel) return;

    const items = panel.querySelectorAll<HTMLElement>('.story-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: panel, threshold: 0.15 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isOpen]);

  return (
    <div
      className={`story-overlay${isOpen ? ' open' : ''}`}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="story-panel"
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button className="story-close" onClick={onClose} aria-label="Close">
          <span />
          <span />
        </button>

        {/* Hero image */}
        <div className="story-hero">
          <img src="/restaurant-img.jpg" alt="Prime restaurant" className="story-hero-img" />
          <div className="story-hero-overlay" />
          <p className="story-hero-quote">
            "Some things are worth<br />doing properly."
          </p>
        </div>

        {/* Content */}
        <div className="story-body">

          {/* Origin */}
          <div className="story-section story-reveal">
            <p className="section-label">How it started</p>
            <h2 className="story-h2">A table set<br />with intention</h2>
            <p className="story-p">
              Prime began not with a business plan, but with a question: why should
              a truly great meal require a journey into the city? In 2009, two friends
              sat at a table in Hertfordshire and decided to change that. They believed
              the finest cuts, the most considered wine list, and the kind of service
              that makes you feel genuinely seen — all of it could exist somewhere
              quieter, somewhere closer to home.
            </p>
          </div>

          {/* Pull quote */}
          <div className="story-pull story-reveal">
            <div className="story-pull-line" />
            <blockquote>
              We don't want to be London.<br />We want to be <em>better.</em>
            </blockquote>
            <div className="story-pull-line" />
          </div>

          {/* Kitchen */}
          <div className="story-section story-reveal">
            <p className="section-label">Our craft</p>
            <h2 className="story-h2">Freedom is<br />the only recipe</h2>
            <p className="story-p">
              Our chefs are given something rare in this industry: creative latitude.
              There are no rigid menus handed down from above. Instead, each brigade
              wakes up thinking about what's best today — what arrived this morning,
              what the season is quietly insisting upon. The menu changes because the
              world does.
            </p>
          </div>

          {/* Sourcing */}
          <div className="story-section story-reveal">
            <p className="section-label">Where it comes from</p>
            <h2 className="story-h2">We know the names<br />of our farmers</h2>
            <p className="story-p">
              Every cut of beef is traceable to the farm. Every leaf has a postcode
              we can give you. We've built relationships with producers over years —
              some of them have become friends — because we believe the most important
              decisions in a restaurant happen long before anyone lights the stove.
            </p>
          </div>

          {/* Three pillars */}
          <div className="story-pillars story-reveal">
            <div className="story-pillar">
              <div className="story-pillar-icon">—</div>
              <h3>No Compromise</h3>
              <p>If it isn't right, it doesn't leave the kitchen. Ever.</p>
            </div>
            <div className="story-pillar">
              <div className="story-pillar-icon">—</div>
              <h3>Seasonal Always</h3>
              <p>The calendar is our menu. Nature sets the standard.</p>
            </div>
            <div className="story-pillar">
              <div className="story-pillar-icon">—</div>
              <h3>Every Detail</h3>
              <p>From the bread to the goodbye. Nothing is an afterthought.</p>
            </div>
          </div>

          {/* Closing */}
          <div className="story-closing story-reveal">
            <p>
              Four locations. One standard.<br />
              <em>We're glad you found us.</em>
            </p>
            <button className="btn-gold story-cta" onClick={onClose}>
              Reserve a Table
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
