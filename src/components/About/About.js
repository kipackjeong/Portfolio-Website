import profilePic2 from '../../images/profile2.png'
import data from '../../data/data'
import './About.css'
const About = () => {
  return (
    <section id="about" class="container">
      <h2 className="title">ABOUT</h2>
      <div class="about__introduction">
        <div class="about__introduction__text">
          <h2>{data.aboutSummary}</h2>
        </div>
      </div>
    </section>
  )
}

export default About
