import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-B3Z17PVC6F"
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-B3Z17PVC6F');
          `}
      </Script>
      <Head>
        <title>Defi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Defi.vn" />
        <meta property="og:title" content="Defi.vn" key="ogtitle" />
        <meta
          property="og:description"
          content="Cộng đồng Web3 - Web3 Community"
          key="ogdesc"
        />
        <meta property="og:site_name" content="Defi.vn" key="ogsitename" />
        <meta property="og:url" content="https://defi.vn/" key="ogurl" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
