import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import styles from "./BuidlStationList.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BuidlStationList({ events, pagination }) {
  const { t } = useTranslation("buidl-station");
  const router = useRouter();

  function formatTimestamps(startDatetime, endDatetime, locale) {
    // Set the options for date and time formatting
    if (locale === 'en') {
      locale = 'en-GB';
    } else if (locale === 'vi') {
      locale = 'vi-VN';
    }
    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };

    // Convert timestamps into JavaScript Date objects
    let startDate = new Date(startDatetime);
    let endDate = new Date(endDatetime);

    // Format date and time
    let startDateStr = new Intl.DateTimeFormat(locale, dateOptions).format(startDate);
    let startTimeStr = new Intl.DateTimeFormat('en-US', timeOptions).format(startDate);
    let endTimeStr = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).format(endDate);

    // Construct the final string
    return { startDateStr, startTimeStr, endTimeStr };
}

  return (
    <div>
      <h2>{t("past-events")}</h2>
      <div className={styles.past_events_container}>
        {
          events.map((event) => {
            return (
              <div key={event.id} className={styles.past_event_container}>
                <div className={styles.title}>{event.attributes.name}</div>
                <div className={styles.date}>🗓️ {formatTimestamps(event.attributes.startDatetime, event.attributes.endDatetime, router.locale).startDateStr}</div>
                {/* <div className={styles.time}>{`${formatTimestamps(event.attributes.startDatetime, event.attributes.endDatetime, router.locale).startTimeStr} - ${formatTimestamps(event.attributes.startDatetime, event.attributes.endDatetime, router.locale).endTimeStr}`}</div> */}
                <Link href={`/events/info/${event.attributes.slug}`}>{t("view")}</Link>
              </div>
            )
          })
        }
      </div>
      <h2>{t("related-events")}</h2>
    </div>
  )
}

