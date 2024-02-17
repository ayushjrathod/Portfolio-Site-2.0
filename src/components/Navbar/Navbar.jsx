import React, { useState } from "react";

import styles from "./Navbar.module.css";

export const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <a className={styles.logo} href="/">
        Ayush J Rathod
      </a>
      <div className={styles.nav}>
        <ul className={`${styles.navelements}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
