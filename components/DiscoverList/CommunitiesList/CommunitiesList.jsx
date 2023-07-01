import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import PaginatedList from "../../PaginatedList/PaginatedList";
import styles from "./CommunitiesList.module.css";
// import useSWR from 'swr'

export default function CommunitiesList({ communities, pagination, communityCategories }) {
  const { t } = useTranslation("communities");
  const router = useRouter();

  return (
    <>
      {/* <div className={styles.blockchain_filter_container}>
        <div>
          <label>{t("chain-filter")}</label>
          <select className={styles.blockchain_filter_select} name="blockchains" id="blockchains" onChange={filterblockchainsDropdown}>
            <option value="">All</option>
            {blockchainChains.map((chain, index) => (<option key={index} value={chain}>{chain}</option>))}
          </select>
        </div>
        <div>
          <label>{t("tech-filter")}</label>
          <select className={styles.blockchain_filter_select} name="blockchains" id="blockchains" onChange={filterblockchainsTechDropdown}>
            <option value="">All</option>
            {blockchainTechs.map((tech, index) => (<option key={index} value={tech}>{tech}</option>))}
          </select>
        </div>
      </div> */}
      <div className={styles.layout_container}>
        <PaginatedList
          currentPage={pagination.page}
          totalItems={pagination.total} 
          totalPages={pagination.pageCount}
          indexPagePath="discover/communities"
        />
        <div className={styles.blockchains_container}>
          {communities.map((community) => (
            router.locale === "en" && community.attributes.locale === "en" ?
            <div key={community.id} className={styles.blockchains_item}>
              <div className={styles.blockchains_item_info}>
                <div className={styles.image_name_container}>
                  {community.attributes.logo.data ?
                    <Image 
                      src={community.attributes.logo.data.attributes.formats.thumbnail.url}
                      alt={community.attributes.logo.alternativeText}
                      width={40}
                      height={40}
                    /> : null}
                  <div className={styles.blockchains_item_title}>
                    {community.attributes.name}
                  </div>
                </div>
                <div className={styles.blockchains_item_tech_badge_container}>
                  {community.attributes.community_categories.data ? 
                      community.attributes.community_categories.data.map((tag) => (
                      <div key={tag.id} className={styles.blockchains_item_tech}>
                        {tag.attributes.name}
                      </div> 
                      )) : null
                  }
                </div>
              </div>
              <div className={styles.blockchains_cta_container}>
                <div className={styles.blockchains_social_container}>
                  {community.attributes.social.web ? (
                    <div>
                      <a href={community.attributes.social.web}>
                        <Image
                          src="/icons8-website.svg"
                          alt="Web icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {community.attributes.social.telegram ? (
                    <div>
                      <a href={community.attributes.social.telegram}>
                        <Image
                          src="/icons8-telegram.svg"
                          alt="Telegram icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {community.attributes.social.twitter ? (
                    <div>
                      <a href={community.attributes.social.twitter}>
                        <Image
                          src="/icons8-twitter.svg"
                          alt="Twitter icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {community.attributes.social.discord ? (
                    <div>
                      <a href={community.attributes.social.discord}>
                        <Image
                          src="/icons8-discord.svg"
                          alt="Discord icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {community.attributes.social.facebook ? (
                    <div>
                      <a href={community.attributes.social.facebook}>
                        <Image
                          src="/icons8-facebook.svg"
                          alt="Email icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {community.attributes.social.linkedin ? (
                    <div>
                      <a href={community.attributes.social.linkedin}>
                        <Image
                          src="/icons8-linkedin.svg"
                          alt="Linkedin icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {community.attributes.social.youtube ? (
                    <div>
                      <a href={community.attributes.social.youtube}>
                        <Image
                          src="/icons8-youtube.svg"
                          alt="Linkedin icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {community.attributes.social.email ? (
                    <span>
                      <a href={community.attributes.social.email}>
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
                <Link href={`/discover/communities/info/${community.attributes.slug}`}>
                  <a style={{ textDecoration: "none", color: "#000000" }}>
                    <div className={styles.cta_learn_more}>{t("cta")}</div>
                  </a>
                </Link>
              </div>
            </div> :
            router.locale === "vi" && community.attributes.locale === "vi" ?
            <div key={community.id} className={styles.blockchains_item}>
              <div className={styles.blockchains_item_info}>
                <div className={styles.image_name_container}>
                  {community.attributes.logo.data ?
                    <Image 
                      src={blockchain.attributes.logo.data.attributes.formats.thumbnail.url}
                      alt={blockchain.attributes.logo.alternativeText}
                      width={40}
                      height={40}
                    /> : null}
                  <div className={styles.blockchains_item_title}>
                    {community.attributes.name}
                  </div>
                </div>
              <div className={styles.blockchains_item_tech_badge_container}>
                {community.attributes.community_categories.data ? 
                  community.attributes.community_categories.data.map((tag) => (
                    <div key={tag.id} className={styles.blockchains_item_tech}>
                      {tag.attributes.name}
                    </div> 
                  )) : null
                }
              </div>
            </div>
            <div className={styles.blockchains_cta_container}>
              <div className={styles.blockchains_social_container}>
                {community.attributes.social.web ? (
                  <div>
                    <a href={community.attributes.social.web}>
                      <Image
                        src="/icons8-website.svg"
                        alt="Web icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {community.attributes.social.telegram ? (
                  <div>
                    <a href={community.attributes.social.telegram}>
                      <Image
                        src="/icons8-telegram.svg"
                        alt="Telegram icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {community.attributes.social.twitter ? (
                  <div>
                    <a href={community.attributes.social.twitter}>
                      <Image
                        src="/icons8-twitter.svg"
                        alt="Twitter icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {community.attributes.social.discord ? (
                  <div>
                    <a href={community.attributes.social.discord}>
                      <Image
                        src="/icons8-discord.svg"
                        alt="Discord icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {community.attributes.social.facebook ? (
                  <div>
                    <a href={community.attributes.social.facebook}>
                      <Image
                        src="/icons8-facebook.svg"
                        alt="Email icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {community.attributes.social.linkedin ? (
                  <div>
                    <a href={community.attributes.social.linkedin}>
                      <Image
                        src="/icons8-linkedin.svg"
                        alt="Linkedin icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {community.attributes.social.youtube ? (
                  <div>
                    <a href={community.attributes.social.youtube}>
                      <Image
                        src="/icons8-youtube.svg"
                        alt="Linkedin icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {community.attributes.social.email ? (
                  <span>
                    <a href={community.attributes.social.email}>
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
              <Link href={`/discover/communities/info/${community.attributes.slug}`}>
                <a style={{ textDecoration: "none", color: "#000000" }}>
                  <div className={styles.cta_learn_more}>{t("cta")}</div>
                </a>
              </Link>
            </div>
          </div> : null
          ))}
        </div>
        <PaginatedList
          currentPage={pagination.page}
          totalItems={pagination.total} 
          totalPages={pagination.pageCount}
          indexPagePath="discover/communities"
        />
      </div>  
    </>
  );
}
