import React from 'react'
import { Pace, WindupChildren } from 'windups'
import styles from '../HorizontalModule.module.scss'
import image4 from '../../../../assets/images/modules/pexels-christina-morillo-1181421.webp'

type ModuleProps = {
}
export default function FourthModule (props: ModuleProps) {
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
                Nuestra asesoría contable y fiscal, <br />te ayudara a encontrar el camino y obtener
                <br /> la alternativa adecuada que requiere tu empresa.
              </p>
            </Pace>
          </WindupChildren>
        </div>
      </div>

      <div
        className={`${styles.horizontal_module__section__image} position_relative`}
      >
        <img src={image4.src} className='fade_up' alt='' />
        <div className='luve_logo_watermark' />
      </div>
    </div>
  )
}
