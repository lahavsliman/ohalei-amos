import s from './Hero.module.css';

const LOGO_SRC = "/logo.png";

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.pattern} />
      <div className={s.content}>
        <div className={s.logoWrap}>
          <img src={LOGO_SRC} alt="אוהלי עמוס" />
        </div>
        <h1 className={s.title}>
          כל הציוד לשבעה<br /><span>במקום אחד</span>
        </h1>
        <p className={s.subtitle}>
          השכרת אוהלים וציוד לשבעה, אזכרות ושבתות חתן.<br />
          שירות מהיר, ציוד נקי ואיכותי, זמינות 24/6 בפריסה ארצית.
        </p>
        <div className={s.badges}>
          <span className={s.badge}>זמינות מיידית</span>
          <span className={s.badge}>פריסה ארצית</span>
          <span className={s.badge}>ציוד נקי ואיכותי</span>
        </div>
        <div className={s.cta}>
          <a href="https://api.whatsapp.com/send?phone=972549485754" className={s.btnPrimary}>
            💬 שלחו לנו הודעה
          </a>
          <a href="tel:972549485754" className={s.btnSecondary}>
            📞 חייגו עכשיו
          </a>
        </div>
      </div>
      <div className={s.scroll}>
        <div className={s.scrollDot} />
        גלול למטה
      </div>
    </section>
  );
}
