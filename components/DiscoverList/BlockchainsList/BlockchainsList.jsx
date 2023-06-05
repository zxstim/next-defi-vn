import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import PaginatedList from "../../PaginatedList/PaginatedList";
import styles from "./BlockchainsList.module.css";
// import useSWR from 'swr'

export default function BlockchainsList({ blockchains, pagination, blockchainCategories }) {
  const { t } = useTranslation("blockchains");
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
          indexPagePath="discover/blockchains"
        />
        <div className={styles.blockchains_container}>
          {blockchains.map((blockchain) => (
            router.locale === "en" && blockchain.attributes.locale === "en" ?
            <div key={blockchain.id} className={styles.blockchains_item}>
              <div className={styles.blockchains_item_info}>
                <div className={styles.image_name_container}>
                  {blockchain.attributes.logo.data.attributes.formats.thumbnail.url ?
                    <Image 
                      src={blockchain.attributes.logo.data.attributes.formats.thumbnail.url}
                      alt={blockchain.attributes.logo.alternativeText}
                      width={40}
                      height={40}
                    /> : null}
                  <div className={styles.blockchains_item_title}>
                    {blockchain.attributes.name}
                  </div>
                </div>
                <div className={styles.blockchains_item_tech_badge_container}>
                  {blockchain.attributes.blockchain_categories.data.map((tag) => (
                    <div key={tag.id} className={styles.blockchains_item_tech}>
                      {tag.attributes.name}
                    </div> 
                    ))
                  }
                </div>
              </div>
              <div className={styles.blockchains_cta_container}>
                <div className={styles.blockchains_social_container}>
                  {blockchain.attributes.social.web ? (
                    <div>
                      <a href={blockchain.attributes.social.web}>
                        <Image
                          src="/icons8-website.svg"
                          alt="Web icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {blockchain.attributes.social.telegram ? (
                    <div>
                      <a href={blockchain.attributes.social.telegram}>
                        <Image
                          src="/icons8-telegram.svg"
                          alt="Telegram icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {blockchain.attributes.social.twitter ? (
                    <div>
                      <a href={blockchain.attributes.social.twitter}>
                        <Image
                          src="/icons8-twitter.svg"
                          alt="Twitter icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {blockchain.attributes.social.discord ? (
                    <div>
                      <a href={blockchain.attributes.social.discord}>
                        <Image
                          src="/icons8-discord.svg"
                          alt="Discord icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {blockchain.attributes.social.facebook ? (
                    <div>
                      <a href={blockchain.attributes.social.facebook}>
                        <Image
                          src="/icons8-facebook.svg"
                          alt="Email icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {blockchain.attributes.social.linkedin ? (
                    <div>
                      <a href={blockchain.attributes.social.linkedin}>
                        <Image
                          src="/icons8-linkedin.svg"
                          alt="Linkedin icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {blockchain.attributes.social.youtube ? (
                    <div>
                      <a href={blockchain.attributes.social.youtube}>
                        <Image
                          src="/icons8-youtube.svg"
                          alt="Linkedin icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {blockchain.attributes.social.email ? (
                    <span>
                      <a href={blockchain.attributes.social.email}>
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
                <Link href={`/discover/blockchains/info/${blockchain.attributes.slug}`}>
                  <a style={{ textDecoration: "none", color: "#000000" }}>
                    <div className={styles.cta_learn_more}>{t("cta")}</div>
                  </a>
                </Link>
              </div>
            </div> :
            router.locale === "vi" && blockchain.attributes.locale === "vi" ?
            <div key={blockchain.id} className={styles.blockchains_item}>
              <div className={styles.blockchains_item_info}>
                <div className={styles.blockchains_item_title}>
                  {blockchain.attributes.name}
                </div>
              <div className={styles.blockchains_item_tech_badge_container}>
                {blockchain.attributes.blockchain_categories.data.map((tag) => (
                  <div key={tag.id} className={styles.blockchains_item_tech}>
                    {tag.attributes.name}
                  </div> 
                  ))
                }
              </div>
            </div>
            <div className={styles.blockchains_cta_container}>
              <div className={styles.blockchains_social_container}>
                {blockchain.attributes.social.web ? (
                  <div>
                    <a href={blockchain.attributes.social.web}>
                      <Image
                        src="/icons8-website.svg"
                        alt="Web icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {blockchain.attributes.social.telegram ? (
                  <div>
                    <a href={blockchain.attributes.social.telegram}>
                      <Image
                        src="/icons8-telegram.svg"
                        alt="Telegram icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {blockchain.attributes.social.twitter ? (
                  <div>
                    <a href={blockchain.attributes.social.twitter}>
                      <Image
                        src="/icons8-twitter.svg"
                        alt="Twitter icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {blockchain.attributes.social.discord ? (
                  <div>
                    <a href={blockchain.attributes.social.discord}>
                      <Image
                        src="/icons8-discord.svg"
                        alt="Discord icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {blockchain.attributes.social.facebook ? (
                  <div>
                    <a href={blockchain.attributes.social.facebook}>
                      <Image
                        src="/icons8-facebook.svg"
                        alt="Email icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {blockchain.attributes.social.linkedin ? (
                  <div>
                    <a href={blockchain.attributes.social.linkedin}>
                      <Image
                        src="/icons8-linkedin.svg"
                        alt="Linkedin icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {blockchain.attributes.social.youtube ? (
                  <div>
                    <a href={blockchain.attributes.social.youtube}>
                      <Image
                        src="/icons8-youtube.svg"
                        alt="Linkedin icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {blockchain.attributes.social.email ? (
                  <span>
                    <a href={blockchain.attributes.social.email}>
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
              <Link href={`/discover/blockchains/info/${blockchain.attributes.slug}`}>
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
          indexPagePath="discover/blockchains"
        />
      </div>  
    </>
  );
}
