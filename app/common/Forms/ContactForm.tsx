'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import style from './ContactForm.module.scss'
import contactData from '../../../assets/data/states.json'

const ContactForm = () => {
  return (
    <div className={style.contact_form}>
      <h2>Formulario de contacto</h2>
      <form>
        <input name='nombre' required type='text' placeholder='Nombre completo' />
        <input name='email' required type='email' placeholder='Correo electronico' />
        <input name='phone' required type='text' placeholder='Telefono celular' />
        <select name='state' name='Estado' id='state'>
          {contactData.states.map((state) => (
            <option key={state.value} value={state.label}>
              {state.label}
            </option>
          ))}
        </select>
        <input name='giro' required type='text' placeholder='Giro de la empresa' />
        <select name='Servicios a solicitar' id='service'>
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
