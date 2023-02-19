import { useTranslation } from "next-i18next";

export default function Explainer() {
  // eslint-disable-next-line
  const { t } = useTranslation("explainer");
  
  return (
    <>
      <h2>How do you use DeFi.vn</h2>
      <p>Above you can find all the different topics that you can explore on DeFi.vn. You can also use the search bar to find what you are looking for.</p>
    </>
  )
}
