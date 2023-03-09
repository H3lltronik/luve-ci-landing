import * as React from 'react'
import styles from './GridSection.module.scss'
import * as Icons from '../../common/Icons'
import GridSectionItem from './GridSectionItem'

const items = [
  {
    title: 'Solicitar Informacion',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    icon: <Icons.InfoIcon />
  },
  {
    title: 'Integracion de Expediente',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    icon: <Icons.BoardTableIcon />
  },
  {
    title: 'Análisis y Propuesta',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    icon: <Icons.GraphIcon />
  },
  {
    title: 'Formalización',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
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
              <div className={`floating anim_delay_${index + 1}`} key={index}>
                <GridSectionItem
                  title={item.title}
                  icon={item.icon}
                  className={`${styles.grid_section__item}`}
                />
              </div>
            )
          })}
        </section>
      </div>
    </div>
  )
}

export default GridSection
