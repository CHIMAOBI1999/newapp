import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Porfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choosen a gallery</h1>
      <div div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.selectTitle}>
          <span className={styles.title}>illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.selectTitle}>
          <span className={styles.title}>illustrations</span>
        </Link>
        <Link href="/portfolio/application" className={styles.selectTitle}>
          <span className={styles.title}>illustrations</span>
        </Link>
      </div>
    </div>
  );
};

export default Porfolio;
