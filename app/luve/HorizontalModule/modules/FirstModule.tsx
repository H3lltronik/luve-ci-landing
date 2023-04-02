import React from 'react'
import { Pace, WindupChildren } from 'windups'
import styles from '../HorizontalModule.module.scss'
import image1 from '../../../../assets/images/modules/pexels-andrea-piacquadio-941555.webp'

type ModuleProps = {
}
export default function FirstModule (props: ModuleProps) {
  return (
    <div
      className={`${styles.horizontal_module__section} ${styles.horizontal_module__section_1} z_index_2`}
    >
      <div className={styles.horizontal_module__section__content}>
        <div
          className={styles.horizontal_module__section__text_content}
        >
          <WindupChildren>
            <Pace getPace={() => 5}>
              <p className={styles.horizontal_module__section__text_3}>
                El difícil acceso a los diversos instrumentos de
                financiamiento para toda
              </p>
              <p className={styles.horizontal_module__section__text_3}>
                PyMes en México, demanda tiempo, dedicación y acudir a
                diversas instituciones.
              </p>
            </Pace>
          </WindupChildren>
        </div>
      </div>

      <div
        className={`${styles.horizontal_module__section__image} position_relative`}
      >
        <img src={image1.src} className='fade_up' alt='' />
        <div className='luve_logo_watermark' />
      </div>
    </div>
  )
}
