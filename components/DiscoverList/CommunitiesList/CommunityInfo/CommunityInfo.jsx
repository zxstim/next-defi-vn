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
import styles from "./CommunityInfo.module.css";
// import useSWR from 'swr'

export default function CommunityInfo({ community }) {
  const { t } = useTranslation("communities");
  const router = useRouter();

  return (
    <>
      <div className={styles.datetime_info}>
        🗓️ {router.locale === "en" ? formatArticleTimeStampEn(community[0].attributes.updatedAt) : formatArticleTimeStampVi(community[0].attributes.updatedAt)}
      </div>
      <h2>{t("social")}</h2>
      <div className={styles.social_container}>
        {community[0].attributes.social.web ? (
          <a href={community[0].attributes.social.web} className={styles.anchor_tag}>
            <div className={styles.social_tag}>
              <Image
                src="/icons8-website.svg"
                alt="Web icon"
                width={20}
                height={20}
              />   
                <div>{t("website")}</div>   
            </div>
          </a>
        ) : null}
        {community[0].attributes.social.telegram ? (
          <a href={community[0].attributes.social.telegram} className={styles.anchor_tag}>
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
        {community[0].attributes.social.twitter ? (
          <a href={community[0].attributes.social.twitter} className={styles.anchor_tag}>
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
        {community[0].attributes.social.discord ? (
          <a href={community[0].attributes.social.discord} className={styles.anchor_tag}>
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
        {community[0].attributes.social.facebook ? (
          <a href={community[0].attributes.social.facebook} className={styles.anchor_tag}>
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
        {community[0].attributes.social.linkedin ? (
          <a href={community[0].attributes.social.linkedin} className={styles.anchor_tag}>
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
        {community[0].attributes.social.youtube ? (
          <a href={community[0].attributes.social.youtube}>
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
        {community[0].attributes.social.email ? (
          <a href={community[0].attributes.social.email}>
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
        {community[0].attributes.community_categories.data.map((category) => (
          <div key={category.id} className={styles.category}>
            {category.attributes.name}
          </div>
        ))}
      </div>
      <h2>{t("team")}</h2>
      <div className={styles.categories_container}>
        {community[0].attributes.individuals ? 
          community[0].attributes.individuals.data.map((individual) => (
            <div key={individual.id} className={styles.member_tab}>
              {individual.attributes.name}
            </div>
          )) : null}
      </div>
      {/* <h2>{t("investors")}</h2>
      <div className={styles.categories_container}>
        {community[0].attributes.investors ? 
          community[0].attributes.investors.data.map((investor) => (
            <div key={investor.id} className={styles.investor_tab}>
              {investor.attributes.name}
            </div>
          )) : null}
      </div> */}
      <h2>{t("announcements")}</h2>
      <h2>{t("content")}</h2>
      {community[0].attributes.content ? 
        <ReactMarkdown
          children={wallet[0].attributes.content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
                <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={github}
                language={match[1]}
                PreTag="div"
                {...props}
                />
              ) : (
                <code className={className} {...props}>
                {children}
                </code>
              );
            },
          }}
        /> 
      : null}
    </>
  );
}
