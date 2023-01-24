import anime from 'animejs'

export function setCSSVariable (variable: string, value: string) {
  const root = document.querySelector(':root') as HTMLElement
  root.style.setProperty(`--${variable}`, value)
}

export function getOffset (element: HTMLElement) {
  const defaultWin = { pageYOffset: 0, pageXOffset: 0 }
  if (!element.getClientRects().length) {
    return { top: 0, left: 0 }
  }

  const rect = element.getBoundingClientRect()
  const win = element.ownerDocument.defaultView || defaultWin
  return (
    {
      top: rect.top + win.pageYOffset,
      left: rect.left + win.pageXOffset
    })
}

export function getElementHeight (element: HTMLElement) {
  return element.clientHeight
}

export function scrollOnePage (direction: 'up'|'down') {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  // let busy = false
  // let position = 0
  // let difVal = 0
  // let toScroll = 0

  // if (direction === 'up' && position < 0) {
  //   difVal = 100
  // } else if (direction === 'down' && position <= 0) {
  //   difVal = -100
  // } else {
  //   return
  // }
  // toScroll += difVal

  // console.log('Start:', position, toScroll)
  // anime({
  //   targets: '#scroll-body',
  //   translateY: [position, `${toScroll}vh`],
  //   easing: 'easeInOutSine',
  //   duration: 1000,
  //   complete: () => {
  //     busy = false
  //     position += difVal
  //     console.log('Finish:', position, toScroll)
  //   },
  //   begin: () => { busy = true }
  // })
}
