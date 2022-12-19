import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import hackathonslist from "./HackathonsList.json";

export default function EventsList() {
  const { t } = useTranslation("hackathons");

  return (
    <>
      <h2>{t("hackathons-list")}</h2>
      {hackathonslist
        .sort(function (a, b) {
          return new Date(a.date) - new Date(b.date);
        })
        .map((event) => (
          <div
            key={event.id}
            style={{
              border: "1px solid #1a1a1a",
              marginBottom: "20px",
              padding: "8px 8px 8px 8px",
            }}
          >
            <div>
              <span className="event-date-badge">{event.date}</span>
              <span className="event-time-badge">{event.time}</span>
            </div>
            <div className="event-title">{event.name}</div>
            <div className="event-info-container">
              <div>🎟️</div>
              <div>{event.organizer}</div>
              <div>📍</div>
              <div>{event.location}</div>
              <div>💵</div>
              <div>{event.price}</div>
            </div>
            <div className="event-book-container">
              <Link href={event.registration}>
                <a style={{ textDecoration: "none", color: "#000000" }}>
                  <div className="event-book-badge">Register</div>
                </a>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
}
