import logoIcon from '../../../images/logo.png'
import './Logo.css'
const Logo = () => {
  return (
    <div className="nav__logo">
      <img src={logoIcon} alt="icon" className="nav__logo__icon" />
    </div>
  )
}

export default Logo
