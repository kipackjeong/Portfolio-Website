import TypeWriter from './TypeWriter'
import ContactButton from './ContactButton'
import Profile from './Profile'
import './Header.css'
const Header = () => {
  return (
    <header id="header">
      <div className="header__frame">
        <Profile></Profile>
        <TypeWriter></TypeWriter>
        <ContactButton></ContactButton>
      </div>
    </header>
  )
}

export default Header
