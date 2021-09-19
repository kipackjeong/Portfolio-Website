import Scroll, { Link } from 'react-scroll'
import './Menu.css'
const Menu = () => {
  return (
    <div className="nav__menu">
      <Link
        className="nav__menu__item"
        style={{ cursor: 'pointer' }}
        to="header"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Home
      </Link>
      <Link
        className="nav__menu__item"
        style={{ cursor: 'pointer' }}
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        About
      </Link>
      <Link
        className="nav__menu__item"
        style={{ cursor: 'pointer' }}
        to="work"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Work
      </Link>

      <Link
        className="nav__menu__item"
        style={{ cursor: 'pointer' }}
        to="contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Contact
      </Link>
    </div>
  )
}

export default Menu
