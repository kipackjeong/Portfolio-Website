import React from 'react'
import emailIcon from '../../images/mail.ico'
import linkedInIcon from '../../images/linkedin.ico'
import phoneIcon from '../../images/phone.ico'
import './Contact.css'
const Contact = () => {
  return (
    <section id="contact" className="container">
      <h2>Let's talk</h2>
      <div class="contact_icons">
        <div className="contact_icons_icon">
          <a href="mailto: kipack.jeong@outlook.com">
            <img src={emailIcon} alt="email" />
          </a>
        </div>
        <div className="contact_icons_icon">
          <a href="https://www.linkedin.com/in/kipack-jeong">
            <img src={linkedInIcon} alt="linkedin" />
          </a>
        </div>

        <div className="contact_icons_icon">
          <a href="tel:8475108233">
            <img src={phoneIcon} alt="phone" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
