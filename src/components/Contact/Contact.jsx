import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me </h2>
        <h4>I'm Just One Click Away</h4>
        <p className="contactdes" href="ayushjrathod7@gmail.com">ayushjrathod7@gmail.com</p>
      </div>
        <div className={styles.social}>
            <a target="_blank" href="https://www.linkedin.com/in/ayushjrathod"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a target="_blank" href="https://github.com/ayushjrathod"><FontAwesomeIcon icon={faGithub}/></a>
            <a target="_blank" href="https://twitter.com/ayushjrathod"><FontAwesomeIcon icon={faTwitter}/></a>
            <a target="_blank" href="https://www.instagram.com/ayushjrathod"><FontAwesomeIcon icon={faInstagram}/></a>
        </div>

    </footer>
  );
};
