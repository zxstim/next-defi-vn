import { useState, useReducer } from "react";
import { useTranslation } from "next-i18next";


export default function OpensourceList() {
  
  const { t } = useTranslation("opensource");

  return (
    <>
      <h2>{t("os-list")}</h2>
    </>
  );
}