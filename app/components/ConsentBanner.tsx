'use client'

import { useEffect, useState } from 'react'

const ConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    window.gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted'
    })
    localStorage.setItem('consent', 'granted')
    setShowBanner(false)
  }

  const handleReject = () => {
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
      <button onClick={handleAccept} style={{ marginRight: '10px' }}>
        Aceptar
      </button>
      <button onClick={handleReject}>Rechazar</button>
    </div>
  )
}

export default ConsentBanner
