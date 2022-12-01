import Header from './common/Header/Header'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
