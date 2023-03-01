import * as React from 'react'
import { SVGProps } from 'react'

const GraphIcon: React.FC<any> = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M11 10.5v89.25c0 8.715 7.035 15.75 15.75 15.75H116'
      stroke='currentColor'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='m26.75 89.25 24.097-28.14c3.99-4.62 11.078-4.935 15.383-.578l4.987 4.988c4.305 4.305 11.393 4.043 15.383-.578l24.15-28.192'
      stroke='currentColor'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default GraphIcon
