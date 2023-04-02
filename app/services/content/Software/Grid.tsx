import React from 'react'
import { GridSection } from '../../../home'
import * as Icons from '../../../common/Icons'
import luveStyles from '../../../luve/LuvePage.module.scss'

const gridItems = [
  {
    title: 'Sitios web',
    description: '',
    icon: <Icons.InfoIcon />
  },
  {
    title: <div>Aplicaciones <br /> de escritorio</div>,
    description: '',
    icon: <Icons.BoardTableIcon />
  },
  {
    title: 'Aplicaciones móviles',
    description: '',
    icon: <Icons.GraphIcon />
  }
]

export default function Grid () {
  const grid1Title = (
    <div className={luveStyles.luve_page__underlined_title}>
      <h2>SOLUCIONES EN</h2>
    </div>
  )

  return (
    <GridSection items={gridItems} title={grid1Title} hover={false} />
  )
}
