import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Preloader from './Preloader'

const WithPreloader = (Component: React.ReactNode) => {
  const WrappedComponent = (props: any) => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
      const handleStart = () => setIsLoading(true)
      const handleComplete = () => setIsLoading(false)

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError', handleComplete)

      return () => {
        router.events.off('routeChangeStart', handleStart)
        router.events.off('routeChangeComplete', handleComplete)
        router.events.off('routeChangeError', handleComplete)
      }
    }, [router.events])

    return (
      <>
        {isLoading ? <Preloader /> : null}
        <Component {...props} />
      </>
    )
  }

  return WrappedComponent
}

export default WithPreloader
