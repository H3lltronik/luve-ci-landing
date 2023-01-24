import * as React from 'react'
import styles from './GridSection.module.scss'
import GridSectionItem from './GridSectionItem'

const GridSection = (props: any) => {
  return (
    <div className={styles.grid_section__wrapper}>
      <div className='content-container'>
        <section className={styles.grid_section}>
          <GridSectionItem />
          <GridSectionItem />
          <GridSectionItem />
          <GridSectionItem />
          <GridSectionItem />
          <GridSectionItem />
        </section>
      </div>
    </div>
  )
}

export default GridSection
