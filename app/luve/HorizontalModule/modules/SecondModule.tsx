import React from 'react'
import { Pace, WindupChildren } from 'windups'
import styles from '../HorizontalModule.module.scss'
import image2 from '../../../../assets/images/modules/pexels-alena-darmel-7710218.webp'

type ModuleProps = {
}
export default function SecondModule (props: ModuleProps) {
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
                Nos dedicamos a la asesoría integral, para ayudar a los
                empresarios a enfocar
              </p>
              <p className={styles.horizontal_module__section__text_3}>
                sus esfuerzos en una sola dirección y presentarle
              </p>
              <p className={styles.horizontal_module__section__text_1}>
                la opción mas adecuada.
              </p>
            </Pace>
          </WindupChildren>
        </div>
      </div>

      <div
        className={`${styles.horizontal_module__section__image} position_relative`}
      >
        <img src={image2.src} className='fade_up' alt='' />
        <div className='luve_logo_watermark' />
      </div>
    </div>
  )
}
