import './component.scss'

type Props = {
  title?: string, 
  onClick?: any
}

export default function MainButton({onClick, title}: Props) {
  return (
    <button 
      className='mainButton'
      onClick={onClick}
    >
      {title}
    </button>
  )
}
