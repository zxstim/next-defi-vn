import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router'
import Link from "next/link";
import scamslist from "./ScamsList.json";

export default function ScamsList() {
  const router = useRouter()
  const { t } = useTranslation("scams");

  return (
    <>
      <h2>Scams List</h2>
      <div className="tool-box">
        {scamslist.map((scam) => (
          <div className="tool-item">
            <div className="scam-brand-name">{scam.name}</div>
            <div className="scam-desc">{router.locale === "en" ? scam.descEn : scam.descVi}</div>
            <div className="tool-guide">
              Financial damage: {scam.financialDamage}
            </div>
            <div className="tool-guide">Total victims: {scam.totalVictims}</div>
          </div>
        ))}
      </div>
    </>
  );
}
