import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import UpButton from "../../../components/UpButton/UpButton";
import AppFooterBlogVi from "../../../components/AppFooter/AppFooterBlogVi";
import styles from '../../../styles/Blog.module.css'
import formatArticleTimeStampEn from "../../../utils/formatArticleTimeStampEn";


export default function Post3Page() {
  const ARTICLE_TAG = ["wiki", "defi"]
  const ARTICLE_INFO = {
    author: "0xStim",
    authorPfp: "/0xstim-nouns.svg",
    authorProfile: "/0xStim",
    timestamp: "2023-02-01T01:23:00.000Z"
  }

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
        <title>DeFi là gì và tầm quan trọng của nó - DeFi.vn</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../defi.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="DeFi là gì và tầm quan trọng của nó - DeFi.vn" />
        <meta property="og:description" content="Tại sao DeFi đã và đang tiếp tục thay đổi thế giới? Hãy cùng DeFi.vn phân tích lịch sử, công dụng và đúc kết ra đáp án nhé." />
        <meta property="og:url" content="https://defi.vn/reading/defi-la-gi" />
        <meta property="og:type" content="article"/>
        <meta property="og:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/ec66fb40-b466-48a1-ab10-5a9a1c7ec700/defiblog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="defi.vn" />
        <meta property="twitter:url" content="https://www.defi.vn/reading/defi-la-gi" />
        <meta name="twitter:title" content="DeFi là gì và tầm quan trọng của nó - DeFi.vn" />
        <meta name="twitter:description" content="ại sao DeFi đã và đang tiếp tục thay đổi thế giới? Hãy cùng DeFi.vn phân tích lịch sử, công dụng và đúc kết ra đáp án nhé." />
        <meta name="twitter:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/ec66fb40-b466-48a1-ab10-5a9a1c7ec700/defiblog" />
      </Head>
      <div className="App">
        <div className="markdown-body">
          <h1 id="top">DeFi là gì và tầm quan trọng của nó</h1>
          <blockquote>Một hệ sinh thái tài chính mở và phổ biến toàn cầu cho kỷ nguyên số</blockquote>
          <div className={styles.page_nav}>
            <Link href="/">🏠 Quay về trang chủ</Link>
            <Link href="/reading">⬅️ Quay về trang trước</Link>
          </div>
          <div className={styles.article_info_container}>
            <Image src={ARTICLE_INFO.authorPfp} alt="0xStim" width={50} height={50} />
            <Link href={ARTICLE_INFO.authorProfile}>{ARTICLE_INFO.author}</Link>
          </div>
          <div>🗓️ {formatArticleTimeStampEn(ARTICLE_INFO.timestamp)}</div>
          <div className={styles.article_tag_container}>
            {ARTICLE_TAG.map((tag) => (<div className={styles.article_tag}>{tag}</div>))}
          </div>
          <div className={styles.thumbnail_image_container}>
            <Image
              src="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/ec66fb40-b466-48a1-ab10-5a9a1c7ec700/defiblog"
              alt="defi là gì thumbnail"
              width={1600}
              height={840}
            />
          </div>
          <p>DeFi là một hệ thống tài chính mở và toàn cầu được xây dựng cho thời đại internet - một giải pháp thay thế cho thể chế tài chính hiện tại, một thể chế tài chính với nhiều bí ẩn, kiểm duyệt chặt chẽ với cơ sở hạ tầng có từ những thập niên trước. DeFi cung cấp cho bạn quyền kiểm soát và khả năng theo dõi tiền của bạn. Nó cho phép bạn tiếp xúc với các thị trường quốc tế và các lựa chọn thay thế cho nội tệ hoặc ngân hàng của bạn. Các sản phẩm của DeFi cho phép bất kỳ ai có kết nối internet tiếp cận tới dịch vụ tài chính; những sản phẩm này phần lớn do người dùng sở hữu và duy trì. Cho đến nay, hàng chục tỷ đô la tiền điện tử đã chảy qua các ứng dụng DeFi và vẫn tiếp tục tăng lên hằng ngày.</p>
          <h2>DeFi là gì?</h2>

          <br />
          <hr />
          <AppFooterBlogVi />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

