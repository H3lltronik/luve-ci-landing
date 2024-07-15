'use client'
import React, { useEffect } from 'react'
import styles from './Header.module.scss'
import useHeaderStore from '../../../store/headerStore'

export default function MobileMenu (props: any) {
  const mobileMenuOpened = useHeaderStore(store => store.mobileMenuOpened)
  const setMobileMenuOpened = useHeaderStore(store => store.setMobileMenuOpened)

  useEffect(() => {
    if (mobileMenuOpened) {
      document.querySelector('#mobile_nav')?.classList.add('menu__mobile_menu_open')
      document.querySelector('#mobile_nav')?.classList.remove('menu__mobile_close')
    } else {
      document.querySelector('#mobile_nav')?.classList.remove('menu__mobile_menu_open')
      document.querySelector('#mobile_nav')?.classList.add('menu__mobile_close')
    }
  }, [mobileMenuOpened, props])

  return (
    <section className={`${styles.header__mobile_menu} -mb-5 md:mb-0`}>
      <div className={styles.header__mobile_menu__wrapper}>
        <div className={styles.header__mobile_menu__button} onMouseDown={() => setMobileMenuOpened(!mobileMenuOpened)} tabIndex={0} aria-label='Open mobile menu'>
          <div className={`hamburger !py-5 !pl-5  ${mobileMenuOpened ? 'active' : ''}`}>
            <span />
            <span />
            <span />
          </div>
        </div>

      </div>
    </section>
  )
}
