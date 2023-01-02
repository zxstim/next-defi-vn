import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import investorList from "./InvestorList.json";
import InfiniteScroll from "react-infinite-scroll-component";

export default function InvestorList() {
  const [index, setIndex] = useState(20);
  const [investors, setInvestors] = useState(investorList.slice(0, index));
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const { t } = useTranslation("investors");
  const fetchData = () => {
    if (investors.length >= investorList.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setServices(investors.concat(investorList.slice(index, index + 20)));
      setIndex(index + 20);
    }, 2000);
  };

  // a function to use drop down menu to filter services by tag
  const filterInvestorsDropdown = (event) => {
    let filteredInvestorsList = [];
    filteredInvestorsList = investorList.filter(
      (investor) => investor.tag === event.target.value
    );
    setInvestors(filteredInvestorsList.slice(0, index));
  };

  return (
    <InfiniteScroll
      dataLength={investors.length} //This is important field to render the next data
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
        {investors.map((investor) => (
          <div key={investor.id} className="service-item">
            <div className="service-brand-name">
              {investor.name}
            </div>
            <div className="service-desc">
              {investor.desc}
            </div>
            <div className="service-guide">
              {investor.tags.map((tag) => (
                <div className="service-badge">{tag}</div>
              ))}
            </div>
            <div
              style={{
                marginTop: "15px",
                display: "flex",
                flexDirection: "row",
                gap: "8px",
              }}
            >
              {investor.telegram ? (
                <div>
                  <a href={investor.telegram}>
                    <Image
                      src="/icons8-telegram.svg"
                      alt="Telegram icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {investor.twitter ? (
                <div>
                  <a href={investor.twitter}>
                    <Image
                      src="/icons8-twitter.svg"
                      alt="Twitter icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {investor.discord ? (
                <div>
                  <a href={investor.discord}>
                    <Image
                      src="/icons8-discord.svg"
                      alt="Discord icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {investor.facebook ? (
                <div>
                  <a href={investor.facebook}>
                    <Image
                      src="/icons8-facebook.svg"
                      alt="Facebook icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {investor.linkedin ? (
                <div>
                  <a href={investor.linkedin}>
                    <Image
                      src="/icons8-linkedin.svg"
                      alt="Linkedin icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {investor.youtube ? (
                <div>
                  <a href={investor.youtube}>
                    <Image
                      src="/icons8-youtube.svg"
                      alt="Youtube icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              ) : null}
              {investor.email ? (
                <span>
                  <a href={investor.email}>
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
            <Link href={investor.web}>
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
