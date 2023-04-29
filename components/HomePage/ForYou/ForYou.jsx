import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function ForYou() {
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
      <h2>{t("section-4")}</h2>
      <div
        style={{
          display: "grid",
          gap: "15px 15px",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        <Link href="/base">
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonStyle}>{t("title30")}</h3>
          </a>
        </Link>
      </div>
    </>
  );
}
