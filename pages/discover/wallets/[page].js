import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import FloatingButton from "../../../components/FloatingButton/FloatingButton"
import AppFooter from "../../../components/AppFooter/AppFooter";
import WalletsList from "../../../components/DiscoverList/WalletsList/WalletsList";
import { fetchStrapiAPI } from "../../../lib/api";

export default function Wallets({ wallets, pagination, walletCategories }) {
  const { t } = useTranslation("wallets");
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
        <title>How to use Web3 Wallets | Học cách dùng Ví Web3 - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="How to use Web3 Wallets | Học cách dùng Ví Web3 - DeFi.vn" />
        <meta property="og:description" content="Learn everything about web3 wallets, including setup guide, security practices, what can you use the wallets for and many more topics." />
        <meta property="og:url" content="https://defi.vn/wallets" />
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/93f92267-0ff6-4ef9-45c4-060ea1b95400/defi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content="https://www.defi.vn/wallets" />
        <meta name="twitter:title" content="How to use Web3 Wallets | Học cách dùng Ví Web3 - DeFi.vn" />
        <meta name="twitter:description" content="Learn everything about web3 wallets, including setup guide, security practices, what can you use the wallets for and many more topics." />
        <meta name="twitter:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/93f92267-0ff6-4ef9-45c4-060ea1b95400/defi" />
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
          <WalletsList wallets={wallets} pagination={pagination} walletCategories={walletCategories}/>
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

  const walletCategoriesRes = await fetchStrapiAPI("/wallet-categories", {
    locale: "all",
    sort: "name:asc",
  })
  const walletsRes = await fetchStrapiAPI("/wallets", {
    fields: [
      "name", 
      "social", 
      "updatedAt", 
      "slug", 
      "locale"
    ],   
    populate: {
      wallet_categories: {
        fields: ["name", "slug", "locale"],
      }, 
      blockchains: {
        fields: ["name", "slug", "locale"],
      },
    },
    locale: "all", 
    pagination: {
      page: context.query.page,
      pageSize: 100,
    },
	  sort: "name:asc",
  })

  return {
    props: {
      wallets: walletsRes.data,
      pagination: walletsRes.meta.pagination,
      walletCategories: walletCategoriesRes.data,
      ...(await serverSideTranslations(context.locale, ["common", "wallets"])),
      // Will be passed to the page component as props
    },
  };
}