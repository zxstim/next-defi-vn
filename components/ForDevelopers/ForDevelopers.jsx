import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function ForDevelopers() {
  // eslint-disable-next-line
  const { t } = useTranslation("common");

  const buttonStyle = {
    backgroundColor: "#f5f5f5",
    margin: "5px 5px 5px 0px",
    padding: "15px 10px 15px 10px",
    WebkitAppearance: "none",
    borderRadius: "6px",
    border: "2px solid var(--color-fg-default)",
    fontSize: "20px",
    color: "var(--color-fg-default)",
    boxShadow: "3px 3px black"
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
        <Link href="/buidl">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title1")}</h3>
          </a>
        </Link>
        <Link href="/opensource">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title2")}</h3>
          </a>
        </Link>
        <Link href="/bot">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title3")}</h3>
          </a>
        </Link>
        <Link href="/hackathons">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title4")}</h3>
          </a>
        </Link>
        <Link href="/code">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title5")}</h3>
          </a>
        </Link>
        <Link href="/devkit">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title17")}</h3>
          </a>
        </Link>
        <Link href="/jobs">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title16")}</h3>
          </a>
        </Link>
      </div>
    </>
  );
}
