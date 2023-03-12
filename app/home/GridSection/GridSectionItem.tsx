/* eslint-disable react/jsx-closing-tag-location */
'use client'
import React, { FC } from 'react'
import styles from './GridSection.module.scss'
import { Pace, WindupChildren } from 'windups'
import { PrimaryButton } from '../../common/Buttons'

type GridSectionItemProps = {
  title: string
  icon?: React.ReactNode
  description: React.ReactNode
  className?: string
  button?: boolean
}
const GridSectionItem : FC<GridSectionItemProps> = (props) => {
  const { icon, title, className } = props
  // onHoverState
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div
      className={`${styles.grid_section__item_container}`}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${styles.grid_section__item}, ${className}`}>
        <div className={`${styles.grid_section__item__front}`}>
          {icon && <div className={`${styles.grid_section__item__icon}`}>{icon}</div>}
          <h3 className={`${styles.grid_section__item__title}`}>{title}</h3>
          <small className={styles.grid_section__item__small}><strong>Mas informacion</strong></small>
        </div>
        <div className={`${styles.grid_section__item__back}`}>
          {/* <div className={styles.grid_section__item__icon}></div> */}
          {/* react on hover */}
          <h3 className={styles.grid_section__item__title}>
            {
          isHovered && <WindupChildren>
            <Pace getPace={() => 20}>
              <p>{props.description}</p>
            </Pace>
          </WindupChildren>
            }
          </h3>

          {props.button && <PrimaryButton text='LO QUIERO' />}
        </div>
      </div>

    </div>
  )
}

export default GridSectionItem
