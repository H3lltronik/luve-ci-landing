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
