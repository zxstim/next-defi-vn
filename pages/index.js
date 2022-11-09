import Head from "next/head";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ForDevelopers from "../components/ForDevelopers/ForDevelopers";
import ForEveryone from "../components/ForEveryone/ForEveryone";
import ForProjects from "../components/ForProjects/ForProjects";
import AppFooter from "../components/AppFooter/AppFooter";

export default function Home(props) {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <blockquote>{t("subtitle")}</blockquote>
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
          </div>
          <ForDevelopers />
          <ForProjects />
          <ForEveryone />
          <br />
          <hr />
          <AppFooter />
          <br />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
