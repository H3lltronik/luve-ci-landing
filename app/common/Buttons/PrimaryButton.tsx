import * as React from 'react'
import styles from './Buttons.module.scss'
import { RightArrowIcon } from '../Icons'

type PrimaryButtonProps = {
  className?: string
  text: string
}
const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <div className={`${styles['primary-button_wrapper']} ${props.className}`}>
      <button className={styles['primary-button']}>
        <p>{props.text}</p>
      </button>
      <div className={styles['primary-button_icon_wrapper']}>
        <div className={styles['primary-button_icon']}>
          <RightArrowIcon />
        </div>
      </div>
    </div>
  )
}

export default PrimaryButton
