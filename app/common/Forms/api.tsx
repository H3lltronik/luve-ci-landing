import React from 'react'

export const handleSubmit = async function (event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()

  const form = event.currentTarget
  const formData = new FormData(form)
  const payload = {
    nombre: formData.get('nombre') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    state: formData.get('state') as string,
    giro: formData.get('giro') as string,
    service: formData.get('service') as string,
    number: formData.get('number') as string,
    years: formData.get('years') as string,
    accept: formData.get('accept') as string
  }

  if (!validateForm(payload)) return

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (response.ok) {
      console.log('Email sent successfully')
    } else {
      console.error('Something went wrong')
    }

    return await response.json()
  } catch (error) {
    console.error(error)
    return error
  }
}

const validateForm = (data: any) => {
  return true
}
