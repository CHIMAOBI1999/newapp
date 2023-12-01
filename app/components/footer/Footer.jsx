"use-client";

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="style.container"></div>
      <div>@2023 Lamamia.All rights reserved.</div>
      <div>
        <div className={styles.social}></div>
        <Image
          src="/1.png"
          className={styles.icon}
          alt="Lama Dev Facebook Account"
          width={23}
          height={43}
        />
        <Image
          src="/2.png"
          className={styles.icon}
          alt="lama Dev Tweeter Account"
          width={23}
          height={43}
        />
        <Image
          src="/3.png"
          className={styles.icon}
          alt="Lama Dev Whatsapp Account"
          width={23}
          height={43}
        />
        <Image
          src="/4.png"
          className={styles.icon}
          alt="Lama
          Dev
          Instagram
          Account"
          width={23}
          height={43}
        />
      </div>
    </div>
  );
};

export default Footer;
