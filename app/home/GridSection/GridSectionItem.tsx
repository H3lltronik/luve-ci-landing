import React, { FC } from 'react'
import styles from './GridSection.module.scss'

type GridSectionItemProps = {
  title: string
  icon: React.ReactNode
  className?: string
}
const GridSectionItem : FC<GridSectionItemProps> = (props) => {
  const { icon, title, className } = props
  return (
    <div className={`${styles.grid_section__item}, ${className}`}>
      <div className={styles.grid_section__item__icon}>{icon}</div>
      <h3 className={styles.grid_section__item__title}>{title}</h3>
    </div>
  )
}

export default GridSectionItem
