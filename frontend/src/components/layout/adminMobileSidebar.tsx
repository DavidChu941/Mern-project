import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import { LOG_OUT } from '../../redux/actions/types'
import { useDispatch, useSelector } from 'react-redux';

import Dashboard from "../../assets/svg/Dashboard.svg"
import Dashboard_white from "../../assets/svg/Dashboard_white.svg"
import CompanyProfile from "../../assets/svg/CompanyProfile.svg"
import Labs from "../../assets/svg/Labs.svg"
import Labs_white from "../../assets/svg/Labs_white.svg"
import Consortiums from "../../assets/svg/Consortiums.svg"
import Consortiums_white from "../../assets/svg/Consortiums_white.svg"
import Orders from "../../assets/svg/Orders.svg"
import Orders_white from "../../assets/svg/Orders_white.svg"
import Employers from "../../assets/svg/Employers.svg"
import Employers_white from "../../assets/svg/Employers_white.svg"
import Employees from "../../assets/svg/Employees.svg"
import Employees_white from "../../assets/svg/Employees_white.svg"
import RandomPools from "../../assets/svg/RandomPools.svg"
import RandomPools_white from "../../assets/svg/RandomPools_white.svg"
import Accounting from "../../assets/svg/Accounting.svg"
import Accounting_white from "../../assets/svg/Accounting_white.svg"
import Reports from "../../assets/svg/Reports.svg"
import Reports_white from "../../assets/svg/Reports_white.svg"
import SupportCenter from "../../assets/svg/SupportCenter.svg"
import SupportCenter_white from "../../assets/svg/SupportCenter_white.svg"
import Setting from "../../assets/svg/Setting.svg"
import Setting_white from "../../assets/svg/Setting_white.svg"
import LogOut from "../../assets/svg/LogOut.svg"

type AdminMobileSidebarProps = {
  isOpen: Boolean, 
  setIsOpen: any
}

