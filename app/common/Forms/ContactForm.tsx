'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import style from './ContactForm.module.scss'

const ContactForm = () => {
  return (
    <div className={style.contact_form}>
      <h2>Formulario de contacto</h2>
      <form>
        <input required type='text' placeholder='Nombre completo' />
        <input required type='text' placeholder='Correo electronico' />
        <input required type='text' placeholder='Telefono celular' />
        <select name='Estado' id='state'>
          <option value='Aguascalientes'>Aguascalientes</option>
          <option value='Baja California'>Baja California</option>
          <option value='Baja California Sur'>Baja California Sur</option>
          <option value='Campeche'>Campeche</option>
          <option value='Chiapas'>Chiapas</option>
          <option value='Chihuahua'>Chihuahua</option>
          <option value='Coahuila'>Coahuila</option>
          <option value='Colima'>Colima</option>
          <option value='Durango'>Durango</option>
          <option value='Estado de México'>Estado de México</option>
          <option value='Guanajuato'>Guanajuato</option>
          <option value='Guerrero'>Guerrero</option>
          <option value='Hidalgo'>Hidalgo</option>
          <option value='Jalisco'>Jalisco</option>
          <option value='Michoacán'>Michoacán</option>
          <option value='Morelos'>Morelos</option>
          <option value='Nayarit'>Nayarit</option>
          <option value='Nuevo León'>Nuevo León</option>
          <option value='Oaxaca'>Oaxaca</option>
          <option value='Puebla'>Puebla</option>
          <option value='Querétaro'>Querétaro</option>
          <option value='Quintana Roo'>Quintana Roo</option>
          <option value='San Luis Potosí'>San Luis Potosí</option>
          <option value='Sinaloa'>Sinaloa</option>
          <option value='Sonora'>Sonora</option>
          <option value='Tabasco'>Tabasco</option>
          <option value='Tamaulipas'>Tamaulipas</option>
          <option value='Tlaxcala'>Tlaxcala</option>
          <option value='Veracruz'>Veracruz</option>
          <option value='Yucatán'>Yucatán</option>
          <option value='Zacatecas'>Zacatecas</option>
        </select>
        <select name='Giro de la empresa' id='giro' placeholder='Giro de la empresa'>
          <option value='Giro ondulatorio'>Giro ondulatorio</option>
        </select>
        <select name='Servicios a solicitar' id='service'>
          <option value='Arrendamiento puro'>Arrendamiento puro</option>
        </select>
        <input className='item__input' required type='number' placeholder='Monto a solicitar' />

        <input required type='number' placeholder='Años de operacion' />

        <div>
          <input id='acceptTermp' type='checkbox' />
          <label htmlFor='acceptTermp'>Acepto los <Link href='www.google.com'>Terminos y condiciones</Link></label>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
