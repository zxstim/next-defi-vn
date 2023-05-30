import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import formatArticleTimeStampEn from "../../../../utils/formatArticleTimeStampEn";
import formatArticleTimeStampVi from "../../../../utils/formatArticleTimeStampVi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import styles from "./WalletInfo.module.css";
// import useSWR from 'swr'

export default function WalletInfo({ wallet }) {
  const { t } = useTranslation("wallets");
  const router = useRouter();

  console.log(wallet);

  return (
    <>
      <div className={styles.datetime_info}>
        🗓️ {formatArticleTimeStampEn(wallet[0].attributes.updatedAt)}
      </div> 
      {/* <div>
        {wallet[0].attributes.description}
      </div> */}
      <h2>{t("social")}</h2>
      <div className={styles.social_container}>
        {wallet[0].attributes.social.web ? (
          <div>
            <a href={wallet[0].attributes.social.web}>
              <Image
                src="/icons8-website.svg"
                alt="Web icon"
                width={30}
                height={30}
              />
            </a>
          </div>
        ) : null}
        {wallet[0].attributes.social.telegram ? (
          <div>
            <a href={wallet[0].attributes.social.telegram}>
              <Image
                src="/icons8-telegram.svg"
                alt="Telegram icon"
                width={30}
                height={30}
              />
            </a>
          </div>
        ) : null}
        {wallet[0].attributes.social.twitter ? (
          <div>
            <a href={wallet[0].attributes.social.twitter}>
              <Image
                src="/icons8-twitter.svg"
                alt="Twitter icon"
                width={30}
                height={30}
              />
            </a>
          </div>
        ) : null}
        {wallet[0].attributes.social.discord ? (
          <div>
            <a href={wallet[0].attributes.social.discord}>
              <Image
                src="/icons8-discord.svg"
                alt="Discord icon"
                width={30}
                height={30}
              />
            </a>
          </div>
        ) : null}
        {wallet[0].attributes.social.facebook ? (
          <div>
            <a href={wallet[0].attributes.social.facebook}>
              <Image
                src="/icons8-facebook.svg"
                alt="Email icon"
                width={30}
                height={30}
              />
            </a>
          </div>
        ) : null}
        {wallet[0].attributes.social.linkedin ? (
          <div>
            <a href={wallet[0].attributes.social.linkedin}>
              <Image
                src="/icons8-linkedin.svg"
                alt="Linkedin icon"
                width={30}
                height={30}
              />
            </a>
          </div>
        ) : null}
        {wallet[0].attributes.social.youtube ? (
          <div>
            <a href={wallet[0].attributes.social.youtube}>
              <Image
                src="/icons8-youtube.svg"
                alt="Linkedin icon"
                width={30}
                height={30}
              />
            </a>
          </div>
        ) : null}
        {wallet[0].attributes.social.email ? (
          <span>
            <a href={wallet[0].attributes.social.email}>
              <Image
                src="/icons8-circled-envelope.svg"
                alt="Email icon"
                width={32}
                height={32}
              />
            </a>
          </span>
        ) : null}
      </div>
      <h2>{t("category")}</h2>
      <div className={styles.categories_container}>
        {wallet[0].attributes.wallet_categories.data.map((category) => (
          <div key={category.id} className={styles.category}>
            {category.attributes.name}
          </div>
        ))}
      </div>
      <h2>{t("blockchain")}</h2>
      <div className={styles.categories_container}>
        {wallet[0].attributes.blockchains.data.map((blockchain) => (
          <div key={blockchain.id} className={styles.blockchain}>
            {blockchain.attributes.name}
          </div>
        ))}
      </div>
    </>
  );
}
