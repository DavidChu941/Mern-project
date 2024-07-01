import { ReactNode } from 'react'
import './layout.scss'
import Logo from "../../assets/images/logo.png"

export default function PublicLayout({children}: { children: ReactNode} ) {
  return (
    <div className='public-layout'>
		<div>
			<img src={Logo} alt='logo' width={110} height={100} />
		</div>
		<div className='children-box'>
			{children}
		</div>
    </div>
  )
}
