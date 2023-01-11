import { PrimaryButton } from '../Buttons'
import { LuveLogo } from '../Logo'
import styles from './Header.module.scss'

function Header () {
  return (
    <header className={styles.header}>
      <div className='page-header'>
        <div className={styles.header_container}>
          <LuveLogo className={styles.header_logo} />

          <nav className={styles.header_nav}>
            <ul className={styles.header_nav_ul}>
              <li className={styles.header_nav_li}>Inicio</li>
              <li className={styles.header_nav_li}>¿Por Qué?</li>
              <li className={styles.header_nav_li}>Servicios</li>
              <li className={styles.header_nav_li}>Contacto</li>
            </ul>
          </nav>

          <PrimaryButton />
        </div>
      </div>
    </header>
  )
}

export default Header
