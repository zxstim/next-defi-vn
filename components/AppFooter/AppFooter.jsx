import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

export default function AppFooter() {
  const { t } = useTranslation("common");
  const socialButton = {
    border: "1px solid #1a1a1a",
    boxShadow: "3px 3px black",
    padding: "4px 4px 0px 4px"
  }

  const socialButtonStim = {
    border: "1px solid #1a1a1a",
    boxShadow: "3px 3px black",
    padding: "8px 8px 8px 8px",
    width: "fit-content",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer"
  }

  return (
    <>
      {/* <h3>
        {t("footer")}
      </h3> */}
      <Link href="/0xstim">
        <div style={socialButtonStim}>
          <Image
            src="/0xstim-nouns.svg"
            alt="0xstim pfp"
            width={30}
            height={30}
          />
          {t("zxstim")}
        </div>
      </Link>
      <h3>{t("follow")}</h3>
      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <div style={socialButton}>
          <a href="https://github.com/defivn">
            <Image
              src="/icons8-github.svg"
              alt="Github icon"
              width={30}
              height={30}
            />
          </a>
        </div>
        <div style={socialButton}>
          <a href="https://twitter.com/defidotvn">
            <Image
              src="/icons8-twitter.svg"
              alt="Twitter icon"
              width={30}
              height={30}
            />
          </a>
        </div>
        <div style={socialButton}>
          <a href="https://t.me/defivnspace">
            <Image
              src="/icons8-telegram.svg"
              alt="Telegram icon"
              width={30}
              height={30}
            />
          </a>
        </div>
        <div style={socialButton}>
          <a href="https://www.youtube.com/@0xstim">
            <Image
              src="/icons8-youtube.svg"
              alt="Youtube icon"
              width={30}
              height={30}
            />
          </a>
        </div>
        <div style={socialButton}>
          <Link href="/links">
            <a style={{ textDecoration: "none" }}>
              <Image
                src="/icons8-link.svg"
                alt="Youtube icon"
                width={30}
                height={30}
              />
            </a>
          </Link>
        </div>
      </div>
      {/* <h4>
        <Link href="/0xstim">
          <a>{t("about")}</a>
        </Link>
      </h4> */}
      <h4>
        <a href="https://github.com/0xstim/next-defi-vn">{t("edit")}</a>
      </h4>
      <h4>
        <Link href="/disclaimer">
          <a>{t("disclaimer")}</a>
        </Link>
      </h4>
      <h4>
        <Link href="/contributors">
          <a>{t("contributors")}</a>
        </Link>
      </h4>
      <h4>
        <Link href="/privacy">
          <a>{t("privacy")}</a>
        </Link>
      </h4>
      <h4>
        <Link href="/terms-of-service">
          <a>{t("tos")}</a>
        </Link>
      </h4>      
      <h4>
        <Link href="https://drive.google.com/drive/folders/1l8Nmz4HE2UCjLBeR-FsmABwKaE0QOtdR">
          <a>{t("media")}</a>
        </Link>
      </h4>
      <h5 style={{ 
        border: "2px solid #1a1a1a", 
        width: "300px",
        padding: "8px 8px 0px 8px",
        backgroundColor: "#f0f0f0",
        }}>
        <p>🏛️ Pyhash LLC</p>
        <p>📍 256 Chapman Road STE 105-4, Newark, Delaware, Zip Code 19702, USA</p>
        <p>📧 victor@pyhash.com</p>
      </h5>
      {/* <h4>
        <Link href="/donate">
          <a>{t("donate")}</a>
        </Link>
      </h4> */}
      <br />
      <br />
    </>
  );
}
