import React from 'react'
import styles from './LuvePage.module.scss'
import image from '../../assets/pexels-christina-morillo-1181421.jpg'
import horizontalModuleStyles from './HorizontalModule/HorizontalModule.module.scss'
import homeStyles from '../Page.module.scss'
import ContactSection from '../home/ContactSection/ContactSection'
import HorizontalModule from './HorizontalModule/HorizontalModule'
import { IsClientCtxProvider } from '../utils/hooks/IsClient'
import InnerPageHeader from '../common/InnerPageHeader/InnerPageHeader'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata (
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: 'Luve Consultoria Integral | Acerca de nosotros  ',
    description: 'Somos un Grupo de Profesionales en diferentes materias, con el objetivo de apoyar a nuestros clientes en su crecimiento personal o empresarial, por medio de servicios y soluciones financieras, contables, de tecnología y bienestar laboral a la medida.',
    keywords: 'luve, luve ci, luve consultoria integral, luve consultoria, luve acerca de nosotros, luve quienes somos, luve a donde queremos llegar, luve que nos impulsa, luve valores, luve compromiso, luve empatia, luve honestidad, luve contacto'
  }
}

export default function LuvePage () {
  return (
    <main>
      <InnerPageHeader image={{ src: image.src, alt: '' }} title='Luve' subtitle='Consultoria Integral' />

      <div className='content-container'>
        <IsClientCtxProvider>
          <HorizontalModule />
        </IsClientCtxProvider>
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
              <h2>¿A DÓNDE QUEREMOS LLEGAR?</h2>
            </div>
            <p>Queremos ser la primera y mejor opción para las pymes al pensar en financiamiento, asesoría y gestión contable y de servicios de IT. <br /><br />Conservando nuestro sentido del honor, humanidad y confianza, por sobre cualquier negocio, Buscando ofrecer solo las mejores opciones en beneficio y crecimiento de nuestros clientes; las PyMEs de México.</p>
          </div>
          <div className={styles.luve_page__row__item}>
            <div className={styles.luve_page__underlined_title}>
              <h2>¿QUE NOS IMPULSA?</h2>
            </div>
            <p>Convertirnos en la consultoría financiera, contable y de servicios de IT más confiable, ágil y grande de México, contribuyendo al crecimiento y exitoso desarrollo de las pymes en México. “materializamos sueños, para alcanzar tus metas”</p>
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
            <p className='mt-16 md:mt-20'>Con las necesidades reales de nuestros clientes.</p>
          </div>
          <div className={`${styles.luve_page__row__item} position_relative`}>
            <div className={`${homeStyles.home_page__contact_circle}`} style={{ margin: 'auto' }} />
            <div className={styles.luve_page__title}>
              <h2>Empatia</h2>
            </div>
            <p className='mt-16 md:mt-20'>Hacia la necesidad real de nuestros clientes, Vemos primero que la conveniencia sea real para el cte. antes de otorgarle opciones de crédito y servicio.</p>
          </div>
          <div className={`${styles.luve_page__row__item} position_relative`}>
            <div className={`${homeStyles.home_page__contact_circle}`} style={{ margin: 'auto' }} />
            <div className={styles.luve_page__title}>
              <h2>Honestidad</h2>
            </div>
            <p className='mt-16 md:mt-20'>Acerca de todos nuestros procesos, costo de servicio y de nuestros socios de negocio.</p>
          </div>

        </div>
      </div>

      <div className='content-container'>
        <ContactSection />
      </div>
    </main>
  )
}
