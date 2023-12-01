import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png";
import Button from "./components/Button/Button";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.item}>
          Better design for your digital products.
        </h1>
        <p className={styles.item}>
          Turning your Idea into Reality.we bring togther the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
