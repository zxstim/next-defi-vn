import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function ForDevelopers() {
  // eslint-disable-next-line
  const { t } = useTranslation("common");

  const buttonStyle = {
    backgroundColor: "#ebebeb",
    margin: "5px 5px 5px 0px",
    padding: "15px 10px 15px 10px",
    WebkitAppearance: "none",
    borderRadius: "6px",
    border: "2px solid var(--color-border-default)",
    fontSize: "20px",
    color: "var(--color-fg-default)",
  };

  return (
    <>
      <h2>{t("section-1")}</h2>
      <div
        style={{
          display: "grid",
          gap: "15px 15px",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        <Link href="https://buidl.defi.vn/series/dev">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("s1t1")}</h3>
          </a>
        </Link>
        <Link href="https://github.com/defivn/smart-contract-library">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("s1t2")}</h3>
          </a>
        </Link>
        <Link href="/bot">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("s1t3")}</h3>
          </a>
        </Link>
        <Link href="/events">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("s1t4")}</h3>
          </a>
        </Link>
        <Link href="/code">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("s1t5")}</h3>
          </a>
        </Link>
        <Link href="/help">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("s1t6")}</h3>
          </a>
        </Link>
      </div>
    </>
  );
}
