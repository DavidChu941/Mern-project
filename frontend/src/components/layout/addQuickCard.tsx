import React from 'react'

interface AddQuickCardProps {
  title: string, 
  icon: string
}

export default function AddQuickCard({title, icon}: AddQuickCardProps) {
  return (
    <div className='addQuickCard'>
      <img className='cardImg' src={icon} alt='svg' />
      <div>{title}</div>
    </div>
  )
}
