import React from "react";
import linkedin from "../linkedin.svg"
import github from "../github.svg"
import email from "../email.svg"
import styles from "./index.module.css";

export default () => (
  <div style={{ textAlign: `center` }}>
    <h1>Let's Connect.</h1>

      <a href="https://www.linkedin.com/in/danielle-bennett-18973930/" alt="LinkedIn"><img className={styles.icon} src={linkedin} /></a>
      <a href="https://github.com/deebnntt"><img className={styles.icon} src={github} /></a>
      <a href="mailto:daniellbennettchan@gmail.com"><img className={styles.icon} src={email} /></a>

    <p>
      <a href="mailto:daniellbennettchan@gmail.com">daniellbennettchan@gmail.com</a>
    </p>
  </div>
);
