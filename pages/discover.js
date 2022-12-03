import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import UpButton from "../components/UpButton/UpButton";
import AppFooter from "../components/AppFooter/AppFooter";
import DiscoverList from "../components/DiscoverList/DiscoverList";
import ProjectRadar from "../components/ProjectRadar/ProjectRadar";
import axios from "axios";

export default function Discover(props) {
  const { t } = useTranslation("discover");
  return (
    <>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">{t("title")}</h1>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Link href="/en/discover" locale="en">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇬🇧</p>
              </a>
            </Link>
            <Link href="/discover" locale="vi">
              <a style={{ textDecoration: "none" }}>
                <p className="i18n-button">🇻🇳</p>
              </a>
            </Link>
          </div>
          <Link href="/">{t("back")}</Link>
          <UpButton />
          <DiscoverList />
          <ProjectRadar data={props.data} rowsPerPage={10} />
          <br />
          <hr />
          <AppFooter />
        </div>
      </div>
    </>
  );
}

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common", "discover"])),
//       // Will be passed to the page component as props
//     },
//   };
// }
// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await axios.get("https://api3.pyhash.com/signal/all/projectradar/");
  // Pass data to the page via props
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["common", "discover"])),
      data: res.data,
    },
  };
}