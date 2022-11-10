import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function ForEveryone() {
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

  const buttonUnderTestingStyle = {
    backgroundColor: "#ebebeb",
    margin: "5px 5px 5px 0px",
    padding: "15px 10px 15px 10px",
    WebkitAppearance: "none",
    borderRadius: "6px",
    border: "2px solid var(--color-border-default)",
    fontSize: "20px",
    color: "var(--color-fg-default)",
    opacity: "0.5",
  };

  const tagStyle = {
    backgroundColor: "#4094f7",
    border: "1px solid var(--color-border-default)",
    position: "relative",
    bottom: "2px",
    left: "10px",
    color: "#ffffff",
    borderRadius: "5px",
    height: "30px",
    width: "65px",
  };

  return (
    <>
      <h2>{t("section-2")}</h2>
      <div
        style={{
          display: "grid",
          gap: "15px 15px",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        <Link href="/buy">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title7")}</h3>
          </a>
        </Link>
        <Link href="/defi-stats">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title8")}</h3>
          </a>
        </Link>
        <Link href="/defi-analytics">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title9")}</h3>
          </a>
        </Link>
        <Link href="/learn-defi">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title11")}</h3>
          </a>
        </Link>
        <Link href="/events">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title18")}</h3>
          </a>
        </Link>
      </div>
    </>
  );
}
