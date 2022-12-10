import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";

export default function Tools(props) {
  const { t } = useTranslation("tools");

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
        <title>Tools</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="Tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tools" />
        <meta property="og:title" content="Tools" key="ogtitle" />
        <meta property="og:description" content="Tools" key="ogdesc" />
        <meta property="og:site_name" content="Tools" key="ogsitename" />
        <meta property="og:url" content="https://defi.vn/tools" key="ogurl" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/tools" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/tools" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <UpButton />
          <h2>Tool categories</h2>
          <ul>
            <li>
              <Link href="/tools/portfolio-management-tools">
                <a style={{ textDecoration: "none" }}>Portfolio management</a>
              </Link>
            </li>
          </ul>
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
      ...(await serverSideTranslations(locale, ["common", "tools"])),
      // Will be passed to the page component as props
    },
  };
}
