import Link from 'next/link'
import { Fragment } from 'react'
import { Header as HeaderType } from '../../../types'
import { getLinks } from '../../api/header'
import { PrimaryButton } from '../Buttons'

import { LuveLogo } from '../Logo'
import styles from './Header.module.scss'
import MobileMenu from './MobileMenu'

async function Header () {
  const { links } = await getLinks()

  return (
    <header id='header' className={styles.header}>
      <div className='page-header'>
        <div className={styles.header_container}>
          <Link href='/'>
            <LuveLogo className={styles.header_logo} />
          </Link>

          <nav className={styles.header_nav}>
            <ul className={styles.header_nav_ul}>{renderList(links)}</ul>
          </nav>

          <a href='#contact' className={styles.header__contact_button}>
            <PrimaryButton text='CONTACTO' />
          </a>

          <MobileMenu />
        </div>
      </div>

      <nav id='mobile_nav' className={styles.header_mobile_nav}>
        <ul className={styles.header_nav_ul}>{renderList(links)}</ul>
      </nav>
    </header>
  )
}

function renderList (items: HeaderType.Link[]) {
  return items.map((link) => {
    return (
      <Fragment key={link.path}>
        {link.children
          ? (
            <li className={`${styles.header_nav_li} ${styles.header_nav_li_sub}`}>
              <span>{link.label}</span>
              <ul className={styles.header_nav_ul_sub}>
                {renderList(link.children)}
              </ul>
            </li>
            )
          : (
            <Link href={link.path} key={link.path}>
              <li className={styles.header_nav_li}>{link.label}</li>
            </Link>
            )}
      </Fragment>
    )
  })
}

export default Header
