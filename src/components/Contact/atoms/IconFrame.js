import React from 'react'

const IconFrame = ({ styles, iconImg, link }) => {
  return (
    <div className={styles.contact__icons__icon}>
      <a href={link}>
        <img src={iconImg} alt="email" />
      </a>
    </div>
  )
}
export default IconFrame
