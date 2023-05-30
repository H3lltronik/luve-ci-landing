'use client'
import React, { use, useEffect } from 'react'
import styles from './Search.module.scss'
import { SearchIcon } from '../../../common/Icons'
import { useOnClickOutside } from '../../../utils/hooks/useOnClickOutside'

type SearchProps = {
  placeholder: string;
};
export default function Search (props: SearchProps) {
  const [isActive, setIsActive] = React.useState(false)
  const ref = React.useRef<HTMLInputElement>(null)
  useOnClickOutside(ref, () => handleOutsideClick())

  const focusInput = () => {
    setIsActive(true)
    if (ref.current) {
      ref.current.focus()
    }
  }

  const handleOutsideClick = () => {
    setIsActive(false)
  }

  useEffect(() => {
    ref.current?.addEventListener('focus', () => {
      setIsActive(true)
    })
  }, [ref])

  return (
    <div
      className={`${styles.container} ${
        isActive ? styles.container__active : ''
      }`}
    >
      <div className={styles.container__wrapper}>
        <div className={styles.icon} onClick={focusInput}>
          <SearchIcon />
        </div>
        <input
          ref={ref}
          type='text'
          placeholder={props.placeholder}
          className={styles.input}
        />
      </div>
    </div>
  )
}
