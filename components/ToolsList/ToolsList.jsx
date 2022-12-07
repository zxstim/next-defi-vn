import { useTranslation } from "next-i18next";
import toolslist from "./ToolsList.json";

export default function ToolsList() {
  // eslint-disable-next-line
  const { t } = useTranslation("tools");

  return (
    <ul>
        {
            toolslist.map((tool) => (
                <li key={tool.id}>
                    <p><a href={tool.web}>{tool.name}</a> | <a href={tool.howToEn}>{t("how-to")}</a></p>
                </li>
            ))
        }
    </ul>
  );
}