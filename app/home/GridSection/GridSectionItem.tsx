/* eslint-disable react/jsx-closing-tag-location */
'use client'
import React, { FC } from 'react'
import styles from './GridSection.module.scss'
import { Pace, WindupChildren } from 'windups'

type GridSectionItemProps = {
  title: string
  icon: React.ReactNode
  className?: string
}
const GridSectionItem : FC<GridSectionItemProps> = (props) => {
  const { icon, title, className } = props
  // onHoverState
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div className={`${styles.grid_section__item_container}`}>
      <div
        className={`${styles.grid_section__item}, ${className}`}
        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`${styles.grid_section__item__front}`}>
          <div className={`${styles.grid_section__item__icon}`}>{icon}</div>
          <h3 className={`${styles.grid_section__item__title}`}>{title}</h3>
        </div>
        <div className={`${styles.grid_section__item__back}`}>
          {/* <div className={styles.grid_section__item__icon}></div> */}
          {/* react on hover */}
          <h3 className={styles.grid_section__item__title}>
            {
          isHovered && <WindupChildren>
            <Pace getPace={() => 40}>
              <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
            </Pace>
          </WindupChildren>
            }
          </h3>
        </div>
      </div>

    </div>
  )
}

export default GridSectionItem
