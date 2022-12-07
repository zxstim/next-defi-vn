import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";

export default function LearnToCode(props) {
  const { t } = useTranslation("code");

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
        <title>Learn to code</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="Learn to code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Learn to code" />
        <meta property="og:title" content="Learn to code" key="ogtitle" />
        <meta property="og:description" content="Learn to code" key="ogdesc" />
        <meta
          property="og:site_name"
          content="Learn to code"
          key="ogsitename"
        />
        <meta property="og:url" content="https://defi.vn/code" key="ogurl" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/code" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/code" locale="vi">
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
            <Link href="/code/javascript">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>Javascript</h3>
              </a>
            </Link>
            <Link href="/code/python">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>Python</h3>
              </a>
            </Link>
            <Link href="/code/solidity">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>Solidity</h3>
              </a>
            </Link>
            <Link href="/code/cairo">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>Cairo</h3>
              </a>
            </Link>
            <Link href="/code/rust">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>Rust</h3>
              </a>
            </Link>
            <Link href="/code/go">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>Go</h3>
              </a>
            </Link>
            <Link href="/code/move">
              <a style={{ textDecoration: "none" }}>
                <h3 style={buttonStyle}>Move</h3>
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
      ...(await serverSideTranslations(locale, ["common", "code"])),
      // Will be passed to the page component as props
    },
  };
}
