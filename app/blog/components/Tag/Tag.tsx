'use client'
import React from 'react'
import styles from './Tag.module.scss'

type TagProps = {
  text: string;
  slug?: string;
  id?: string;
  type: 'big' | 'normal';
  mode: 'flat' | 'normal';
  onClick?: (id: string, slug: string) => void;
};

const Tag: React.FC<TagProps> = ({ text, type, mode, onClick, id, slug }) => {
  let tagClass = styles.tag
  let textClass = styles.text

  if (type === 'big') {
    tagClass += ` ${styles.big}`
    textClass += ` ${styles.bigText}`
  }

  if (mode === 'flat') {
    tagClass += ` ${styles.flat}`
    textClass += ` ${styles.flatText}`
  }

  const handleClick = () => {
    if (onClick) {
      onClick(id ?? '', slug ?? '')
    }
  }

  return (
    <button className={tagClass} onClick={handleClick}>
      <div className={textClass}>
        <span>{text}</span>
      </div>
    </button>
  )
}

export default Tag
