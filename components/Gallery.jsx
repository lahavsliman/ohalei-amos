import { useRef, useState, useCallback, useEffect } from 'react';
import s from './Gallery.module.css';

// ── Add / remove images here. Put files in public/gallery/ ──────────────────
const IMAGES = [
  { src: '/gallery/WhatsApp Image 2026-06-01 at 16.56.12 (1).webp', alt: 'אוהל שבעה' },
  { src: '/gallery/WhatsApp Image 2026-06-01 at 16.56.12 (2).webp', alt: 'ציוד שבעה' },
  { src: '/gallery/WhatsApp Image 2026-06-01 at 16.56.12 (3).webp', alt: 'הקמה' },
  { src: '/gallery/WhatsApp Image 2026-06-01 at 16.56.12 (4).webp', alt: 'אוהל' },
  { src: '/gallery/WhatsApp Image 2026-06-01 at 16.56.12.webp', alt: 'ציוד' },
  { src: '/gallery/WhatsApp Image 2026-06-01 at 16.56.13 (1).webp', alt: 'הקמה' },
  { src: '/gallery/WhatsApp Image 2026-06-01 at 16.56.13 (2).webp', alt: 'אוהל' },
  { src: '/gallery/WhatsApp Image 2026-06-01 at 16.56.13 (3).webp', alt: 'ציוד' },
  { src: '/gallery/WhatsApp Image 2026-06-01 at 16.56.13.webp', alt: 'הקמה' },
  { src: '/gallery/WhatsApp Image 2026-06-01 at 16.56.14 (1).webp', alt: 'אוהל' },
  { src: '/gallery/WhatsApp Image 2026-06-01 at 16.56.14.webp', alt: 'ציוד' },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function Gallery() {
  const trackRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // How many slides are fully visible at once (depends on viewport)
  const slidesVisible = useCallback(() => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }, []);

  const totalDots = Math.ceil(IMAGES.length / slidesVisible());

  // Sync dot indicator on scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    function onScroll() {
      const ratio = el.scrollLeft / (el.scrollWidth - el.clientWidth || 1);
      const idx = Math.round(ratio * (totalDots - 1));
      setActiveIdx(idx);
    }

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [totalDots]);

  function scrollTo(dotIdx) {
    const el = trackRef.current;
    if (!el) return;
    const slideWidth = el.clientWidth / slidesVisible();
    el.scrollTo({ left: dotIdx * slidesVisible() * slideWidth, behavior: 'smooth' });
    setActiveIdx(dotIdx);
  }

  function prev() { scrollTo(Math.max(0, activeIdx - 1)); }
  function next() { scrollTo(Math.min(totalDots - 1, activeIdx + 1)); }

  return (
    <section className={s.section}>
      <div className={s.container}>

        <div className={s.header}>
          <div className={s.tag}>הגלריה שלנו</div>
          <h2>ציוד נקי ואיכותי</h2>
          <div className={s.divider} />
        </div>

        <div className={s.trackWrap}>
          {/* prev arrow — RTL: "הקודם" = ימינה */}
          <button
            className={s.arrow}
            onClick={next}
            disabled={activeIdx >= totalDots - 1}
            aria-label="הבא"
          >
            ‹
          </button>

          <div className={s.track} ref={trackRef}>
            {IMAGES.map((img) => (
              <div key={img.src} className={s.slide}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>

          {/* next arrow — RTL: "הבא" = שמאלה */}
          <button
            className={s.arrow}
            onClick={prev}
            disabled={activeIdx <= 0}
            aria-label="הקודם"
          >
            ›
          </button>
        </div>

        {/* Dot navigation */}
        <div className={s.dots} role="tablist" aria-label="גלריה ניווט">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              className={`${s.dot} ${i === activeIdx ? s.active : ''}`}
              onClick={() => scrollTo(i)}
              role="tab"
              aria-selected={i === activeIdx}
              aria-label={`קבוצת תמונות ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
