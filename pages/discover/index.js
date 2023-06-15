import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../../components/UpButton/UpButton";
import AppFooter from "../../components/AppFooter/AppFooter";
import AlertMessage from "../../components/AlertMessage/AlertMessage";

export default function Discover(props) {
  const { t } = useTranslation("discover");

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
        <title>Discover crypto projects | Khám phá các dự án crypto - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Find your next favourite crypto projects, explore the ecosystem that they are in, check out their socials, see their metrics." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Discover crypto projects | Khám phá các dự án crypto - DeFi.vn" />
        <meta property="og:description" content="Find your next favourite crypto projects, explore the ecosystem that they are in, check out their socials, see their metrics." />
        <meta property="og:url" content="https://defi.vn/discover" />
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/d12cce69-5439-4bd1-3fda-c7ed7519a600/defi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content="https://www.defi.vn/discover" />
        <meta name="twitter:title" content="Discover crypto projects | Khám phá các dự án crypto - DeFi.vn" />
        <meta name="twitter:description" content="Find your next favourite crypto projects, explore the ecosystem that they are in, check out their socials, see their metrics." />
        <meta name="twitter:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/d12cce69-5439-4bd1-3fda-c7ed7519a600/defi" />
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
            <Link href="/discover/blockchains">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">{t("title8")}</h3>
              </a>
            </Link>
            <Link href="/discover/wallets">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">{t("title1")}</h3>
              </a>
            </Link>
            <Link href="/discover/defi-projects">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">{t("title7")}</h3>
              </a>
            </Link>

            <Link href="/discover/nft-projects">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">{t("title4")}</h3>
              </a>
            </Link>
            <Link href="/discover/metaverses">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">{t("title6")}</h3>
              </a>
            </Link>
            <Link href="/discover/gamefi-projects">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">{t("title5")}</h3>
              </a>
            </Link>
            <Link href="/discover/portfolio-projects">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">{t("title3")}</h3>
              </a>
            </Link>
            <Link href="/discover/communities">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">{t("title2")}</h3>
              </a>
            </Link>
          </div>
          {/* <DiscoverList /> */}
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
      ...(await serverSideTranslations(locale, ["common", "discover"])),
      // Will be passed to the page component as props
    },
  };
}
