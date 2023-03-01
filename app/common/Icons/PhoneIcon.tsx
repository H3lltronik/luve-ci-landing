import * as React from 'react'
import { SVGProps } from 'react'

const PhoneIcon: React.FC<any> = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M4.3 21.5a10.055 10.055 0 0 1-1.05-.05V15.6l5-1 2.9 2.9a18.656 18.656 0 0 0 3.488-2.725 16.395 16.395 0 0 0 2.637-3.375l-2.85-2.875.925-5.025h5.85c.033.167.05.342.05.525v.525c0 2.15-.48 4.246-1.438 6.287a19.228 19.228 0 0 1-3.8 5.438 18.738 18.738 0 0 1-5.424 3.8C8.546 21.025 6.45 21.5 4.3 21.5Zm13.925-12c.283-.65.5-1.308.65-1.975.15-.667.267-1.342.35-2.025H17l-.425 2.35 1.65 1.65Zm-8.95 8.95L7.6 16.775l-2.35.475v2.2c.683-.05 1.363-.158 2.038-.325a12.426 12.426 0 0 0 1.987-.675Z'
      fill='currentColor'
    />
  </svg>
)

export default PhoneIcon
