import './component.scss'

type Props = {
  placeholder?: string, 
  value?: string, 
  onChange?: any
}

export default function ModalInput({placeholder, value, onChange}: Props) {
  return (
    <input className='modalInput' type='text' placeholder={placeholder} value={value} onChange={onChange}  />
  )
}
