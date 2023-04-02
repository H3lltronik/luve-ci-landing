'use client'
import * as React from 'react'
import styles from './Buttons.module.scss'

// eslint-disable-next-line react/display-name
const SimpleButton = React.forwardRef<any>((props: any, ref) => {
  return (
    <div
      data-aos={props['data-aos']}
      data-aos-offset={props['data-aos-offset']}
      data-aos-delay={props['data-aos-delay']}
      ref={ref}
      className={`${props.className} ${styles.simple_button__wrapper}`}
      onClick={props.onClick}
    >
      <button className={styles.simple_button}>
        <p>CONOCE MAS</p>
      </button>
    </div>
  )
})

export default SimpleButton
