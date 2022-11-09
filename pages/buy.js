import Head from "next/head";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import OtcPriceComponent from "../components/OtcPrice/OtcPrice";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";
import axios from "axios";

export default function BuyCrypto(props) {
  const { t } = useTranslation("buy");

  return (
    <>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/buy" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/vi/buy" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <OtcPriceComponent data={props.data} />
          <UpButton />
          <RefreshButton />
          <br />
          <hr />
          <AppFooter />
        </div>
      </div>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await axios.get("https://api3.pyhash.com/signal/all/otcprice/");
  // Pass data to the page via props
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["common", "buy"])),
      data: res.data,
    },
  };
}
