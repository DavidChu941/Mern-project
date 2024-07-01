import './component.scss'
import { FaCamera } from "react-icons/fa";

type Props = {
  onClick?: any, 
}

export default function UploadButton({onClick}: Props) {
  return (
    <div className='uploadButton'>
      <div className='uploadIcon' onClick={onClick}>
        <FaCamera size={28} />
      </div>
      <div className='uploadTitle'>Upload Photo</div>
    </div>
  )
}
