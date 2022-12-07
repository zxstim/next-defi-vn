import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";

export default function Donate(props) {
  const { t } = useTranslation("donate");
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
        <title>Donate</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="Donate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Donate" />
        <meta property="og:title" content="Donate" key="ogtitle" />
        <meta property="og:description" content="Donate" key="ogdesc" />
        <meta property="og:site_name" content="Donate" key="ogsitename" />
        <meta
          property="og:url"
          content="https://defi.vn/donate"
          key="ogurl"
        />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/donate" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/donate" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <UpButton />
          <h2>{t("header1")}</h2>
          <p>BTC: bc1q33f3fq37qstrptwd9xcrdgxemrxnkeqzrtjds8</p>
          <p>ETH: 0x052F71E171b11bc037999B2341fCa73f4534D8A5</p>
          <p>BSC: 0x052F71E171b11bc037999B2341fCa73f4534D8A5</p>
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
      ...(await serverSideTranslations(locale, ["common", "donate"])),
      // Will be passed to the page component as props
    },
  };
}
