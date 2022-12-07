import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import RefreshButton from "../components/RefreshButton/RefreshButton";
import HowToBot from "../components/BotTrading/HowToBot/HowToBot";
import CryptoScanner from "../components/CryptoScanner/CryptoScanner";
import SrAnalysisComponent from "../components/SrAnalysis/SrAnalysis";
import AppFooter from "../components/AppFooter/AppFooter";
import axios from "axios";

export default function Bot(props) {
  const { t } = useTranslation("bot");

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
        <title>Bot</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="Bot trading" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Bot trading" key="ogtitle" />
        <meta property="og:description" content="Bot trading" key="ogdesc" />
        <meta property="og:site_name" content="Bot trading" key="ogsitename" />
        <meta property="og:url" content="https://defi.vn/bot" key="ogurl" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/bot" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/bot" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <UpButton />
          <RefreshButton />
          <HowToBot />
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
  const res = await axios.get("https://api3.pyhash.com/signal/all/sr1/");
  // Pass data to the page via props
  return {
    props: {
      data: res.data,
      ...(await serverSideTranslations(context.locale, ["common", "bot"])),
    },
  };
}
