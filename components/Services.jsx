import s from './Services.module.css';

const services = [
  { icon: '⛺', label: 'אוהלי אבלים' },
  { icon: '🪑', label: 'כסאות אבלים' },
  { icon: '🌡️', label: 'פתרונות צינון' },
  { icon: '🔥', label: 'פתרונות חימום' },
  { icon: '💡', label: 'תאורה וחשמל' },
  { icon: '🍽️', label: 'כיסאות ושולחנות' },
  { icon: '❄️', label: 'מקררים ומקפיאים' },
  { icon: '📖', label: 'סידורים ומשניות' },
  { icon: '➕', label: 'ציוד נוסף לפי הצורך' },
];

export default function Services() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.tag}>השירותים שלנו</div>
          <h2>מה תמצאו אצלנו?</h2>
          <div className={s.divider} />
        </div>
        <div className={s.grid}>
          {services.map((svc) => (
            <div key={svc.label} className={s.card}>
              <span className={s.icon}>{svc.icon}</span>
              <h3>{svc.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
