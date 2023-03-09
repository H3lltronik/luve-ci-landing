import React from 'react'
import { Pace, WindupChildren } from 'windups'
import styles from '../HorizontalModule.module.scss'
import image5 from '../../../../assets/images/modules/pexels-pixabay-327540.webp'

type ModuleProps = {
  image: string
}
export default function FifthModule (props: ModuleProps) {
  return (
    <div
      className={`${styles.horizontal_module__section} ${styles.horizontal_module__section_1} z_index_2`}
    >
      <div className={styles.horizontal_module__section__content}>
        <div
          className={styles.horizontal_module__section__text_content}
        >
          <WindupChildren>
            <Pace getPace={() => 20}>
              <p className={styles.horizontal_module__section__text_3}>
                Cada empresa es única y requiere un instrumento a su medida.
              </p>
              <p className={styles.horizontal_module__section__text_2}>
                ACERCATE, TE ASESORAMOS DE MANERA INTEGRAL
              </p>
            </Pace>
          </WindupChildren>
        </div>
      </div>

      <div
        className={`${styles.horizontal_module__section__image} position_relative`}
      >
        <img src={image5.src} className='fade_up' alt='' />
        <div className='luve_logo_watermark' />
      </div>
    </div>
  )
}
