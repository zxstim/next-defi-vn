import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function DefiAnalytics() {

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-B3Z17PVC6F"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-B3Z17PVC6F');
          `}
      </Script>
      <Head>
        <title>Testing</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="Testing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Testing" />
        <meta property="og:title" content="Testing" key="ogtitle" />
        <meta
          property="og:description"
          content="Testing"
          key="ogdesc"
        />
        <meta property="og:site_name" content="Testing" key="ogsitename" />
        <meta property="og:url" content="https://defi.vn/testing" key="ogurl" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">Testing</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
          </div>
          <Link href="/">Back</Link>
          <h2>TESTING</h2>
          <br />
          <hr />
        </div>
      </div>
    </>
  );
}
