import React from 'react'
import toggleImg from '../../../images/menu-toggle-white.png'
const Toggle = ({ styles, onClick }) => {
  return (
    <div className={styles.toggle} onClick={onClick}>
      <img src={toggleImg} alt="toggle" />
    </div>
  )
}

export default Toggle
