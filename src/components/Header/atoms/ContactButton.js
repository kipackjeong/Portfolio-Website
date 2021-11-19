import React from 'react'

const ContactButton = ({ styles }) => {
  return (
    <div className={styles.header__frame__contact}>
      <figure>
        <a href="tel:8475108233">
          <div>
            <span style={{ fontWeight: 700 }}>Contact Me</span>
            <span>Here</span>
          </div>
        </a>
      </figure>
    </div>
  )
}

export default ContactButton
