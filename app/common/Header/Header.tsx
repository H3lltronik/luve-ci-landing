import { getLinks } from '../../api/header'

import styles from './Header.module.scss'
import { HeaderNav } from './HeaderNav'

async function Header () {
  const { links } = await getLinks()

  return (
    <header id='header' className={styles.header}>
      <HeaderNav links={links} />
    </header>
  )
}

export default Header
