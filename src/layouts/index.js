import React from "react"
import Link from "gatsby-link"
import styles from "./index.module.css";

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
<div>
  <div style={{ margin: `0 auto`, maxWidth: 800, padding: `1.25rem 1rem` }}>
    <header className={styles.header} style={{ marginBottom: `1rem`, width: `100%` }}>
      <ListLink to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h2 style={{ display: `inline` }}>DANIELLE BENNETT</h2>
      </ListLink>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/work/">Work</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>

    <div className={styles.body} style={{ width: `80%`, marginTop: `3rem`, marginLeft: `auto`, marginRight: `auto` }}>
      {children()}
    </div>
  </div>
  <footer className={styles.header} style={{ width: `100%`, position: `fixed`, bottom: `0`, background: `#D8C4E9`, opacity: `0.98`, textAlign: `center`, fontFamily: `Open Sans`, padding: `0.5rem`, margin: `0`, fontSize: `.9rem`, fontStyle: `italic`, fontWeight: `bold` }}>
      <a href="https://drive.google.com/file/d/1Vf5YNlNuL7J-t53LjVLjFtv-Mb8ckSkK/view?usp=sharing" target="_blank">DOWNLOAD RESUME</a>
  </footer>
</div>
