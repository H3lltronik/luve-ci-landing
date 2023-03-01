import * as React from 'react'
import { SVGProps } from 'react'

const BoardTableIcon: React.FC<any> = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m49.377 77.175 7.875 7.875 21-21'
      stroke='currentColor'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M53 31.5h21c10.5 0 10.5-5.25 10.5-10.5 0-10.5-5.25-10.5-10.5-10.5H53c-5.25 0-10.5 0-10.5 10.5S47.75 31.5 53 31.5Z'
      stroke='currentColor'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M84.5 21.105c17.482.945 26.25 7.402 26.25 31.395V84c0 21-5.25 31.5-31.5 31.5h-31.5c-26.25 0-31.5-10.5-31.5-31.5V52.5c0-23.94 8.767-30.45 26.25-31.395'
      stroke='currentColor'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default BoardTableIcon
