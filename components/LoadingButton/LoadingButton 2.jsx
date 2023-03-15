import { useState } from "react";
import styles from "./LoadingButton.module.css";

export default function LoadingButton(props) {
  const [loading, setLoading] = useState(false);

  return (
    <button
      disabled={loading}
      className={styles.button}
      onClick={async (e) => {
        if (props.onClick) {
          const onClickIsPromise =
            props.onClick.constructor.name === "AsyncFunction";
          if (onClickIsPromise) setLoading(true);
          await props.onClick?.(e);
          if (onClickIsPromise) setLoading(false);
        }
      }}
    >
      {loading ? (
        <span style={{ height: 20 }}>
          <svg
            id="loading"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path
              d="M168,40.7a96,96,0,1,1-80,0"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="28"
            ></path>
          </svg>
        </span>
      ) : (
        <span style={{ whiteSpace: "nowrap" }}>{props.children}</span>
      )}
    </button>
  );
};
