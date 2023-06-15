import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/router";
import constructSlug from "../../../utils/constructSlug";
import formatArticleTimeStampEn from "../../../utils/formatArticleTimeStampEn";
import formatArticleTimeStampVi from "../../../utils/formatArticleTimeStampVi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { fetchStrapiAPI } from "../../../lib/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import AppFooter from "../../../components/AppFooter/AppFooter";
import EventInfo from "../../../components/EventsList/EventInfo/EventInfo";

export default function EventPage({ event }) {
  const { t } = useTranslation("events");
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
        <title>{`${event[0].attributes.name} - DeFi.vn`}</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${event[0].attributes.name} - DeFi.vn`} />
        <meta property="og:description" content={`Learn about the event ${event[0].attributes.name}`} />
        <meta property="og:url" content={`https://www.defi.vn/${event[0].attributes.locale}/events/info/${event[0].attributes.slug}`} />
        <meta property="og:type" content="website"/>
        <meta property="og:image" content={event[0].attributes.banner.data.attributes.formats.thumbnail.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content={`https://www.defi.vn/${event[0].attributes.locale}/events/info/${event[0].attributes.slug}`} />
        <meta name="twitter:title" content={`${event[0].attributes.name} - DeFi.vn`} />
        <meta name="twitter:description" content={`Learn about ${event[0].attributes.name}`} />
        <meta name="twitter:image" content={event[0].attributes.banner.data.attributes.formats.thumbnail.url} />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <Image
              src={event[0].attributes.banner.data.attributes.formats.large.url}
              alt={event[0].attributes.banner.data.attributes.alternativeText}
              width="1200"
              height="630"
              layout="responsive"
          />
          <h1>{event[0].attributes.name}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
              <Link href={`/events/info/${constructSlug(event[0].attributes.slug).slugEn}`} locale="en">
              <a style={{ textDecoration: "none" }}>
                  <p className="i18n-button">🇬🇧</p>
              </a>
              </Link>
              <Link href={`/events/info/${constructSlug(event[0].attributes.slug).slugVi}`} locale="vi">
              <a style={{ textDecoration: "none" }}>
                  <p className="i18n-button">🇻🇳</p>
              </a>
              </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link href="/">{t("back")}</Link>
              <Link href="/events">{t("prev")}</Link>
          </div>
          <EventInfo event={event}/>
          <br />
          <hr />
          <AppFooter />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {

  const eventRes = await fetchStrapiAPI("/events", {
    filters: {
      slug: {
        $eq: context.query.slug,
      },
    },
    populate: {
      banner: "*",
      event_categories: {
        fields: ["name", "slug", "locale"],
      },
    },
    locale: context.locale, 
  })

  return {
    props: {
      event: eventRes.data,
      ...(await serverSideTranslations(context.locale, ["common", "events"])),
      // Will be passed to the page component as props
    },
  };
}