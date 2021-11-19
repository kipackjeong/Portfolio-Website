import React from 'react'
import logoIcon from '../../../images/logo.png'
const Logo = ({ styles }) => {
  return (
    <div className={styles.logo}>
      <img src={logoIcon} alt="icon" className={styles.logo__icon} />
    </div>
  )
}

export default Logo
