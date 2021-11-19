import React from 'react'
import profilePic2 from '../../images/profile2.png'
import data from '../../data/data'
import styles from './About.module.css'
const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h1>ABOUT</h1>
      <div class={styles.about__introduction}>
        <div class={styles.about__introduction__text}>
          <h2>{data.aboutSummary}</h2>
        </div>
      </div>
    </section>
  )
}

export default About
