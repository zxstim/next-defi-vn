import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import OtcPriceComponent from "../components/OtcPrice/OtcPrice";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";
import RampProviders from "../components/RampProviders/RampProviders";


export default function BuyCrypto(props) {
  const { t } = useTranslation("buy");

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
      <title>Buy and Sell crypto | Mua và Bán crypto - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="Buy and Sell crypto with the following ramp providers in different regions around the world." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Buy and Sell crypto | Mua và Bán crypto - DeFi.vn" key="ogtitle" />
        <meta property="og:description" content="Buy and Sell crypto with the following ramp providers in different regions around the world." key="ogdesc" />
        <meta property="og:url" content="https://defi.vn/buy" key="ogurl" />
        <meta property="og:site_name" content="DeFi.vn | DeFi Vietnam" key="ogsitename" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/buy" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/buy" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <h2>{t("subtitle")}</h2>
          <RampProviders />
          {/* <Link href="https://xsilver.com/refer/lennard">Buy crypto</Link> */}
          <UpButton />
          <br />
          <hr />
          <AppFooter />
        </div>
      </div>
    </>
  );
}

// This gets called on every request
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "buy"])),
      // Will be passed to the page component as props
    },
  };
}
