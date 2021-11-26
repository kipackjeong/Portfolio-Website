import React from 'react'
import { Fade } from 'react-reveal'
import Card from './Card'
import data from '../../data/data'
import styles from './Work.module.css'
const Work = () => {
  return (
    <section id="work" className={styles.work}>
      <h1>WORK</h1>

      <Fade bottom></Fade>
      <div className={styles.work__frame}>
        <Fade bottom cascade>
          {data.projects.map((project, index) => (
            <div className={styles.work__frame__card_cont}>
              <Card
                key={index}
                heading={project.title}
                techImage={project.techImage}
                imgUrl={project.imageSrc}
                gifUrl={project.gifSrc}
                projectLink={project.url}
                styles={styles}
              ></Card>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  )
}
export default Work
