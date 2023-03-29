import { useState, useEffect } from "react";
// import jobs from "./Jobs.json";
import { useRouter } from "next/router";
import styles from "./JobsList.module.css";
import timeAgo from "../../utils/formatTimeAgoEn";

// create a component to show a job list
export default function JobsList({ jobs }) {
  const router = useRouter();

  return (
    <div className={styles.jobs_list_container}>
      {jobs.map((job) => (
        <div id={job.id} className={styles.job_container}>
          <div className={styles.job_title}>{job.job_title}</div>
          <a href={job.company_website} target="_blank"className={styles.job_company_name}>
            {job.company_name}
          </a>
          <div className={styles.job_information_container}>
            <div className={styles.job_location}>📍{job.job_location}</div>
            <div className={styles.job_salary_range_container}>
              <div
                className={styles.job_salary_range}
              >{`${new Intl.NumberFormat(`${router.locale}`, {
                style: "currency",
                currency: `${job.salary_currency}`,
              }).format(job.salary_lower_bound)} - ${new Intl.NumberFormat(
                `${router.locale}`,
                { style: "currency", currency: `${job.salary_currency}` }
              ).format(job.salary_upper_bound)}`}</div>
              <div className={styles.job_salary_range}></div>
            </div>
            {/* <div className={styles.job_tags_container}> */}
              {job.tags.map((tag) => (
                <div className={styles.job_tags}>{tag}</div>
              ))}
            {/* </div> */}
          </div>

          <a className={styles.job_cta} href={job.apply_here}>Apply here</a>
          <div className={styles.timestamp}>{`Created at: ${timeAgo(
            new Date(job.created_at)
          )}`}</div>
          <div className={styles.timestamp}>{`Updated at: ${timeAgo(
            new Date(job.updated_at)
          )}`}</div>
        </div>
      ))}
    </div>
  );
}
