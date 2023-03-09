import React from 'react'
import styles from './LuvePage.module.scss'
import image from '../../assets/pexels-christina-morillo-1181421.jpg'
import { HorizontalModule } from './HorizontalModule/HorizontalModule'

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
    </main>
  )
}
