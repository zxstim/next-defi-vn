import Head from "next/head";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import axios from "axios";

export default function Code(props) {
  const { t } = useTranslation("code");

  function RefreshButton() {
    return (
      <button
        onClick={() => {
          window.location.reload();
          window.alert("Refreshed");
        }}
        style={{
          position: "fixed",
          fontSize: "14px",
          bottom: "70px",
          right: "40px",
          paddingTop: "5px",
          paddingBottom: "5px",
          borderRadius: "6px",
          textAlign: "center",
          WebkitAppearance: "none",
          border: "1px solid var(--color-border-default)",
        }}
      >
        🔄 Refresh
      </button>
    );
  }

  return (
    <>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/code" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p
                  style={{
                    backgroundColor: "#ebebeb",
                    margin: "5px 5px 5px 0px",
                    padding: "5px 5px 5px 5px",
                    WebkitAppearance: "none",
                    borderRadius: "6px",
                    border: "2px solid var(--color-border-default)",
                    fontSize: "20px",
                    color: "var(--color-fg-default)",
                  }}
                >
                  🇬🇧
                </p>
              </a>
            </Link>
            <Link href="/code" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p
                  style={{
                    backgroundColor: "#ebebeb",
                    margin: "5px 5px 5px 0px",
                    padding: "5px 5px 5px 5px",
                    WebkitAppearance: "none",
                    borderRadius: "6px",
                    border: "2px solid var(--color-border-default)",
                    fontSize: "20px",
                    color: "var(--color-fg-default)",
                  }}
                >
                  🇻🇳
                </p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <UpButton />
          <RefreshButton />
          <h2>{t("code1")}</h2>
          <p><a href="https://freecodecamp.org">FreeCodeCamp.org</a></p>
          <h2>{t("code2")}</h2>
          <p><a href="https://www.codecademy.com/">Codecademy</a></p>
          <h2>{t("code3")}</h2>
          <p><a href="https://datacamp.com/">Datacamp</a></p>
          <br />
          <hr />
          <h3>
            {t("footer")}
            <a href="https://t.me/victoristocrat">@victoristocrat</a>
          </h3>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["code"])),
      // Will be passed to the page component as props
    },
  };
}

