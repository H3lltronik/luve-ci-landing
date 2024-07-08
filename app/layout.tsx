import '../styles/globals.css'
// eslint-disable-next-line camelcase
import { Roboto_Slab as roboto_Slab } from '@next/font/google'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
import AOSInitializer from './common/Animation/AOS'
import { Footer } from './common/Footer'
import Preloader from './common/Preloader/Preloader'
import FacebookPixel from './components/FacebookPixel'
import { URLContactDialog } from './components/URLContactDialog'
import GoogleAnalytics from './components/GoogleAnalytics'
import GoogleTagManagerHead from './components/GoogleTagManagerHead'
import GoogleTagManagerBody from './components/GoogleTagManagerBody'
import ConsentBanner from './components/ConsentBanner'

const Header = dynamic(() => import('./common/Header/Header'), { ssr: false, loading: () => <p>Loading...</p> })

const font = roboto_Slab({
  weight: ['100', '200', '400'],
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  display: 'swap'
})

export default function RootLayout ({
  children
}: {
  children: React.ReactNode;
}) {
  const FACEBOOK_PIXEL_ID = '1991900941244667'
  const GOOGLE_ANALYTICS_TRACKING_ID = 'G-HM54QYM96L'
  const GOOGLE_TAG_MANAGER_ID = 'GTM-P38WG78P'

  return (
    <html data-theme='theme-light' lang='es'>
      <head />
      <body className={font.variable}>
        <AOSInitializer />
        <Preloader />
        <URLContactDialog />

        <Suspense fallback={<>Loading...</>}>
          <Header />
          {children}
          <Footer />

          <FacebookPixel pixelId={FACEBOOK_PIXEL_ID} />
          <GoogleAnalytics trackingId={GOOGLE_ANALYTICS_TRACKING_ID} />
          <GoogleTagManagerHead gtmId={GOOGLE_TAG_MANAGER_ID} />
          <GoogleTagManagerBody gtmId={GOOGLE_TAG_MANAGER_ID} />

          <ConsentBanner />
        </Suspense>

        {/* <Script src='http://localhost:3000/scripts/index.js' strategy='afterInteractive' /> */}
      </body>
    </html>
  )
}
