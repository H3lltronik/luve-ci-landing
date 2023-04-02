import '../styles/globals.css'
// eslint-disable-next-line camelcase
import { Roboto_Slab as roboto_Slab } from '@next/font/google'
import { Footer } from './common/Footer'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import AOSInitializer from './common/Animation/AOS'
import Preloader from './common/Preloader/Preloader'

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
  return (
    <html data-theme='theme-light' lang='es'>
      <head />
      <body className={font.variable}>
        <AOSInitializer />
        <Preloader />

        <Suspense fallback={<>Loading...</>}>
          <Header />
          {children}
          <Footer />
        </Suspense>

        {/* <Script src='http://localhost:3000/scripts/index.js' strategy='afterInteractive' /> */}
      </body>
    </html>
  )
}
