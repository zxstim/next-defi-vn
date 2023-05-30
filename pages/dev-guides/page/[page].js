import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import FloatingButton from "../../../components/FloatingButton/FloatingButton"
import AppFooter from "../../../components/AppFooter/AppFooter";
import DevGuidesList from "../../../components/DevGuidesList/DevGuidesList";
import { fetchStrapiAPI } from "../../../lib/api";

export default function DevGuides({ devArticles, pagination, devCategories }) {
  const { t } = useTranslation("dev-guides");
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Find out about different types of investor categories and their contact information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Global investors list | Danh sách những nhà đầu tư - DeFi.vn" />
        <meta property="og:description" content="Find out about different types of investor categories and their contact information." />
        <meta property="og:url" content="https://defi.vn/investors" />
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/6fe5a556-f28d-4f89-4b9d-f8e103ee7600/defi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content="https://www.defi.vn/investors" />
        <meta name="twitter:title" content="Global investors list | Danh sách những nhà đầu tư - DeFi.vn" />
        <meta name="twitter:description" content="Find out about different types of investor categories and their contact information." />
        <meta name="twitter:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/6fe5a556-f28d-4f89-4b9d-f8e103ee7600/defi" />
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
          <FloatingButton />
          <h2>{t("subtitle")}</h2>
          <DevGuidesList articles={devArticles} pagination={pagination} categories={devCategories}/>
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
  const totalPages = await fetchStrapiAPI("/dev-articles", {
    populate: ["dev_categories"], 
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

  const devCategoriesRes = await fetchStrapiAPI("/dev-categories")
  const devArticlesRes = await fetchStrapiAPI("/dev-articles", { 
	  fields: ["title", "slug", "updatedAt", "createdAt", "publishedAt"], 
    populate: ["image", "dev_categories", "author"], 
    pagination: {
      page: Number(params.page),
      pageSize: 25,
    },
	sort: "name:asc"
  })

  return {
    props: {
      devArticles: devArticlesRes.data,
      pagination: devArticlesRes.meta.pagination,
      devCategories: devCategoriesRes.data,
      ...(await serverSideTranslations(context.locale, ["common", "dev-guides"])),
      // Will be passed to the page component as props
    },
  };
}