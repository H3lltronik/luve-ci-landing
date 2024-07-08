'use client'
import { Modal } from 'antd'
import { useState } from 'react'
import { PrimaryButton } from '../../common/Buttons'

export const ContactDialogForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleOpen = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <PrimaryButton onClick={handleOpen} text='¡INICIA TU TRAMITE!' />
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="">
            
        </div>
      </Modal>
    </>
  )
}
