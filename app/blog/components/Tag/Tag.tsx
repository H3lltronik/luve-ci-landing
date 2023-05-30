import React from 'react'
import styles from './Tag.module.scss'

type TagProps = {
  text: string;
  type: 'big' | 'normal';
  mode: 'flat' | 'normal';
};

const Tag: React.FC<TagProps> = ({ text, type, mode }) => {
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

  return (
    <div className={tagClass}>
      <div className={textClass}>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default Tag
