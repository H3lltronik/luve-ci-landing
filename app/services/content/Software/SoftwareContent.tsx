import React from 'react'
import styles from './SoftwareContent.module.scss'
import { LottieIcon } from '../../[id]/[slug]/AnimatedIcons'
import Grid from './Grid'
import { GrowingBorder } from '../../../common/Animation/GrowingBorder/GrowingBorder'
import { InViewComponent } from '../../../common/Animation/InViewComponent'
import { ServicesSection } from '../../../home'
import allServices from '../../../../assets/data/services.json'

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
          <div className={`${styles.software_content__red_dot} pulse-relative`} />
          <h1 className={styles.software_content__title}>
            <span className={styles.software_content__title__light}>Realiza tu</span><br />
            <span className={styles.software_content__title__bold}>Software Empresarial</span>
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

      <br /><br /><br /><br /><br /><br />
      <div className={styles.software_content__row}>
        <div className={styles.software_content__title__container}>
          <div className={`${styles.software_content__red_dot} pulse-relative`} />
          <h2 className={styles.software_content__title}>
            <span className={styles.software_content__title__light}>¿Negocio complejo?</span><br />
            <span className={styles.software_content__title__bold}>No hay problema</span>
          </h2>
        </div>
      </div>

      <div className={`${styles.software_content__experts} content-container`}>
        <InViewComponent>
          <GrowingBorder>
            <p className={styles.software_content__experts__text}>
              <span>Con nuestro grupo de ingenieros, expertos en vanguardia tecnológica, <br />somos capaces de ofrecerte un</span>
            </p>
            <p className={styles.software_content__experts__text_bold}>SISTEMA A TU MEDIDA</p>
          </GrowingBorder>
        </InViewComponent>
      </div>

      <div className='content-container' style={{ overflow: 'hidden' }}>
        <ServicesSection services={softwareServices?.items} />
      </div>

    </section>
  )
}
