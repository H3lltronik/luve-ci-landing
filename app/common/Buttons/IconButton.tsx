'use client'
import * as React from 'react'
import styles from './Buttons.module.scss'
import * as Icons from '../Icons'

type IconButtonProps = {
  icon: 'RightArrowIcon' | 'WordIcon' | 'InfoIcon' | 'GroupIcon' | 'GraphIcon' | 'BoardTableIcon' | 'WhatsAppIcon' | 'PhoneIcon' | 'ArrobaIcon' | 'WhatsAppIcon2' | 'TwitterIcon' | 'LinkedInIcon' | 'HamburgerIcon';
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
    } else if (props.icon === 'InfoIcon') {
      icon = <Icons.InfoIcon />
    } else if (props.icon === 'GroupIcon') {
      icon = <Icons.GroupIcon />
    } else if (props.icon === 'GraphIcon') {
      icon = <Icons.GraphIcon />
    } else if (props.icon === 'BoardTableIcon') {
      icon = <Icons.BoardTableIcon />
    } else if (props.icon === 'WhatsAppIcon') {
      icon = <Icons.WhatsAppIcon />
    } else if (props.icon === 'WhatsAppIcon2') {
      icon = <Icons.WhatsAppIcon2 />
    } else if (props.icon === 'PhoneIcon') {
      icon = <Icons.PhoneIcon />
    } else if (props.icon === 'ArrobaIcon') {
      icon = <Icons.ArrobaIcon />
    } else if (props.icon === 'TwitterIcon') {
      icon = <Icons.TwitterIcon />
    } else if (props.icon === 'LinkedInIcon') {
      icon = <Icons.LinkedInIcon />
    } else if (props.icon === 'HamburgerIcon') {
      icon = <Icons.HamburgerIcon />
    }

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
