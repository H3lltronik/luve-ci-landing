'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { SearchIcon } from '../../../common/Icons'
import { useOnClickOutside } from '../../../utils/hooks/useOnClickOutside'
import BlogsFiltersModal from '../../BlogsFiltersModal'
import styles from './Search.module.scss'

type SearchProps = {
  placeholder: string;
  tags: Array<{ id: string; name: string; slug: string, blogsCount: number }>;
};

export default function Search (props: SearchProps) {
  const [isActive, setIsActive] = useState(false)
  const router = useRouter()
  const ref = useRef<HTMLInputElement>(null)
  useOnClickOutside(ref, () => handleOutsideClick())
  const params = useSearchParams()

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

  useEffect(() => {
    if (params.get('search') && ref.current) {
      ref.current.value = params.get('search') ?? ''
    }
  }, [params, ref])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (ref.current) {
      router.push(`/blog?search=${ref.current.value}`)
    }
  }

  return (
    <div className={`${styles.container_wrapper} flex items-center`}>
      <div
        className={`${styles.container} mr-2 md:mr-5 ${
          isActive ? styles.container__active : ''
        }`}
      >
        <form
          role='search'
          className={styles.container__wrapper}
          onSubmit={handleSubmit}
        >
          <div className={styles.icon} onClick={focusInput}>
            <SearchIcon />
          </div>
          <input
            ref={ref}
            type='text'
            placeholder={props.placeholder}
            className={`${styles.input} text-black`}
            aria-label='Search'
          />
        </form>
      </div>
      <BlogsFiltersModal tags={props.tags} />
    </div>
  )
}
