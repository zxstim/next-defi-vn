import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import WalletManagement from "../components/PlaygroundToys/WalletManagement/WalletManagement";
import AppFooter from "../components/AppFooter/AppFooter";
import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi'
 
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
 
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()],
)
// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})

export default function Playground(props) {
  const { t } = useTranslation("playground");
  // Configure chains & providers with the Alchemy provider.
  // Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)


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
        <title>Play and learn about Web3 | Dùng thử và tìm hiểu về Web3 - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Try and experience the power of Web3 with zero risk of losing money." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Play and learn about Web3 | Dùng thử và tìm hiểu về Web3 - DeFi.vn" />
        <meta property="og:description" content="Try and experience the power of Web3 with zero risk of losing money." key="ogdesc" />
        <meta property="og:url" content="https://defi.vn/playground" key="ogurl" />
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/367f3e41-52b9-4e72-49da-2c17111b9f00/defi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content="https://www.defi.vn/playground" />
        <meta name="twitter:title" content="Play and learn about Web3 | Dùng thử và tìm hiểu về Web3 - DeFi.vn" />
        <meta name="twitter:description" content="Try and experience the power of Web3 with zero risk of losing money." />
        <meta name="twitter:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/367f3e41-52b9-4e72-49da-2c17111b9f00/defi" />
      </Head>
      <WagmiConfig client={client}>
        <div className="App">
          <div className="markdown-body">
            <h1 id="top">{t("title")}</h1>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <Link href="/playground" locale="en">
                <a style={{ textDecoration: "none" }}>
                  <p className="i18n-button">🇬🇧</p>
                </a>
              </Link>
              <Link href="/playground" locale="vi">
                <a style={{ textDecoration: "none" }}>
                  <p className="i18n-button">🇻🇳</p>
                </a>
              </Link>
            </div>
            <Link href="/">{t("back")}</Link>
            <UpButton />
            <h2>{t("subtitle")}</h2>
            <WalletManagement />
            <br />
            <hr />
            <AppFooter />
          </div>
        </div>
      </WagmiConfig>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "playground"])),
      // Will be passed to the page component as props
    },
  };
}