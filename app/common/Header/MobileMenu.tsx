'use client'
import React, { useEffect } from 'react'
import styles from './Header.module.scss'
import IconButton from '../Buttons/IconButton'

export default function MobileMenu (props: any) {
  const [isOpen, setIsOpen] = React.useState(false)

  useEffect(() => {
    if (isOpen) {
      document.querySelector('#mobile_nav')?.classList.add('menu__mobile_menu_open')
      document.querySelector('#mobile_nav')?.classList.remove('menu__mobile_close')
    } else {
      document.querySelector('#mobile_nav')?.classList.remove('menu__mobile_menu_open')
      document.querySelector('#mobile_nav')?.classList.add('menu__mobile_close')
    }
  }, [isOpen, props])

  return (
    <section className={styles.header__mobile_menu}>
      <div className={styles.header__mobile_menu__wrapper}>
        <div className={styles.header__mobile_menu__button} onMouseDown={() => setIsOpen(!isOpen)}>
          <div className={`hamburger  ${isOpen ? 'active' : ''}`}>
            <span />
            <span />
            <span />
          </div>
        </div>

      </div>
    </section>
  )
}
