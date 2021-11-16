import React from 'react'
import IconFrame from './atoms/IconFrame'
import emailIcon from '../../images/mail.ico'
import linkedInIcon from '../../images/linkedin.ico'
import phoneIcon from '../../images/phone.ico'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Let's talk</h2>
      <div className={styles.contact__icons}>
        <IconFrame
          styles={styles}
          link="mailto: kipack.jeong@outlook.com"
          iconImg={emailIcon}
        />
        <div className={styles.contact__icons__icon}>
          <a href="https://www.linkedin.com/in/kipack-jeong">
            <img src={linkedInIcon} alt="linkedin" />
          </a>
        </div>

        <div className={styles.contact__icons__icon}>
          <a href="tel:8475108233">
            <img src={phoneIcon} alt="phone" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
