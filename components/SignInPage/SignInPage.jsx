import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import styles from "./SignInPage.module.css";
import { useTranslation } from "next-i18next";

export default function SignInPage({ providers, csrfToken }) {
  const { t } = useTranslation("signin");

  return (
    <div className={styles.signin_layout}>
      <h2>{t("title")}</h2>
      <div style={{ display: "flex" }}>
        <Link href="/auth/signin" locale="en">
          <a style={{ textDecoration: "none" }}>
            <p className="i18n-button">🇬🇧</p>
          </a>
        </Link>
        <Link href="/auth/signin" locale="vi">
          <a style={{ textDecoration: "none" }}>
            <p className="i18n-button">🇻🇳</p>
          </a>
        </Link>
      </div>
      <div>
        <button
          className={styles.webauthn_signin_button}
          onClick={() => signIn("webauthn", { username: "demo" })}
        >
          <Image
            src="/icons8-face-id.svg"
            alt="FaceID Logo"
            width={50}
            height={50}
          />
          <span className={styles.button_text}>{t("method1")}</span>
        </button>
      </div>
      <div className={styles.separator}>
        <span className={styles.separatorText}>{t("separator")}</span>
      </div>
      <div>
        <button
          className={styles.google_signin_button}
          onClick={() => signIn("google")}
        >
          <Image
            src="/icons8-google.svg"
            alt="Google Logo"
            width={50}
            height={50}
          />
          <span className={styles.button_text}>{t("method2")}</span>
        </button>
      </div>
      <div>
        <button
          className={styles.github_signin_button}
          onClick={() => signIn("github")}
        >
          <Image
            src="/icons8-github.svg"
            alt="Google Logo"
            width={50}
            height={50}
          />
          <span className={styles.button_text}>{t("method3")}</span>
        </button>
      </div>
    </div>
  );
}
