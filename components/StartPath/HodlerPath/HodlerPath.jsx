import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function HodlerPath() {
  const router = useRouter();

  return (
    <>
        <div style={{ border: "1px solid black", width: "250px", marginTop: "20px" }}>Step 1</div>
        <div style={{ border: "1px solid black", width: "250px", marginTop: "20px", marginLeft: "40px" }}>Step 1.1</div>
        <div style={{ border: "1px solid black", width: "250px", marginTop: "20px" }}>Step 2</div>
    </>
  );
}
