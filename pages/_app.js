import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import Script from "next/script";
import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import Router from 'next/router';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
