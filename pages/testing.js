import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home(props) {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">Testing</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/testing" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/vi/testing" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <p>{t("test")}</p>
          <Link href="/">{t("back")}</Link>
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
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
