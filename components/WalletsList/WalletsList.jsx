import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import walletslist from "./WalletsList.json";
import styles from "./WalletsList.module.css";

export default function WalletsList() {
  const [index, setIndex] = useState(20);
  const [latestWalletsList, setLatestWalletsList] = useState(walletslist)
  const [walletChains, setWalletChains] = useState(() => {
    let walletChains = [];
    walletslist.forEach((wallet) => {
      wallet.chains.forEach((chain) => {
        if (!walletChains.includes(chain)) {
          walletChains.push(chain);
        }
      });
    });
    return walletChains;
  });
  const [walletTechs, setWalletTechs] = useState(() => {
    let walletTechs = [];
    walletslist.forEach((wallet) => {
      wallet.tech.forEach((tech) => {
        if (!walletTechs.includes(tech)) {
          walletTechs.push(tech);
        }
      });
    });
    return walletTechs;
  });
  const [wallets, setWallets] = useState(walletslist.slice(0, index));
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const { t } = useTranslation("wallets");
  const fetchData = () => {
    if (wallets.length >= walletslist.length) {
      setHasMore(false);
      return;
    }
    setWallets(wallets.concat(walletslist.slice(index, index + 20)));
    setIndex(index + 20);
  };

  // a function to use drop down menu to filter wallets by chain
  const filterWalletsDropdown = (event) => {
    if (event.target.value === "") {
      setWallets(walletslist.slice(0, index));
      setLatestWalletsList(walletslist)
      return;
    }
    let filteredWalletsList = [];
    filteredWalletsList = walletslist.filter(
      wallet => wallet.chains.includes(event.target.value) === true
    );
    setLatestWalletsList(filteredWalletsList)
    setWallets(filteredWalletsList.slice(0, index));
  };

  // a function to use drop down menu to filter wallets by tech
  const filterWalletsTechDropdown = (event) => {
    if (event.target.value === "") {
      setWallets(walletslist.slice(0, index));
      setLatestWalletsList(walletslist)
      return;
    }
    let filteredWalletsList = [];
    filteredWalletsList = walletslist.filter(
      wallet => wallet.tech.includes(event.target.value) === true
    );
    setLatestWalletsList(filteredWalletsList)
    setWallets(filteredWalletsList.slice(0, index));
  };


  return (
    <>
      <div className={styles.wallet_filter_container}>
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
      </div>
      <div className={styles.wallets_container}>
        {wallets.map((wallet) => (
          <div key={wallet.id} className={styles.wallets_item}>
            <div className={styles.wallets_item_info}>
              <div href={wallet.web} className={styles.wallets_item_title}>
                {wallet.name}
              </div>
              <div className={styles.wallets_item_tech_container}>
                <div className={styles.wallets_item_tech_label}>Type</div>
                <div className={styles.wallets_item_tech_badge_container}>
                  {wallet.tech.map((tec) => (
                    <div key={tec} className={styles.wallets_item_tech}>
                      {tec}
                    </div>
                    ))
                  }
                </div>
              </div>
              <div className={styles.wallets_item_desc}>{wallet.desc}</div>
              <div className={styles.wallets_item_chains_container}>
                <div className={styles.wallets_item_chains_label}>Chains</div>
                <div className={styles.wallets_item_badge_container}>
                  {wallet.chains.map((chain) => (
                    <div key={chain} className={styles.wallets_item_chain}>
                        {chain}
                    </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className={styles.wallets_cta_container}>
              <div className={styles.wallets_social_container}>
                {wallet.telegram ? (
                  <div>
                    <a href={wallet.telegram}>
                      <Image
                        src="/icons8-telegram.svg"
                        alt="Telegram icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {wallet.twitter ? (
                  <div>
                    <a href={wallet.twitter}>
                      <Image
                        src="/icons8-twitter.svg"
                        alt="Twitter icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {wallet.discord ? (
                  <div>
                    <a href={wallet.discord}>
                      <Image
                        src="/icons8-discord.svg"
                        alt="Discord icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {wallet.facebook ? (
                  <div>
                    <a href={wallet.facebook}>
                      <Image
                        src="/icons8-facebook.svg"
                        alt="Email icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {wallet.linkedin ? (
                  <div>
                    <a href={wallet.linkedin}>
                      <Image
                        src="/icons8-linkedin.svg"
                        alt="Linkedin icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {wallet.youtube ? (
                  <div>
                    <a href={wallet.youtube}>
                      <Image
                        src="/icons8-youtube.svg"
                        alt="Linkedin icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {wallet.email ? (
                  <span>
                    <a href={wallet.email}>
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
              <Link href={wallet.web}>
                <a style={{ textDecoration: "none", color: "#000000" }}>
                  <div className={styles.wallets_item_cta}>{t("cta")}</div>
                </a>
              </Link>
            </div>
            
          </div>
        ))}
      </div>
      {hasMore 
        ? <button className={styles.wallets_load_more_button} onClick={fetchData}>
            {t("load-more")}
          </button>
       : (
        <p
          style={{
            marginTop: "50px",
            fontSize: "25px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {t("end")}
        </p>
      )}
    </>
  );
}
