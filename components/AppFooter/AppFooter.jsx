import { useTranslation } from "next-i18next";

export default function AppFooter() {
  const { t } = useTranslation("common");

  return (
    <>
      <h3>
        {t("footer")}
        <a href="https://t.me/zxstim">@zxstim</a>
      </h3>
      <h3>{t("donate")}</h3>
      <p>BTC: bc1q33f3fq37qstrptwd9xcrdgxemrxnkeqzrtjds8</p>
      <p>ETH: 0x052F71E171b11bc037999B2341fCa73f4534D8A5 (dev.victor79.eth)</p>
      <p>BSC: 0x052F71E171b11bc037999B2341fCa73f4534D8A5</p>
    </>
  );
}
