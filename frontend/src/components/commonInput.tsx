import './component.scss'

type Props = {
  placeholder?: string, 
  value?: string, 
  onChange?: any
}

export default function CommonInput({placeholder, value, onChange}: Props) {
  return (
    <input className='commonInput' type='text' placeholder={placeholder} value={value} onChange={onChange}  />
  )
}
