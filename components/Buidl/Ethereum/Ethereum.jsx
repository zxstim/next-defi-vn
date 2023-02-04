import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import contents from "./Ethereum.json";
import TitleModal from "../../TitleModal/TitleModal";
import SubtitleModal from "../../SubtitleModal/SubtitleModal";
import SubSubtitleModal from "../../SubSubtitleModal/SubSubtitleModal";
import TitleThreeModal from "../../TitleThreeModal/TitleThreeModal";

export default function Ethereum() {

  return (
    <>
      {contents.map((content) => (
        <div key={content.id}>
          <TitleModal key={content.id} data={content} />
          <ul>
            {content.subtitles ? content.subtitles.map((subtitle) => (
              <li key={subtitle.id}>
                <SubtitleModal key={subtitle.id} data={subtitle} />
                <ul>
                  {subtitle.subsubtitles ? subtitle.subsubtitles.map((subsubtitle) => (
                    <li key={subsubtitle.id}>
                      <SubSubtitleModal key={subsubtitle.id} data={subsubtitle} />
                      <ul>
                        {subsubtitle.titlethrees ? subsubtitle.titlethrees.map((titlethree) => (
                          <li key={titlethree.id}>
                            <TitleThreeModal key={titlethree.id} data={titlethree} />
                          </li>
                        )) : null}
                      </ul>
                    </li> 
                  )) : null}
                </ul>
              </li>
            )) : null}
          </ul>
        </div>
      ))}
    </>
  );
}

