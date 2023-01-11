import React from 'react'
import { WordIcon } from '../../common/Icons'
import styles from './GridSection.module.scss'

export default function GridSectionItem () {
  return (
    <div className={styles.grid_section__item}>
      <div className={styles.grid_section__item__icon}>
        <WordIcon />
      </div>
      <h2 className={styles.grid_section__item__title}>Soluciones de Software</h2>
      <p className={styles.grid_section__item__description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.{' '}
      </p>
    </div>
  )
}
