import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../../components/UpButton/UpButton";
import WalletsList from "../../components/WalletsList/WalletsList";
import AppFooter from "../../components/AppFooter/AppFooter";


export default function WalletsPage(props) {
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
        <link rel="icon" href="../defi.svg" />
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
            <Link href="/wallets" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/wallets" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <UpButton />
          <h2>{t("subtitle")}</h2>
          <WalletsList />
          <br />
          <hr />
          <AppFooter />
        </div>
      </div>
    </>
  );
}

// This gets called on every request
export async function getStaticProps({ locale }) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "wallets"])),
      // Will be passed to the page component as props
    },
  };
}