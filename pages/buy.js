import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import OtcPriceComponent from "../components/OtcPrice/OtcPrice";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";
import RefreshButton from "../components/RefreshButton/RefreshButton";
import axios from "axios";

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
        <title>Buy crypto</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="Buy crypto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Buy crypto" />
        <meta property="og:title" content="Buy crypto" key="ogtitle" />
        <meta
          property="og:description"
          content="Buy crypto"
          key="ogdesc"
        />
        <meta property="og:site_name" content="Buy crypto" key="ogsitename" />
        <meta property="og:url" content="https://defi.vn/buy" key="ogurl" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/buy" locale="en">
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
          <OtcPriceComponent data={props.data} />
          <UpButton />
          <RefreshButton />
          <br />
          <hr />
          <AppFooter />
        </div>
      </div>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await axios.get("https://api3.pyhash.com/signal/all/otcprice/");
  // Pass data to the page via props
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["common", "buy"])),
      data: res.data,
    },
  };
}
