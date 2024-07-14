'use client'

import React, { useEffect, useState } from 'react'
import { SimpleButton } from '../common/Buttons'

const ConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'consent_update',
      ad_storage: 'granted',
      analytics_storage: 'granted'
    })
    localStorage.setItem('consent', 'granted')
    setShowBanner(false)
  }

  const handleReject = () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'consent_update',
      ad_storage: 'denied',
      analytics_storage: 'denied'
    })
    localStorage.setItem('consent', 'denied')
    setShowBanner(false)
  }

  if (!showBanner) {
    return null
  }

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 100,
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        padding: '10px',
        textAlign: 'center',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
      }}
    >
      <p>
        Utilizamos cookies para mejorar su experiencia en nuestro sitio. Al
        aceptar, usted acepta nuestro uso de cookies.
      </p>

      <div className='flex justify-center gap-2 py-2'>
        <SimpleButton title='Aceptar' onClick={handleAccept} />
        <SimpleButton
          title='Rechazar'
          onClick={handleReject}
          btnClassName='!bg-black !hover:bg-white !text-white !hover:text-black !hover:border-black'
        />
      </div>
    </div>
  )
}

export default ConsentBanner
