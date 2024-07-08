'use client'
import { message, Modal } from 'antd'
import { useEffect, useState } from 'react'
import successImage from '../../../assets/success.jpg'
import { PrimaryButton } from '../../common/Buttons'
import { handleQuickContactSubmit } from '../../common/Forms/api'
import styles from './ContactDialogForm.module.scss'

type Props = {
  isModalOpen?: boolean;
  disableOpenButton?: boolean;
};
export const ContactDialogForm = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (props.isModalOpen) setIsModalOpen(props.isModalOpen)
  }, [props.isModalOpen])

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleOpen = () => {
    setIsModalOpen(true)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const errors: any = {}
    if (!name) {
      errors.name = 'Nombre es requerido'
      message.error('Nombre es requerido')
    }
    if (!phone) {
      errors.phone = 'Teléfono es requerido'
      message.error('Telefono es requerido')
    }
    setErrors(errors)

    if (Object.keys(errors).length === 0) {
      handleQuickContactSubmit(e)

      setIsModalOpen(false)
      message.success(
        'Gracias por tu registro, te contactaremos a la brevedad'
      )
    }
  }

  return (
    <>
      {props.disableOpenButton && (
        <PrimaryButton onClick={handleOpen} text='¡INICIA TU TRAMITE!' />
      )}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        style={{
          padding: 0
        }}
        rootClassName='h3-modal-reset'
      >
        <div className={styles.modalContainer}>
          <div className={styles.imageContainer}>
            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              src={successImage.src}
              alt='Descuento'
            />
          </div>
          <div className={styles.contentContainer}>
            <h2 className={styles.title}>Aprovecha esta oferta limitada</h2>
            <p className={styles.description}>
              Adquiere una sesion de diagnostico de escalabilidad sin costo
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor='name'>Nombre</label>
                <input
                  type='text'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <span className={styles.error}>{errors.name}</span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='phone'>Teléfono</label>
                <input
                  type='text'
                  id='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && (
                  <span className={styles.error}>{errors.phone}</span>
                )}
              </div>
              <div className='inline-block'>
                <PrimaryButton
                  text='ENVIAR'
                  onClick={handleSubmit}
                  className='inline-block'
                />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  )
}
