import * as React from 'react'
import { SVGProps } from 'react'

const InfoIcon: React.FC<any> = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M63.5 42v26.25m0 47.25c28.875 0 52.5-23.625 52.5-52.5S92.375 10.5 63.5 10.5 11 34.125 11 63s23.625 52.5 52.5 52.5Z'
      stroke='currentColor'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M63.474 84h.047'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default InfoIcon
