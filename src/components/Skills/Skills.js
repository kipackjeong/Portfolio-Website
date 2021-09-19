import React from 'react'
import data from '../../data/data'
import './Skills.css'

const Skills = () => {
  return (
    <section id="skills" className="container">
      <div className="skills-container">
        <h2 className="title">SKILLS</h2>
        <div className="skills-grid">
          {data.languages.map((skill, index) => (
            <div className="skill" key={index}>
              <img src={skill.img} alt="css"></img>
              <p>{skill.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
