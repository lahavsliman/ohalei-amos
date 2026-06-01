import Head from 'next/head';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import WhyUs from '@/components/WhyUs';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>אוהלי עמוס - השכרת ציוד לאירועים</title>
        <meta name="description" content="השכרת אוהלים וציוד לשבעה, אזכרות ושבתות חתן. שירות מהיר, ציוד נקי ואיכותי, זמינות 24/6 בפריסה ארצית." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Services />
        <Gallery />
        <WhyUs />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
