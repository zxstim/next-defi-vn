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
        <title>Reading crypto researches | Đọc nghiên cứu crypto - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Read breakdowns of DeFi protocols, their mechanism and why they are revolutionary compared to the current financial system." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Reading crypto researches | Đọc nghiên cứu crypto - DeFi.vn" />
        <meta property="og:description" content="Read breakdowns of DeFi protocols, their mechanism and why they are revolutionary compared to the current financial system." key="ogdesc" />
        <meta property="og:url" content="https://defi.vn/reading" key="ogurl" />
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/3f062ee1-01ef-43c8-cdf8-3999cb43f200/defi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content="https://www.defi.vn/reading" />
        <meta name="twitter:title" content="Reading crypto researches | Đọc nghiên cứu crypto - DeFi.vn" />
        <meta name="twitter:description" content="Read breakdowns of DeFi protocols, their mechanism and why they are revolutionary compared to the current financial system." />
        <meta name="twitter:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/3f062ee1-01ef-43c8-cdf8-3999cb43f200/defi" />
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
