import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import RefreshButton from "../components/RefreshButton/RefreshButton";
import BotComponentList from "../components/BotComponentList/BotComponentList";
import axios from "axios";
import AppFooter from "../components/AppFooter/AppFooter";

export default function Signals(props) {
  const { t } = useTranslation("signals");

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
        <title>Signals</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="Signals" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Signals" />
        <meta property="og:title" content="Signals" key="ogtitle" />
        <meta property="og:description" content="Signals" key="ogdesc" />
        <meta property="og:site_name" content="Signals" key="ogsitename" />
        <meta
          property="og:url"
          content="https://defi.vn/signals"
          key="ogurl"
        />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("s2t4")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/signals" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/signals" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <BotComponentList data={props.data} />
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
  const res = await axios.get("https://api3.pyhash.com/signal/all");
  // Pass data to the page via props
  return {
    props: {
      data: res.data,
      ...(await serverSideTranslations(context.locale, ["common", "signals"])),
    },
  };
}
