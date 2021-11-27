import React from 'react'
import { Fade } from 'react-reveal'
import Card from './Card'
import data from '../../data/data'
import styles from './Projects.module.css'
const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h1>PROJECTS</h1>

      <Fade bottom></Fade>
      <div className={styles.projects__frame}>
        <Fade bottom cascade>
          {data.projects.map((project, index) => (
            <div className={styles.projects__frame__card_cont}>
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
export default Projects
