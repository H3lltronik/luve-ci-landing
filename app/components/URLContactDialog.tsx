'use client'
import React from 'react'
import { ContactDialogForm } from '../home/ContactSection/ContactDialogForm'

export const URLContactDialog = () => {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const url = new URL(window.location.href)
    const dialog = url.searchParams.get('dialog')
    if (dialog === 'diagnostico') {
      setOpen(true)
    }
  }, [])

  return (
    <>
      <ContactDialogForm disableOpenButton isModalOpen={open} />
    </>
  )
}
