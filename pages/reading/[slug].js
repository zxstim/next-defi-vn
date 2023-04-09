import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/router";
import formatArticleTimeStampEn from "../../utils/formatArticleTimeStampEn";
import formatArticleTimeStampVi from "../../utils/formatArticleTimeStampvi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import AppFooter from "../../components/AppFooter/AppFooter";
import { fetchStrapiAPI } from "../../lib/api";

export default function Article({ article }) {
  const { t } = useTranslation("reading");
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
            <title>{`${article.attributes.title} - Defi.vn`}</title>
            <meta charSet="utf-8" />
            <link rel="icon" href="../defi.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={`${article.attributes.title} - Defi.vn`} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content="Reading crypto researches | Đọc nghiên cứu crypto - DeFi.vn" />
            <meta property="og:description" content={article.attributes.title} key="ogdesc" />
            <meta property="og:url" content={`https://defi.vn/reading/${article.attributes.slug}`} key="ogurl" />
            <meta property="og:type" content="website"/>
            <meta property="og:image" content={article.attributes.image.data.attributes.formats.small.url} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="defi.vn" />
            <meta property="twitter:url" content={`https://defi.vn/reading/${article.attributes.slug}`} />
            <meta name="twitter:title" content={`${article.attributes.title} - Defi.vn`} />
            <meta name="twitter:description" content={article.attributes.title} />
            <meta name="twitter:image" content={article.attributes.image.data.attributes.formats.small.url} />
        </Head>
        <div className="App">
            <div className="markdown-body">
                <Image
                    src={article.attributes.image.data.attributes.formats.large.url}
                    alt={article.attributes.image.data.attributes.alternativeText}
                    width="1200"
                    height="630"
                    layout="responsive"
                />
                <h1>{article.attributes.title}</h1>
                <p>{article.attributes.description}</p>
                <div style={{ 
                  backgroundColor: "#f8ff1d",
                  border: "2px solid #1a1a1a",
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "4px 8px",
                  borderRadius: "15px",
                  width: "fit-content",
                  marginBottom: "16px"
                  }}>
                    <Link href={`/${article.attributes.author.data.attributes.name.toLowerCase()}`}>
                      <a style={{ textDecoration: "none", color: "#000000" }}>
                        ✏️ {article.attributes.author.data.attributes.name}
                      </a>
                    </Link>
                </div>
                <div style={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "4px 8px",
                  borderRadius: "15px",
                  width: "fit-content",
                  marginBottom: "16px"
                }}
                >
                  🗓️ {router.locale === "en" ? formatArticleTimeStampEn(article.attributes.updatedAt) : formatArticleTimeStampVi(article.attributes.updatedAt)}
                </div>
                <div style={{ display: "flex", marginBottom: "10px" }}>
                    <Link href={`/reading/${article.attributes.slug}`} locale="en">
                    <a style={{ textDecoration: "none" }}>
                        <p className="i18n-button">🇬🇧</p>
                    </a>
                    </Link>
                    <Link href={`/reading/${article.attributes.slug}`} locale="vi">
                    <a style={{ textDecoration: "none" }}>
                        <p className="i18n-button">🇻🇳</p>
                    </a>
                    </Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <Link href="/">{t("back")}</Link>
                    <Link href="/reading">{t("prev")}</Link>
                </div>
                <ReactMarkdown
                children={article.attributes.content}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                        <SyntaxHighlighter
                        children={String(children).replace(/\n$/, "")}
                        style={github}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                        />
                    ) : (
                        <code className={className} {...props}>
                        {children}
                        </code>
                    );
                    },
                }}
                />
                <br />
                <hr />
                <AppFooter />
            </div>
        </div>
    </>
  );
}

export async function getStaticPaths({ locales }) {
  const articlesRes = await fetchStrapiAPI("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => locales.map((locale) => ({
      params: {
        slug: article.attributes.slug,
      },
      locale
    }))).flat(),
    fallback: false,
  };
}

export async function getStaticProps({ params, ...context }) {
  const articlesRes = await fetchStrapiAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["image", "categories", "author"],
  });

  return {
    props: { 
        article: articlesRes.data[0],
        ...(await serverSideTranslations(context.locale, ["common", "reading"])) 
    },
  };
}
