import React from 'react'
import styles from './SoftwareContent.module.scss'

interface TitleBoldLightProps {
    title: string
    subtitle: string
}
export const TitleBoldLight: React.FunctionComponent<TitleBoldLightProps> = (props) => {
  const { title, subtitle } = props

  return (
    <div className={styles.software_content__row}>
      <div className={styles.software_content__title__container}>
        <div className={`${styles.software_content__red_dot} pulse-relative`} />
        <h2 className={styles.software_content__title}>
          <span className={styles.software_content__title__light}>{title}</span><br />
          <span className={styles.software_content__title__bold}>{subtitle}</span>
        </h2>
      </div>
    </div>
  )
}
