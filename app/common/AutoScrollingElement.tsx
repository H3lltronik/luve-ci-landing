import React, { useRef, useEffect } from 'react'

function AutoScrollingElement ({ children, ...props }) {
  const elementRef = useRef(null)

  useEffect(() => {
    if (!elementRef.current) return
    const element = elementRef.current

    const onContentChange = () => {
      element.scrollTop = element.scrollHeight
    }

    const observer = new MutationObserver(onContentChange)
    observer.observe(element, { childList: true, subtree: true, characterData: true, attributes: true })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div {...props} ref={elementRef}>
      {children}
    </div>
  )
}

export default AutoScrollingElement
