import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import devtoolslist from "./DevToolsList.json";
import styles from "./DevToolsList.module.css";

export default function DevToolsList() {
  const [index, setIndex] = useState(20);
  const [latestDevToolsList, setLatesDevToolsList] = useState(devtoolslist);
  // const [walletChains, setWalletChains] = useState(() => {
  //   let walletChains = [];
  //   devtoolslist.forEach((devtool) => {
  //     wallet.chains.forEach((chain) => {
  //       if (!walletChains.includes(chain)) {
  //         walletChains.push(chain);
  //       }
  //     });
  //   });
  //   return walletChains;
  // });
  // const [walletTechs, setWalletTechs] = useState(() => {
  //   let walletTechs = [];
  //   devtoolslist.forEach((wallet) => {
  //     wallet.tech.forEach((tech) => {
  //       if (!walletTechs.includes(tech)) {
  //         walletTechs.push(tech);
  //       }
  //     });
  //   });
  //   return walletTechs;
  // });
  const [devtools, setDevtools] = useState(devtoolslist.slice(0, index));
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const { t } = useTranslation("dev-tools");
  const fetchData = () => {
    if (devtools.length >= devtoolslist.length) {
      setHasMore(false);
      return;
    }
    setDevtools(devtools.concat(devtoolslist.slice(index, index + 20)));
    setIndex(index + 20);
  };

  // a function to use drop down menu to filter wallets by chain
  const filterDevtoolsDropdown = (event) => {
    if (event.target.value === "") {
      setDevtools(devtoolslist.slice(0, index));
      setLatestWalletsList(devtoolslist);
      return;
    }
    let filteredDevtoolsList = [];
    filteredDevtoolsList = devtoolslist.filter(
      (devtool) => devtool.chains.includes(event.target.value) === true
    );
    setLatestDevtoolsList(filteredDevtoolsList);
    setDevtools(filteredDevtoolsList.slice(0, index));
  };

  // a function to use drop down menu to filter wallets by tech
  const filterDevtoolsTechDropdown = (event) => {
    if (event.target.value === "") {
      setDevtools(devtoolslist.slice(0, index));
      setLatestDevtoolsList(devtoolslist);
      return;
    }
    let filteredDevtoolsList = [];
    filteredDevtoolsList = devtoolslist.filter(
      (devtool) => devtool.tech.includes(event.target.value) === true
    );
    setLatestDevtoolsList(filteredDevtoolsList);
    setDevtools(filteredDevtoolsList.slice(0, index));
  };

  return (
    <>
      {/* <div className={styles.wallet_filter_container}>
        <div>
          <label>{t("chain-filter")}</label>
          <select
            className={styles.wallet_filter_select}
            name="wallets"
            id="wallets"
            onChange={filterWalletsDropdown}
          >
            <option value="">All</option>
            {walletChains.map((chain, index) => (
              <option key={index} value={chain}>
                {chain}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>{t("tech-filter")}</label>
          <select
            className={styles.wallet_filter_select}
            name="wallets"
            id="wallets"
            onChange={filterWalletsTechDropdown}
          >
            <option value="">All</option>
            {walletTechs.map((tech, index) => (
              <option key={index} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>
      </div> */}
      <div className={styles.devtools_container}>
        {devtools.map((devtool) => (
          <div key={devtool.id} className={styles.devtools_item}>
            <div className={styles.devtools_item_info}>
              <div href={devtool.web} className={styles.devtools_item_title}>
                {devtool.name}
              </div>
              <div className={styles.devtools_item_tech_container}>
                <div className={styles.devtools_item_tech_label}>Type</div>
                <div className={styles.devtools_item_tech_badge_container}>
                  {devtool.tech.map((tec) => (
                    <div key={tec} className={styles.devtools_item_tech}>
                      {tec}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.devtools_item_desc}>{devtool.desc}</div>
              <div className={styles.devtools_item_chains_container}>
                <div className={styles.devtools_item_chains_label}>Chains</div>
                <div className={styles.devtools_item_badge_container}>
                  {devtool.chains.map((chain) => (
                    <div key={chain} className={styles.devtools_item_chain}>
                      {chain}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.devtools_cta_container}>
              <div className={styles.devtools_social_container}>
                {devtool.telegram ? (
                  <div>
                    <a href={devtool.telegram}>
                      <Image
                        src="/icons8-telegram.svg"
                        alt="Telegram icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {devtool.twitter ? (
                  <div>
                    <a href={devtool.twitter}>
                      <Image
                        src="/icons8-twitter.svg"
                        alt="Twitter icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {devtool.discord ? (
                  <div>
                    <a href={devtool.discord}>
                      <Image
                        src="/icons8-discord.svg"
                        alt="Discord icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {devtool.facebook ? (
                  <div>
                    <a href={devtool.facebook}>
                      <Image
                        src="/icons8-facebook.svg"
                        alt="Email icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {devtool.linkedin ? (
                  <div>
                    <a href={devtool.linkedin}>
                      <Image
                        src="/icons8-linkedin.svg"
                        alt="Linkedin icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {devtool.youtube ? (
                  <div>
                    <a href={devtool.youtube}>
                      <Image
                        src="/icons8-youtube.svg"
                        alt="Linkedin icon"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ) : null}
                {devtool.email ? (
                  <span>
                    <a href={devtool.email}>
                      <Image
                        src="/icons8-circled-envelope.svg"
                        alt="Email icon"
                        width={32}
                        height={32}
                      />
                    </a>
                  </span>
                ) : null}
                {devtool.web ? (
                  <span>
                    <a href={devtool.web}>
                      <Image
                        src="/icons8-webpage.svg"
                        alt="Web icon"
                        width={32}
                        height={32}
                      />
                    </a>
                  </span>
                ) : null}
              </div>
              <Link href={devtool.page}>
                <a style={{ textDecoration: "none", color: "#000000" }}>
                  <div className={styles.devtools_item_cta_learn_more}>{t("cta")}</div>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {hasMore 
      ? <button className={styles.devtools_load_more_button} onClick={fetchData}>
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
