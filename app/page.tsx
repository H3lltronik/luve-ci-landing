import { SimpleButton } from './common/Buttons'
import { ServicesSection, GridSection } from './home'
import styles from './Page.module.scss'

export default function HomePage (options: any) {
  return (
    <main>
      <div className={styles.home_page__video_hero_wrapper}>
        <div className={styles.home_page__video_hero}>
          <video loop autoPlay muted>
            <source src='/hero-video.webm' />
          </video>
        </div>
        <div className={styles.home_page__video_hero_content}>
          <h1>Somos Consultoria Integral</h1>

          <h2>Ofrecemos soluciones a todas<br /> las necesidades financieras</h2>

          <SimpleButton className={styles.home_page__video_hero_button} />
        </div>
      </div>

      <div className='content-container'>
        <ServicesSection />
      </div>
      <GridSection />
    </main>
  )
}
