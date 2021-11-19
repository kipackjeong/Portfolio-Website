import React from 'react'
import TypeWriter from './atoms/TypeWriter'
import ContactButton from './atoms/ContactButton'
import Profile from './atoms/Profile'
import data from '../../data/data'
import styles from './Header.module.css'
const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.header__frame}>
        <Profile styles={styles}></Profile>
        <TypeWriter styles={styles} message={data.headerMessage}></TypeWriter>
        <ContactButton styles={styles}></ContactButton>
      </div>
    </header>
  )
}

export default Header
