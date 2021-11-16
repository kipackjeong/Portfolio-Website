import React from 'react'
import toggleImg from '../../../images/menu-toggle-white.png'
const Toggle = ({ styles }) => {
  return (
    <div className={styles.toggle}>
      <img src={toggleImg} alt="toggle" />
    </div>
  )
}

export default Toggle
