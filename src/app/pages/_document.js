import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v3" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link rel="manifest" href="/site.webmanifest?v3" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:url" content="" />
        <meta name="twitter:url" content="" />
        <meta name="image" content="/assets/sunnycat.png?v3" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="$JSC" />
        <meta property="og:description" content="$JSC" />
        <meta property="og:image" content="/assets/sunnycat.png" />
        <meta name="twitter:title" content="$JSC" />
        <meta name="twitter:description" content="$JSC" />
        <meta name="twitter:image" content="/assets/sunnycat.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
