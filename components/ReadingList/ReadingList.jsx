import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import PaginatedList from "../PaginatedList/PaginatedList";
import formatArticleTimeStampEn from "../../utils/formatArticleTimeStampEn";
import formatArticleTimeStampVi from "../../utils/formatArticleTimeStampVi";
import styles from "./ReadingList.module.css";
import { useRouter } from "next/router";


export default function ReadingList({ articles, pagination, categories }) {
  const { t } = useTranslation("reading");
  const router = useRouter();

  return (
      <div className={styles.layout_container}>
        <PaginatedList
        currentPage={pagination.page}
        totalItems={pagination.total} 
        totalPages={pagination.pageCount}
        indexPagePath="reading/page"
        />
        <div className={styles.reading_list_container}>
          {articles.map((article) => (
            <Link href={`/reading/${article.attributes.slug}`} key={article.id}>
              <a className={styles.reading_anchor_tag}>
                <div className={styles.reading_item_container}>
                  <Image
                    src={article.attributes.image.data.attributes.formats.small.url}
                    alt={article.attributes.image.data.attributes.alternativeText}
                    width={article.attributes.image.data.attributes.formats.thumbnail.width}
                    height={article.attributes.image.data.attributes.formats.thumbnail.height}
                    layout="responsive"
                    className={styles.reading_list_item_image}
                  />
                  <div className={styles.reading_list_item_content}>
                    <div className={styles.reading_timestamp}>
                      {router.locale == "en" ? formatArticleTimeStampEn(article.attributes.updatedAt) : formatArticleTimeStampVi(article.attributes.updatedAt)}
                    </div>
                    <div className={styles.reading_title}>
                      {article.attributes.title}
                    </div>
                    <div className={styles.reading_tags_container}>
                      <div className={styles.reading_author_name}>
                        ✏️ {article.attributes.author.data.attributes.name}
                      </div>
                      {article.attributes.categories.data.map((category) => (
                        <div key={category.id} className={styles.reading_tag}>
                          {category.attributes.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </a>            
            </Link>
          ))}
        </div>
        <PaginatedList
        currentPage={pagination.page}
        totalItems={pagination.total} 
        totalPages={pagination.pageCount}
        indexPagePath="reading/page"
        />
      </div>
  );
}
