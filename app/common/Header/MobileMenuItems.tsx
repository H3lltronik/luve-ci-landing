import Link from 'next/link'
import React, { Fragment } from 'react'
import { Header as HeaderType } from '../../../types'
import styles from './Header.module.scss'

interface MobileMenuItemsProps {
    links: any
}
export const MobileMenuItems : React.FunctionComponent<MobileMenuItemsProps> = (props) => {
  const { links } = props
  return (
    <nav id='mobile_nav' className={styles.header_mobile_nav}>
      <ul className={styles.header_nav_ul}>{renderList(links)}</ul>
    </nav>
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
