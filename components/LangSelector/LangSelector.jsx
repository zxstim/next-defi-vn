import Link from "next/link";

export default function LangSelector(link) {

    return (
        <div style={{ display: "flex", marginBottom: "10px"  }}>
        <Link href={`/${link.data}`} locale="en">
          <a style={{ textDecoration: "none" }}>
            <p className="i18n-button">🇬🇧</p>
          </a>
        </Link>
        <Link href={`/${link.data}`} locale="vi">
          <a style={{ textDecoration: "none" }}>
            <p className="i18n-button">🇻🇳</p>
          </a>
        </Link>
      </div>
    )
}