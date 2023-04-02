'use client'
import Link from 'next/link'
import React, { Fragment, useRef } from 'react'
import { Header as HeaderType } from '../../../types'
import { PrimaryButton } from '../Buttons'

import { LuveLogo } from '../Logo'
import styles from './Header.module.scss'
import MobileMenu from './MobileMenu'
import { MobileMenuItems } from './MobileMenuItems'
import useHeaderStore from '../../../store/headerStore'
import { useOnClickOutside } from '../../utils/hooks/useOnClickOutside'

interface HeaderNavProps {
    links: any
}
export const HeaderNav : React.FunctionComponent<HeaderNavProps> = (props) => {
  const { links } = props
  const ref = useRef<any>()
  const setMobileMenuOpened = useHeaderStore(store => store.setMobileMenuOpened)
  useOnClickOutside(ref, () => setMobileMenuOpened(false))

  return (
    <>
      <div className='page-header' ref={ref}>
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

      <MobileMenuItems links={links} />
    </>
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
