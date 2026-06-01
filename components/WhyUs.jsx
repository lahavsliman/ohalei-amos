import s from './WhyUs.module.css';

const features = [
  'זמינות מיידית בפריסה ארצית',
  'ניסיון של שנים באירועי שבעה ואזכרות',
  'עבודה עברית, שקטה ומכובדת',
  'הקמה ופירוק מהירים',
  'תמיכה זמינה לאורך כל השבעה',
  'התחייבות למחירים מיוחדים',
];

const steps = [
  { emoji: '📞', text: 'יוצרים קשר – ומבינים את הצורך' },
  { emoji: '💵', text: 'מקבלים חבילה המותאמת לצרכים שלכם' },
  { emoji: '🛠️', text: 'מקימים הכל – אוהל, חשמל, וציוד' },
  { emoji: '🕯️', text: 'ליווי שקט לאורך כל השבעה' },
  { emoji: '🛠️', text: 'מגיעים לפרק ולסדר הכל אחרי השבעה' },
  { emoji: '🙏', text: 'מאחלים לכם שלא תדעו עוד צער לעולם' },
];

export default function WhyUs() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.twoCol}>
          <div className={s.card}>
            <h3>למה לבחור בנו?</h3>
            <p className={s.sub}>שיחה אחת ואנחנו בדרך אליכם!</p>
            <ul className={s.featureList}>
              {features.map((f) => (
                <li key={f}>
                  <div className={s.checkIcon}>✓</div>
                  {f}
                </li>
              ))}
            </ul>
            <a href="https://api.whatsapp.com/send?phone=972549485754" className={s.btn}>
              שלחו לנו הודעה
            </a>
          </div>
          <div className={`${s.card} ${s.dark}`}>
            <h3>איך אנחנו עובדים?</h3>
            <p className={s.sub}>שיחה אחת ואנחנו בדרך אליכם!</p>
            <ul className={s.stepList}>
              {steps.map((step) => (
                <li key={step.text}>
                  <span className={s.stepEmoji}>{step.emoji}</span>
                  {step.text}
                </li>
              ))}
            </ul>
            <a href="tel:972549485754" className={`${s.btn} ${s.btnOutline}`}>
              חייגו עכשיו
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
