import { createBrowserRouter } from "react-router-dom";
import PrivateLayout from "../components/layout/privateLayout";
import PublicLayout from "../components/layout/publicLayout";
import Dashboard from "../pages/Dashboard";
import CompanyProfile from "../pages/CompanyProfile";
import Labs from "../pages/Labs";
import Consortiums from "../pages/Consortiums";
import Orders from "../pages/Orders";
import Employers from "../pages/Employers";
import Employees from "../pages/Employees";
import RandomPools from "../pages/RandomPools";
import Accounting from "../pages/Accounting";
import Reports from "../pages/Reports";
import SupportCenter from "../pages/SupportCenter";
import Setting from "../pages/CompanyProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../pages/Users";
import OTPVerify from "../pages/OTPVerify";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <PrivateLayout children={<Dashboard />} />,
	},
	{
		path: "/company-profile",
		element: <PrivateLayout children={<CompanyProfile />} />
	},
	{
		path: "/labs",
		element: <PrivateLayout children={<Labs />} />
	},
	{
		path: "/consortiums",
		element: <PrivateLayout children={<Consortiums />} />
	},
	{
		path: "/orders",
		element: <PrivateLayout children={<Orders />} />
	},
	{
		path: "/employers",
		element: <PrivateLayout children={<Employers />} />
	},
	{
		path: "/employees",
		element: <PrivateLayout children={<Employees />} />
	},
	{
		path: "/random-pools",
		element: <PrivateLayout children={<RandomPools />} />
	},
	{
		path: "/accounting",
		element: <PrivateLayout children={<Accounting />} />
	},
	{
		path: "/reports",
		element: <PrivateLayout children={<Reports />} />
	},
	{
		path: "/support-center",
		element: <PrivateLayout children={<SupportCenter />} />
	},
	{
		path: "/setting",
		element: <PrivateLayout children={<Setting />} />
	},
	{
		path: "/users",
		element: <PrivateLayout children={<Users />} />
	},
	{
		path: "/register",
		element: <PublicLayout children={<Register />} />
	},
	{
		path: "/login",
		element: <PublicLayout children={<Login />} />
	},
	{
		path: "/verify",
		element: <PublicLayout children={<OTPVerify />} />
	},
])