import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import PaginatedList from "../../PaginatedList/PaginatedList";
import styles from "./DeFiList.module.css";
// import useSWR from 'swr'

export default function DeFiList({ defiProjects, pagination }) {
  const { t } = useTranslation("discover");
  const router = useRouter();

  return (
    <>
      {/* <div className={styles.wallet_filter_container}>
        <div>
          <label>{t("chain-filter")}</label>
          <select className={styles.wallet_filter_select} name="wallets" id="wallets" onChange={filterWalletsDropdown}>
            <option value="">All</option>
            {walletChains.map((chain, index) => (<option key={index} value={chain}>{chain}</option>))}
          </select>
        </div>
        <div>
          <label>{t("tech-filter")}</label>
          <select className={styles.wallet_filter_select} name="wallets" id="wallets" onChange={filterWalletsTechDropdown}>
            <option value="">All</option>
            {walletTechs.map((tech, index) => (<option key={index} value={tech}>{tech}</option>))}
          </select>
        </div>
      </div> */}
      <div className={styles.layout_container}>
        <PaginatedList
          currentPage={pagination.page}
          totalItems={pagination.total} 
          totalPages={pagination.pageCount}
          indexPagePath="discover/wallets"
        />
        <div className={styles.list_container}>
          {defiProjects.map((defi) => (
            router.locale === "en" && defi.attributes.locale === "en" ?
            <div key={defi.id} className={styles.info_main_container}>
              <div className={styles.header_container}>
                <div className={styles.image_name_container}>
                  <Image 
                    src={defi.attributes.logo.data.attributes.formats.thumbnail.url}
                    alt={defi.attributes.logo.alternativeText}
                    width={40}
                    height={40}
                  />
                  <div className={styles.title}>
                    {defi.attributes.name}
                  </div>
                </div>
                <div className={styles.category_tag_container}>
                  {defi.attributes.project_categories.data.map((tag) => (
                    <div key={tag.id} className={styles.category_tag}>
                      {tag.attributes.name}
                    </div> 
                    ))
                  }
                </div>
              </div>
              <div className={styles.cta_container}>
                <div className={styles.social_container}>
                  {defi.attributes.social.web ? (
                    <div>
                      <a href={defi.attributes.social.web}>
                        <Image
                          src="/icons8-website.svg"
                          alt="Web icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {defi.attributes.social.telegram ? (
                    <div>
                      <a href={defi.attributes.social.telegram}>
                        <Image
                          src="/icons8-telegram.svg"
                          alt="Telegram icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {defi.attributes.social.twitter ? (
                    <div>
                      <a href={defi.attributes.social.twitter}>
                        <Image
                          src="/icons8-twitter.svg"
                          alt="Twitter icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {defi.attributes.social.discord ? (
                    <div>
                      <a href={defi.attributes.social.discord}>
                        <Image
                          src="/icons8-discord.svg"
                          alt="Discord icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {defi.attributes.social.facebook ? (
                    <div>
                      <a href={defi.attributes.social.facebook}>
                        <Image
                          src="/icons8-facebook.svg"
                          alt="Email icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {defi.attributes.social.linkedin ? (
                    <div>
                      <a href={defi.attributes.social.linkedin}>
                        <Image
                          src="/icons8-linkedin.svg"
                          alt="Linkedin icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {defi.attributes.social.youtube ? (
                    <div>
                      <a href={defi.attributes.social.youtube}>
                        <Image
                          src="/icons8-youtube.svg"
                          alt="Linkedin icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {defi.attributes.social.email ? (
                    <span>
                      <a href={defi.attributes.social.email}>
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
                <Link href={`/discover/defi-projects/info/${defi.attributes.slug}`}>
                  <a style={{ textDecoration: "none", color: "#000000" }}>
                    <div className={styles.cta_learn_more}>{t("cta")}</div>
                  </a>
                </Link>
              </div>
            </div> :
            router.locale === "vi" && defi.attributes.locale === "vi" ?
            <div key={defi.id} className={styles.info_main_container}>
              <div className={styles.header_container}>
                <div className={styles.image_name_container}>
                  <Image 
                    src={defi.attributes.logo.data.attributes.formats.thumbnail.url}
                    alt={defi.attributes.logo.alternativeText}
                    width={40}
                    height={40}
                  />
                  <div className={styles.title}>
                    {defi.attributes.name}
                  </div>
                </div>
              <div className={styles.category_tag_container}>
                {defi.attributes.project_categories.data.map((tag) => (
                  <div key={tag.id} className={styles.category_tag}>
                    {tag.attributes.name}
                  </div> 
                  ))
                }
              </div>
            </div>
            <div className={styles.cta_container}>
              <div className={styles.social_container}>
                {defi.attributes.social.web ? (
                  <div>
                    <a href={defi.attributes.social.web}>
                      <Image
                        src="/icons8-website.svg"
                        alt="Web icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {defi.attributes.social.telegram ? (
                  <div>
                    <a href={defi.attributes.social.telegram}>
                      <Image
                        src="/icons8-telegram.svg"
                        alt="Telegram icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {defi.attributes.social.twitter ? (
                  <div>
                    <a href={defi.attributes.social.twitter}>
                      <Image
                        src="/icons8-twitter.svg"
                        alt="Twitter icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {defi.attributes.social.discord ? (
                  <div>
                    <a href={defi.attributes.social.discord}>
                      <Image
                        src="/icons8-discord.svg"
                        alt="Discord icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {defi.attributes.social.facebook ? (
                  <div>
                    <a href={defi.attributes.social.facebook}>
                      <Image
                        src="/icons8-facebook.svg"
                        alt="Email icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {defi.attributes.social.linkedin ? (
                  <div>
                    <a href={defi.attributes.social.linkedin}>
                      <Image
                        src="/icons8-linkedin.svg"
                        alt="Linkedin icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {defi.attributes.social.youtube ? (
                  <div>
                    <a href={defi.attributes.social.youtube}>
                      <Image
                        src="/icons8-youtube.svg"
                        alt="Linkedin icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {defi.attributes.social.email ? (
                  <span>
                    <a href={defi.attributes.social.email}>
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
              <Link href={`/discover/defi-projects/info/${defi.attributes.slug}`}>
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
          indexPagePath="discover/defi-projects"
        />
      </div>  
    </>
  );
}
