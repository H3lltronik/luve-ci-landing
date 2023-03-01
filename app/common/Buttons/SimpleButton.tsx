'use client'
import * as React from 'react'
import styles from './Buttons.module.scss'

// eslint-disable-next-line react/display-name
const SimpleButton = React.forwardRef<any>((props: any, ref) => {
  return (
    <div
      ref={ref}
      className={`${props.className} ${styles.simple_button__wrapper}`}
    >
      <button className={styles.simple_button}>
        <p>CONOCE MAS</p>
      </button>
    </div>
  )
})

export default SimpleButton
