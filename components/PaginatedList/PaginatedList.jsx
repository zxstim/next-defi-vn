import { useState } from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
import styles from "./PaginatedList.module.css";
import usePagination from "../../hooks/usePagination";

export default function PaginatedList({ currentPage, totalItems, totalPages, indexPagePath }) {
  // const router = useRouter();

  const pages = usePagination(currentPage, totalPages)

  return (
    <div className={styles.pagination}>
      {pages.map((page, index) => (
        (page === 1 && page === currentPage) ? (
          <div key={index} className={styles.active_page}>{page}</div>
        ) : (page === 1) ? (
          <Link key={index} href={`/${indexPagePath}`}>
            <a>{page}</a>
          </Link>
        ) : (page === currentPage) ? (
          <div key={index} className={styles.active_page}>{page}</div>
        ) : (page === "...") ? (
          <div key={index}>{page}</div>
        ) : (
          <Link key={index} href={`${page}`}>
            <a>{page}</a>
          </Link>
      )))
      }
    </div>
  );
}
