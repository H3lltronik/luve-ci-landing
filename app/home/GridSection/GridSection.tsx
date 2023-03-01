import * as React from 'react'
import styles from './GridSection.module.scss'
import * as Icons from '../../common/Icons'
import GridSectionItem from './GridSectionItem'

const items = [
  {
    title: 'Solicitar Informacion',
    icon: <Icons.InfoIcon />
  },
  {
    title: 'Integracion de Expediente',
    icon: <Icons.BoardTableIcon />
  },
  {
    title: 'Análisis y Propuesta',
    icon: <Icons.GraphIcon />
  },
  {
    title: 'Formalización',
    icon: <Icons.GroupIcon />
  }
]

const GridSection = (props: any) => {
  return (
    <div className={styles.grid_section__wrapper}>
      <div className='content-container'>
        <h2 className={styles.grid_section__title}>Proc<span className='red'>e</span>so de Financiami<span className='red'>e</span>nto</h2>
        <section className={styles.grid_section}>
          {items.map((item, index) => {
            return (
              <GridSectionItem
                title={item.title}
                icon={item.icon}
                key={index}
                className={styles.grid_section__item}
              />
            )
          })}
        </section>
      </div>
    </div>
  )
}

export default GridSection
