import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Labore occaecat voluptate minim ut ad consequat eiusmod occaecat quis
          Lorem duis non.
        </p>
        <p className={styles.text}>
          Incididunt labore cupidatat velit quis qui reprehenderit ex elit
          laborum.
        </p>

        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
