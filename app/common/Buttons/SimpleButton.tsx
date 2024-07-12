'use client'
import * as React from 'react'
import styles from './Buttons.module.scss'

interface SimpleButtonProps {
  className?: string;
  onClick?: () => void;
  'data-aos'?: string;
  'data-aos-offset'?: string;
  'data-aos-delay'?: string;
  title: string;
  variant?: 'primary' | 'danger';
  btnClassName?: string;
}

const SimpleButton = React.forwardRef<HTMLDivElement, SimpleButtonProps>((props, ref) => {
  const { className, onClick, 'data-aos': dataAos, 'data-aos-offset': dataAosOffset, 'data-aos-delay': dataAosDelay } = props

  return (
    <div
      data-aos={dataAos}
      data-aos-offset={dataAosOffset}
      data-aos-delay={dataAosDelay}
      ref={ref}
      className={`${className || ''} ${styles.simple_button__wrapper}`}
    >
      <button className={`${styles.simple_button} ${props.btnClassName}`} onClick={onClick}>
        <p>{props.title}</p>
      </button>
    </div>
  )
})

SimpleButton.displayName = 'SimpleButton'

export default SimpleButton
