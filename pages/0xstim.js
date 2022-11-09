import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";
import DevsList from "../components/ForHire/DevsList";

export default function ZxStim(props) {
  const { t } = useTranslation("zxstim");
  return (
    <>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/0xstim" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/0xstim" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <UpButton />
          <h2>README.md</h2>
          <p>👋 Hi, I’m 0xStim.</p>
          <p>
            👀 I’m a self-taught fullstack developer in Python and Javascript.
          </p>
          <p>
            📖 Currently reading up a lot on Solidity for Ethereum development.
          </p>
          <p>
            🤝 I’m looking to collaborate on Quantitative Analysis, Algorithmic
            Trading, Backtesting and Smart Contract Development.
          </p>
          <p>✨ I want to contribute more to opensource repositories.</p>
          <br />
          <hr />
          <AppFooter />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "zxstim"])),
      // Will be passed to the page component as props
    },
  };
}
