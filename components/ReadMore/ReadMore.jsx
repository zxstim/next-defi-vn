import { useState } from "react";
import styles from "./ReadMore.module.css";
import parse, { domToReact } from 'html-react-parser';


export default function ReadMore({ children }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const options = {
    replace: domNode => {
      if (domNode.name === 'p') {
        return <div className={styles.text}>{domNode.children[0].data}</div>;
      }
      else if (domNode.name === 'div') {
        return <div className={styles.text}>{domNode.children[0].data}</div>;
      }
    }
  };

  return (
    <div className={styles.text}>
      {isReadMore ? parse(text.slice(0, 150)) : parse(text)}
      <span onClick={toggleReadMore} className={styles.read_or_hide}>
        {isReadMore ? "...read more" : text.length < 150 ? null : " show less"}
      </span>
    </div>
  );
};
