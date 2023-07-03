import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import rampProviders from "./RampProviders.json";
import styles from "./RampProviders.module.css";

export default function BuyCryptoProviders() {
  const { t } = useTranslation("buy");
  const router = useRouter();

  // unlimit crypto object
  const unlimit = {
    name: "Unlimit Crypto",
    logo: "/unlimit_crypto.jpg",
    referLink: "https://onramp.gatefi.com/?merchantId=f23f7281-13b6-44dc-b1bf-6948ddec8287",
    tags: [
      "🌏 150+ countries",
      "🎙️ 10+ languages",
      "💰 30+ fiat currencies",
      "⭐️ 50+ cryptocurrencies",
      "💸 1000+ payment methods"
    ],
    tags_vi: [
      "🌏 150+ quốc gia",
      "🎙️ 10+ ngôn ngữ",
      "💰 30+ loại tiền tệ",
      "⭐️ 50+ loại tiền điện tử",
      "💸 1000+ phương thức thanh toán"
    ],
    description: "The Next Generation Fiat On & Offramp for Defi, Gamefi, NFTs",
    description_vi: "Cổng thanh toán thế hệ mới cho Defi, Gamefi, NFT",
    socials: {
      web: "https://unlimit.com/crypto",
      telegram: "https://t.me/zxstim",
      email: false,
      twitter: "https://twitter.com/unlimit_crypto",
      linkedin: false,
      facebook: false,
      instagram: false,
      youtube: false,
      discord: false,
      github: false,
      tiktok: false
    }
  }

  return (
    <>
      <h2>{t("subtitle1")}</h2>
        <div className={styles.unlimit_box}>
          <div className={styles.unlimit_intro}>
            <Image
              src="/unlimit_crypto.jpg"
              alt="Unlimit Crypto"
              width={40}
              height={40}
              className={styles.unlimit_logo}
            />
            <div className={styles.unlimit_name}>{unlimit.name}</div>
          </div>
          {router.locale === "en" ? 
              <div className={styles.unlimit_description}>{unlimit.description}</div>
            : router.locale === "vi" ?
              <div className={styles.unlimit_description}>{unlimit.description_vi}</div>
            : null
          }
          <div className={styles.unlimit_tags_container}>
            {router.locale === "en" ? (
              unlimit.tags.map((tag, index) => (
                <div key={index} className={styles.unlimit_tag}>{tag}</div>
            ))) :
            router.locale === "vi" ? (
              unlimit.tags_vi.map((tag, index) => (
                <div key={index} className={styles.unlimit_tag}>{tag}</div>
            ))) : null
            }
          </div>
          <div
            style={{
              marginTop: "15px",
              display: "flex",
              flexDirection: "row",
              gap: "8px",
            }}
          >
            {unlimit.socials.web ? (
              <div>
                <a href={unlimit.socials.web}>
                  <Image
                    src="/icons8-website.svg"
                    alt="Website icon"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            ) : null}
            {unlimit.socials.telegram ? (
              <div>
                <a href={unlimit.socials.telegram}>
                  <Image
                    src="/icons8-telegram.svg"
                    alt="Telegram icon"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            ) : null}
            {unlimit.socials.twitter ? (
              <div>
                <a href={unlimit.socials.twitter}>
                  <Image
                    src="/icons8-twitter.svg"
                    alt="Twitter icon"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            ) : null}
            {unlimit.socials.discord ? (
              <div>
                <a href={unlimit.socials.discord}>
                  <Image
                    src="/icons8-discord.svg"
                    alt="Discord icon"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            ) : null}
            {unlimit.socials.facebook ? (
              <div>
                <a href={unlimit.socials.facebook}>
                  <Image
                    src="/icons8-facebook.svg"
                    alt="Email icon"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            ) : null}
            {unlimit.socials.linkedin ? (
              <div>
                <a href={unlimit.socials.linkedin}>
                  <Image
                    src="/icons8-linkedin.svg"
                    alt="Linkedin icon"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            ) : null}
            {unlimit.socials.youtube ? (
              <div>
                <a href={unlimit.socials.youtube}>
                  <Image
                    src="/icons8-youtube.svg"
                    alt="Linkedin icon"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            ) : null}
            {unlimit.socials.email ? (
              <span>
                <a href={unlimit.socials.email}>
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
          <div className={styles.unlimit_action_buttons_container}>
            <a 
              href={unlimit.referLink}
              target="_blank"
              className={styles.unlimit_buy_button}
            >
                {t("buy")}
            </a>
            <div className={styles.unlimit_sell_button}>{t("sell")}</div>
          </div>
          <Link 
            href="/discover/ramp/info/unlimit-crypto"
            >
            <a className={styles.unlimit_info_button}>
              {t("info")}
            </a>
          </Link>
        </div>
      <h2>{t("subtitle2")}</h2>
      <div className={styles.providers_container}>
        {rampProviders.map((provider) => (
          <div key={provider.id} className={styles.provider_box}>
            <div className={styles.provider_intro}>
              <Image
                style={{ marginTop: "0px" }}
                src={provider.logo}
                alt={provider.name}
                width={40}
                height={40}
              />
              <div className="buy-item-name">{provider.name}</div>
            </div>
            <div className={styles.provider_tags_container}>
              {provider.tags ? (
                provider.tags.map((tag, index) => (
                  <div key={index} className={styles.provider_tag}>{tag}</div>
              ))) : null}
            </div>
            <a
              key={provider.id}
              href={provider.referLink}
              target="_blank"
              className={styles.provider_buy_button}
            >
              {t("buy")}
            </a>
            <Link 
              href={provider.infoLink}
            >
              <a className={styles.provider_info_button}>
                {t("info")}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
