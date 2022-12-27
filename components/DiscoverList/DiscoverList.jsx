import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import discoverlist from "./DiscoverList.json";
import InfiniteScroll from "react-infinite-scroll-component";

export default function DiscoverList() {
  const [index, setIndex] = useState(20);
  const [discoveries, setDiscoveries] = useState(discoverlist.slice(0, index));
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const { t } = useTranslation("discover");
  const fetchData = () => {
    if (discoveries.length >= discoverlist.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setServices(discoveries.concat(discoverlist.slice(index, index + 20)));
      setIndex(index + 20);
    }, 2000);
  };

  // a function to use drop down menu to filter services by tag
  const filterServicesDropdown = (event) => {
    let filteredServicesList = [];
    filteredServicesList = discoverlist.filter((service) => service.tag === event.target.value);
    setServices(filteredServicesList.slice(0, index));
  };

  return (
    <InfiniteScroll
      dataLength={discoveries.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={<h4>{t("load")}</h4>}
      endMessage={
        <p
          style={{
            marginTop: "50px",
            fontSize: "25px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {t("end")}
        </p>
      }
    >
      {/* <label>Choose a tag:</label>
      <select name="services" id="services" onChange={filterServicesDropdown}>
        <option value="media">None</option>
        <option value="media">Media</option>
        <option value="analytics">Analytics</option>
        <option value="marketing">Marketing</option>
      </select> */}
      <div className="service-box">
        {discoveries.map((discovery) => (
          <div key={discovery.id} className="service-item">
            <div href={discovery.web} className="service-brand-name">
              {discovery.name}
            </div>
            <div className="service-desc">
              {router.locale === "en" ? discovery.desc : discovery.descVi}
            </div>
            <div className="service-guide">
              <div className="service-badge">{discovery.tag}</div>
            </div>
            <div style={{ marginTop: "15px" }}>
              <span>
                <a href={discovery.telegram}>
                  <img src="/icons8-telegram.svg" alt="Telegram SVG" />
                </a>
              </span>
              {/* <span>
                <a href={service.twitter}>
                  <img src="/icons8-twitter.svg" alt="Twitter SVG" />
                </a>
              </span> */}
              {/* <span>
                <a href={"https://defi.vn"}>
                  <img src="/icons8-discord.svg" alt="Discord SVG" />
                </a>
              </span> */}
              <span>
                <a href={discovery.email}>
                  <img src="/icons8-circled-envelope.svg" alt="Email SVG" />
                </a>
              </span>
            </div>
            <Link href={discovery.web}>
              <a style={{ textDecoration: "none", color: "#000000" }}>
                <div className="service-cta">{t("cta")}</div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}
