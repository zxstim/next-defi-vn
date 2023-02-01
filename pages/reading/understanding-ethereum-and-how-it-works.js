import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import UpButton from "../../../components/UpButton/UpButton";
import AppFooter from "../../../components/AppFooter/AppFooter";

export default function Post1(props) {
  
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
        <title>Information about 0xStim | Thông tin về 0xStim - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="Learn more about 0xStim, DeFi.vn lead builder. See the website progress, what's next, how can you help." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="DeFi.vn - Information about 0xStim | Thông tin về 0xStim" key="ogtitle" />
        <meta property="og:description" content="Learn more about 0xStim, DeFi.vn lead builder. See the website progress, what's next, how can you help." key="ogdesc" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://defi.vn/0xstim" key="ogurl" />
        <meta property="og:site_name" content="DeFi.vn | DeFi Vietnam Hub" key="ogsitename" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">Test</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
          </div>
          <UpButton />
          <h2>README.md</h2>
          <p>
            👋 Hi, I’m 0xStim. I’m a fullstack developer in Python,
            Javascript and Solidity. Currently reading up a lot on Go and Rust
            for high performance systems. I'm a supporter of DeFi, hence the creation of Defi.vn.
          </p>
          <br />
          <hr />
          <AppFooter />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      // Will be passed to the page component as props
    },
  };
}

