'use client'
import { Form, Input, message, Modal, Spin } from 'antd'
import { useEffect, useRef, useState } from 'react'
import Confetti from 'react-confetti'
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
  const contentRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (contentRef.current) {
      const { clientWidth, clientHeight } = contentRef.current
      setDimensions({ width: clientWidth, height: clientHeight })
    }
  }, [isModalOpen])

  useEffect(() => {
    if (props.isModalOpen) { setIsModalOpen(true) }
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

  const onFinish = (values: any) => {
    message.success('Gracias por tu registro, te contactaremos a la brevedad')

    setLoading(true)
    setSent(false)
    handleQuickContactSubmit({
      name: values.name,
      phone: values.phone,
      url: window.location.href
    })
    setLoading(false)
    setSent(true)

    setTimeout(() => {
      setIsModalOpen(false)
    }, 5000)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
    message.error('Por favor completa todos los campos requeridos')
  }

  return (
    <>
      {!props.disableOpenButton && (
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
          <div className={styles.contentContainer} ref={contentRef}>
            {sent && (
              <Confetti width={dimensions.width} height={dimensions.height} />
            )}
            <h2 className={styles.title}>
              Aprovecha esta oferta limitada {dimensions.width}
            </h2>
            <p className={styles.description}>
              Adquiere una sesion de diagnostico de escalabilidad sin costo
            </p>
            <Form
              name='contact'
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className={styles.form}
            >
              {loading && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 100,
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Spin spinning={loading} />
                </div>
              )}

              <Form.Item
                label='Nombre'
                name='name'
                rules={[{ required: true, message: 'Nombre es requerido' }]}
              >
                <Input placeholder='Ingresa tu nombre' />
              </Form.Item>
              <Form.Item
                label='Teléfono'
                name='phone'
                rules={[{ required: true, message: 'Teléfono es requerido' }]}
              >
                <Input placeholder='Ingresa tu telefono' />
              </Form.Item>
              <Form.Item>
                <div className='inline-block'>
                  <PrimaryButton
                    text='ENVIAR'
                    htmlType='submit'
                    className='inline-block'
                    disabled={loading}
                  />
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>
    </>
  )
}
