'use client'
import Script from 'next/script'
import React, { useEffect } from 'react'

interface GoogleAnalyticsProps {
  trackingId: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ trackingId }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && !(window as any).gtag) {
      window.dataLayer = window.dataLayer || []
      function gtag (...args: any[]) {
        (window as any).dataLayer.push(args)
      }
      (window as any).gtag = gtag
      gtag('js', new Date())
      gtag('config', trackingId)
    }
  }, [trackingId])

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${trackingId}');
          `
        }}
      />
    </>
  )
}

export default GoogleAnalytics
