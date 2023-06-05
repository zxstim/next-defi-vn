import { useTranslation } from "next-i18next";
import styles from "./BuildStation.module.css";
import Image from "next/image";
import Accordion from "../Accordion/Accordion";


export default function BuildStation() {
    const { t } = useTranslation("build-station");
    // write an accordion component below
    const cohosts = [
        {
            id: 1,
            name: "DoraHacks.io",
            logo: "https://dorahacks.io/favicon.ico",
            web: "https://dorahacks.io/",
            description: "DoraHacks.io is a global hackathon organizer and one of the world's most active multi-chain Web3 developer platforms. It creates a global hacker movement and provides crypto native toolkits to help developers around the world team up and fund their ideas and BUIDLs via hackathons, bounties, grants, grant DAOs, and public good staking. By far, more than 3000 projects from the DoraHacks community have received over $20 million in grants and other forms of contributions from supporters worldwide. A large number of open source communities, DAOs, and more than 40 major blockchain ecosystems are actively using Dora's infrastructure DoraHacks.io for open source funding and community governance."
        }
    ]

    const contributors = [
        {
            id: 1,
            name: "BionLabs",
            logo: "https://bionswap.com/favicon.ico",
            web: "https://bionswap.com/",
            description: "Automated Launching Protocols on Multichain AMM Exchange"
        }
    ]


    return (
        <>
            <h2>{t("heading1")}</h2>
            <p>{t("paragraph1")}</p>
            <h2>{t("heading2")}</h2>
            <p>{t("paragraph2")}</p>
            <h3>{t("pros1")}</h3>
            <p>{t("content1")}</p>
            <h3>{t("pros2")}</h3>
            <p>{t("content2")}</p>
            <h3>{t("pros3")}</h3>
            <p>{t("content3")}</p>
            <h3>{t("pros4")}</h3>
            <p>{t("content4")}</p>
            <h3>{t("pros5")}</h3>
            <p>{t("content5")}</p>
            <h2>{t("heading3")}</h2>
            <p>{t("paragraph3")}</p>        
            <a style={{ textDecoration: "none", width: "fit-content" }} href="https://t.me/defivnspace">
                <div className={styles.telegram_button}>
                    <Image
                        src="/icons8-telegram.svg"
                        alt="Telegram"
                        width={30}
                        height={30}
                    />
                    DeFi.vn Space
                </div>     
            </a>
            <h2>{t("cohosts")}</h2>
            {
                cohosts.map((cohost) => (
                    <Accordion content={cohost} />
                ))
            }
            {/* <h2>{t("contributors")}</h2>
            {
                contributors.map((cohost) => (
                    <Accordion content={cohost} />
                ))
            } */}
        </>
    )
}