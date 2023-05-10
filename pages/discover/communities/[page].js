import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import FloatingButton from "../../../components/FloatingButton/FloatingButton"
import AppFooter from "../../../components/AppFooter/AppFooter";
import CommunitiesList from "../../../components/DiscoverList/CommunitiesList/CommunitiesList";
import { fetchStrapiAPI } from "../../../lib/api";

export default function Communities({ communities, pagination, communityCategories }) {
  const { t } = useTranslation("communities");
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
        <title>Find your communities | Tìm cộng đồng của bạn - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Find your communities | Tìm cộng đồng của bạn - DeFi.vn" />
        <meta property="og:description" content="Find out about many global communities, what they discuss about and notable figures in the crypto industry." />
        <meta property="og:url" content="https://defi.vn/communities" />
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/889ce4ec-83c8-428a-d3b7-b94960b03100/defi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content="https://www.defi.vn/communities" />
        <meta name="twitter:title" content="Find your communities | Tìm cộng đồng của bạn - DeFi.vn" />
        <meta name="twitter:description" content="Find out about many global communities, what they discuss about and notable figures in the crypto industry." />
        <meta name="twitter:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/889ce4ec-83c8-428a-d3b7-b94960b03100/defi" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/discover/communities" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/discover/communities" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <FloatingButton />
          <h2>{t("subtitle")}</h2>
          <CommunitiesList communities={communities} pagination={pagination} communityCategories={communityCategories}/>
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
  const totalPages = await fetchStrapiAPI("/communities", {
    populate: ["community_categories"], 
    pagination: {
      page: 1,
      pageSize: 100,
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

  const communityCategoriesRes = await fetchStrapiAPI("/community-categories")
  const communitiesRes = await fetchStrapiAPI("/communities", {  
    populate: ["community_categories"], 
    pagination: {
      page: Number(params.page),
      pageSize: 100,
    },
	sort: "name:asc"
  })

  return {
    props: {
      communities: communitiesRes.data,
      pagination: communitiesRes.meta.pagination,
      communityCategories: communityCategoriesRes.data,
      ...(await serverSideTranslations(context.locale, ["common", "communities"])),
      // Will be passed to the page component as props
    },
  };
}