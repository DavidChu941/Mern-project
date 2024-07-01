import React, { useState, useEffect } from 'react'
import Logo from "../../assets/images/logo.png"
import { useNavigate, useLocation } from "react-router-dom";
import { LOG_OUT } from '../../redux/actions/types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

//pages
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

export default function AdminSidebar() {
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
    <div className='adminSidebar'>
		<div>
			<div className='logo'>
				<img src={Logo} alt='Logo' width={55} height={50} />
			</div>
			<div className='lists'>
				<div className='divider' />
				<div className='list' onClick={() => { navigator("/"); setActiveTab("Dashboard") }}>
					<div className={`leftBorder${activeTab === "Dashboard" ? " activeLeftBorder" : ""}`} />
					<div className={`list-nav${activeTab === "Dashboard" ? " activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Dashboard" ? Dashboard_white : Dashboard} alt='Dashboard' />
						<span>Dashboard</span>
					</div>
				</div>

				<div className='divider' />
				<div className='list' onClick={() => { navigator("/company-profile"); setActiveTab("CompanyProfile"); }}>
					<div className={`leftBorder${activeTab === "CompanyProfile" ? " activeLeftBorder" : ""}`} />
					<div className={`list-nav${activeTab === "CompanyProfile" ? " activeTab" : ""}`}>
						<img width={22} height={22} src={CompanyProfile} alt='CompanyProfile' />
						<span>Company Profile</span>
					</div>
				</div>

				<div className='divider' />
				<div className='list' onClick={() => { navigator("/labs"); setActiveTab("Labs"); }}>
					<div className={`leftBorder${activeTab === "Labs" ? " activeLeftBorder" : ""}`} />
					<div className={`list-nav${activeTab === "Labs" ? " activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Labs" ? Labs_white : Labs} alt='Labs' />
						<span>Labs</span>
					</div>
				</div>

				<div className='divider' />
				<div className='list' onClick={() => { navigator("/consortiums"); setActiveTab("Consortiums"); }}>
					<div className={`leftBorder${activeTab === "Consortiums" ? " activeLeftBorder" : ""}`} />
					<div className={`list-nav${activeTab === "Consortiums" ? " activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Consortiums" ? Consortiums_white : Consortiums} alt='Consortiums' />
						<span>Consortiums</span>
					</div>
				</div>

				<div className='divider' />
				<div className='list' onClick={() => { navigator("/orders"); setActiveTab("Orders"); }}>
					<div className={`leftBorder${activeTab === "Orders" ? " activeLeftBorder" : ""}`} />
					<div className={`list-nav${activeTab === "Orders" ? " activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Orders" ? Orders_white : Orders} alt='orders' />
						<span>Orders</span>
					</div>
				</div>

				<div className='divider' />
				<div className='list' onClick={() => { navigator("/employers"); setActiveTab("Employers"); }}>
					<div className={`leftBorder${activeTab === "Employers" ? " activeLeftBorder" : ""}`} />
					<div className={`list-nav${activeTab === "Employers" ? " activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Employers" ? Employers_white : Employers} alt='employers' />
						<span>Employers</span>
					</div>
				</div>

				<div className='divider' />
				<div className='list' onClick={() => { navigator("/employees"); setActiveTab("Employees"); }}>
					<div className={`leftBorder${activeTab === "Employees" ? " activeLeftBorder" : ""}`} />
					<div className={`list-nav${activeTab === "Employees" ? " activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Employees" ? Employees_white : Employees} alt='Employees' />
						<span>Employees</span>
					</div>
				</div>

				<div className='divider' />
				<div className='list' onClick={() => { navigator("/random-pools"); setActiveTab("RandomPools"); }}>
					<div className={`leftBorder${activeTab === "RandomPools" ? " activeLeftBorder" : ""}`} />
					<div className={`list-nav${activeTab === "RandomPools" ? " activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "RandomPools" ? RandomPools_white : RandomPools} alt='RandomPools' />
						<span>Random Pools</span>
					</div>
				</div>

				<div className='divider' />
				<div className='list' onClick={() => { navigator("/accounting"); setActiveTab("Accounting"); }}>
					<div className={`leftBorder${activeTab === "Accounting" ? " activeLeftBorder" : ""}`} />
					<div className={`list-nav${activeTab === "Accounting" ? " activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Accounting" ? Accounting_white : Accounting} alt='Accounting' />
						<span>Accounting</span>
					</div>
				</div>

				<div className='divider' />
				<div className='list' onClick={() => { navigator("/reports"); setActiveTab("Reports"); }}>
					<div className={`leftBorder${activeTab === "Reports" ? "activeLeftBorder" : ""}`} />
					<div className={`list-nav${activeTab === "Reports" ? " activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Reports" ? Reports_white : Reports} alt='Reports' />
						<span>Reports</span>
					</div>
				</div>

				<div className='divider' />
				<div className='list' onClick={() => { navigator("/support-center"); setActiveTab("SupportCenter"); }}>
					<div className={`leftBorder${activeTab === "SupportCenter" ? " activeLeftBorder" : ""}`} />
					<div className={`list-nav${activeTab === "SupportCenter" ? " activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "SupportCenter" ? SupportCenter_white : SupportCenter} alt='Support Center' />
						<span>Support Center</span>
					</div>
				</div>

				<div className='divider' />
				<div className='list' onClick={() => { navigator("/setting"); setActiveTab("Setting"); }}>
					<div className={`leftBorder${activeTab === "Setting" ? " activeLeftBorder" : ""}`} />
					<div className={`list-nav${activeTab === "Setting" ? " activeTab" : ""}`}>
						<img width={22} height={22} src={activeTab === "Setting" ? Setting_white : Setting} alt='Setting' />
						<span>Setting</span>
					</div>
				</div>
				<div className='divider' />
				{
					user.role === "SuperAdmin" && <div>
						<div className='list' onClick={() => { navigator("/users"); setActiveTab("Users"); }}>
							<div className={`leftBorder${activeTab === "Users" ? " activeLeftBorder" : ""}`} />
							<div className={`list-nav${activeTab === "Users" ? " activeTab" : ""}`}>
								<img width={22} height={22} src={activeTab === "Users" ? Setting_white : Setting} alt='Users' />
								<span>Users</span>
							</div>
						</div>
						<div className='divider' />
					</div>
				}
			</div>
		</div>
			
		<div className='list topBorder' onClick={() => handleLogout()}>
			<div className='leftBorder' />
			<div className='list-nav'>
				<img width={22} height={22} src={LogOut} alt='CompanyProfile' />
				<span>Log Out</span>
			</div>
		</div>
    </div>
  )
}
