import * as React from 'react'
import { SVGProps } from 'react'

const MobileIcon: React.FC<any> = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeWidth={2}
      d='M6.879 2.879c-.51.51-.709 1.138-.797 1.793C6 5.284 6 6.048 6 6.934V17.066c0 .886 0 1.65.082 2.262.088.655.287 1.284.797 1.793.51.51 1.138.709 1.793.797.612.082 1.376.082 2.262.082H13.066c.886 0 1.65 0 2.262-.082.655-.088 1.284-.287 1.793-.797.51-.51.709-1.138.797-1.793.082-.612.082-1.376.082-2.262V6.934c0-.886 0-1.65-.082-2.262-.088-.655-.287-1.284-.797-1.793-.51-.51-1.138-.709-1.793-.797C14.716 2 13.952 2 13.066 2H10.934c-.886 0-1.65 0-2.262.082-.655.088-1.284.287-1.793.797ZM7 16h10'
    />
  </svg>
)

export default MobileIcon
