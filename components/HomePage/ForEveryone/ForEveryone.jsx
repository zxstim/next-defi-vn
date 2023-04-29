import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function ForEveryone() {
  // eslint-disable-next-line
  const { t } = useTranslation("common");

  const buttonStyle = {
    backgroundColor: "#ffffff",
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
      <h2>{t("section-2")}</h2>
      <div
        style={{
          display: "grid",
          gap: "15px 15px",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        <Link href="/start">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title21")}</h3>
          </a>
        </Link>
        <Link href="/buy">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title7")}</h3>
          </a>
        </Link>
        <Link href="/shop">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title24")}</h3>
          </a>
        </Link>
        <Link href="/discover">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title19")}</h3>
          </a>
        </Link>
        {/* <Link href="/communities">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title23")}</h3>
          </a>
        </Link>
        <Link href="/wallets">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title28")}</h3>
          </a>
        </Link> */}
        <Link href="/playground">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title27")}</h3>
          </a>
        </Link>
        <Link href="/jobs">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title29")}</h3>
          </a>
        </Link>
        <Link href="/reading">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title25")}</h3>
          </a>
        </Link>
        <Link href="/events">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title18")}</h3>
          </a>
        </Link>
        <Link href="/governance">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title26")}</h3>
          </a>
        </Link>
        {/* <Link href="/trading">
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
        </Link> */}
        {/* <Link href="/rekt">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title20")}</h3>
          </a>
        </Link> */}
      </div>
    </>
  );
}
