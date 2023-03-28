'use client'
import { ToastContainer, toast, ToastPosition } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, { useRef, useEffect, useImperativeHandle } from 'react'

type ToastProps = {
  message: string;
  position?: ToastPosition;
};

type ToastRef = {
  toast: (message: string) => void;
};

const ToastNotification: React.ForwardRefRenderFunction<ToastRef, ToastProps> = (
  { message, position = 'bottom-right' },
  ref
) => {
  const toastContainerRef = useRef<null | ToastContainer>(null)

  useEffect(() => {
    if (message) {
      toast.success(message)
    }
  }, [message])

  useImperativeHandle(
    ref,
    () => ({
      toast: (message: string) => {
        toast.success(message)
      }
    }),
    []
  )

  return <ToastContainer position={position} ref={toastContainerRef} />
}

export default React.forwardRef(ToastNotification)
