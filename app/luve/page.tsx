'use client'
import React from 'react'
import styles from './LuvePage.module.scss'
import image from '../../assets/pexels-christina-morillo-1181421.jpg'
import horizontalModuleStyles from './HorizontalModule/HorizontalModule.module.scss'
import homeStyles from '../Page.module.scss'
import ContactSection from '../home/ContactSection/ContactSection'
import HorizontalModule from './HorizontalModule/HorizontalModule'

export default function LuvePage () {
  return (
    <main>
      <header className={styles.luve_page__header} style={{ backgroundImage: `url(${image.src})` }}>
        <h1>
          <span className={styles.luve_page__header__subtitle}>Luve</span>
          <span className={styles.luve_page__header__title}><span className='red'>C</span>onsultoría <span className='red'>I</span>ntegral</span>
        </h1>
        <div className={styles.luve_page__header___overlay} />
      </header>

      <div className='content-container'>
        <HorizontalModule />
      </div>

      <div className='content-container'>

        <div className={`${styles.luve_page__row} position_relative`}>
          <div className={`${horizontalModuleStyles.horizontal_module__red_dot} pulse`} />

          <div className={styles.luve_page__row__item}>
            <div className={styles.luve_page__underlined_title}>
              <h2>¿Quienes somos?</h2>
            </div>
            <p>Somos un Grupo de Profesionales en diferentes materias, con el objetivo de apoyar a nuestros clientes en su crecimiento personal o empresarial, por medio de servicios y soluciones financieras, contables, de tecnología y bienestar laboral a la medida.</p>
          </div>
          <div className={styles.luve_page__row__item}>
            <div className={styles.luve_page__underlined_title}>
              <h2>¿QUE NOS IMPULSA?</h2>
            </div>
            <p>Convertirnos en la consultoría financiera, contable y de servicios de IT más confiable, ágil y grande de México, contribuyendo al crecimiento y exitoso desarrollo de las pymes en México. “materializamos sueños, para alcanzar tus metas”</p>
          </div>
          <div className={styles.luve_page__row__item}>
            <div className={styles.luve_page__underlined_title}>
              <h2>¿A DÓNDE QUEREMOS LLEGAR?</h2>
            </div>
            <p>Queremos ser la primera y mejor opción para las pymes al pensar en financiamiento, asesoría y gestión contable y de servicios de IT. <br /><br />Conservando nuestro sentido del honor, humanidad y confianza, por sobre cualquier negocio, Buscando ofrecer solo las mejores opciones en beneficio y crecimiento de nuestros clientes; las PyMEs de México.</p>
          </div>
        </div>

        <div className={styles.luve_page__values__container}>
          <div className={`${styles.luve_page__underlined_title} ${styles.luve_page__values}`}>
            <h2>VALORES</h2>
          </div>
        </div>
        <div className={`${styles.luve_page__row} ${styles.luve_page__values__row} position_relative`}>

          <div className={`${styles.luve_page__row__item} position_relative`}>
            <div className={`${homeStyles.home_page__contact_circle}`} style={{ margin: 'auto' }} />
            <div className={styles.luve_page__title}>
              <h2>Compromiso</h2>
            </div>
            <p>Con las necesidades reales de nuestros clientes.</p>
          </div>
          <div className={`${styles.luve_page__row__item} position_relative`}>
            <div className={`${homeStyles.home_page__contact_circle}`} style={{ margin: 'auto' }} />
            <div className={styles.luve_page__title}>
              <h2>Empatia</h2>
            </div>
            <p>Hacia la necesidad real de nuestros clientes, Vemos primero que la conveniencia sea real para el cte. antes de otorgarle opciones de crédito y servicio.</p>
          </div>
          <div className={`${styles.luve_page__row__item} position_relative`}>
            <div className={`${homeStyles.home_page__contact_circle}`} style={{ margin: 'auto' }} />
            <div className={styles.luve_page__title}>
              <h2>Honestidad</h2>
            </div>
            <p>Acerca de todos nuestros procesos, costo de servicio y de nuestros socios de negocio.</p>
          </div>

        </div>
      </div>

      <div className='content-container'>
        <ContactSection />
      </div>
    </main>
  )
}
