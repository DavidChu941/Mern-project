import './component.scss'

type Props = {
  title: string, 
  onClick?: any, 
  icon?: string,
}

export default function BorderButton({onClick, title, icon}: Props) {
  return (
    <button 
      className='borderButton'
      onClick={onClick}
    >
      {
        icon && <img src={icon} alt='icon' />
      }
      {title}
    </button>
  )
}
