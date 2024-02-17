import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutus2.png")}
          alt="about me image"
          className={styles.aboutImage}
        />
        <p className={styles.aboutText}>
          Hello, I'm Ayush Rathod, I am driven by a profound passion for programming and a thirst for knowledge that knows no bounds.<br />
          <p><br /> </p>
What truly sets me apart is my unwavering commitment to continuous growth. I'm always eager to embrace new technologies and adapt to the ever-evolving tech landscape,
believing that versatility is key to success in this fast-paced industry.<br />
<p><br /> </p>
Beyond the lines of code, I find solace in the world of sports, often taking to the badminton court for an adrenaline rush. I'm also an avid gamer, particularly in love with Valorant. 
And on those quiet evenings, you'll find me lost in the pages of books or strumming chords on my guitar, a hobby I'm determined to master.<br />
<p><br /> </p>
Join me on this exhilarating journey as I explore the limitless possibilities of technology and creativity. Let's make magic together!
        </p>
      </div>
    </section>
  );
};
