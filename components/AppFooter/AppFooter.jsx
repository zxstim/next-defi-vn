import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function AppFooter() {
  const { t } = useTranslation("common");

  return (
    <>
      <h3>
        {t("footer")}
        <a href="https://t.me/zxstim">@zxstim</a>
      </h3>
      <span>
        <a href="https://github.com/0xstim">
          <img src="/icons8-github.svg" alt="Github SVG" />
        </a>
      </span>
      <span>
        <a href="https://twitter.com/0xstim">
          <img src="/icons8-twitter.svg" alt="Twitter SVG" />
        </a>
      </span>
      <span>
        <a href="https://t.me/zxstim">
          <img src="/icons8-telegram.svg" alt="Telegram SVG" />
        </a>
      </span>
      <h3>
        <Link href="/0xstim">
          <a>{t("about")}</a>
        </Link>
      </h3>
      <h3>
        <Link href="/disclaimer">
          <a>{t("disclaimer")}</a>
        </Link>
      </h3>
      <h3>
        <Link href="/donate">
          <a>{t("donate")}</a>
        </Link>
      </h3>
    </>
  );
}
