import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import communitiesList from "./CommunitiesList.json";

export default function CommunitiesList() {
  const [index, setIndex] = useState(20);
  const [communities, setCommunities] = useState(
    communitiesList.slice(0, index)
  );
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const { t } = useTranslation("communities");
  const fetchData = () => {
    if (communities.length >= communitiesList.length) {
      setHasMore(false);
      return;
    }
    setCommunities(communities.concat(communitiesList.slice(index, index + 20)));
    setIndex(index + 20);
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
    <>
      <div className="service-box">
        {communities.map((community) => (
          <div key={community.id} className="service-item">
            <div href={community.web} className="service-brand-name">
              {community.name}
            </div>
            <div className="service-desc">{community.desc}</div>
            <div className="service-guide">
              <div className="service-badge">{community.tag}</div>
            </div>
            <div
              style={{
                marginTop: "15px",
                display: "flex",
                flexDirection: "row",
                gap: "8px",
              }}
            >
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
                      alt="Twitter icon"
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
                      alt="Facebook icon"
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
      {hasMore ? null : (
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
      )}
      <button className="service-load-more-button" onClick={fetchData}>{t("load-more")}</button>
    </>
  );
}
