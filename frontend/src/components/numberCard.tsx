import React, { ReactNode } from 'react'
import './component.scss'

interface NumberCardProps {
  title: string, 
  number: number, 
  children?: ReactNode
}

export default function NumberCard({title, number, children}: NumberCardProps) {
  return (
    <div className='numberCard'>
      <div className='right'>
        <div className='numberCard-title'>{title}</div>
        <div className='numberCard-number'>{number}</div>
      </div>
      {children}
    </div>
  )
}
