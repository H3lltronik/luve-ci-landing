import React from 'react'
import styles from './SkeletonBox.module.css'

const SkeletonBox = ({ height, width }: { height: string; width: string }) => (
  <div className={styles.skeleton} style={{ height, width }} />
)

export default SkeletonBox
