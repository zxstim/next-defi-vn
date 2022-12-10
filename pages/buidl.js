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

  const buttonUnderTestingStyle = {
    backgroundColor: "#ebebeb",
    margin: "5px 5px 5px 0px",
    padding: "15px 10px 15px 10px",
    WebkitAppearance: "none",
    borderRadius: "6px",
    border: "2px solid var(--color-border-default)",
    fontSize: "20px",
    color: "var(--color-fg-default)",
    opacity: "0.5",
  };

  const tagStyle = {
    backgroundColor: "#4094f7",
    border: "1px solid var(--color-border-default)",
    position: "relative",
    bottom: "2px",
    left: "10px",
    color: "#ffffff",
    borderRadius: "5px",
    height: "30px",
    width: "65px",
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
        <title>BUIDL on Web3</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="BUIDL on Web3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="BUIDL on Web3" />
        <meta property="og:title" content="BUIDL on Web3" key="ogtitle" />
        <meta
          property="og:description"
          content="BUIDL on Web3"
          key="ogdesc"
        />
        <meta property="og:site_name" content="BUIDL on Web3" key="ogsitename" />
        <meta property="og:url" content="https://defi.vn/buidl" key="ogurl" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/buidl" locale="en">
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
          <div
            style={{
              display: "grid",
              gap: "15px 15px",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            }}
          >
            <Link href="/buidl/ethereum">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>Ethereum</h3>
              </a>
            </Link>
            <Link href="/buidl/optimism">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>Optimism</h3>
              </a>
            </Link>
            <Link href="/buidl/arbitrum">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>Arbitrum</h3>
              </a>
            </Link>
            <Link href="/buidl/starknet">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>Starknet</h3>
              </a>
            </Link>
            <Link href="/buidl/starknet">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>Polygon</h3>
              </a>
            </Link>
            <Link href="/buidl/bnbchain">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>BNB Chain</h3>
              </a>
            </Link>
            <Link href="/buidl/okc">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>OKC</h3>
              </a>
            </Link>
            <Link href="/buidl/starknet">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>Solana</h3>
              </a>
            </Link>
            <Link href="/buidl/oasys">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>Oasys</h3>
              </a>
            </Link>
            <Link href="/buidl/klaytn">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>Klaytn</h3>
              </a>
            </Link>
            <Link href="/buidl/nym">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>Nym</h3>
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
