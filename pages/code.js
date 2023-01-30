import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";

export default function LearnToCode(props) {
  const { t } = useTranslation("code");

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
        <title>Learn to code | Học lập trình - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="Learn about roadmaps to become many different tech roles and how to code in different languages." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Learn to code | Học lập trình - DeFi.vn" key="ogtitle" />
        <meta property="og:description" content="Learn about roadmaps to become many different tech roles and how to code in different languages." key="ogdesc" />
        <meta property="og:url" content="https://defi.vn/code" key="ogurl" />
        <meta property="og:site_name" content="DeFi.vn | DeFi Vietnam" key="ogsitename" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/code" locale="en">
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
          <div className="nav-menu-grid">
            <Link href="/code/frontend">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Frontend</h3>
              </a>
            </Link>
            <Link href="/code/backend">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Backend</h3>
              </a>
            </Link>
            <Link href="/code/blockchain">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Blockchain</h3>
              </a>
            </Link>
            <Link href="/code/devops">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">DevOps</h3>
              </a>
            </Link>
            <Link href="/code/android">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Android</h3>
              </a>
            </Link>
            <Link href="/code/dba">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">DBA</h3>
              </a>
            </Link>
            <Link href="/code/qa">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">QA</h3>
              </a>
            </Link>
          </div>
          <h2>{t("subtitle2")}</h2>
          <div className="nav-menu-grid">
            <Link href="/code/javascript">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Javascript</h3>
              </a>
            </Link>
            <Link href="/code/python">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Python</h3>
              </a>
            </Link>
            <Link href="/code/solidity">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Solidity</h3>
              </a>
            </Link>
            <Link href="/code/cairo">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Cairo</h3>
              </a>
            </Link>
            <Link href="/code/rust">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Rust</h3>
              </a>
            </Link>
            <Link href="/code/go">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Go</h3>
              </a>
            </Link>
            <Link href="/code/move">
              <a style={{ textDecoration: "none" }}>
                <h3 className="nav-menu-button">Move</h3>
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
