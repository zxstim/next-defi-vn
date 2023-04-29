import { useState, useEffect } from "react";
// import jobs from "./Jobs.json";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import styles from "./JobsList.module.css";
import timeAgo from "../../utils/formatTimeAgoEn";
import ReadMore from "../ReadMore/ReadMore";
import convertUnicode from "../../utils/convertUnicode";

// create a component to show a job list
export default function JobsList({ jobs }) {
  const { t } = useTranslation("jobs");

  // function to replace dash between words with space
  function replaceDashWithSpace(string) {
    return string.replace(/-/g, " ");
  }

  return (
    <div className={styles.jobs_list_container}>
      {jobs.map((job) => (
        <div key={job.id} className={styles.job_container}>
          <div className={styles.job_title}>{job.title}</div>
          <a href={job.company_website} target="_blank" className={styles.job_company_name}>
            {job.company}
          </a>
          <div className={styles.job_information_container}>
            <div className={styles.job_location}>📍{job.location}</div>
            {typeof job.tags === "string" ?
              <div className={styles.job_tags}>{replaceDashWithSpace(job.tags)}</div>
              : job.tags.map((tag, index) => (
              <div key={index} className={styles.job_tags}>{replaceDashWithSpace(tag)}</div>
            ))}
          </div>
          <a className={styles.job_cta} href={job.apply_url}>{t("apply")}</a>
          <div className={styles.timestamp}>{`🗓️ ${timeAgo(
            new Date(job.date)
          )}`}</div>
        </div>
      ))}
    </div>
  );
}
