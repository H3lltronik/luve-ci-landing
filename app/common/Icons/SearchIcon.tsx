import * as React from 'react'
import { SVGProps } from 'react'
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    {...props}
  >
    <path
      fill='#000'
      fillRule='evenodd'
      d='M8.235 15.794a7.066 7.066 0 0 1-7.059-7.059 7.066 7.066 0 0 1 7.06-7.059 7.066 7.066 0 0 1 7.058 7.06 7.066 7.066 0 0 1-7.059 7.058Zm6.217-1.674a8.19 8.19 0 0 0 2.019-5.385C16.47 4.195 12.775.5 8.235.5 3.695.5 0 4.195 0 8.735c0 4.54 3.695 8.236 8.235 8.236a8.19 8.19 0 0 0 5.385-2.02l5.375 5.377.833-.833-5.376-5.375Z'
      clipRule='evenodd'
    />
  </svg>
)
export default SearchIcon
