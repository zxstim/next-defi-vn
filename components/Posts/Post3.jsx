import Image from "next/image";
import styles from "../../styles/Post1.module.css";

export default function Post3() {
  return (
    <>
      <div className={styles.thumbnail_image_container}>
        <Image
          src="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/21d656d0-ada0-4115-5e3b-e752d478eb00/defiblog"
          alt="defi là gì thumbnail"
          width={1600}
          height={840}
        />
      </div>
      <p>
        Bionswap is an innovative dashboard that allows you to track your
        portfolio and the market in real time. It is a one-stop shop for all
        your cryptocurrency needs.
      </p>
    </>
  );
}
