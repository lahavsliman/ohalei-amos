import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="he-IL" dir="rtl">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Google tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1TM6SQBV6X"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-1TM6SQBV6X');
            `,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
