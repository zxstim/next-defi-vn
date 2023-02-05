import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import readinglist from "./ReadingList.json";
import formatTimeStamp from "../../utils/formatTimestamp";
import styles from "../../styles/ReadingList.module.css";
import { useRouter } from "next/router";
import formatArticleTimeStampEn from "../../utils/formatArticleTimeStampEn";
import formatArticleTimeStampVi from "../../utils/formatArticleTimeStampVi";

export default function ReadingList() {
  const { t } = useTranslation("reading");
  const [readingList, setReadingList] = useState(readinglist);
  const router = useRouter();

  // function to filter events by date from datepicker
  const filterEventsByDate = (event) => {
    let filteredEventsList = [];
    if (event.target.value === "") {
      setEventsList(eventslist);
      return;
    }
    filteredEventsList = eventslist.filter(
      (evnt) => evnt.start === event.target.value
    );
    setEventsList(filteredEventsList);
  };

  // function to filter events by month from monthpicker
  const filterEventsByMonth = (event) => {
    let filteredEventsList = [];
    if (event.target.value === "") {
      setEventsList(eventslist);
      return;
    }
    filteredEventsList = eventslist.filter(
      (evnt) => evnt.start.split("-")[1] === event.target.value.split("-")[1]
    );
    setEventsList(filteredEventsList);
  };

  return (
    <div className={styles.article_list_container}>
      {/* <div className="filter-container">
      <div>
        <label for="events-date-filter">{t("date-filter")}</label>
        <input className="events-filter" type="date" id="events-date-filter" name="events-date-filter" onChange={filterEventsByDate} />
        <button className="events-filter-clear" onClick={() => setEventsList(eventslist)}>{t("reset")}</button>
      </div>
      <div>
        <label for="events-month-filter">{t("month-filter")}</label>
        <input className="events-filter" type="month" id="events-month-filter" name="events-month-filter" onChange={filterEventsByMonth} />
        <button className="events-filter-clear" onClick={() => setEventsList(eventslist)}>{t("reset")}</button>
      </div>
    </div> */}

        {readingList
          .sort(function (a, b) {
            return new Date(b.timestamp) - new Date(a.timestamp);
          })
          .map((article) => (
            <Link key={article.id} href={article.url}>
              <div className={styles.article_item_container}>
                <div className={styles.article_image_container}>
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    width={1200}
                    height={660}
                  />
                </div>
                <div className={styles.article_info_container}>
                  <div className={styles.article_tags_container}>
                    {article.tags.map((tag, index) => (<div key={index} className={styles.article_tag}>{tag}</div>))}
                    <div className={styles.article_language}>
                      {article.language === "en" ? "🇬🇧" : "🇻🇳"}
                    </div>
                  </div>
                  <div className={styles.article_details_container}>
                    <div>
                      <div className={styles.article_title}>{article.title}</div>
                      <div className={styles.article_description}>
                        {article.desc}
                      </div>
                    </div>
                    <div className={styles.article_author_info}>
                      <div className={styles.article_timestamp}>
                        {router.locale === "vi"
                          ? formatArticleTimeStampVi(article.timestamp)
                          : formatArticleTimeStampEn(article.timestamp)}
                      </div>
                      <div className={styles.article_author_pfp}>
                        <Image style={{ borderRadius: "50%" }} src={article.authorPfp} alt="0xStim" width={30} height={30} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
  );
}
