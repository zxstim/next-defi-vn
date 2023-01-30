import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";

export default function Buidl(props) {
  const { t } = useTranslation("buidl");

  const buttonStyle = {
    backgroundColor: "#ebebeb",
    margin: "5px 5px 5px 0px",
    padding: "15px 10px 15px 10px",
    WebkitAppearance: "none",
    borderRadius: "6px",
    border: "2px solid var(--color-border-default)",
    fontSize: "20px",
    color: "var(--color-fg-default)",
  };

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
        <title>BUIDL on Web3 | BUIDL trên Web3 - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="Explore Web3 ecosystems, roadmaps on how to become builders, resources for you to become a great builder." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="BUIDL on Web3 | BUIDL trên Web3 - DeFi.vn" key="ogtitle" />
        <meta property="og:description" content="Explore Web3 ecosystems, roadmaps on how to become builders, resources for you to become a great builder." key="ogdesc" />
        <meta property="og:url" content="https://defi.vn/en/buidl" key="ogurl" />
        <meta property="og:site_name" content="DeFi.vn | DeFi Vietnam" key="ogsitename" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/buidl" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/buidl" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <UpButton />
          <h2>{t("subtitle1")}</h2>
          <div className="nav-menu-grid"
          >
            <Link href="/buidl/ethereum">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Ethereum</h3>
              </a>
            </Link>
            <Link href="/buidl/optimism">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Optimism</h3>
              </a>
            </Link>
            <Link href="/buidl/arbitrum">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Arbitrum</h3>
              </a>
            </Link>
            <Link href="/buidl/starknet">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Starknet</h3>
              </a>
            </Link>
            <Link href="/buidl/klaytn">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Klaytn</h3>
              </a>
            </Link>
            <Link href="/buidl/gnosis">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Gnosis Chain</h3>
              </a>
            </Link>
            <Link href="/buidl/polygon">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Polygon</h3>
              </a>
            </Link>
            <Link href="/buidl/bnbchain">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">BNB Chain</h3>
              </a>
            </Link>
            <Link href="/buidl/okc">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">OKC</h3>
              </a>
            </Link>
            <Link href="/buidl/starknet">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Solana</h3>
              </a>
            </Link>
            <Link href="/buidl/oasys">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Oasys</h3>
              </a>
            </Link>
            <Link href="/buidl/nym">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Nym</h3>
              </a>
            </Link>
          </div>
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
      ...(await serverSideTranslations(locale, ["common", "buidl"])),
      // Will be passed to the page component as props
    },
  };
}
