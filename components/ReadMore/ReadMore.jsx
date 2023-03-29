import { useState } from "react";
import styles from "./ReadMore.module.css";

export default function ReadMore({ children }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className={styles.text}>
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className={styles.read_or_hide}>
        {isReadMore ? "...read more" : text.length < 150 ? null : " show less"}
      </span>
    </p>
  );
};
