import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../components/Button/Button";
const Contact = () => {
  return (
    <div className="style.container">
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.Contact}>
        <Image
          src="/contact.png"
          alt=""
          className={styles.image}
          width={250}
          height={350}
        />
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="name" className={styles.input} />
        <input type="text" placeholder="email" className={styles.input} />
        <textarea
          className={styles.textArea}
          placeholder="message"
          cols="40"
          rows="20"
        ></textarea>
        <Button url="#" text="Send" />
      </form>
    </div>
  );
};

export default Contact;
