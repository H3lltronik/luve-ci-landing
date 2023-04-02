'use client'

import { useEffect } from 'react'
import { IsClientCtxProvider, useIsClient } from '../../utils/hooks/IsClient'

const removePreloader = () => {
  // fade out preloader using javascript animate and remove from DOM
  const preloader = document.querySelector('.preloader')
  if (preloader) {
    preloader.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 200,
      fill: 'forwards'
    })
    setTimeout(() => {
      preloader.remove()
    }, 200)
  }
}

const Preloader: any = () => {
  return (
    <IsClientCtxProvider>
      <Contents />
    </IsClientCtxProvider>
  )
}

const Contents = () => {
  const isClient = useIsClient()

  useEffect(() => {
    if (!isClient) return
    window.addEventListener('load', removePreloader)
    // Add a interval to check when the page is loaded
    const interval = setInterval(() => {
      if (document.readyState === 'complete') {
        removePreloader()
        clearInterval(interval)
      }
    }, 100)

    return () => {
      window.removeEventListener('load', removePreloader)
      clearInterval(interval)
    }
  }, [isClient])

  return (
    <div className='preloader'>
      <div className='preloader_pulse pulse-relative' />
    </div>
  )
}

export default Preloader
