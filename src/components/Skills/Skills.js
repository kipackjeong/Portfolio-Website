import React from 'react'
import data from '../../data/data'
import styles from './Skills.module.css'

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h1>SKILLS</h1>
      <div className={styles.grid}>
        {data.languages.map((skill, index) => (
          <div className={styles.skill} key={index}>
            <img src={skill.img} alt={skill.title}></img>
            <p>{skill.para}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
