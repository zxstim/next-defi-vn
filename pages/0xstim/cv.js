import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import AppFooter from "../../components/AppFooter/AppFooter";
import styles from '../../styles/0xstim.module.css'

export default function ZxStimProfile() {

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-B3Z17PVC6F"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-B3Z17PVC6F');
          `}
      </Script>
      <Head>
        <title>Contact me 0xStim | Liên hệ mình 0xStim - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Contact me 0xStim | Liên hệ mình 0xStim - DeFi.vn" />
        <meta property="og:description" content="Get to know me 0xStim, DeFi.vn lead builder. Book your meeting with me here!" />
        <meta property="og:url" content="https://defi.vn/0xstim" />
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/04875cae-074a-46c0-bdc4-b69470999000/defi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content="https://www.defi.vn/0xstim" />
        <meta name="twitter:title" content="Contact me 0xStim | Liên hệ mình 0xStim - DeFi.vn" />
        <meta name="twitter:description" content="Get to know me 0xStim, DeFi.vn lead builder. Book your meeting with me here!" />
        <meta name="twitter:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/04875cae-074a-46c0-bdc4-b69470999000/defi" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <div className={styles.header_container}>
            <Image
              src="/0xstim-nouns.svg"
              alt="0xStim pfp"
              width={75}
              height={75}
            />
            <div className={styles.profile_container}>
              <div className={styles.name}>Victor Luong (0xStim)</div>
              <div className={styles.tags}>Builder</div>
            </div>
          </div>
          <div className={styles.info_container}>
            <div className={styles.left_column}>
              <div className={styles.title}>🙎‍♂️ Profile</div>
              <div>Experienced Builder adept in bringing forth expertise in all aspects of a company such as sales, marketing, product design, and software development. Also proficient in various web frameworks and Solidity. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.</div>
              <div className={styles.title}>💼 Employment History</div>
              <div className={styles.job_title}>Head of Growth at <a href="https://xsilver.com">xSilver</a>, Remote</div>
              <div className={styles.job_duration}>December 2022 - Present</div>
              <ul>
                <li>Led the product strategy for an on-ramp cryptocurrency platform</li>
                <li>Created sales and marketing strategies to promote user growth</li>
                <li>Executed the strategies, outreached to contacts, followed up and maintained relationships</li>
              </ul>
              <div className={styles.job_title}>Creator of <a href="https://defi.vn">Defi.vn</a>, Vietnam</div>
              <div className={styles.job_duration}>October 2022 - Present</div>
              <ul>
                <li>Developed and implemented the complete tech stack (frontend, backend, smart contract)</li>
                <li>Built content, marketing and sales strategies for the growth of the website (which has reached 30K monthly views)</li>
                <li>Coordinated with various communities for regular developer focused activities</li>
              </ul>
              <div className={styles.job_title}>Vice President at <a href="https://vietpay.com">Vietpay</a>, Ho Chi Minh, Vietnam</div>
              <div className={styles.job_duration}>December 2018 - November 2022</div>
              <ul>
                <li>Responsible for maintaining the partnership with PVComBank in Vietnam</li>
                <li>Coordinated Mastercard, Visa and NAPAS system integration</li>
                <li>Coordinated PVComBank Core Banking system integration with Vietpay Fintech platform</li>
              </ul>
              <div className={styles.job_title}>Owner of <a href="https://pyhash.com">Pyhash</a>, Delaware, USA</div>
              <div className={styles.job_duration}>June 2019 - May 2022</div>
              <ul>
                <li>Developed market making software for cryptocurrency exchanges</li>
                <li>Developed various trading algorithm for arbitraging, cross-exchange liquidity</li>
                <li>Open sourced trading software in May 2022 for independent quant-trading teams to use</li>
              </ul>
              <div className={styles.job_title}>Co-founder at AM Blockchain, Ho Chi Minh, Vietnam</div>
              <div className={styles.job_duration}>February 2018 - November 2018</div>
              <ul>
                <li>Coordinated NEM Vietnam team to promote NEM locally and operate NEM Vietnam Blockchain Hub</li>
                <li>Organized 20+ events with 200+ attendees each along with a few notable events like CDAD2018</li>
                <li>Launched marketing campaigns for various cryptocurrency projects to acquire Vietnamese users</li>
              </ul>
              <div className={styles.title}>🎓 Education</div>
              <div className={styles.job_title}>Bachelor of Science in Civil Engineering, University of New Brunswick, Fredericton, Canada</div>
              <div className={styles.job_duration}>September 2012 - May 2016</div>
              <ul>
                <li>Pre-Masters thesis in Finite Element Analysis for Steel Joint Connection</li>
                <li>Graduated with Honors</li>
              </ul>
            </div>
            <div className={styles.right_column}>
              <div>
                <div className={styles.title}>📖 Details</div>
                <div>Ho Chi Minh City</div>
                <div>Viet Nam</div>
                <div>+84982792979</div>
                <a href="mailto:zxstim@gmail.com">zxstim@gmail.com</a>
              </div>
              <div>
                <div className={styles.title}>🔗 Links</div>
                <div>
                  <a href="https://github.com/0xstim">Github</a>
                </div>
                <div>
                  <a href="https://twitter.com/0xStim">Twitter</a>
                </div>
                <div>
                  <a href="https://t.me/zxstim">Telegram</a>
                </div>
              </div>
              <div>
                <div className={styles.title}>💻 Skills</div>
                <div>HTML & CSS</div>
                <div>SQL</div>
                <div>Git</div>
                <div>Python</div>
                <div>Javascript</div>
                <div>Django</div>
                <div>Solidity</div>
                <div>React</div>
                <div>Next.js</div>
              </div>
              <div>
                <div className={styles.title}>🎙️ Languages</div>
                <div>English</div>
                <div>Vietnamese</div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
