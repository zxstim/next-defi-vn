// import { useTranslation } from "next-i18next";
// import Link from "next/link";
import scamslist from "./ScamsList.json";

export default function ScamsList() {
  // eslint-disable-next-line
//   const { t } = useTranslation("");

  return (
    <>
        {
            scamslist.map((scam) => (
                <>
                <h3><a href={scam.publications}>{scam.name}</a></h3>
                <span className="scam-badge">💸 {scam.financialDamage} Loss</span> <span className="scam-badge">🪦 {scam.totalVictims} victims</span> <span className="scam-badge">📅 {scam.year}</span>
                {/* <ul>
                    {scam.publications.map((publication) => (
                        <li key={publication}><a href={publication}>{publication}</a></li>
                    ))}
                </ul> */}
                </>
            ))
        }
    </>
  );
}
