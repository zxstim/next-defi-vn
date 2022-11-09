import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";

export default function Donate(props) {
  const { t } = useTranslation("donate");
  return (
    <>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/donate" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/donate" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <UpButton />
          <h2>{t("header1")}</h2>
          <p>BTC: bc1q33f3fq37qstrptwd9xcrdgxemrxnkeqzrtjds8</p>
          <p>ETH: 0x052F71E171b11bc037999B2341fCa73f4534D8A5</p>
          <p>BSC: 0x052F71E171b11bc037999B2341fCa73f4534D8A5</p>
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
      ...(await serverSideTranslations(locale, ["common", "donate"])),
      // Will be passed to the page component as props
    },
  };
}
