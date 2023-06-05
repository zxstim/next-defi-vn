import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/router";
import formatArticleTimeStampEn from "../../../../utils/formatArticleTimeStampEn";
import formatArticleTimeStampVi from "../../../../utils/formatArticleTimeStampVi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { fetchStrapiAPI } from "../../../../lib/api";
import AppFooter from "../../../../components/AppFooter/AppFooter";
import BlockchainInfo from "../../../../components/DiscoverList/BlockchainsList/BlockchainInfo/BlockchainInfo";

export default function BlockchainInfoPage({ blockchain }) {
  const { t } = useTranslation("blockchains");
  const router = useRouter();

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
        <title>{`${blockchain[0].attributes.name} - DeFi.vn`}</title>
        <meta charSet="utf-8" />
        <link rel="icon" href={blockchain[0].attributes.logo.data.attributes.formats.thumbnail.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${blockchain[0].attributes.name} - DeFi.vn`} />
        <meta property="og:description" content={`Learn about ${blockchain[0].attributes.name}`} />
        <meta property="og:url" content={`https://www.defi.vn/${blockchain[0].attributes.locale}/discover/wallet${blockchain[0].attributes.slug}`} />
        <meta property="og:type" content="website"/>
        <meta property="og:image" content={blockchain[0].attributes.logo.data.attributes.formats.thumbnail.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content={`https://www.defi.vn/${blockchain[0].attributes.locale}/discover/wallet${blockchain[0].attributes.slug}`} />
        <meta name="twitter:title" content={`${blockchain[0].attributes.name} - DeFi.vn`} />
        <meta name="twitter:description" content={`Learn about ${blockchain[0].attributes.name}`} />
        <meta name="twitter:image" content={blockchain[0].attributes.logo.data.attributes.formats.thumbnail.url} />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            alignItems: "center"
          }}>
            {blockchain[0].attributes.logo.data.attributes.formats.thumbnail.url ? 
              <div style={{
                width: "80px",
                height: "80px",
              }}>
                <Image 
                  src={blockchain[0].attributes.logo.data.attributes.formats.thumbnail.url}
                  alt={blockchain[0].attributes.logo.alternativeText}
                  width={80}
                  height={80}
                />
              </div> : null}
            <h1
              style={{
                width: "100%",
              }}
            >{blockchain[0].attributes.name}</h1>
          </div>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href={`/discover/blockchains/info/${blockchain[0].attributes.slug.split("-")[0]}`} locale="en">
            <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
            </a>
            </Link>
            <Link href={`/discover/blockchains/info/${blockchain[0].attributes.slug.split("-")[0]}-vi`} locale="vi">
            <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
            </a>
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "fit-content" }}>
              <Link href="/">{t("back")}</Link>
              <Link href="/discover/blockchains">{t("prev")}</Link>
          </div>
          <BlockchainInfo blockchain={blockchain}/>
          <br />
          <hr />
          <AppFooter />
        </div>
      </div>
    </>
  );
}


export async function getServerSideProps(context) {
  // var slug;
  // var slug_vi;
 
  // if (context.query.slug.split("-").pop() === "vi") {
  //   slug_vi = context.query.slug;
  //   slug = context.query.slug.split("-")[0];
  // } else {
  //   slug = context.query.slug;
  //   slug_vi = context.query.slug + "-vi";
  // }
  const { slug } = context.query

  const blockchainRes = await fetchStrapiAPI("/blockchains", {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      logo: "*",
      blockchain_categories: {
        fields: ["name", "slug", "locale"],
      }
    },
    locale: "all"
  });

  return {
    props: { 
        blockchain: blockchainRes.data,
        ...(await serverSideTranslations(context.locale, ["common", "blockchains"])) 
    },
  };
}
