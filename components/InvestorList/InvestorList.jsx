import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
// import investorList from "./InvestorList.json";
import PaginatedList from "../PaginatedList/PaginatedList";
import styles from "./InvestorList.module.css";

export default function InvestorList({ investorList, pagination, investorsCategories }) {
  // const [investorCategories, setInvestorCategories] = useState(() => {
  //   let investorTags = [];
  //   investorsCategories.map((investorsCategory) => {
  //     investorTags.push(investorsCategory.attributes.name)
  //   })
  //   return investorTags;
  // });
  // const [latestInvestorList, setLatestInvestorList] = useState(investorList)
  // const [investors, setInvestors] = useState(investorList.sort((a, b) => a.attributes.name.localeCompare(b.attributes.name, 'en', { sensitivity: 'base' })));
  const router = useRouter();
  const { t } = useTranslation("investors");

  // // a function to return the current page from the url
  // const getPaginatedParams = () => {
  //   let currentPage = "";
  //   if (router.locale === "en") {
  //     currentPage = `${router.asPath}`;
  //   } else {
  //     currentPage = `${router.locale}${router.asPath}`;
  //   }
  //   return currentPage;
  // };

  // // a function to filter out investor based on search query
  // const searchInvestors = (event) => {
  //   if (event.target.value === "") {
  //     setInvestors(investorList.slice(0, index));
  //     setLatestInvestorList(investorList)
  //     return;
  //   }
  //   let filteredInvestorsList = [];
  //   filteredInvestorsList = investorList.filter(
  //     investor => investor.name.toLowerCase().includes(event.target.value.toLowerCase()) === true
  //   );
  //   setLatestInvestorList(filteredInvestorsList)
  //   setInvestors(filteredInvestorsList.slice(0, index));
  // };


  // // a function to use drop down menu to filter services by tag
  // const filterInvestorsDropdown = (event) => {
  //   if (event.target.value === "") {
  //     // setInvestors(investorList.slice(0, index));
  //     setLatestInvestorList(investorList)
  //     return;
  //   }
  //   let filteredInvestorsList = [];
  //   filteredInvestorsList = investorList.filter(
  //     investor => investor.tags.includes(event.target.value) === true
  //   );
  //   setLatestInvestorList(filteredInvestorsList)
  //   setInvestors(filteredInvestorsList.slice(0, index));
  // };


  return (
    <>
      {/* <div className={styles.investors_filter_container}>
        <label>{t("investor-filter")}</label>
        <select className={styles.investors_filter_select} name="investors" id="investors" onChange={filterInvestorsDropdown}>
          <option value="">All</option>
          {investorCategories.map((category, index) => (<option key={index} value={category}>{category}</option>))}
        </select>
        <label>{t("investor-filter")}</label>
        <input className={styles.investors_filter_search} placeholder="🔎 Search investor" onChange={event => searchInvestors(event)}/>
      </div> */}
      <div className={styles.layout_container}>
        <PaginatedList
          currentPage={pagination.page}
          totalItems={pagination.total} 
          totalPages={pagination.pageCount}
          indexPagePath="investors"
        />
        <div className={styles.investors_list_container}>
          {investorList.sort((a, b) => a.attributes.name.localeCompare(b.attributes.name, 'en', { sensitivity: 'base' })).map((investor) => (
            <div key={investor.id} className={styles.investors_item}>
              <div className={styles.investors_item_name}>
                {investor.attributes.name}
              </div>
              <div className={styles.investors_item_desc}>
                {investor.attributes.description}
              </div>
              <div className={styles.investors_item_tags_container}>
                {investor.attributes.investor_categories.data ? (
                    investor.attributes.investor_categories.data.map((tag) => (
                      <div key={tag} className={styles.investors_item_tags}>{tag.attributes.name}</div>
                    ))
                  ) : null}
              </div>
              <div className={styles.investors_item_socials_cta_container}>
                <div className={styles.investors_item_socials}>
                  {investor.attributes.social.telegram ? (
                    <div>
                      <a href={investor.attributes.social.telegram}>
                        <Image
                          src="/icons8-telegram.svg"
                          alt="Telegram icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {investor.attributes.social.twitter ? (
                    <div>
                      <a href={investor.attributes.social.twitter}>
                        <Image
                          src="/icons8-twitter.svg"
                          alt="Twitter icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {investor.attributes.social.discord ? (
                    <div>
                      <a href={investor.attributes.social.discord}>
                        <Image
                          src="/icons8-discord.svg"
                          alt="Discord icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {investor.attributes.social.facebook ? (
                    <div>
                      <a href={investor.attributes.social.facebook}>
                        <Image
                          src="/icons8-facebook.svg"
                          alt="Facebook icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {investor.attributes.social.linkedin ? (
                    <div>
                      <a href={investor.attributes.social.linkedin}>
                        <Image
                          src="/icons8-linkedin.svg"
                          alt="Linkedin icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {investor.attributes.social.youtube ? (
                    <div>
                      <a href={investor.attributes.social.youtube}>
                        <Image
                          src="/icons8-youtube.svg"
                          alt="Youtube icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {investor.attributes.social.github ? (
                    <div>
                      <a href={investor.attributes.social.github}>
                        <Image
                          src="/icons8-github.svg"
                          alt="Youtube icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {investor.attributes.social.tiktok ? (
                    <div>
                      <a href={investor.attributes.social.tiktok}>
                        <Image
                          src="/icons8-tiktok.svg"
                          alt="Youtube icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {investor.attributes.social.medium ? (
                    <div>
                      <a href={investor.attributes.social.medium}>
                        <Image
                          src="/icons8-medium.svg"
                          alt="Youtube icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {investor.attributes.social.reddit ? (
                    <div>
                      <a href={investor.attributes.social.reddit}>
                        <Image
                          src="/icons8-reddit.svg"
                          alt="Youtube icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {investor.attributes.social.email ? (
                    <span>
                      <a href={investor.attributes.social.email}>
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
                <a href={investor.attributes.social.web} target="_blank" style={{ textDecoration: "none", color: "#000000" }}>
                  <div className={styles.investors_item_cta}>{t("cta")}</div>
                </a>    
              </div>
            </div>
          ))}
        </div>
        <PaginatedList
          currentPage={pagination.page}
          totalItems={pagination.total} 
          totalPages={pagination.pageCount}
          indexPagePath="investors"
        />
      </div>
    </>
  );
}
