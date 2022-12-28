import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import communitiesList from "./CommunitiesList.json";
import InfiniteScroll from "react-infinite-scroll-component";

export default function CommunitiesList() {
  const [index, setIndex] = useState(20);
  const [communities, setCommunities] = useState(communitiesList.slice(0, index));
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const { t } = useTranslation("communities");
  const fetchData = () => {
    if (communities.length >= communitiesList.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setServices(communities.concat(communitiesList.slice(index, index + 20)));
      setIndex(index + 20);
    }, 2000);
  };

  // a function to use drop down menu to filter services by tag
  const filterCommunitiesDropdown = (event) => {
    let filteredCommunitiesList = [];
    filteredCommunitiesList = communitiesList.filter(
      (community) => community.tag === event.target.value
    );
    setServices(filteredCommunitiesList.slice(0, index));
  };

  return (
    <InfiniteScroll
      dataLength={communities.length} //This is important field to render the next data
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
        {communities.map((community) => (
          <div key={community.id} className="service-item">
            <div href={community.web} className="service-brand-name">
              {community.name}
            </div>
            <div className="service-desc">
              {router.locale === "en" ? community.desc : community.descVi}
            </div>
            <div className="service-guide">
              <div className="service-badge">{community.tag}</div>
            </div>
            <div style={{ marginTop: "15px", display: "flex", flexDirection: "row", gap: "8px" }}>
              {community.telegram ? (
                <div>
                  <a href={community.telegram}>
                    <Image
                      src="/icons8-telegram.svg"
                      alt="Telegram icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {community.twitter ? (
                <div>
                  <a href={community.twitter}>
                    <Image
                      src="/icons8-twitter.svg"
                      alt="Twitter icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {community.twitter ? (
                <div>
                  <a href={community.discord}>
                    <Image
                      src="/icons8-discord.svg"
                      alt="Discord icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {community.facebook ? (
                <div>
                  <a href={community.facebook}>
                    <Image
                      src="/icons8-facebook.svg"
                      alt="Email icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {community.linkedin ? (
                <div>
                  <a href={community.linkedin}>
                    <Image
                      src="/icons8-linkedin.svg"
                      alt="Linkedin icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {community.youtube ? (
                <div>
                  <a href={community.youtube}>
                    <Image
                      src="/icons8-youtube.svg"
                      alt="Youtube icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {community.email ? (
                <span>
                  <a href={community.email}>
                    <Image
                      src="/icons8-circled-envelope.svg"
                      alt="Email icon"
                      width={32}
                      height={32}
                    />
                  </a>
                </span>
              ) : null}
            </div>
            <Link href={community.web}>
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
