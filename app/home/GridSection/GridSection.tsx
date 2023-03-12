import * as React from 'react'
import styles from './GridSection.module.scss'

import GridSectionItem from './GridSectionItem'

type Item = {
  title: string
  description: React.ReactNode
  icon?: React.ReactNode
}
interface GridSectionProps {
  className?: string
  items?: Item[]
  title?: React.ReactNode
  button?: boolean
}
const GridSection: React.FC<GridSectionProps> = (props) => {
  const { className, items, title } = props
  return (
    <div className={`${className} ${styles.grid_section__wrapper}`}>
      <div className='content-container'>
        {
          title && <h2 className={styles.grid_section__title}>{title}</h2>
        }
        <section className={styles.grid_section}>
          {items
            ? items.map((item, index) => {
              return (
                <div className={`floating anim_delay_${index + 1}`} key={index}>
                  <GridSectionItem
                    title={item.title}
                    icon={item.icon}
                    button={props.button}
                    description={item.description}
                    className={`${styles.grid_section__item}`}
                  />
                </div>
              )
            })
            : null}
        </section>
      </div>
    </div>
  )
}

export default GridSection
