import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import hackathonslist from "./HackathonsList.json";


export default function HackathonsList() {
  const { t } = useTranslation("hackathons");
  const [eventsList, setEventsList] = useState(hackathonslist);

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
    <>
    <div className="filter-container">
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
    </div>
      {eventsList
        .sort(function (a, b) {
          return new Date(a.date) - new Date(b.date);
        })
        .map((event) => (
          <div
            key={event.id}
            style={{
              border: "2px solid #1a1a1a",
              marginBottom: "20px",
              padding: "8px 8px 8px 8px",
              boxShadow: "3px 3px black"
            }}
          >
            <div>
              <span className="event-date-badge">{event.start}</span>
              {event.time ? <span className="event-time-badge">{event.time}</span> : null}
            </div>
            <div className="event-title">{event.name}</div>
            <div className="event-info-container">
              <div>🎟️</div>
              {event.organizer ? <div>{event.organizer}</div> : <div>-</div>}
              <div>📍</div>
              {event.location ? <div>{event.location}</div> : <div>-</div>}
              <div>💵</div>
              {event.price ? <div>{event.price}</div> : <div>-</div>}
            </div>
            <div className="event-book-container">
              <Link href={event.registration}>
                <a style={{ textDecoration: "none", color: "#000000" }}>
                  <div className="event-book-badge">{t("register")}</div>
                </a>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
}