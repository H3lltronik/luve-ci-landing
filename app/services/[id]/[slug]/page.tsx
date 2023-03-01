import styles from './Page.module.scss'
import ServicesSlider from '../../ServicesSlider'
import { Image } from '../../../../types'
import * as LottieIcons from './AnimatedIcons'

type Service = {
  id: Number;
  title: string;
  images: Array<Image>;
};
const loadService = async (id: string): Promise<Service | undefined> => {
  const promise = fetch(`${process.env.BASE_FETCH_URL}/data/services.json`, {
    next: {
      revalidate: 60
    }
  })
  const services: Service[] = await promise.then((res) => res.json())
  const service = services.find((service) => Number(service.id) === Number(id))
  return service
}

export default async function ServicesPage (props: any) {
  const { params } = props
  const service = await loadService(params.id)

  if (!service) return (<div>Service not found</div>)

  return (
    <main className={styles.services_page}>
      <div className={`${styles.services_page__container} content-container`}>
        <div className={styles.services_page__header}>
          <ServicesSlider images={service.images} className={styles.services_page__slider} />
          <div className={styles.services_page__header_content}>
            <h1 className={styles.services_page__header_title}>CREDITO AUTOMOTRIZ</h1>
            <h3 className={styles.services_page__header_subtitle}>Dirigido a:</h3>
            <ul className={styles.services_page__header_list}>
              <li>Asalariados</li>
              <li>Dueños de micro-negocios</li>
              <li>Pymes</li>
            </ul>
          </div>
        </div>

        <div className={styles.services_page__content}>
          <div className={styles.services_page__content_row}>
            <h2 className={styles.underlined_title}>DESCRIPCION</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
              <br /><br />
              Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
            </p>
          </div>

          <div className={styles.services_page__content_row}>
            <h2 className={styles.underlined_title}>CARACTERISTICAS</h2>
            <div className={styles.services_page__content_grid}>
              <div className={styles.services_page__content_grid_item}>
                <LottieIcons.GainsAnim />
                <h3>Unidades Nuevas y Seminuevas(Hasta 5 años)</h3>
              </div>
              <div className={styles.services_page__content_grid_item}>
                <LottieIcons.WalletAnim />
                <h3>Unidades Nuevas y Seminuevas(Hasta 5 años)</h3>
              </div>
              <div className={styles.services_page__content_grid_item}>
                <LottieIcons.NewShineAnim />
                <h3>Unidades Nuevas y Seminuevas(Hasta 5 años)</h3>
              </div>
              <div className={styles.services_page__content_grid_item}>
                <LottieIcons.WorkAnim />
                <h3>Unidades Nuevas y Seminuevas(Hasta 5 años)</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
