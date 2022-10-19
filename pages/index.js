import Head from "next/head";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ForDevelopers from "../components/ForDevelopers/ForDevelopers";
import ForInvestors from "../components/ForInvestors/ForInvestors";

export default function Home(props) {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <blockquote>{t("subtitle")}</blockquote>
          <div style={{ display: "flex" }}>
            <Link href="/" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p
                  style={{
                    backgroundColor: "#ebebeb",
                    margin: "5px 5px 5px 0px",
                    padding: "5px 5px 5px 5px",
                    WebkitAppearance: "none",
                    borderRadius: "6px",
                    border: "2px solid var(--color-border-default)",
                    fontSize: "20px",
                    color: "var(--color-fg-default)",
                  }}
                >
                  🇬🇧
                </p>
              </a>
            </Link>
            <Link href="/" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p
                  style={{
                    backgroundColor: "#ebebeb",
                    margin: "5px 5px 5px 0px",
                    padding: "5px 5px 5px 5px",
                    WebkitAppearance: "none",
                    borderRadius: "6px",
                    border: "2px solid var(--color-border-default)",
                    fontSize: "20px",
                    color: "var(--color-fg-default)",
                  }}
                >
                  🇻🇳
                </p>
              </a>
            </Link>
          </div>
          <ForDevelopers />
          <ForInvestors />
          <br />
          <hr />
          <h3>
            {t("footer")}
            <a href="https://t.me/victoristocrat">@victoristocrat</a>
          </h3>
          <h3>
            {t("donate")}
          </h3>
          <ul>
            <li>
              BTC: bc1q33f3fq37qstrptwd9xcrdgxemrxnkeqzrtjds8
            </li>
            <li>
              ETH: 0x052F71E171b11bc037999B2341fCa73f4534D8A5
            </li>
            <li>
              BSC: 0x052F71E171b11bc037999B2341fCa73f4534D8A5
            </li>
          </ul>
          <br />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
