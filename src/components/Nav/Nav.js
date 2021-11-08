import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav id={styles.nav}>
      <Logo />
      <Menu />
    </nav>
  )
}

export default Nav
