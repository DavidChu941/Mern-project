import React from 'react'
import MainButton from "../components/mainButton"

interface NotificationProps {
  title?: string, 
  content?: string
  onClick?: any
}

export default function NotificationCard({title, content, onClick}: NotificationProps) {
  return (
    <div className='notificationCard'>
      <div className='noti-container'>
        <div className='leftBorder'></div>
        <div className='noti-content'>
          <div className='title-part'>{title}</div>
          <div className='content-part'>{content}</div>
          <div style={{width: "150px"}}>
            <MainButton title="View" onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  )
}
