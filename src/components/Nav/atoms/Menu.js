import { Link } from 'react-scroll'
const Menu = ({ items, styles }) => {
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
