import logoIcon from '../../../images/logo.png'
import styles from './Logo.module.css'
const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logoIcon} alt="icon" className={styles.logo__icon} />
    </div>
  )
}

export default Logo
