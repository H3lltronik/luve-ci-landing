import * as React from 'react'
import { SVGProps } from 'react'

const LaptopIcon: React.FC<any> = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeWidth={2}
      d='M4 8c0-.971.002-1.599.064-2.061.059-.434.153-.57.229-.646.076-.076.212-.17.646-.229C5.4 5.002 6.029 5 7 5h10c.971 0 1.599.002 2.061.064.434.059.57.153.646.229.076.076.17.212.229.646C19.998 6.4 20 7.029 20 8v8H4V8ZM3.667 16C2.747 16 2 16.746 2 17.667A2.333 2.333 0 0 0 4.333 20h15.334A2.333 2.333 0 0 0 22 17.667c0-.92-.746-1.667-1.667-1.667H3.667Z'
    />
  </svg>
)

export default LaptopIcon
