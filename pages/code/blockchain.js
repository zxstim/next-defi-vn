import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../../components/UpButton/UpButton";
import AppFooter from "../../components/AppFooter/AppFooter";
import Blockchain from "../../components/LearnToCode/Blockchain/Blockchain";

export default function CodeFrontend(props) {
  const { t } = useTranslation("blockchain");

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
        <title>Blockchain roadmap and resources | Hành trình học Blockchain và tài liệu - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../../defi.svg" />
        <meta name="description" content="Check out the roadmap to become Blockchain developers and all the resources for you to learn." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Blockchain roadmap and resources | Hành trình học Blockchain và tài liệu - DeFi.vn" key="ogtitle" />
        <meta property="og:description" content="Check out the roadmap to become Blockchain developers and all the resources for you to learn." key="ogdesc" />
        <meta property="og:url" content="https://defi.vn/code/blockchain" key="ogurl" />
        <meta property="og:site_name" content="DeFi.vn | DeFi Vietnam" key="ogsitename" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/code/blockchain" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/code/blockchain" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Link href="/">{t("back")}</Link>
            <Link href="/code">{t("prev")}</Link>
          </div>
          <UpButton />
          <h2>{t("subtitle")}</h2>
          <Blockchain />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="credit-note">{t("credit")}</div>
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
      ...(await serverSideTranslations(locale, ["common", "blockchain"])),
      // Will be passed to the page component as props
    },
  };
}
