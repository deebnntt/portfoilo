import React from "react";
import styles from "./index.module.css";
import computer from '../computer.svg'
import luxury from '../luxury.svg'
import pizza from '../pizza.svg'
import { withPrefix } from 'gatsby-link'

export default () => (
  <div style={{ textAlign: `center` }}>

  <div className={styles.box}>
    <img src={computer} className={styles.image}/>
    <p>Full stack web developer experienced in Ruby on Rails and React.</p>
  </div>

  <div className={styles.box}>
    <img src={luxury} className={styles.image}/>
    <p>With a background in jewelry sales data analysis and wholesale product development, my love of both analytical thinking and design led to a passion for programming.</p>
  </div>

  <div className={styles.box}>
    <img src={pizza} className={styles.image}/>
    <p>I live in Brooklyn, NY and enjoy salt & vinegar chips and getting lost in a mediocre-to-good book.</p>
  </div>
  <br />
  </div>
);
