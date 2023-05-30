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

  return (
    <>
      <div className={styles.datetime_info}>
        🗓️ {router.locale === "en" ? formatArticleTimeStampEn(wallet[0].attributes.updatedAt) : formatArticleTimeStampVi(wallet[0].attributes.updatedAt)}
      </div>
      <h2>{t("social")}</h2>
      <div className={styles.social_container}>
        {wallet[0].attributes.social.web ? (
          <a href={wallet[0].attributes.social.web} className={styles.anchor_tag}>
            <div className={styles.social_tag}>
              <Image
                src="/icons8-website.svg"
                alt="Web icon"
                width={20}
                height={20}
              />   
                <div>Website</div>   
            </div>
          </a>
        ) : null}
        {wallet[0].attributes.social.telegram ? (
          <a href={wallet[0].attributes.social.telegram} className={styles.anchor_tag}>
            <div className={styles.social_tag}>
              <Image
                src="/icons8-telegram.svg"
                alt="Telegram icon"
                width={20}
                height={20}
              />
              <div>Telegram</div>
            </div>
          </a>
        ) : null}
        {wallet[0].attributes.social.twitter ? (
          <a href={wallet[0].attributes.social.twitter} className={styles.anchor_tag}>
            <div className={styles.social_tag}>  
              <Image
                src="/icons8-twitter.svg"
                alt="Twitter icon"
                width={20}
                height={20}
              />
              <div>Twitter</div>
            </div>
          </a>
        ) : null}
        {wallet[0].attributes.social.discord ? (
          <a href={wallet[0].attributes.social.discord} className={styles.anchor_tag}>
            <div className={styles.social_tag}>   
              <Image
                src="/icons8-discord.svg"
                alt="Discord icon"
                width={20}
                height={20}
              />
              <div>Discord</div>
            </div>
          </a>
        ) : null}
        {wallet[0].attributes.social.facebook ? (
          <a href={wallet[0].attributes.social.facebook} className={styles.anchor_tag}>
            <div className={styles.social_tag}>   
              <Image
                src="/icons8-facebook.svg"
                alt="Email icon"
                width={20}
                height={20}
              />
              <div>Facebook</div>
            </div>
          </a>
        ) : null}
        {wallet[0].attributes.social.linkedin ? (
          <a href={wallet[0].attributes.social.linkedin} className={styles.anchor_tag}>
            <div className={styles.social_tag}> 
              <Image
                src="/icons8-linkedin.svg"
                alt="Linkedin icon"
                width={20}
                height={20}
              />
              <div>LinkedIn</div>
            </div>
          </a>
        ) : null}
        {wallet[0].attributes.social.youtube ? (
          <a href={wallet[0].attributes.social.youtube}>
            <div className={styles.social_tag}>
              <Image
                src="/icons8-youtube.svg"
                alt="Youtube icon"
                width={20}
                height={20}
              />
              <div>YouTube</div>
            </div>
          </a>
        ) : null}
        {wallet[0].attributes.social.email ? (
          <a href={wallet[0].attributes.social.email}>
            <div className={styles.social_tag}>
              <Image
                src="/icons8-circled-envelope.svg"
                alt="Email icon"
                width={22}
                height={22}
              />
              <div>Email</div>
            </div>
          </a>
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
