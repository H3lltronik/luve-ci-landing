'use client'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './GrowingBorder.module.scss'
import { motion } from 'framer-motion'

interface GrowingBorderProps {
    children: React.ReactNode,
    duration?: number
}
const defaultDuration = 1
export const GrowingBorder : React.FunctionComponent<GrowingBorderProps> = (props) => {
  const { children, duration } = props
  const _duration = duration || defaultDuration

  const ref = useRef<any>(null)
  const [width, setWidth] = useState<any>(0)
  const [height, setHeight] = useState<any>(0)

  useLayoutEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth)
      setHeight(ref.current.offsetHeight)
    }
  }, [ref])

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth)
        setHeight(ref.current.offsetHeight)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ref])

  return (
    <motion.div
      ref={ref}
      className={`${styles.border_animation_container}`}
      style={{ width: '100%', height: '100%' }}
    >
      <motion.div
        className={`${styles.border_item} ${styles.top_middle_to_right}`}
        style={{ top: 0, left: '50%', transform: 'translateX(-50%)', originX: 0 }}
        animate={{ scaleX: (width / 2) }}
        transition={{ duration: _duration }}
      />
      <motion.div
        className={`${styles.border_item} ${styles.top_middle_to_left}`}
        style={{ top: 0, left: '50%', transform: 'translateX(-50%)', originX: 1 }}
        animate={{ scaleX: (width / 2) }}
        transition={{ duration: _duration }}
      />
      <motion.div
        className={`${styles.border_item} ${styles.top_left_to_bottom}`}
        style={{ top: 0, left: 0, originY: 0 }}
        animate={{ scaleY: height }}
        transition={{ duration: _duration, delay: _duration * 1 }}
      />
      <motion.div
        className={`${styles.border_item} ${styles.top_right_to_bottom}`}
        style={{ top: 0, right: 0, originY: 0 }}
        animate={{ scaleY: height }}
        transition={{ duration: _duration, delay: _duration * 1 }}
      />
      <motion.div
        className={`${styles.border_item} ${styles.bottom_left_to_middle}`}
        style={{ bottom: 0, left: 0, originX: 0 }}
        animate={{ scaleX: (width / 2) }}
        transition={{ duration: _duration, delay: _duration * 2 }}
      />
      <motion.div
        className={`${styles.border_item} ${styles.bottom_right_to_middle}`}
        style={{ bottom: 0, right: 0, originX: 1 }}
        animate={{ scaleX: (width / 2) }}
        transition={{ duration: _duration, delay: _duration * 2 }}
      />
      {children}
    </motion.div>

  )
}
// export const GrowingBorder : React.FunctionComponent<GrowingBorderProps> = (props) => {
//   const { children } = props
//   return (
//     <div className={`${styles.border_animation_container}`}>
//       <div className={`${styles.border_item} ${styles.top_middle_to_right}`} />
//       <div className={`${styles.border_item} ${styles.top_middle_to_left}`} />

//       <div className={`${styles.border_item} ${styles.top_left_to_bottom}`} />
//       <div className={`${styles.border_item} ${styles.top_right_to_bottom}`} />

//       <div className={`${styles.border_item} ${styles.bottom_left_to_middle}`} />
//       <div className={`${styles.border_item} ${styles.bottom_right_to_middle}`} />
//       {children}
//     </div>

//   )
// }
