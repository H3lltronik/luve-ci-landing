import * as React from 'react'
import styles from './Buttons.module.scss'
import { RightArrowIcon } from '../Icons'

type PrimaryButtonProps = {
  className?: string
  text: string
  onClick?: () => void
  htmlType?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}
const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <div className={`${styles['primary-button_wrapper']} ${props.className} ${props.disabled ? styles['primary-button__disabled'] : ''}`}>
      <button className={styles['primary-button']} onClick={props.disabled ? () => {} : props.onClick} type={props.htmlType} disabled={props.disabled}>
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
