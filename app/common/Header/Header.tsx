import { LuveLogo } from '../Logo'
import styles from './Header.module.scss'

function Header () {
  return (
    <header className={styles.header}>
      <h1>XD</h1>
      <LuveLogo className='luve-logo' />
    </header>
  )
}

export default Header
