import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../../components/UpButton/UpButton";
import AppFooter from "../../components/AppFooter/AppFooter";
import AlertMessage from "../../components/AlertMessage/AlertMessage";

export default function Services(props) {
  const { t } = useTranslation("services");

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
        <title>Find your a crypto service provider | Tìm một nhà cung cấp dịch vụ crypto - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Find your crypto service provider in our comprehensive list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Find your a crypto service provider | Tìm một nhà cung cấp dịch vụ crypto - DeFi.vn" />
        <meta property="og:description" content="Find your crypto service provider in our comprehensive list" />
        <meta property="og:url" content="https://defi.vn/services" />
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/9cf26e72-dc40-4d93-823b-da167198ae00/defi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content="https://www.defi.vn/services" />
        <meta name="twitter:title" content="Find your a crypto service provider | Tìm một nhà cung cấp dịch vụ crypto - DeFi.vn" />
        <meta name="twitter:description" content="Find your crypto service provider in our comprehensive list" />
        <meta name="twitter:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/9cf26e72-dc40-4d93-823b-da167198ae00/defi" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/discover" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/discover" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <h2>{t("subtitle")}</h2>
          <UpButton />
          <div className="nav-menu-grid">
            <Link href="/services/audit">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">{t("title1")}</h3>
              </a>
            </Link>
            <Link href="/services/marketing">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">{t("title2")}</h3>
              </a>
            </Link>
            <Link href="/services/analytics">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">{t("title3")}</h3>
              </a>
            </Link>
            <Link href="/services/custody">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">{t("title4")}</h3>
              </a>
            </Link>
          </div>
          <br />
          <AlertMessage type="info" message={t("disclosure")} headline={t("note")} />
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
      ...(await serverSideTranslations(locale, ["common", "services"])),
      // Will be passed to the page component as props
    },
  };
}
