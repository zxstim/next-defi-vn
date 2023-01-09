import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
// import { useTranslation } from "next-i18next";
import contents from "./Frontend.json";
import TitleModal from "../../TitleModal/TitleModal";
import SubtitleModal from "../../SubtitleModal/SubtitleModal";

export default function Frontend() {

  return (
    <>
      {contents.map((content) => (
        <div key={content.id}>
          <TitleModal key={content.id} data={content} />
          <ul>
            {content.subtitles.map((subtitle) => (
              <li key={subtitle.id}>
                <SubtitleModal key={subtitle.id} data={subtitle} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
