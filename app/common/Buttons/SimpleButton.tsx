import * as React from 'react'
import styles from './Buttons.module.scss'

const SimpleButton = (props: any) => {
  return (
    <div className={`${props.className} ${styles.simple_button__wrapper}`}>
      <button className={styles.simple_button}>
        <p>CONOCER MAS</p>
      </button>
    </div>
  )
}

export default SimpleButton
