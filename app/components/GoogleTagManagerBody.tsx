'use client'

import React from 'react'

interface GoogleTagManagerBodyProps {
  gtmId: string;
}

const GoogleTagManagerBody: React.FC<GoogleTagManagerBodyProps> = ({ gtmId }) => {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height='0'
        width='0'
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}

export default GoogleTagManagerBody
