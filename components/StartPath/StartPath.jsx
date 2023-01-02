import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import startPaths from "./StartPath.json";

export default function StartPath() {
  return (
    <div className="start-path-container">
      {startPaths.map((startPath) => (
        <div key={startPath.id} className="start-path-item">
          <Link href={`start/${startPath.web}`}>
            <div style={{ cursor: "pointer" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "30px",
                }}
              >
                <Image
                  src={startPath.imgPath}
                  alt="path img"
                  width={200}
                  height={200}
                />
              </div>
              <div className="start-path-name">{startPath.name}</div>
              <div className="start-path-desc">{startPath.desc}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
