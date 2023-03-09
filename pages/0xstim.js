import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";
import styles from '../styles/0xstim.module.css'

export default function ZxStim(props) {
  const { t } = useTranslation("zxstim");
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
        <title>Information about 0xStim | Thông tin về 0xStim - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="Learn more about 0xStim, DeFi.vn lead builder. See the website progress, what's next, how can you help." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="DeFi.vn - Information about 0xStim | Thông tin về 0xStim" key="ogtitle" />
        <meta property="og:description" content="Learn more about 0xStim, DeFi.vn lead builder. See the website progress, what's next, how can you help." key="ogdesc" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://defi.vn/0xstim" key="ogurl" />
        <meta property="og:site_name" content="DeFi.vn | DeFi Vietnam Hub" key="ogsitename" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/0xstim" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/0xstim" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <h2>README.md</h2>
          {/* center the below image */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
            <Image
              src="/0xstim-nouns.svg"
              alt="0xStim pfp"
              width={200}
              height={200}
            />
          </div>
          <div className={styles.links_container}>
            <h3 className={styles.description}>Builder of <a href="https://defi.vn">Defi.vn</a> and <a href="https://gmgn.app">GmGn.app</a></h3>
            <Link className={styles.anchor_tag} href="/">
              <div className={styles.links_button}>
                Defi.vn
              </div>
            </Link>
            <a className={styles.anchor_tag} href="https://gmgn.app">
              <div className={styles.links_button}>
                GmGn wallet
              </div>
            </a>
            <a className={styles.anchor_tag} href="https://twitter.com/0xStim">
              <div className={styles.links_button}>
                Twitter @0xStim
              </div>
            </a>
            <a className={styles.anchor_tag} href="https://t.me/zxstim">
              <div className={styles.links_button}>
                Telegram @zxstim
              </div>
            </a>
            <a className={styles.anchor_tag} href="https://www.facebook.com/0xstim/">
              <div className={styles.links_button}>
                Facebook @0xStim
              </div>
            </a>
          </div>
          <br />
          <hr />
          <AppFooter />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "zxstim"])),
      // Will be passed to the page component as props
    },
  };
}
