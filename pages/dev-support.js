import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import DevSupport from "../components/DevSupport/DevSupport";
import AppFooter from "../components/AppFooter/AppFooter";


export default function DevSupportPage(props) {
  const { t } = useTranslation("dev-support");

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
        <title>Join our Developer Support event | Tham gia sự kiện hỗ trợ Dev của chúng tôi - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Join our Developer Support event | Tham gia sự kiện hỗ trợ Dev của chúng tôi - DeFi.vn" />
        <meta property="og:description" content="Are you an aspiring or experienced developer looking for a supportive community to boost your skills and knowledge? Join our developer support event!" />
        <meta property="og:url" content="https://defi.vn/dev-support" />
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/7ddd605f-f108-49fe-3f45-66fe10475000/defi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content="https://www.defi.vn/dev-support" />
        <meta name="twitter:title" content="Join our Developer Support event | Tham gia sự kiện hỗ trợ Dev của chúng tôi - DeFi.vn" />
        <meta name="twitter:description" content="Are you an aspiring or experienced developer looking for a supportive community to boost your skills and knowledge? Join our developer support event!" />
        <meta name="twitter:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/7ddd605f-f108-49fe-3f45-66fe10475000/defi" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/dev-support" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/dev-support" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <UpButton />
          {/* <h2>{t("subtitle")}</h2> */}
          <DevSupport />
          <br />
          <hr />
          <AppFooter />
        </div>
      </div>
    </>
  );
}

// This gets called on every request
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "dev-support"])),
      // Will be passed to the page component as props
    },
  };
}