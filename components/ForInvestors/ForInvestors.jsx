import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function ForInvestors() {
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
        <Link href="/testing">
        {/* <Link href="/crypto-ramp"> */}
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonUnderTestingStyle}>
              {t("s2t1")} <button style={tagStyle}>Testing</button>
            </h3>
          </a>
        </Link>
        <Link href="/testing">
        {/* <Link href="/defi-stats"> */}
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonUnderTestingStyle}>
              {t("s2t2")} <button style={tagStyle}>Testing</button>
            </h3>
          </a>
        </Link>
        <Link href="/testing">
        {/* <Link href="/defi-analytics"> */}
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonUnderTestingStyle}>
              {t("s2t3")} <button style={tagStyle}>Testing</button>
            </h3>
          </a>
        </Link>
        <Link href="/testing">
        {/* <Link href="/signals"> */}
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonUnderTestingStyle}>
              {t("s2t4")} <button style={tagStyle}>Testing</button>
            </h3>
          </a>
        </Link>
        <Link href="/testing">
        {/* <Link href="/learn-defi"> */}
          <a style={{ textDecoration: "none" }}>
            <h3 style={buttonUnderTestingStyle}>
              {t("s2t5")} <button style={tagStyle}>Testing</button>
            </h3>
          </a>
        </Link>
      </div>
    </>
  );
}
