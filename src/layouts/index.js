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
  <div style={{ margin: `0 auto`, maxWidth: 700, padding: `1.25rem 1rem`, display: `fixed` }}>
    <header className={styles.header} style={{ marginBottom: `1.5rem`, width: `100%` }}>
      <ListLink to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h2 style={{ display: `inline` }}>DANIELLE BENNETT</h2>
      </ListLink>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/work/">Work</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>

    <div className={styles.body} style={{ width: `80%`, marginTop: `3.5rem`, marginLeft: `auto`, marginRight: `auto` }}>
      {children()}
    </div>
  </div>
