import React, { ReactNode } from 'react'
import './component.scss'
import { Modal } from 'react-bootstrap';
import MainButton from './mainButton';
import BorderButton from './borderButton';
import { IoClose } from "react-icons/io5";

type Props = {
  isOpen: boolean, 
  closeModal: any, 
  handleMain?: any,
  children?: ReactNode,
  handleMainTitle?: string | undefined,
}

export default function MediumModal({isOpen, closeModal, handleMainTitle, handleMain, children}: Props) {
  return (
    <Modal className='medium' show={isOpen} onHide={closeModal} centered>
      <div className='closeButton' onClick={closeModal}>
        <IoClose />
      </div>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <BorderButton title='Cancel' onClick={closeModal} />
        <MainButton title={handleMainTitle} onClick={handleMain} />
      </Modal.Footer>
    </Modal>
  )
}
