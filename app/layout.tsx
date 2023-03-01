import Header from './common/Header/Header'
import '../styles/globals.css'
// eslint-disable-next-line camelcase
import { Roboto_Slab as roboto_Slab } from '@next/font/google'
import { Footer } from './common/Footer'

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
    <html data-theme='theme-light'>
      <head />
      <body className={font.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
