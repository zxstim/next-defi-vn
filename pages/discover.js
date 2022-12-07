import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";
import DiscoverList from "../components/DiscoverList/DiscoverList";
import ProjectRadar from "../components/ProjectRadar/ProjectRadar";
import axios from "axios";

export default function Discover(props) {
  const { t } = useTranslation("discover");
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
        <title>Discover</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="description" content="Discover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Discover" />
        <meta property="og:title" content="Discover" key="ogtitle" />
        <meta property="og:description" content="Discover" key="ogdesc" />
        <meta property="og:site_name" content="Discover" key="ogsitename" />
        <meta
          property="og:url"
          content="https://defi.vn/discover"
          key="ogurl"
        />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/discover" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/discover" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <UpButton />
          <DiscoverList />
          <ProjectRadar data={props.data} rowsPerPage={10} />
          <br />
          <hr />
          <AppFooter />
        </div>
      </div>
    </>
  );
}

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common", "discover"])),
//       // Will be passed to the page component as props
//     },
//   };
// }
// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await axios.get(
    "https://api3.pyhash.com/signal/all/projectradar/"
  );
  // Pass data to the page via props
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["common", "discover"])),
      data: res.data,
    },
  };
}
