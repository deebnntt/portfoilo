import React from "react"
import styles from "./work.module.css"
import magnet from "../magnet.png"
import weather from "../weather.png"
import datewithdestiny from "../destiny.png"
import github from "../github.svg"

export default () => (
  <div>

    <div className={styles.clickable}>
      <a href="https://github.com/deebnntt/magNET" target="_blank"><h2>magNET</h2></a>
      <p>Inspired by refrigerator poetry magnets, users can drag and drop words to create their own shareable poems.  Built with React and Ruby on Rails.</p>
    </div>
    <div className={styles.container}>
      <img className={styles.preview} src={magnet}/>
      <div className={styles.overlay}>
        <div className={styles.text}>
          <h2>magNET</h2>
          <p>Inspired by refrigerator poetry magnets, users can drag and drop words to create their own shareable poems.  Built with React and Ruby on Rails.</p>
          <a href="https://github.com/deebnntt/magNET" target="_blank"><img className={styles.git} src={github}/></a>
        </div>
      </div>
    </div>

    <div className={styles.clickable}>
    <a href="https://github.com/deebnntt/weather_complainer_frontend" target="_blank"><h2>Weather Complainer</h2></a>
    <p>Compares historical weather data with today’s forecast to generate a customized “weather complaint”.  Built with JavaScript and Ruby on Rails.</p>
    </div>
    <div className={styles.container}>
      <img className={styles.preview} src={weather}/>
      <div className={styles.overlay}>
        <div className={styles.text}>
          <h2>Weather Complainer</h2>
          <p>Compares historical weather data with today’s forecast to generate a customized “weather complaint”.  Built with JavaScript and Ruby on Rails.</p>
          <a href="https://github.com/deebnntt/weather_complainer_frontend" target="_blank"><img className={styles.git} src={github}/></a>
        </div>
      </div>
    </div>

    <div className={styles.clickable}>
    <a href="https://github.com/deebnntt/date-with-destiny" target="_blank"><h2>Date With Destiny</h2></a>
    <p>Generates a complete romantic outing by providing daytime, dining, and nightlife activities based on user location.  Built with Ruby on Rails.</p>
    </div>
    <div className={styles.container}>
      <img className={styles.preview} src={datewithdestiny}/>
      <div className={styles.overlay}>
        <div className={styles.text}>
          <h2>Date With Destiny</h2>
          <p>Generates a complete romantic outing by providing daytime, dining, and nightlife activities based on user location.  Built with Ruby on Rails.</p>
          <a href="https://github.com/deebnntt/date-with-destiny" target="_blank"><img className={styles.git} src={github}/></a>
        </div>
      </div>
    </div>

    <br />
    <br />

  </div>
);
