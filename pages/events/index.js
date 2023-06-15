import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../../components/UpButton/UpButton";
import AppFooter from "../../components/AppFooter/AppFooter";
import EventsList from "../../components/EventsList/EventsList";

export default function Events(props) {
  const { t } = useTranslation("events");
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
        <title>Find your crypto events | Tìm sự kiện crypto yêu thích - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Check out a global list of crypto events around the world, find out about the dates, locations and how to register." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Find your crypto events | Tìm sự kiện crypto yêu thích - DeFi.vn" />
        <meta property="og:description" content="Check out a global list of crypto events around the world, find out about the dates, locations and how to register." />
        <meta property="og:url" content="https://defi.vn/events" />
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/855f74a3-487f-470e-a86c-36bdc9f85a00/defi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content="https://www.defi.vn/events" />
        <meta name="twitter:title" content="Find your crypto events | Tìm sự kiện crypto yêu thích - DeFi.vn" />
        <meta name="twitter:description" content="Check out a global list of crypto events around the world, find out about the dates, locations and how to register." />
        <meta name="twitter:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/855f74a3-487f-470e-a86c-36bdc9f85a00/defi" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/events" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/events" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <UpButton />
          <h2>{t("events-list")}</h2>
          <EventsList />
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
      ...(await serverSideTranslations(locale, ["common", "events"])),
      // Will be passed to the page component as props
    },
  };
}
