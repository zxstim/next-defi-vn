import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";
import InvestorList from "../components/InvestorList/InvestorList";

export default function Investors(props) {
  const { t } = useTranslation("investors");
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
        <title>Global investors list | Danh sách những nhà đầu tư - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="Find out about different types of investor categories and their contact information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Global investors list | Danh sách những nhà đầu tư - DeFi.vn" key="ogtitle" />
        <meta property="og:description" content="Find out about different types of investor categories and their contact information." key="ogdesc" />
        <meta property="og:url" content="https://defi.vn/investors" key="ogurl" />
        <meta property="og:site_name" content="DeFi.vn | DeFi Vietnam" key="ogsitename" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/investors" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/investors" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <UpButton />
          <h2>{t("subtitle")}</h2>
          <InvestorList />
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
      ...(await serverSideTranslations(locale, ["common", "investors"])),
      // Will be passed to the page component as props
    },
  };
}
