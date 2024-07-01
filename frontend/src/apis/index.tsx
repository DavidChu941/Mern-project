import axios from 'axios'
export const SERVER_URL = process.env.REACT_APP_BACKEND_URL

const headers = {
	Authorization: localStorage.getItem('token')
}

// User
const signup = (data:any) => axios.post(`${SERVER_URL}/api/users/register`, data)
const login = (data:any) => axios.post(`${SERVER_URL}/api/users/login`, data)
const getAllUsers = () => axios.get(`${SERVER_URL}/api/users/getAllUsers`)
const handleUserByAdmin = (data: any) => axios.post(`${SERVER_URL}/api/users/handleUserByAdmin`, data)
const updateProfile = (data: any) => axios.post(`${SERVER_URL}/api/users/updateProfile`, data)

// OTP
const verifyEmail = (data:any) => axios.post(`${SERVER_URL}/api/otps/verifyEmail`, data)
const codeAgain = (data:any) => axios.post(`${SERVER_URL}/api/otps/codeAgain`, data)

export const apis = {
	signup, 
	login, 
	getAllUsers,
	verifyEmail,
	updateProfile,
	codeAgain,
	handleUserByAdmin
}