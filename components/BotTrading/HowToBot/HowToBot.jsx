import { useState, useReducer } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function HowToBot() {
  const router = useRouter();
  const { t } = useTranslation("bot");

  return (
    <>
      <h2>{t("header1")}</h2>
      {router.locale === "en" ? (
        <ul>
          <li>
            <a href="https://buidl.defi.vn/bot-trade-la-gi#heading-lap-trinh-phan-mem">
              Bot trade 101
            </a>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <a href="https://buidl.defi.vn/bot-trade-la-gi#heading-lap-trinh-phan-mem">
              Bot trade là gì?
            </a>
          </li>
        </ul>
      )}
      <h2>Stimbot</h2>
      <p>Fullstack and open source cloud-native bot trading web app for everyone</p>
      <ul>
        <li><a href="https://github.com/0xstim/stimbot">Stimbot main Github repo</a></li>
        <li><a href="https://github.com/0xstim/stimbot-be-django">Stimbot backend written in Django</a></li>
      </ul>
    </>
  );
}
