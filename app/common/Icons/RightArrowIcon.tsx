import * as React from 'react'
import { SVGProps } from 'react'

const RightArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 15 16'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m7.366.817-1.29 1.29L11.18 7.22H.049v1.829h11.13l-5.103 5.113 1.29 1.29 7.317-7.318L7.366.817Z'
      fill='currentColor'
    />
  </svg>
)

export default RightArrowIcon
