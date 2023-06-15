import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/router";
import constructSlug from "../../../../utils/constructSlug";
import formatArticleTimeStampEn from "../../../../utils/formatArticleTimeStampEn";
import formatArticleTimeStampVi from "../../../../utils/formatArticleTimeStampVi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { fetchStrapiAPI } from "../../../../lib/api";
import AppFooter from "../../../../components/AppFooter/AppFooter";
import DeFiInfo from "../../../../components/DiscoverList/DeFiList/DeFiInfo/DeFiInfo";

export default function DefiInfoPage({ defiProject }) {
  const { t } = useTranslation("discover");
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
        <title>{`${defiProject[0].attributes.name} - DeFi.vn`}</title>
        <meta charSet="utf-8" />
        <link rel="icon" href={defiProject[0].attributes.logo.data.attributes.formats.thumbnail.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${defiProject[0].attributes.name} - DeFi.vn`} />
        <meta property="og:description" content={`Learn about ${defiProject[0].attributes.name}`} />
        <meta property="og:url" content={`https://www.defi.vn/${defiProject[0].attributes.locale}/discover/defi-projects/info/${defiProject[0].attributes.slug}`} />
        <meta property="og:type" content="website"/>
        <meta property="og:image" content={defiProject[0].attributes.logo.data.attributes.formats.thumbnail.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content={`https://www.defi.vn/${defiProject[0].attributes.locale}/discover/defi-projects/info/${defiProject[0].attributes.slug}`} />
        <meta name="twitter:title" content={`${defiProject[0].attributes.name} - DeFi.vn`} />
        <meta name="twitter:description" content={`Learn about ${defiProject[0].attributes.name}`} />
        <meta name="twitter:image" content={defiProject[0].attributes.logo.data.attributes.formats.thumbnail.url} />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            alignItems: "center"
          }}>
            <div style={{
              width: "80px",
              height: "80px",
            }}>
              <Image 
                src={defiProject[0].attributes.logo.data.attributes.formats.thumbnail.url}
                alt={defiProject[0].attributes.logo.alternativeText}
                width={80}
                height={80}
              />
            </div>
            <h1
              style={{
                width: "100%",
              }}
            >{defiProject[0].attributes.name}</h1>
          </div>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href={`/discover/defi-projects/info/${constructSlug(defiProject[0].attributes.slug).slugEn}`} locale="en">
            <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
            </a>
            </Link>
            <Link href={`/discover/defi-projects/info/${constructSlug(defiProject[0].attributes.slug).slugVi}`} locale="vi">
            <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
            </a>
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "fit-content" }}>
              <Link href="/">{t("back")}</Link>
              <Link href="/discover/defi-projects">{t("prev")}</Link>
          </div>
          <DeFiInfo defiProject={defiProject}/>
          <br />
          <hr />
          <AppFooter />
        </div>
      </div>
    </>
  );
}


export async function getServerSideProps(context) {
  const { slug } = context.query

  const defiProjectRes = await fetchStrapiAPI("/projects", {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      logo: "*",
      project_categories: {
        fields: ["name", "slug", "locale"],
      }, 
      blockchains: {
        fields: ["name", "slug", "locale"],
      },
    },
    locale: "all"
  });

  return {
    props: { 
        defiProject: defiProjectRes.data,
        ...(await serverSideTranslations(context.locale, ["common", "discover"])) 
    },
  };
}
