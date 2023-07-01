import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import FloatingButton from "../../../components/FloatingButton/FloatingButton"
import AppFooter from "../../../components/AppFooter/AppFooter";
import BlockchainsList from "../../../components/DiscoverList/BlockchainsList/BlockchainsList";
import { fetchStrapiAPI } from "../../../lib/api";

export default function Blockchains({ blockchains, pagination, blockchainCategories }) {
  const { t } = useTranslation("blockchains");
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
        <title>Discover Blockchains | Khám phá các Blockchain - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Discover Blockchains | Khám phá các Blockchain - DeFi.vn" />
        <meta property="og:description" content="Learn everything about Blockchains, their teams, investors and their ecosystem." />
        <meta property="og:url" content="https://defi.vn/wallets" />
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/81ca8408-15be-47c1-d0de-394725249700/defi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content="https://www.defi.vn/wallets" />
        <meta name="twitter:title" content="Discover Blockchains | Khám phá các Blockchain - DeFi.vn" />
        <meta name="twitter:description" content="Learn everything about Blockchains, their teams, investors and their ecosystem." />
        <meta name="twitter:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/81ca8408-15be-47c1-d0de-394725249700/defi" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/discover/wallets" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/discover/wallets" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "10px",  
            width: "fit-content"
            }}>
            <Link href="/">{t("back")}</Link>
            <Link href="/discover">{t("prev")}</Link>
          </div>
          <FloatingButton />
          <h2>{t("subtitle")}</h2>
          <BlockchainsList blockchains={blockchains} pagination={pagination} blockchainCategories={blockchainCategories}/>
          <br />
          <hr />
          <AppFooter />
        </div>
      </div>
    </>
  );
}

// export async function getStaticPaths({ locales }) {
//   // Get total number of posts from API.
//   const totalPages = await fetchStrapiAPI("/wallets", {
//     populate: ["wallet_categories"], 
//     pagination: {
//       page: 1,
//       pageSize: 100,
//     }
//   })
//   const numberOfPages = totalPages.meta.pagination.pageCount
 
//   // Build paths `blog/0`, `blog/1` ...etc.
//   const paths = Array(numberOfPages)
//     .fill(0)
//     .map((_, i) => locales.map((locale) => ({
//       params: {
//         page: `${i + 1}`,
//       },
//       locale
//     }))).flat()
//   return {
//     paths,
//     fallback: false,
//   }
// }

export async function getServerSideProps(context) {

  const blockchainCategoriesRes = await fetchStrapiAPI("/blockchain-categories", {
    locale: "all",
    sort: "name:asc",
  })
  const blockchainsRes = await fetchStrapiAPI("/blockchains", {
    fields: [
      "name", 
      "social", 
      "updatedAt", 
      "slug", 
      "locale"
    ],   
    populate: {
      logo: "*",
      blockchain_categories: {
        fields: ["name", "slug", "locale"],
        sort: ["name:asc"],
      }, 
      blockchains: {
        fields: ["name", "slug", "locale"],
        sort: ["name:asc"],
      },
    },
    locale: "all", 
    pagination: {
      page: context.query.page,
      pageSize: 60,
    },
	  sort: "name:asc",
  })

  return {
    props: {
      blockchains: blockchainsRes.data,
      pagination: blockchainsRes.meta.pagination,
      blockchainCategories: blockchainCategoriesRes.data,
      ...(await serverSideTranslations(context.locale, ["common", "blockchains"])),
      // Will be passed to the page component as props
    },
  };
}