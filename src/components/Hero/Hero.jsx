import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ayush</h1>
        <h3 className={styles.subtitle}>Aspiring Developer</h3>
        <p className={styles.description}>
          I'm a budding developer with fiery passion for programming. Currently
          pursiuing B.Tech in Artificial Intelligence and Data Science
        </p>
        <a
          href="https://drive.google.com/file/d/1mMisSgPVI7NFLNIjVZyO2PdpsO01k45B/view?usp=sharing"
          className={styles.cvbutton}
          target="_blank"
        >
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/coding2.gif")}
        alt="Hero image"
        className={styles.heroImg}
      />
    </section>
  );
};
