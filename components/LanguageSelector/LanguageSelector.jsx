import Link from "next/link";

export default function LangSelector({ path }) {

  const languages = [
    { code: "en", name: "English", country_code: "gb" },
    { code: "vi", name: "Tiếng Việt", country_code: "vn" },
  ]

  return (
      <div style={{ display: "flex", marginBottom: "10px"  }}>
      <Link href={`/${path}`} locale="en">
        <a style={{ textDecoration: "none" }}>
          <p className="i18n-button">🇬🇧</p>
        </a>
      </Link>
      <Link href={`/${path}`} locale="vi">
        <a style={{ textDecoration: "none" }}>
          <p className="i18n-button">🇻🇳</p>
        </a>
      </Link>
    </div>
  )
}