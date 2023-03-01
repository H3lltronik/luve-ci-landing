'use client'
import * as React from 'react'
import styles from './Buttons.module.scss'
import * as Icons from '../Icons'

type IconButtonProps = {
  icon: 'RightArrowIcon' | 'WordIcon';
  className?: string;
};
// eslint-disable-next-line react/display-name
const IconButton = React.forwardRef<any, IconButtonProps>((props, ref) => {
  const getIcon = () => {
    let icon: React.ReactNode | null = null

    if (props.icon === 'RightArrowIcon') {
      icon = <Icons.RightArrowIcon />
    } else if (props.icon === 'WordIcon') {
      icon = <Icons.WordIcon />
    }

    // if (icon !== null) { icon.props.className = styles.icon_button__icon }

    return icon
  }

  return (
    <div
      ref={ref}
      className={`${props.className} ${styles.icon_button__wrapper}`}
    >
      <button className={styles.icon_button}>
        {getIcon()}
      </button>
    </div>
  )
})

export default IconButton
