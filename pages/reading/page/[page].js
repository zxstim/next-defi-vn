// import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../../../components/UpButton/UpButton";
import AppFooter from "../../../components/AppFooter/AppFooter";
import ReadingList from "../../../components/ReadingList/ReadingList";
import { fetchStrapiAPI } from "../../../lib/api";


export default function Reading({ articles, pagination, categories }) {
  const { t } = useTranslation("reading");

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
          <ReadingList articles={articles} pagination={pagination} categories={categories}/>
          <br />
          <hr />
          <AppFooter />
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths({ locales }) {
  // Get total number of posts from API.
  const totalPages = await fetchStrapiAPI("/articles", {
    populate: ["categories"], 
    pagination: {
      page: 1,
      pageSize: 25,
    }
  })
  const numberOfPages = totalPages.meta.pagination.pageCount
 
  // Build paths `blog/0`, `blog/1` ...etc.
  const paths = Array(numberOfPages)
    .fill(0)
    .map((_, i) => locales.map((locale) => ({
      params: {
        page: `${i + 1}`,
      },
      locale
    }))).flat()
  return {
    paths,
    fallback: false,
  }
}


export async function getStaticProps({ params, ...context }) {

  const categoriesRes = await fetchStrapiAPI("/categories")
  const articlesRes = await fetchStrapiAPI("/articles", { 
    fields: ["title", "slug", "updatedAt", "createdAt", "publishedAt"], 
    populate: ["image", "categories", "author"],
    pagination: {
      page: Number(params.page),
      pageSize: 25,
    }, 
  })

  return {
    props: {
      articles: articlesRes.data,
      pagination: articlesRes.meta.pagination,
      categories: categoriesRes.data,
      ...(await serverSideTranslations(context.locale, ["common", "reading"])),
      // Will be passed to the page component as props
    },
  };
}
