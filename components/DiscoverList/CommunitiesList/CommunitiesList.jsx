import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import PaginatedList from "../../PaginatedList/PaginatedList";
import styles from "./CommunitiesList.module.css";

export default function CommunitiesList({ communities, pagination, walletCategories }) {
  const { t } = useTranslation("communities");

  return (
  <>
    <div className={styles.layout_container}>
      <PaginatedList
        currentPage={pagination.page}
        totalItems={pagination.total} 
        totalPages={pagination.pageCount}
        indexPagePath="discover/communities"
      />
      <div className={styles.wallets_container}>
        {communities.map((community) => (
          <div key={community.id} className={styles.wallets_item}>
            <div className={styles.wallets_item_info}>
              <div className={styles.wallets_item_title}>
                {community.attributes.name}
              </div>
              <div className={styles.wallets_item_tech_badge_container}>
                {community.attributes.community_categories.data.map((tag) => (
                  <div key={tag} className={styles.wallets_item_tech}>
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
              <Link href={community.attributes.social.web}>
                <a style={{ textDecoration: "none", color: "#000000" }}>
                  <div className={styles.wallets_item_cta}>{t("cta")}</div>
                </a>
              </Link>
            </div>
          </div>
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
