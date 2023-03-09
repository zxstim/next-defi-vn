import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import styles from '../styles/Links.module.css'

export default function Links(props) {
  const { t } = useTranslation("links");

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
        <title>DeFi.vn - Explore everything about Web3</title>
        <meta name="description" content="Defi.vn is a community project aiming to be an open Web3 resource hub for everyone"/>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://www.defi.vn" />
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="DeFi.vn - DeFi Vietnam | DeFi Việt Nam" />
        <meta property="og:description" content="Defi.vn is a community project aiming to be an open Web3 resource hub for everyone" />
        <meta property="og:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/8d6a2d48-99bc-485c-4afc-239196f02200/defi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content="https://www.defi.vn" />
        <meta name="twitter:title" content="DeFi.vn - DeFi Vietnam | DeFi Việt Nam" />
        <meta name="twitter:description" content="Defi.vn is a community project aiming to be an open Web3 resource hub for everyone" />
        <meta name="twitter:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/8d6a2d48-99bc-485c-4afc-239196f02200/defi" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          {/* <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex" }}>
            <Link href="/" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div> */}
          <div className={styles.links_container}>
            <Image
              src="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/8d6a2d48-99bc-485c-4afc-239196f02200/defi"
              alt="defi pfp"
              width={1200}
              height={600}
            />
            <h3 className={styles.description}>Explore Web3 with us!</h3>
            <Link className={styles.anchor_tag} href="/">
              <div className={styles.links_button}>
                Website
              </div>
            </Link>
            <a className={styles.anchor_tag} href="https://twitter.com/defidotvn">
              <div className={styles.links_button}>
                Twitter
              </div>
            </a>
            <a className={styles.anchor_tag} href="https://youtube.com/@0xstim">
              <div className={styles.links_button}>
                Youtube
              </div>
            </a>
            <a className={styles.anchor_tag} href="https://t.me/defivnspace">
              <div className={styles.links_button}>
                Telegram
              </div>
            </a>
            <a className={styles.anchor_tag} href="https://www.facebook.com/defidotvn">
              <div className={styles.links_button}>
                Facebook
              </div>
            </a>
            <a className={styles.anchor_tag} href="https://www.tiktok.com/@defidotvn?_t=8aUsxVuNkF0&_r=1">
              <div className={styles.links_button}>
                TikTok
              </div>
            </a>
            <a className={styles.anchor_tag} href="https://mailchi.mp/8a12db9cbf17/join-the-defi-revolution">
              <div className={styles.links_button}>
                Newsletter
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["links"])),
      // Will be passed to the page component as props
    },
  };
}
