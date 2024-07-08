import * as React from 'react'
import { SVGProps } from 'react'

const ShopIcon: React.FC<any> = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      stroke='currentColor'
      strokeWidth={2}
      d='M14.5 21v-5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v5'
    />
    <path
      stroke='currentColor'
      strokeWidth={2}
      d='M5 11v6c0 1.886 0 2.828.586 3.414C6.172 21 7.114 21 9 21h6c1.886 0 2.828 0 3.414-.586C19 19.828 19 18.886 19 17v-6M4.621 4.515c.182-.728.273-1.091.544-1.303C5.437 3 5.812 3 6.562 3h10.876c.75 0 1.125 0 1.397.212.27.212.362.575.544 1.303l1.203 4.814c.097.388.146.581.135.739a1 1 0 0 1-.69.883c-.15.049-.354.049-.763.049-.533 0-.8 0-1.023-.052a2 2 0 0 1-1.393-1.18c-.089-.212-.132-.47-.217-.983-.024-.144-.036-.216-.05-.235a.1.1 0 0 0-.162 0c-.014.019-.026.09-.05.235l-.081.489A2 2 0 0 1 14.352 11h-.204a2 2 0 0 1-1.936-1.726l-.081-.49c-.024-.143-.036-.215-.05-.234a.1.1 0 0 0-.162 0c-.014.019-.026.09-.05.235l-.081.489A2 2 0 0 1 9.852 11h-.204A2 2 0 0 1 7.73 9.373c-.005-.022-.01-.048-.018-.1l-.081-.49c-.024-.143-.036-.215-.05-.234a.1.1 0 0 0-.162 0c-.014.019-.026.09-.05.235-.085.514-.128.77-.217.983a2 2 0 0 1-1.392 1.18C5.536 11 5.27 11 4.736 11c-.409 0-.613 0-.763-.049a1 1 0 0 1-.69-.883c-.01-.158.038-.351.135-.739L4.62 4.515Z'
    />
  </svg>
)

export default ShopIcon
