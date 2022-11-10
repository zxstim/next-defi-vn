import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";
import ServicesList from "../components/ServicesList/ServicesList";

export default function Hiring(props) {
  const { t } = useTranslation("services");
  return (
    <>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/services" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button"
                >
                  🇬🇧
                </p>
              </a>
            </Link>
            <Link href="/services" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button"
                >
                  🇻🇳
                </p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <UpButton />
          <ServicesList />
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
      ...(await serverSideTranslations(locale, ["common", "services"])),
      // Will be passed to the page component as props
    },
  };
}
