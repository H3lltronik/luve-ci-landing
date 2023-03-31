'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FunctionComponent, useEffect } from 'react'

interface AOSInitializerProps {
}

const AOSInitializer: FunctionComponent<AOSInitializerProps> = () => {
  useEffect(() => {
    AOS.init({
      once: true
    })

    return () => {
      AOS.refresh()
    }
  }, [])

  return (<></>)
}

export default AOSInitializer
