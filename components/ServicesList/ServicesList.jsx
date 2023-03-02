import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import servicesList from "./ServicesList.json";

export default function ServicesList() {
  const [index, setIndex] = useState(20);
  const [services, setServices] = useState(servicesList.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })).slice(0, index).slice(0, index));
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const { t } = useTranslation("services");
  const fetchData = () => {
    if (services.length >= servicesList.length) {
      setHasMore(false);
      return;
    }
    setServices(services.concat(servicesList.slice(index, index + 20)));
    setIndex(index + 20);
  };

  // a function to use drop down menu to filter services by tag
  const filterServicesDropdown = (event) => {
    let filteredServicesList = [];
    filteredServicesList = servicesList.filter(
      (service) => service.tag === event.target.value
    );
    setServices(filteredServicesList.slice(0, index));
  };

  return (
    <>
      <div className="service-box">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <div href={service.web} className="service-brand-name">
              {service.name}
            </div>
            <div className="service-desc">{service.desc}</div>
            <div className="service-guide">
              <div className="service-badge">{service.tag}</div>
            </div>
            <div
              style={{
                marginTop: "15px",
                display: "flex",
                flexDirection: "row",
                gap: "8px",
              }}
            >
              {service.telegram ? (
                <div>
                  <a href={service.telegram}>
                    <Image
                      src="/icons8-telegram.svg"
                      alt="Telegram icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {service.twitter ? (
                <div>
                  <a href={service.twitter}>
                    <Image
                      src="/icons8-twitter.svg"
                      alt="Twitter icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {service.twitter ? (
                <div>
                  <a href={service.discord}>
                    <Image
                      src="/icons8-discord.svg"
                      alt="Discord icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {service.facebook ? (
                <div>
                  <a href={service.facebook}>
                    <Image
                      src="/icons8-facebook.svg"
                      alt="Email icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {service.linkedin ? (
                <div>
                  <a href={service.linkedin}>
                    <Image
                      src="/icons8-linkedin.svg"
                      alt="Linkedin icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {service.youtube ? (
                <div>
                  <a href={service.youtube}>
                    <Image
                      src="/icons8-youtube.svg"
                      alt="Linkedin icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {service.email ? (
                <span>
                  <a href={service.email}>
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
            <Link href={service.web}>
              <a style={{ textDecoration: "none", color: "#000000" }}>
                <div className="service-cta">{t("cta")}</div>
              </a>
            </Link>
          </div>
        ))}
      </div>
      {hasMore 
        ? <button className="service-load-more-button" onClick={fetchData}>
            {t("load-more")}
          </button> 
        : (
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

    </>
  );
}
