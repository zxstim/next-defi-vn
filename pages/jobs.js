import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import JobsList from "../components/JobsList/JobsList";

export default function JobsListPage({jobs}) {
  const { t } = useTranslation("jobs");

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
        <title>Find your Web3 jobs | Tìm công việc Web3 - DeFi.vn</title>
        <meta name="description" content="Explore our job board with thousands of Web3 jobs in various roles and locations including remote options."/>
        <meta charset="UTF-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://www.defi.vn/jobs" />
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Find your Web3 jobs | Tìm công việc Web3 - DeFi.vn" />
        <meta property="og:description" content="Explore our job board with thousands of Web3 jobs in various roles and locations including remote options." />
        <meta property="og:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/5f58f0e7-6d1d-45b5-4090-81cc2caa7300/defi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content="https://www.defi.vn/jobs" />
        <meta name="twitter:title" content="Find your Web3 jobs | Tìm công việc Web3 - DeFi.vn" />
        <meta name="twitter:description" content="Explore our job board with thousands of Web3 jobs in various roles and locations including remote options." />
        <meta name="twitter:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/5f58f0e7-6d1d-45b5-4090-81cc2caa7300/defi" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex" }}>
            <Link href="/jobs" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/jobs" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <h2 id="top">{t("subtitle")}</h2>
          <JobsList jobs={jobs}/>
          <br />
          <hr />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const jobs = await fetch(process.env.WEB3_CAREERS_API).then((res) => res.json());
  
  return {
    props : { 
      jobs : jobs[2],
      ...(await serverSideTranslations(context.locale, ["common", "jobs"]))
     },
     revalidate: 3600,
  }
}