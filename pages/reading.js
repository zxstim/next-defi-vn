// import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";
import ReadingList from "../components/ReadingList/ReadingList";


export default function Reading(props) {
  const { t } = useTranslation("reading");

  // const query = `
  // {
  //   user(username: "victoristocrat") {
  //     publication {
  //       posts {
  //         title
  //         brief
  //         slug
  //         cuid
  //       }
  //     }
  //   }
  // }`;
  // async function getData() {
  //   const response = await fetch("https://api.hashnode.com", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ query: query })
  //   });
  //   const body = await response.json();
  //   console.log(body)
  // }

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
        <title>Reading crypto researches | Đọc nghiên cứu crypto - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Read breakdowns of DeFi protocols, their mechanism and why they are revolutionary compared to the current financial system." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Reading crypto researches | Đọc nghiên cứu crypto - DeFi.vn" />
        <meta property="og:description" content="Read breakdowns of DeFi protocols, their mechanism and why they are revolutionary compared to the current financial system." key="ogdesc" />
        <meta property="og:url" content="https://defi.vn/reading" key="ogurl" />
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/3f062ee1-01ef-43c8-cdf8-3999cb43f200/defi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content="https://www.defi.vn/reading" />
        <meta name="twitter:title" content="Reading crypto researches | Đọc nghiên cứu crypto - DeFi.vn" />
        <meta name="twitter:description" content="Read breakdowns of DeFi protocols, their mechanism and why they are revolutionary compared to the current financial system." />
        <meta name="twitter:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/3f062ee1-01ef-43c8-cdf8-3999cb43f200/defi" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/reading" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/reading" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <h2>{t("subtitle")}</h2>
          <UpButton />
          <ReadingList />
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
        ...(await serverSideTranslations(locale, ["common", "reading"])),
        // Will be passed to the page component as props
      },
    };
  }
