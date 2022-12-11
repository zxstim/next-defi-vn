import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../../components/UpButton/UpButton";
import AppFooter from "../../components/AppFooter/AppFooter";
import Nym from "../../components/Buidl/Nym/Nym";

export default function BuidlNym(props) {
  const { t } = useTranslation("ethereum");

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
        <title>Nym</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="Nym" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Nym" key="ogtitle" />
        <meta property="og:description" content="Nym" key="ogdesc" />
        <meta property="og:site_name" content="Nym" key="ogsitename" />
        <meta property="og:url" content="https://defi.vn/buidl/nym" key="ogurl" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/buidl/ethereum" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/buidl/ethereum" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/buidl">{t("back")}</Link>
          <UpButton />
          <Nym />
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
      ...(await serverSideTranslations(locale, ["common", "ethereum"])),
      // Will be passed to the page component as props
    },
  };
}
