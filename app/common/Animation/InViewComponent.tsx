'use client'
import React from 'react'
import { InView as InViewObserver } from 'react-intersection-observer'

interface InViewComponentProps {
  children: React.ReactNode
}

export const InViewComponent : React.FunctionComponent<InViewComponentProps> = (props) => {
  return (
    <InViewObserver triggerOnce>
      {({ inView, ref, entry }) => (
        <div ref={ref}>
          {inView && props.children}
        </div>
      )}
    </InViewObserver>
  )
}
