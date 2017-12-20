import React from "react";
import styles from "./index.module.css";
import magnet from "../magnet.gif"
import weather from "../weather.gif"
import datewithdestiny from "../datewithdestiny.gif"

export default () => (
  <div>
    <div className={styles.box}>
      <h2>magNet</h2>
      <p>Inspired by refrigerator poetry magnets, users can drag and drop randomized words to create their own shareable poems.  Built with React and Ruby on Rails.</p>
      <div className={styles.gifDiv}><img src={magnet}/></div>
      <a href="https://github.com/deebnntt/magNET">GitHub</a>
    </div>

    <div className={styles.box}>
      <h2>Weather Complainer</h2>
      <p>Compares historical weather data with today’s forecast to generate a customized “weather complaint”.  Built with JavaScript and Ruby on Rails.</p>
      <div className={styles.gifDiv}><img src={weather}/></div>
      <a href="https://github.com/deebnntt/weather_complainer_frontend">GitHub</a>
    </div>

    <div className={styles.box}>
      <h2>Date With Destiny</h2>
      <p>Generates a complete romantic outing by providing daytime, dining, and nightlife activities based on user location.  Built with Ruby on Rails.</p>
      <div className={styles.gifDiv}><img src={datewithdestiny}/></div>
      <a href="https://github.com/deebnntt/date-with-destiny">GitHub</a>
    </div>

    <br />

    <div style={{ textAlign: `center` }}>
    <p>Download my resume <a href="http://psychedelic-hands.surge.sh/resume.pdf" download="Danielle Bennett Resume">here</a>
  </p>
    </div>
  </div>
);
