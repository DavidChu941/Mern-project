import React, { useState } from 'react'
import './style.scss'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import MainButton from '../../components/mainButton';
import { useNavigate } from "react-router-dom";
import { apis } from '../../apis';
import { useSnackbar } from "notistack";
import OutsideClickHandler from 'react-outside-click-handler';
import SelectIcon_colored from '../../assets/svg/selectIcon_colored.svg';
import SelectIcon from '../../assets/svg/selectIcon.svg'

interface DataObject {
  [key: string]: string | number;
}

export default function Register() {
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();
	const [showPassword, setShowPassword] = useState(false);
	const [showLevel, setShowLevel] = useState(false);
	const [level, setLevel] = useState("")
	const [name, setName] = useState("")
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [phoneNumber, setPhoneNumber] = useState("")
	const [mobileNumber, setMobileNumber] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [option, setOption] = useState("personal")
	const [companyName, setCompanyName] = useState("")
	const [addressOne, setAddressOne] = useState("")
	const [addressTwo, setAddressTwo] = useState("")
	const [city, setCity] = useState("")
	const [state, setState] = useState("")
	const [zipcode, setZipcode] = useState("")
	const [website, setWebsite] = useState("")

	const stateLists = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const toggleRole = () => {
		setShowLevel(!showLevel);
	};

	const handleEmail = (e:any) => {
		setEmail(e.target.value)
	}

	const countEmptyValues = (obj: DataObject) => {
		let count = 0;
		
		for (let key in obj) {
			if (obj.hasOwnProperty(key) && obj[key] === "") {
				count++;
			}
		}

		return count
	}

	const setRole = (role: string) => {
		switch (role) {
			case "Administrator": 
				return "Admin";
				
			case "Consortium": 
				return "manager";

			case "Employer": 
				return "user";
			
			default: 
				return ''
		}
	}

	const handleRegister = async () => {

		const registerData = {
			firstName: firstName, 
			lastName: lastName,
			level: level, 
			role: setRole(level),
			email: email.toLowerCase(), 
			phoneNumber: phoneNumber,
			mobileNumber: mobileNumber,
			password: password,
			companyName: companyName, 
			addressOne: addressOne, 
			addressTwo: addressTwo,
			city: city, 
			state: state,
			zipcode: zipcode,
			website: website,
		}

		let count = countEmptyValues(registerData)
		if (count > 1) {
			enqueueSnackbar({
				variant: "error",
				message: "Please fill out everything.",
			});
		} else {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			const isValidEmail = emailRegex.test(email.toLowerCase());
			if (!isValidEmail) {
				enqueueSnackbar({
					variant: "error",
					message: "Please enter the valid email.",
				});
				return; 
			}
			const doPasswordsMatch = password === confirmPassword;
			if (!doPasswordsMatch) {
				enqueueSnackbar({
					variant: "error",
					message: "Please match the same password",
				});
				return;
			}
			await apis.signup(registerData)
			.then((res) => {
				enqueueSnackbar({
					variant: "info",
					message: res.data?.msg,
				});
				setTimeout(() => {
					navigate('/verify', { state: { email } });
				}, 1000)
			})
			.catch((error) => {
				enqueueSnackbar({
					variant: "error",
					message: error.response.data.msg || error.message,
				});
			})
		}
	}

  return (
    <div className='registerBox'>
			<div className='titleBox'>	
				<div className='title'>Sign Up</div>
				<div className='caption'>Enter details to create your account</div>
			</div>
			<div className='selectOptionBox'>
				<div className={`selectOption${option === "personal" ? " selected" : ""}`} onClick={() => setOption("personal")}>
					{
						option === "personal" 
						? <img src={SelectIcon_colored} alt="selected Icon" />
						: <img src={SelectIcon} alt="Icon" />
					}
					<div className='optionText'>Personal Information</div>
				</div>
				<div className={`selectOption${option === "company" ? " selected" : ""}`} onClick={() => setOption("company")}>
				{
						option === "company" 
						? <img src={SelectIcon_colored} alt="selected Icon" />
						: <img src={SelectIcon} alt="Icon" />
					}
					<div className='optionText'>Company Information</div>
				</div>
			</div>
			{
				option === "personal" && <div className='registerOption'>
					<div className='rowInput'>
						<div className='subBox halfWidth'>
							<div className='subTitle'>First Name</div>
							<input type='text' placeholder='Enter your first Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
						</div>
						<div className='subBox halfWidth'>
							<div className='subTitle'>Last Name</div>
							<input type='text' placeholder='Enter your last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
						</div>
					</div>
					<div className='subBox'>
						<div className='subTitle'>Your Level</div>
						<OutsideClickHandler
							onOutsideClick={() => {
								if (showLevel === true) {
									setShowLevel(false);
								}
							}}
						>
							<div className='selectRole' onClick={toggleRole}>
								<div>{level === "" ? "Select the Level" : level}</div>
								<div>{showLevel ? <IoIosArrowUp color='#949CA9' /> : <IoIosArrowDown color='#949CA9' />}</div>
								{
									showLevel && <div className='dropBox'>
										<div className='role' onClick={() => setLevel("Administrator")}>Administrator</div>
										<div className='role' onClick={() => setLevel("Consortium")}>Consortium</div>
										<div className='role' onClick={() => setLevel("Employer")}>Employer</div>
									</div>
								}
								
							</div>
						</OutsideClickHandler>
					</div>
					<div className='subBox'>
						<div className='subTitle'>Email</div>
						<input type='text' placeholder='Enter your Email' value={email} onChange={handleEmail} />
					</div>
					<div className='rowInput'>
						<div className='subBox halfWidth'>
							<div className='subTitle'>Phone Number</div>
							<input type='text' placeholder='Enter your Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value.replace(/[^0-9.]/g, ''))} />
						</div>
						<div className='subBox halfWidth'>
							<div className='subTitle'>Mobile Number</div>
							<input type='text' placeholder='Enter your Number' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value.replace(/[^0-9.]/g, ''))} />
						</div>
					</div>
					<div className='passwordBox'>
						<div className='passwordInput'>
							<div className='passwordSubBox'>
								<div className='subTitle'>Password</div>
								<div className='passwordInputTag'>
									<input 
										type={showPassword ? 'text' : 'password'} 
										value={password} placeholder='Enter your password' 
										onChange={(e) => setPassword(e.target.value)} />
									<div className='icon' onClick={togglePasswordVisibility}>
										{showPassword ? <FaEyeSlash color='#949CA9' /> : <FaEye color='#949CA9'/>}
									</div>
								</div>
							</div>
							<div className='passwordSubBox'>
								<div className='subTitle'>Confirm Password</div>
								<div className='passwordInputTag'>
									<input 
										type={showPassword ? 'text' : 'password'} 
										value={confirmPassword} placeholder='Enter your password' 
										onChange={(e) => setConfirmPassword(e.target.value)} />
									<div className='icon' onClick={togglePasswordVisibility}>
										{showPassword ? <FaEyeSlash color='#949CA9' /> : <FaEye color='#949CA9'/>}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div style={{marginTop: "20px"}}>
						<MainButton title="Continue" onClick={() => setOption("company")} />
					</div>
				</div>
			}
			{
				option === 'company' && <div className='registerOption'>
					<div className='subBox'>
						<div className='subTitle'>Company Name</div>
						<input type='text' placeholder='Enter your company name' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
					</div>
					<div className='rowInput'>
						<div className='subBox halfWidth'>
							<div className='subTitle'>Address 1</div>
							<input type='text' placeholder='Enter your Address' value={addressOne} onChange={(e) => setAddressOne(e.target.value)} />
						</div>
						<div className='subBox halfWidth'>
							<div className='subTitle'>Address 2</div>
							<input type='text' placeholder='Enter your Address' value={addressTwo} onChange={(e) => setAddressTwo(e.target.value)} />
						</div>
					</div>
					<div className='rowInput'>
						<div className='subBox halfWidth'>
							<div className='subTitle'>City</div>
							<input type='text' placeholder='Enter your Address' value={city} onChange={(e) => setCity(e.target.value)} />
						</div>
						<div className='subBox halfWidth'>
							<div className='subTitle halfWidth'>State</div>
							<select value={state} onChange={(e) => setState(e.target.value)}>
								{
									stateLists.map((item, index) => {
										return (
											<option key={index} value={item}>{item}</option>
										)
									})
								}
							</select>
						</div>
					</div>
					<div className='rowInput'>
						<div className='subBox halfWidth'>
							<div className='subTitle'>Zip Code</div>
							<input type='text' placeholder='Enter your Address' value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
						</div>
					</div>
					<div className='subBox'>
						<div className='subTitle'>Website<span>(optional)</span></div>
						<input type='text' placeholder='Enter your Address' value={website} onChange={(e) => setWebsite(e.target.value)} />
					</div>
					<div style={{marginTop: "20px"}}>
						<MainButton title="Sign up" onClick={handleRegister} />
					</div>
				</div>
			}
			<div className='other'>
				<div>Already have an account? <span onClick={() => navigate("/login")}>Sign in</span></div>
			</div>
    </div>
  )
}
