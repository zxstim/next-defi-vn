import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import portfolioTools from "./PortfolioTools.json";
import InfiniteScroll from "react-infinite-scroll-component";

export default function PortfolioTools() {
  const [index, setIndex] = useState(3);
  const [tools, setTools] = useState(portfolioTools.slice(0, index));
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const { t } = useTranslation("tools");
  const fetchData = () => {
    if (tools.length >= portfolioTools.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setTools(tools.concat(portfolioTools.slice(index, index + 3)));
      setIndex(index + 3);
    }, 200);
  };
  return (
    <InfiniteScroll
      dataLength={tools.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ marginTop: "50px", fontSize: "25px", fontWeight: "bold", textAlign: "center" }}>
          {t("end")}
        </p>
      }
    >
      <div className="tool-box">
        {tools.map((tool) => (
          <div key={tool.id} className="tool-item">
            <div href={tool.web} className="tool-brand-name">
              {tool.name}
            </div>
            <div className="tool-desc">
              {router.locale === "en" ? tool.desc : tool.descVi}
            </div>
            <div className="tool-guide">
              <a href={tool.howToEn}>🇬🇧 How to use</a>
            </div>
            <div className="tool-guide">
              <a href={tool.howToVi}>🇻🇳 Hướng dẫn sử dụng</a>
            </div>
            <div style={{ marginTop: "15px" }}>
              <span>
                <a href={"https://defi.vn"}>
                  <img src="/icons8-telegram.svg" alt="Telegram SVG" />
                </a>
              </span>
              <span>
                <a href={"https://defi.vn"}>
                  <img src="/icons8-twitter.svg" alt="Twitter SVG" />
                </a>
              </span>
              <span>
                <a href={"https://defi.vn"}>
                  <img src="/icons8-discord.svg" alt="Discord SVG" />
                </a>
              </span>
              <span>
                <a href={"https://defi.vn"}>
                  <img src="/icons8-circled-envelope.svg" alt="Email SVG" />
                </a>
              </span>
            </div>
            <Link href={tool.web}>
              <a style={{ textDecoration: "none", color: "#000000" }}>
                <div className="tool-cta">{t("cta")}</div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}
