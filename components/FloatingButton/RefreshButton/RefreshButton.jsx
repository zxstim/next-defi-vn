import { useTranslation } from "next-i18next";

export default function RefreshButton() {
    const { t } = useTranslation("common")
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
        {t("refresh-button")}
      </button>
    );
  }