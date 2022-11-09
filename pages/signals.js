import Head from "next/head";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import RefreshButton from "../components/RefreshButton/RefreshButton";
import BotComponentList from "../components/BotComponentList/BotComponentList";
import axios from "axios";
import AppFooter from "../components/AppFooter/AppFooter";

export default function Signals(props) {
  const { t } = useTranslation("signals");

  return (
    <>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("s2t4")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/signals" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/signals" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <BotComponentList data={props.data} />
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
  const res = await axios.get("https://api3.pyhash.com/signal/all");
  // Pass data to the page via props
  return {
    props: {
      data: res.data,
      ...(await serverSideTranslations(context.locale, ["common", "signals"])),
    },
  };
}
