import { useTranslation } from "next-i18next";

export default function ForEveryone() {
  // eslint-disable-next-line
  const { t } = useTranslation("common");
  return (
    <>
      <h2>{t("section-3")}</h2>
      <div
        style={{
          display: "grid",
          gap: "15px 15px",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        <h3
          style={{
            backgroundColor: "#ebebeb",
            margin: "5px 5px 5px 0px",
            padding: "15px 10px 15px 10px",
            WebkitAppearance: "none",
            borderRadius: "6px",
            border: "1px solid var(--color-border-default)",
            fontSize: "20px",
          }}
        >
          {t("s3t1")}
        </h3>
        <h3
          style={{
            backgroundColor: "#ebebeb",
            margin: "5px 5px 5px 0px",
            padding: "15px 10px 15px 10px",
            WebkitAppearance: "none",
            borderRadius: "6px",
            border: "1px solid var(--color-border-default)",
            fontSize: "20px",
          }}
        >
          {t("s3t2")}
        </h3>
      </div>
    </>
  );
}
