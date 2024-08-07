'use client'
import Link from 'next/link'
import React, { Fragment, useRef } from 'react'
import { Header as HeaderType } from '../../../types'
import { PrimaryButton } from '../Buttons'

import useHeaderStore from '../../../store/headerStore'
import { useOnClickOutside } from '../../utils/hooks/useOnClickOutside'
import { LuveLogo } from '../Logo'
import styles from './Header.module.scss'
import MobileMenu from './MobileMenu'

interface HeaderNavProps {
  links: any;
}
export const HeaderNav: React.FunctionComponent<HeaderNavProps> = (props) => {
  const { links } = props
  const ref = useRef<any>()
  const setMobileMenuOpened = useHeaderStore(
    (store) => store.setMobileMenuOpened
  )
  useOnClickOutside(ref, () => handleOutsideClick())

  const handleOutsideClick = () => {
    setMobileMenuOpened(false)
  }

  return (
    <div ref={ref}>
      <div className='page-header'>
        <div className={styles.header_container}>
          <Link href='/' aria-label='Luve logo'>
            <LuveLogo className={styles.header_logo} />
          </Link>

          <nav className={styles.header_nav} id='test'>
            <ul className={styles.header_nav_ul}>{renderList(links)}</ul>
          </nav>

          <a href='#contact' className={`${styles.header__contact_button}`}>
            <PrimaryButton text='CONTACTO' />
          </a>

          <MobileMenu />
        </div>
      </div>

      <nav id='mobile_nav' className={`${styles.header_mobile_nav} py-4 mt:pt-0`}>
        <ul className={styles.header_nav_ul}>{renderList(links)}</ul>
      </nav>
    </div>
  )
}

const ListItem = ({ link }: any) => {
  const setMobileMenuOpened = useHeaderStore(
    (store) => store.setMobileMenuOpened
  )

  const handleClick = () => {
    if (!link.children) {
      setMobileMenuOpened(false)
    }
  }

  return (
    <Fragment key={link.path}>
      {link.children
        ? (
          <li
            className={`${styles.header_nav_li} ${styles.header_nav_li_sub}`}
            onClick={handleClick}
          >
            <span>{link.label}</span>
            <ul className={styles.header_nav_ul_sub}>
              {renderList(link.children)}
            </ul>
          </li>
          )
        : (
          <li className={styles.header_nav_li} onClick={handleClick}>
            <Link href={link.path} key={link.path} aria-label={link.label}>
              <div className="className='min-h-[24px]'">
                <span>{link.label}</span>
              </div>
            </Link>
          </li>
          )}
    </Fragment>
  )
}

function renderList (items: HeaderType.Link[]) {
  return items.map((link, index) => {
    return <ListItem link={link} key={index} />
  })
}
