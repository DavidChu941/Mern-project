import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Search from "../../assets/svg/Search.svg"
import Search_white from "../../assets/svg/Search_white.svg"
import Avatar from "../../assets/images/avatar.png"
import MobileHamburger from "../../assets/svg/mobile-hamburger.svg" 

type Props = {
  showSideBar:any
}

export default function Header({ showSideBar }: Props) {

	const [searchKeyword, setSearchKeyword] = useState("")
	const user = useSelector((state:any) => state.auth.user)

  return (
    <div className='header'>
			<div className='header-content'>
				<div className='searchBox'>
					<img src={Search} width={22} height={22} alt='search' />
					<input type='text' placeholder='Search' value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
				</div>
				<div className='avatarBox'>
					<div>
						<img src={user.avatar === "" ? Avatar : user.avatar} alt='avatar' />
					</div>
					<div className='avatarInfo'>
						<div className='name'>{user.firstName + " " + user.lastName}</div>
						<div className='role'>{user.level}</div>
					</div>
				</div>
			</div>
			<div className='mobile-header'>
				<div className='hamburger' onClick={() => showSideBar()}>
					<img src={MobileHamburger} alt='Hamburger' width={30} height={30} />
				</div>
				<div className='searchBox'>
					<img src={Search_white} width={22} height={22} alt='search' />
					<input type='text' placeholder='Search' value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
				</div>
				<div className='avatarBox'>
					<div className='avatar'>
						<img src={user.avatar === "" ? Avatar : user.avatar} alt='avatar' />
					</div>
					<div className='avatarInfo'>
						<div className='name'>{user.name}</div>
						<div className='role'>{user.role}</div>
					</div>
				</div>
			</div>
    </div>
  )
}
