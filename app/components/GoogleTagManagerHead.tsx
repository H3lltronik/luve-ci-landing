'use client'

import Script from 'next/script'
import React from 'react'

interface GoogleTagManagerHeadProps {
  gtmId: string;
}

const GoogleTagManagerHead: React.FC<GoogleTagManagerHeadProps> = ({ gtmId }) => {
  return (
    <>
      <Script
        id='gtm-head'
        strategy='beforeInteractive'
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `
        }}
      />
      <Script
        id='consent-init'
        strategy='worker'
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
              });
            `
        }}
      />
    </>
  )
}

export default GoogleTagManagerHead
