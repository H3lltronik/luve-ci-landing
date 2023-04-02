import React from 'react'
import { GridSection } from '../../../home'
import * as Icons from '../../../common/Icons'
import luveStyles from '../../../luve/LuvePage.module.scss'

const gridItems = [
  {
    title: 'Optimizacion impositiva',
    description: '',
    icon: <Icons.InfoIcon />
  },
  {
    title: <div>Estrategia <br />fiscal <br />adaptable</div>,
    description: '',
    icon: <Icons.BoardTableIcon />
  },
  {
    title: 'Experiencia y resultados',
    description: '',
    icon: <Icons.GraphIcon />
  },
  {
    title: 'Calidad y compromiso profesional',
    description: '',
    icon: <Icons.GroupIcon />
  }
]

export default function Grid () {
  const grid1Title = (
    <div className={luveStyles.luve_page__underlined_title}>
      <h2>PROPORCIONAMOS</h2>
    </div>
  )

  return (
    <GridSection items={gridItems} title={grid1Title} hover={false} />
  )
}
