import Head from "next/head";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ComponentList from "../components/ComponentList/ComponentList";
import UpButton from "../components/UpButton/UpButton";
import axios from "axios";

export default function BuyCrypto(props) {

  const { t } = useTranslation("common");
  
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
        🔄 Refresh
        </button>
    )
  }

  return (
    <>
      <Head>
        <title>Defi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="defi.vn" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <ComponentList data={props.data}/>
          <UpButton />
          <RefreshButton />
        </div>
      </div>  
    </>
  )
}
  
// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await axios.get("https://api3.pyhash.com/signal/all");
  const { locale } = context
  // Pass data to the page via props
  return { 
    props: { 
      ...(await serverSideTranslations(locale, ["common"])),
      data: res.data
    } 
  }
}