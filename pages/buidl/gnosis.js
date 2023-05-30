import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../../components/UpButton/UpButton";
import AppFooter from "../../components/AppFooter/AppFooter";
// import Gnosis from "../../components/Buidl/Gnosis/Gnosis";
import WorkInProgress from "../../components/WorkInProgress/WorkInProgress";

export default function BuidlGnosis(props) {
  const { t } = useTranslation("gnosis");

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
        <title>Gnosis Chain BUIDL resources | Tài liệu BUIDL trên Gnosis Chain - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../../defi.svg" />
        <meta name="description" content="Check out the roadmap to become Gnosis Chain developers and all the resources for you to learn." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Gnosis Chain BUIDL resources | Tài liệu BUIDL trên Gnosis Chain - DeFi.vn" key="ogtitle" />
        <meta property="og:description" content="Check out the roadmap to become Gnosis Chain developers and all the resources for you to learn." key="ogdesc" />
        <meta property="og:url" content="https://defi.vn/buidl/gnosis" key="ogurl" />
        <meta property="og:site_name" content="DeFi.vn | DeFi Vietnam" key="ogsitename" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/buidl/gnosis" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/buidl/gnosis" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Link href="/">{t("back")}</Link>
            <Link href="/buidl">{t("prev")}</Link>
          </div>
          <UpButton />
          <h2>👇 Start from here!</h2>
          <WorkInProgress />
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
      ...(await serverSideTranslations(locale, ["common", "gnosis"])),
      // Will be passed to the page component as props
    },
  };
}
