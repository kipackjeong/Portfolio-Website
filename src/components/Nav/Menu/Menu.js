import { Link } from 'react-scroll'
import styles from './Menu.module.css'
const Menu = () => {
  const items = [
    { title: 'Home', link: 'header' },
    { title: 'About', link: 'about' },
    { title: 'Work', link: 'work' },
    { title: 'Contact', link: 'contact' },
  ]
  return (
    <div className={styles.menu}>
      {items.map((item) => (
        <Link
          className={styles.menu__item}
          style={{ cursor: 'pointer' }}
          to={item.link}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}

export default Menu
