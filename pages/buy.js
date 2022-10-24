import Head from "next/head";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import OtcPriceComponent from "../components/OtcPrice/OtcPrice";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";
import axios from "axios";

export default function BuyCrypto(props) {

  const { t } = useTranslation("buy");
  
  function RefreshButton() {
    return (
        <button
            onClick={() => {
              window.location.reload();
              window.alert('Refreshed');
            }}
            style={{
                position: 'fixed',
                fontSize: '14px',
                bottom: '70px',
                right: '40px',
                paddingTop: '5px',
                paddingBottom: '5px',
                borderRadius: '6px',
                textAlign: 'center',
                WebkitAppearance: 'none',
                border: '1px solid var(--color-border-default)'
            }}
        >
        {t("refresh-button")}
        </button>
    )
  }

  return (
    <>
      <div className="App">
        <div className="markdown-body">
        <h1 id="top">{t("title")}</h1>
        <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/buy" locale="en">
              <a style={{ textDecoration: 'none' }}>
                <p
                  style={{
                    backgroundColor: "#ebebeb",
                    margin: "5px 5px 5px 0px",
                    padding: "5px 5px 5px 5px",
                    WebkitAppearance: "none",
                    borderRadius: "6px",
                    border: "2px solid var(--color-border-default)",
                    fontSize: "20px",
                    color: "var(--color-fg-default)"
                  }}
                >
                  🇬🇧
                </p>
              </a>
            </Link>
            <Link href="/vi/buy" locale="vi">
              <a style={{ textDecoration: 'none' }}>
                <p
                  style={{
                    backgroundColor: "#ebebeb",
                    margin: "5px 5px 5px 0px",
                    padding: "5px 5px 5px 5px",
                    WebkitAppearance: "none",
                    borderRadius: "6px",
                    border: "2px solid var(--color-border-default)",
                    fontSize: "20px",
                    color: "var(--color-fg-default)"
                  }}
                >
                  🇻🇳
                </p>
              </a>  
            </Link>
          </div>
          <Link href="/">{t('back')}</Link>
          <OtcPriceComponent data={props.data}/>
          <UpButton />
          <RefreshButton />
          <br />
          <hr />
          <AppFooter />        
        </div>
      </div>  
    </>
  )
}
  
// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await axios.get("https://api3.pyhash.com/signal/all/otcprice/");
  // Pass data to the page via props
  return { 
    props: { 
      ...(await serverSideTranslations(context.locale, ["common", "buy"])),
      data: res.data
    } 
  }
}