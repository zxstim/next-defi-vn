import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import formatArticleTimeStampEn from "../../../utils/formatArticleTimeStampEn";
import formatArticleTimeStampVi from "../../../utils/formatArticleTimeStampVi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import styles from "./EventInfo.module.css";

export default function EventInfo({ event }) {
  const { t } = useTranslation("events");
  const router = useRouter();


  // function to format event time
  function formatEventTime(startDatetime, endDatetime, locale) {
    if (locale === 'en') {
      locale = 'en-GB';
    } else if (locale === 'vi') {
      locale = 'vi-VI';
    }
    let dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    let timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };

    // Convert timestamps into JavaScript Date objects
    let startDate = new Date(startDatetime);
    let endDate = new Date(endDatetime);

    // Format date and time
    let startDateStr = new Intl.DateTimeFormat(locale, dateOptions).format(startDate);
    let endDateStr = new Intl.DateTimeFormat(locale, dateOptions).format(endDate);
    let startTimeStr = new Intl.DateTimeFormat('en-US', timeOptions).format(startDate);
    let endTimeStr = new Intl.DateTimeFormat('en-US', timeOptions).format(endDate);

    // Conditionally check for same day events and format accordingly
    if (startDateStr === endDateStr) {
      return (
        <div className={styles.datetime_container}>
          <div className={styles.icon}>🗓️</div>
          <div>
            <div>{startDateStr}</div>
            <div className={styles.time}>{`${startTimeStr} - ${endTimeStr}`}</div>
          </div>
        </div>
      )
    }
    return (
      <>
        <div className={styles.datetime_container}>
          <div className={styles.icon}>🗓️</div>
          <div>
            <div>{startDateStr}</div>
            <div className={styles.time}>{startTimeStr}</div>
          </div>
          <div className={styles.icon}>-</div>
          <div>
            <div>{endDateStr}</div>
            <div className={styles.time}>{endTimeStr}</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <h2>{t("general")}</h2>
      <div className={styles.general_info_container}>
        {formatEventTime(event[0].attributes.startDatetime, event[0].attributes.endDatetime, router.locale)}
        <div className={styles.location_info}>
          <div className={styles.icon}>📍</div>
          <div>{event[0].attributes.details.location}</div>
        </div>
        <div className={styles.organizer_info}>
          <div className={styles.icon}>👥</div>
          <div className={styles.organizer_container}>
            {event[0].attributes.details.organizers.map((organizer) => (
              <a key={organizer.id} href={organizer.link} className={styles.anchor_tag}>
                <div className={styles.organizer_chip}>{organizer.name}</div>
              </a>
            ))}
          </div>
        </div>
        <div className={styles.registration_info}>
          <div className={styles.icon}>🎟️</div>
          <div><Link href={event[0].attributes.details.registration.registrationLink}>{event[0].attributes.details.registration.registrationText}</Link></div>
        </div>
      </div>
      <h2>{t("categories")}</h2>
      <div className={styles.categories_container}>
        {event[0].attributes.event_categories.data.map((category) => (
          <div key={category.id} className={styles.category}>
            {category.attributes.name}
          </div>
        ))}
      </div>
      <h2>{t("content")}</h2>
      {event[0].attributes.content ? 
        <ReactMarkdown
          children={event[0].attributes.content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
                <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={github}
                language={match[1]}
                PreTag="div"
                {...props}
                />
              ) : (
                <code className={className} {...props}>
                {children}
                </code>
              );
            },
          }}
        /> 
      : null}
      <h2>{t("album")}</h2>
      
    </div>
  )
}