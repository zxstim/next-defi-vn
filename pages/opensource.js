import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import OpensourceList from "../components/OpensourceList/OpensourceList";
import AppFooter from "../components/AppFooter/AppFooter";

export default function Home(props) {
  const { t } = useTranslation("opensource");

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
        <title>Open source</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="Open source" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Open source" />
        <meta property="og:title" content="Open source" key="ogtitle" />
        <meta property="og:description" content="Open source" key="ogdesc" />
        <meta property="og:site_name" content="Open source" key="ogsitename" />
        <meta
          property="og:url"
          content="https://defi.vn/opensource"
          key="ogurl"
        />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/opensource" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/opensource" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <h2>Work in progress</h2>
          <br />
          <hr />
          <AppFooter />
          <br />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "opensource"])),
      // Will be passed to the page component as props
    },
  };
}
