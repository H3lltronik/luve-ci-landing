'use client'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import style from './ContactForm.module.scss'
import contactData from '../../../assets/data/states.json'
import { handleSubmit } from './api'
import ToastNotification from '../Notifications/ToastNotification'

const ContactForm = () => {
  const toastRef = useRef<null | { toast:(message: string) => void }>(null)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = await handleSubmit(event)
    console.log('result', result)
    showToast('Gracias por contactarnos, pronto nos pondremos en contacto contigo')
  }

  const showToast = (message: string) => {
    if (toastRef.current) {
      toastRef.current.toast('Success message')
    }
  }

  return (
    <div className={style.contact_form}>
      <ToastNotification message='' ref={toastRef} />

      <h2>Formulario de contacto</h2>
      {/* on submit */}
      <form onSubmit={onSubmit}>
        <input name='nombre' required type='text' placeholder='Nombre completo' />
        <input name='email' required type='email' placeholder='Correo electronico' />
        <input name='phone' required type='text' placeholder='Telefono celular' />
        <select name='state' id='state'>
          {contactData.states.map((state) => (
            <option key={state.value} value={state.label}>
              {state.label}
            </option>
          ))}
        </select>
        <input name='giro' required type='text' placeholder='Giro de la empresa' />
        <select name='service' id='service'>
          {contactData.services.map((state) => (
            <option key={state.value} value={state.label}>
              {state.label}
            </option>
          ))}
        </select>
        <input
          name='number'
          className='item__input'
          required
          type='number'
          placeholder='Monto a solicitar'
        />

        <input name='years' required type='number' placeholder='Años de operacion' />

        <div>
          <input required name='accept' id='acceptTermp' type='checkbox' />
          <label htmlFor='acceptTermp'>
            Acepto los <Link href='www.google.com'>Terminos y condiciones</Link>
          </label>
        </div>

        <input type='submit' value='Enviar' />
      </form>
    </div>
  )
}

export default ContactForm
