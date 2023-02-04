import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import discoverlist from "./DiscoverList.json";

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
    setDiscoveries(discoveries.concat(discoverlist.slice(index, index + 20)));
    setIndex(index + 20);
  };

  // a function to use drop down menu to filter services by tag
  const filterServicesDropdown = (event) => {
    let filteredServicesList = [];
    filteredServicesList = discoverlist.filter(
      (service) => service.tag === event.target.value
    );
    setServices(filteredServicesList.slice(0, index));
  };

  return (
    <>
      <div className="service-box">
        {discoveries.map((discovery) => (
          <div key={discovery.id} className="service-item">
            <div href={discovery.web} className="service-brand-name">
              {discovery.name}
            </div>
            <div className="service-desc">{discovery.desc}</div>
            <div className="service-guide">
              <div className="service-badge">{discovery.tag}</div>
            </div>
            <div
              style={{
                marginTop: "15px",
                display: "flex",
                flexDirection: "row",
                gap: "8px",
              }}
            >
              {discovery.telegram ? (
                <div>
                  <a href={discovery.telegram}>
                    <Image
                      src="/icons8-telegram.svg"
                      alt="Telegram icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {discovery.twitter ? (
                <div>
                  <a href={discovery.twitter}>
                    <Image
                      src="/icons8-twitter.svg"
                      alt="Twitter icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {discovery.discord ? (
                <div>
                  <a href={discovery.discord}>
                    <Image
                      src="/icons8-discord.svg"
                      alt="Discord icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {discovery.facebook ? (
                <div>
                  <a href={discovery.facebook}>
                    <Image
                      src="/icons8-facebook.svg"
                      alt="Email icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {discovery.linkedin ? (
                <div>
                  <a href={discovery.linkedin}>
                    <Image
                      src="/icons8-linkedin.svg"
                      alt="Linkedin icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {discovery.youtube ? (
                <div>
                  <a href={discovery.youtube}>
                    <Image
                      src="/icons8-youtube.svg"
                      alt="Linkedin icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {discovery.email ? (
                <span>
                  <a href={discovery.email}>
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
            <Link href={discovery.web}>
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
      <button className="service-load-more-button" onClick={fetchData}>
        {t("load-more")}
      </button>
    </>
  );
}
