import React from 'react'
import Logo from './atoms/Logo'
import Menu from './atoms/Menu'
import Toggle from './atoms/Toggle'
import styles from './Nav.module.css'

const Nav = () => {
  const items = [
    { title: 'Home', link: '/header' },
    { title: 'About', link: '/about' },
    { title: 'Work', link: '/work' },
    { title: 'Contact', link: '/contact' },
  ]
  return (
    <nav id={styles.nav}>
      <Logo styles={styles} />
      <Toggle styles={styles} />
      <Menu items={items} styles={styles} />
    </nav>
  )
}

export default Nav
