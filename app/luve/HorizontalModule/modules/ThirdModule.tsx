import React from 'react'
import { Pace, WindupChildren } from 'windups'
import styles from '../HorizontalModule.module.scss'
import image3 from '../../../../assets/images/modules/pexels-the-coach-space-2977547.webp'

type ModuleProps = {
  image: string
}
export default function ThirdModule (props: ModuleProps) {
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
                15 años de experiencia nos respaldan.
              </p>
              <p className={styles.horizontal_module__section__text_3}>
                Arrendamiento Puro para todo tipo de activos, <br />
                Líneas de Crédito para capital de trabajo, <br />
                Crédito Automotriz y diversos instrumentos financieros{' '}
                <br />
                que se adecúen a cada proyecto
              </p>
            </Pace>
          </WindupChildren>
        </div>
      </div>

      <div
        className={`${styles.horizontal_module__section__image} position_relative`}
      >
        <img src={image3.src} className='fade_up' alt='' />
        <div className='luve_logo_watermark' />
      </div>
    </div>
  )
}