export default function AdminMobileSidebar({ isOpen, setIsOpen }: AdminMobileSidebarProps) {
	const navigator = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	const [ activeTab, setActiveTab ] = useState("")
	const user = useSelector((state: any) => state.auth.user)

	useEffect(() => {
    const path = location.pathname
    if (path === '/') setActiveTab("Dashboard")
    else if (path === '/company-profile') setActiveTab("CompanyProfile")
    else if (path === '/labs') setActiveTab("Labs")
    else if (path === '/consortiums') setActiveTab("Consortiums")
    else if (path === '/orders') setActiveTab("Orders")
    else if (path === '/employers') setActiveTab("Employers")
    else if (path === '/employees') setActiveTab("Employees")
    else if (path === '/random-pools') setActiveTab("RandomPools")
    else if (path === '/accounting') setActiveTab("Accounting")
    else if (path === '/reports') setActiveTab("Reports")
    else if (path === '/support-center') setActiveTab("SupportCenter")
    else if (path === '/setting') setActiveTab("Setting")
		else if (path === '/users') setActiveTab("Users")
	}, [location])

	const handleLogout = () => {
		dispatch({ type: LOG_OUT, payload: {} })
		localStorage.removeItem('token')
		navigator('/login')
	}

  return (
    <div className={`mobile-sidebar${isOpen === true ? "" : " remove"}`}>
			<div className='s-lists'>
				<div className='s-list' onClick={() => { navigator("/"); setActiveTab("Dashboard"); setIsOpen(false); }}>
					<div className={`s-leftBorder${activeTab === "Dashboard" ? " s-activeLeftBorder" : ""}`} />
					<div className={`s-list-nav${activeTab === "Dashboard" ? " s-activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Dashboard" ? Dashboard_white : Dashboard} alt='Dashboard' />
						<span>Dashboard</span>
					</div>
				</div>
				<div className='divider' />

				<div className='s-list' onClick={() => { navigator("/company-profile"); setActiveTab("CompanyProfile"); setIsOpen(false); }}>
					<div className={`s-leftBorder${activeTab === "CompanyProfile" ? " s-activeLeftBorder" : ""}`} />
					<div className={`s-list-nav${activeTab === "CompanyProfile" ? " s-activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "CompanyProfile" ? CompanyProfile : CompanyProfile} alt='CompanyProfile' />
						<span>Company Profile</span>
					</div>
				</div>
				<div className='divider' />

				<div className='s-list' onClick={() => { navigator("/labs"); setActiveTab("Labs"); setIsOpen(false); }}>
					<div className={`s-leftBorder${activeTab === "Labs" ? " s-activeLeftBorder" : ""}`} />
					<div className={`s-list-nav${activeTab === "Labs" ? " s-activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Labs" ? Labs_white : Labs} alt='Labs' />
						<span>Labs</span>
					</div>
				</div>
				<div className='divider' />

				<div className='s-list' onClick={() => { navigator("/consortiums"); setActiveTab("Consortiums"); setIsOpen(false); }}>
					<div className={`s-leftBorder${activeTab === "Consortiums" ? " s-activeLeftBorder" : ""}`} />
					<div className={`s-list-nav${activeTab === "Consortiums" ? " s-activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Consortiums" ? Consortiums_white : Consortiums} alt='Consortiums' />
						<span>Consortiums</span>
					</div>
				</div>
				<div className='divider' />

				<div className='s-list' onClick={() => { navigator("/orders"); setActiveTab("Orders"); setIsOpen(false); }}>
					<div className={`s-leftBorder${activeTab === "Orders" ? " s-activeLeftBorder" : ""}`} />
					<div className={`s-list-nav${activeTab === "Orders" ? " s-activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Orders" ? Orders_white : Orders} alt='Orders' />
						<span>Orders</span>
					</div>
				</div>
				<div className='divider' />

				<div className='s-list' onClick={() => { navigator("/employers"); setActiveTab("Employers"); setIsOpen(false); }}>
					<div className={`s-leftBorder${activeTab === "Employers" ? " s-activeLeftBorder" : ""}`} />
					<div className={`s-list-nav${activeTab === "Employers" ? " s-activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Employers" ? Employers_white : Employers} alt='Employers' />
						<span>Employers</span>
					</div>
				</div>
				<div className='divider' />

				<div className='s-list' onClick={() => { navigator("/employees"); setActiveTab("Employees"); setIsOpen(false); }}>
					<div className={`s-leftBorder${activeTab === "Employees" ? " s-activeLeftBorder" : ""}`} />
					<div className={`s-list-nav${activeTab === "Employees" ? " s-activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Employees" ? Employees_white : Employees} alt='Employers' />
						<span>Employees</span>
					</div>
				</div>
				<div className='divider' />

				<div className='s-list' onClick={() => { navigator("/random-pools"); setActiveTab("RandomPools"); setIsOpen(false); }}>
					<div className={`s-leftBorder${activeTab === "RandomPools" ? " s-activeLeftBorder" : ""}`} />
					<div className={`s-list-nav${activeTab === "RandomPools" ? " s-activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "RandomPools" ? RandomPools_white : RandomPools} alt='RandomPools' />
						<span>Random Pools</span>
					</div>
				</div>
				<div className='divider' />

				<div className='s-list' onClick={() => { setActiveTab("Accounting"); setIsOpen(false); }}>
					<div className={`s-leftBorder${activeTab === "Accounting" ? " s-activeLeftBorder" : ""}`} />
					<div className={`s-list-nav${activeTab === "Accounting" ? " s-activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Accounting" ? Accounting_white : Accounting} alt='Accounting' />
						<span>Accounting</span>
					</div>
				</div>
				<div className='divider' />

				<div className='s-list' onClick={() => { navigator("/reports"); setActiveTab("Reports"); setIsOpen(false); }}>
					<div className={`s-leftBorder${activeTab === "Reports" ? " s-activeLeftBorder" : ""}`} />
					<div className={`s-list-nav${activeTab === "Reports" ? " s-activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Reports" ? Reports_white : Reports} alt='Reports' />
						<span>Reports</span>
					</div>
				</div>
				<div className='divider' />

				<div className='s-list' onClick={() => { navigator("/support-center"); setActiveTab("SupportCenter"); setIsOpen(false); }}>
					<div className={`s-leftBorder${activeTab === "SupportCenter" ? " s-activeLeftBorder" : ""}`} />
					<div className={`s-list-nav${activeTab === "SupportCenter" ? " s-activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "SupportCenter" ? SupportCenter_white : SupportCenter} alt='SupportCenter' />
						<span>Support Center</span>
					</div>
				</div>
				<div className='divider' />

				<div className='s-list' onClick={() => { setActiveTab("Setting"); setIsOpen(false); }}>
					<div className={`s-leftBorder${activeTab === "Setting" ? " s-activeLeftBorder" : ""}`} />
					<div className={`s-list-nav${activeTab === "Setting" ? " s-activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Setting" ? Setting_white : Setting} alt='Setting' />
						<span>Setting</span>
					</div>
				</div>
				<div className='divider' />
				{
					user.role === "SuperAdmin" && <div>
						<div className='s-list' onClick={() => { navigator("/users"); setActiveTab("Users"); setIsOpen("false"); }}>
							<div className={`s-leftBorder${activeTab === "Users" ? " s-activeLeftBorder" : ""}`} />
							<div className={`s-list-nav${activeTab === "Users" ? " s-activeTab" : ""}`}>
								<img width={22} height={22} src={activeTab === "Users" ? Setting_white : Setting} alt='Users' />
								<span>Users</span>
							</div>
						</div>
						<div className='divider' />
					</div>
				}
			</div>
			
			<div className='s-list divider' onClick={() => handleLogout()}>
				<div className='s-leftBorder' />
				<div className='s-list-nav'>
					<img width={22} height={22} src={LogOut} alt='CompanyProfile' />
					<span>Log Out</span>
				</div>
			</div>
    </div>
  )
}
