import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import PaginatedList from "../../PaginatedList/PaginatedList";
import styles from "./WalletsList.module.css";
// import useSWR from 'swr'

export default function WalletsList({ wallets, pagination, walletCategories }) {
  const { t } = useTranslation("wallets");
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
        <div className={styles.wallets_container}>
          {wallets.map((wallet) => (
            router.locale === "en" && wallet.attributes.locale === "en" ?
            <div key={wallet.id} className={styles.wallets_item}>
              <div className={styles.wallets_item_info}>
                <div className={styles.wallets_item_title}>
                  {wallet.attributes.name}
                </div>
                <div className={styles.wallets_item_tech_badge_container}>
                  {wallet.attributes.wallet_categories.data.map((tag) => (
                    <div key={tag.id} className={styles.wallets_item_tech}>
                      {tag.attributes.name}
                    </div> 
                    ))
                  }
                </div>
                {/* <div className={styles.wallets_item_chains_container}>
                  <div className={styles.wallets_item_chains_label}>Chains</div>
                  <div className={styles.wallets_item_badge_container}>
                    {wallet.attributes.blockchains.data.map((blockchain) => (
                      <div key={blockchain} className={styles.wallets_item_chain}>
                          {blockchain.attributes.name}
                      </div>
                      ))
                    }
                  </div>
                </div> */}
              </div>
              <div className={styles.wallets_cta_container}>
                <div className={styles.wallets_social_container}>
                  {wallet.attributes.social.web ? (
                    <div>
                      <a href={wallet.attributes.social.web}>
                        <Image
                          src="/icons8-website.svg"
                          alt="Web icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {wallet.attributes.social.telegram ? (
                    <div>
                      <a href={wallet.attributes.social.telegram}>
                        <Image
                          src="/icons8-telegram.svg"
                          alt="Telegram icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {wallet.attributes.social.twitter ? (
                    <div>
                      <a href={wallet.attributes.social.twitter}>
                        <Image
                          src="/icons8-twitter.svg"
                          alt="Twitter icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {wallet.attributes.social.discord ? (
                    <div>
                      <a href={wallet.attributes.social.discord}>
                        <Image
                          src="/icons8-discord.svg"
                          alt="Discord icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {wallet.attributes.social.facebook ? (
                    <div>
                      <a href={wallet.attributes.social.facebook}>
                        <Image
                          src="/icons8-facebook.svg"
                          alt="Email icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {wallet.attributes.social.linkedin ? (
                    <div>
                      <a href={wallet.attributes.social.linkedin}>
                        <Image
                          src="/icons8-linkedin.svg"
                          alt="Linkedin icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {wallet.attributes.social.youtube ? (
                    <div>
                      <a href={wallet.attributes.social.youtube}>
                        <Image
                          src="/icons8-youtube.svg"
                          alt="Linkedin icon"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ) : null}
                  {wallet.attributes.social.email ? (
                    <span>
                      <a href={wallet.attributes.social.email}>
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
                <Link href={`/discover/wallets/info/${wallet.attributes.slug}`}>
                  <a style={{ textDecoration: "none", color: "#000000" }}>
                    <div className={styles.cta_learn_more}>{t("cta")}</div>
                  </a>
                </Link>
              </div>
            </div> :
            router.locale === "vi" && wallet.attributes.locale === "vi" ?
            <div key={wallet.id} className={styles.wallets_item}>
              <div className={styles.wallets_item_info}>
                <div className={styles.wallets_item_title}>
                  {wallet.attributes.name}
                </div>
              <div className={styles.wallets_item_tech_badge_container}>
                {/* {wallet.attributes.wallet_categories.data.map((tag) => (
                  router.locale === "en" && tag.attributes.locale === "en" ? 
                  <div key={tag.id} className={styles.wallets_item_tech}>
                    {tag.attributes.name}
                  </div> : 
                  router.locale === "vi" && tag.attributes.locale === "vi" ?
                  <div key={tag.id} className={styles.wallets_item_tech}>
                    {tag.attributes.name}
                  </div> : null
                  ))
                } */}
                {wallet.attributes.wallet_categories.data.map((tag) => (
                  <div key={tag.id} className={styles.wallets_item_tech}>
                    {tag.attributes.name}
                  </div> 
                  ))
                }
              </div>
              {/* <div className={styles.wallets_item_chains_container}>
                <div className={styles.wallets_item_chains_label}>Chains</div>
                <div className={styles.wallets_item_badge_container}>
                  {wallet.attributes.blockchains.data.map((blockchain) => (
                    <div key={blockchain} className={styles.wallets_item_chain}>
                        {blockchain.attributes.name}
                    </div>
                    ))
                  }
                </div>
              </div> */}
            </div>
            <div className={styles.wallets_cta_container}>
              <div className={styles.wallets_social_container}>
                {wallet.attributes.social.web ? (
                  <div>
                    <a href={wallet.attributes.social.web}>
                      <Image
                        src="/icons8-website.svg"
                        alt="Web icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {wallet.attributes.social.telegram ? (
                  <div>
                    <a href={wallet.attributes.social.telegram}>
                      <Image
                        src="/icons8-telegram.svg"
                        alt="Telegram icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {wallet.attributes.social.twitter ? (
                  <div>
                    <a href={wallet.attributes.social.twitter}>
                      <Image
                        src="/icons8-twitter.svg"
                        alt="Twitter icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {wallet.attributes.social.discord ? (
                  <div>
                    <a href={wallet.attributes.social.discord}>
                      <Image
                        src="/icons8-discord.svg"
                        alt="Discord icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {wallet.attributes.social.facebook ? (
                  <div>
                    <a href={wallet.attributes.social.facebook}>
                      <Image
                        src="/icons8-facebook.svg"
                        alt="Email icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {wallet.attributes.social.linkedin ? (
                  <div>
                    <a href={wallet.attributes.social.linkedin}>
                      <Image
                        src="/icons8-linkedin.svg"
                        alt="Linkedin icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {wallet.attributes.social.youtube ? (
                  <div>
                    <a href={wallet.attributes.social.youtube}>
                      <Image
                        src="/icons8-youtube.svg"
                        alt="Linkedin icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {wallet.attributes.social.email ? (
                  <span>
                    <a href={wallet.attributes.social.email}>
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
              <Link href={`/discover/wallets/info/${wallet.attributes.slug}`}>
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
          indexPagePath="discover/wallets"
        />
      </div>  
    </>
  );
}
