import dynamic from 'next/dynamic'
import allServices from '../../../../assets/data/services.json'
import { ServicesSection } from '../../../home'
import { LottieIcon } from '../../[id]/[slug]/AnimatedIcons'
import Grid from './Grid'
import styles from './SoftwareContent.module.scss'

const InViewComponent = dynamic(() => import('../../../common/Animation/InViewComponent').then((mod) => mod.InViewComponent))
const GrowingBorder = dynamic(() => import('../../../common/Animation/GrowingBorder/GrowingBorder').then((mod) => mod.GrowingBorder))

const softwareServices = allServices.find((service) => service.id === '2')

if (softwareServices) {
  for (const softwareService of softwareServices?.items) {
    Object.assign(softwareService, { image: softwareService.images[0] })
  }
}

export default function SoftwareContent () {
  return (
    <section className={styles.software_content}>
      <div className={`${styles.software_content__top} content-container`}>
        <div className={styles.software_content__title__container}>
          <div
            className={`${styles.software_content__red_dot} pulse-relative`}
          />
          <h1 className={styles.software_content__title}>
            <div className={styles.software_content__title__light}>
              Realiza tu
            </div>
            <div className={styles.software_content__title__bold}>
              Software Empresarial
            </div>
          </h1>

          <h2 className={`${styles.software_content__subtitle} red`}>
            Confiable
            <span className='black'> - </span>
            Funcional
            <span className='black'> - </span>
            Mantenible
          </h2>
        </div>

        <div className={styles.software_content__anim_icon}>
          <LottieIcon icon='SoftwareAnim' />
        </div>
        <p className={styles.software_content__small}>
          <i>Digitaliza tus procesos para maximizar tus productividad</i>
        </p>
      </div>

      <div className={styles.software_content__row}>
        <Grid />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.software_content__row}>
        <div className={styles.software_content__title__container}>
          <div
            className={`${styles.software_content__red_dot} pulse-relative`}
          />
          <h2 className={styles.software_content__title}>
            <span className={styles.software_content__title__light}>
              ¿Negocio complejo?
            </span>
            <br />
            <span className={styles.software_content__title__bold}>
              No hay problema
            </span>
          </h2>
        </div>
      </div>

      <div className={`${styles.software_content__experts} content-container`}>
        <InViewComponent>
          <GrowingBorder duration={0.3}>
            <div className='p-3'>
              <p className={styles.software_content__experts__text}>
                <span>
                  Con nuestro grupo de ingenieros, expertos en vanguardia
                  tecnológica, <br />
                  somos capaces de ofrecerte un
                </span>
              </p>
              <p className={styles.software_content__experts__text_bold}>
                SISTEMA A TU MEDIDA
              </p>
            </div>
          </GrowingBorder>
        </InViewComponent>
      </div>

      <div className='content-container' style={{ overflow: 'hidden' }}>
        <ServicesSection
          type='subservices'
          subservices={softwareServices?.items}
        />
      </div>
    </section>
  )
}
