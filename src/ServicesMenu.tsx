import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react';
import { serviceCategories } from './servicesData';

interface ServicesMenuProps {
  onNavigate?: () => void;
}

function ServicesMenu({ onNavigate }: ServicesMenuProps) {
  const [open, setOpen] = useState(false);
  const canHoverRef = useRef(false);
  const closeTimeoutRef = useRef<number | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    canHoverRef.current = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const handleOutsideClick = (event: Event) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [open]);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    if (!canHoverRef.current) return;
    clearCloseTimeout();
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (!canHoverRef.current) return;
    closeTimeoutRef.current = window.setTimeout(() => setOpen(false), 200);
  };

  const handleTriggerClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (canHoverRef.current) return;
    setOpen((prev) => !prev);
  };

  const handleServiceClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(false);
    onNavigate?.();

    // On mobile, closing the hamburger nav + this mega-panel removes a lot of
    // height at once. Waiting a beat lets that reflow/collapse fully finish
    // before we measure and scroll, so we land on the right spot instead of
    // scrolling relative to the stale (still-open) layout.
    window.setTimeout(() => {
      const target = document.getElementById('services');
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.pushState(null, '', '#services');
    }, 80);
  };

  return (
    <div
      className="services-menu"
      ref={rootRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={`services-trigger ${open ? 'active-link' : ''}`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleTriggerClick}
      >
        Services
        <span className={`services-chevron ${open ? 'services-chevron-open' : ''}`} aria-hidden="true">
          &#9662;
        </span>
      </button>

      {open && (
        <div className="mega-panel">
          <div className="mega-panel-grid">
            {serviceCategories.map((category) => (
              <div className="mega-column" key={category.title}>
                <p className="mega-column-title">{category.title}</p>
                <ul className="mega-column-list">
                  {category.services.map((service) => (
                    <li key={service}>
                      <a href="#services" onClick={handleServiceClick}>
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesMenu;
