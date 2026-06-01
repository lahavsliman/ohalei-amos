import { useState } from 'react';
import s from './ContactForm.module.css';

const WHATSAPP_PHONE = '972549485754';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    const typeLabels = { shiva: 'שבעה', azkara: 'אזכרה', shabbat: 'שבת חתן', other: 'אחר' };
    const msg = [
      `שלום, אני ${data.name} מ${data.city}.`,
      `טלפון: ${data.phone}`,
      data.email ? `אימייל: ${data.email}` : '',
      `צורך: ${typeLabels[data.type] || data.type}`,
    ].filter(Boolean).join('\n');

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  }

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.tag}>צרו קשר</div>
          <h2>אנחנו נדאג להכל<br />השאירו פרטים ותנו לנו לדאוג לכם</h2>
          <div className={s.divider} />
        </div>
        <div className={s.wrap}>
          <form onSubmit={handleSubmit}>
            <div className={s.grid}>
              <div className={s.field}>
                <label htmlFor="name">שם *</label>
                <input type="text" id="name" name="name" placeholder="הכנס שם מלא" required />
              </div>
              <div className={s.field}>
                <label htmlFor="phone">טלפון *</label>
                <input type="tel" id="phone" name="phone" placeholder="054-948-5754" required />
              </div>
              <div className={s.field}>
                <label htmlFor="email">אימייל</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" />
              </div>
              <div className={s.field}>
                <label htmlFor="city">עיר *</label>
                <input type="text" id="city" name="city" placeholder="עיר המגורים" required />
              </div>
              <div className={`${s.field} ${s.full}`}>
                <label>לאיזה צורך אתם צריכים ציוד? *</label>
                <div className={s.radioGroup}>
                  <label className={s.radioLabel}>
                    <input type="radio" name="type" value="shiva" required /> שבעה
                  </label>
                  <label className={s.radioLabel}>
                    <input type="radio" name="type" value="azkara" /> אזכרה
                  </label>
                  <label className={s.radioLabel}>
                    <input type="radio" name="type" value="shabbat" /> שבת חתן
                  </label>
                  <label className={s.radioLabel}>
                    <input type="radio" name="type" value="other" /> אחר
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className={s.submit} disabled={submitted}>
              {submitted ? '✅ נפתח וואטסאפ — נדבר בקרוב!' : 'שלחו פרטים ✓'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
