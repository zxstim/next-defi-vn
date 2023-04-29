import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import formatTimeStamp from "../../utils/formatTimestamp";
import styles from "./ReadingList.module.css";
import { useRouter } from "next/router";


export default function ReadingList({ articles }) {
  const { t } = useTranslation("reading");


  return (
    <div className={styles.reading_list_container}>
      {articles.map((article) => (
        <Link href={`/reading/${article.attributes.slug}`} key={article.id}>
          <div className={styles.reading_item_container}>
            <div className={styles.reading_list_item_image_container}>
              <Image
                src={article.attributes.image.data.attributes.formats.small.url}
                alt={article.attributes.image.data.attributes.alternativeText}
                width={article.attributes.image.data.attributes.formats.thumbnail.width}
                height={article.attributes.image.data.attributes.formats.thumbnail.height}
                layout="responsive"
                className={styles.reading_list_item_image}
              />
            </div>
            <div className={styles.reading_list_item_content}>
              <div className={styles.reading_tags_container}>
                {article.attributes.categories.data.map((category) => (
                  <div key={category.id} className={styles.reading_tag}>
                    {category.attributes.name}
                  </div>
                ))}
              </div>
              <div className={styles.reading_title}>
                {article.attributes.title}
              </div>
              <div className={styles.reading_author_name}>
                {article.attributes.author.data.attributes.name}
              </div>
              <div className={styles.reading_timestamp}>
                {formatTimeStamp(article.attributes.updatedAt)}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
