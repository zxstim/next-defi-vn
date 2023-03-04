import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import servicesList from "./ServicesList.json";
import styles from "./ServicesList.module.css";

export default function ServicesList() {
  const [index, setIndex] = useState(20);
  const [services, setServices] = useState(servicesList.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })).slice(0, index).slice(0, index));
  const [serviceCategories, setServiceCategories] = useState(() => {
    let serviceTags = [];
    servicesList.forEach((service) => {
      service.tags.forEach((tag) => {
        if (!serviceTags.includes(tag)) {
          serviceTags.push(tag);
        }
      });
    });
    return serviceTags;
  });
  const [latestServicesList, setLatestServicesList] = useState(servicesList)
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

  // a function to filter out service based on search query
  const searchServices = (event) => {
    if (event.target.value === "") {
      setServices(servicesList.slice(0, index));
      return;
    }
    let filteredServicesList = [];
    filteredServicesList = servicesList.filter(
      service => service.name.toLowerCase().includes(event.target.value.toLowerCase()) === true
    );
    setServices(filteredServicesList.slice(0, index));
  };
  

  // a function to use drop down menu to filter services by tag
  const filterServicesDropdown = (event) => {
    if (event.target.value === "") {
      setServices(servicesList.slice(0, index));
      return;
    }
    let filteredServicesList = [];
    filteredServicesList = servicesList.filter(
      service => service.tags.includes(event.target.value) === true
    );
    setServices(filteredServicesList.slice(0, index));
  };
  


  return (
    <>
      <div className={styles.services_filter_container}>
        <label>Services filter</label>
        <select className={styles.services_filter_select} name="services" id="services" onChange={filterServicesDropdown}>
          <option value="">All</option>
          {serviceCategories.map((category, index) => (<option key={index} value={category}>{category}</option>))}
        </select>
        <label>Search for service</label>
        <input className={styles.services_filter_search} placeholder="🔎 Search service" onChange={event => searchServices(event)}/>
      </div>
      <div className={styles.services_list_container}>
        {services.map((service) => (
          <div key={service.id} className={styles.services_item}>
            <div className={styles.services_item_name}>{service.name}</div>
            <div className={styles.services_item_desc}>{service.desc}</div>
            <div className={styles.investors_item_guide}>
              <div>
                {service.tags ? (
                service.tags.map((tag) => (
                  <div key={tag} className={styles.services_item_tags}>{tag}</div>
                ))
              ) : null}              
              </div>
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
            <a href={service.web} target="_blank" style={{ textDecoration: "none", color: "#000000" }}>
              <div className={styles.services_item_cta}>{t("cta")}</div>
            </a>
          </div>
        ))}
      </div>
      {hasMore 
        ? <button className={styles.services_load_more_button} onClick={fetchData}>
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
