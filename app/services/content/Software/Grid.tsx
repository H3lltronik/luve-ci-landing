import * as Icons from '../../../common/Icons'
import { GridSection } from '../../../home'
import luveStyles from '../../../luve/LuvePage.module.scss'

const gridItems = [
  {
    title: 'Sitios web (Landing, Portafolios, Blogs, etc)',
    description: '',
    icon: <Icons.World3Icon />
  },
  {
    title: 'Tiendas en linea',
    description: '',
    icon: <Icons.ShopIcon />
  },
  {
    title: <div>Aplicaciones <br /> de escritorio y moviles</div>,
    description: '',
    icon: <Icons.MobileIcon />
  },
  {
    title: 'ERPs y modulos empresariales (Facturacion)',
    description: '',
    icon: <Icons.LaptopIcon />
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
