'use client'
import React, { useState, useEffect, FunctionComponent } from 'react'
import { WindupChildren, Pause } from 'windups'

interface DelayedWindupProps {
  delay: number;
  children: React.ReactNode;
}
const DelayedWindup: FunctionComponent<DelayedWindupProps> = (props) => {
  const { delay } = props
  const [showWindup, setShowWindup] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWindup(true)
    }, delay)

    return () => clearTimeout(timeout)
  }, [delay])

  return showWindup
    ? (
      <WindupChildren>
        {props.children}
        <Pause ms={delay} />
      </WindupChildren>
      )
    : null
}

export default DelayedWindup
