import React from "react";
import { useCookies } from "react-cookie";
import { Route, Redirect } from "react-router-dom";
import Auth from "../utils/Auth";

const PrivateRoute = ({ component: Component, render, ...rest }) => {
	const [cookies, setCookie, removeCookie] = useCookies(["token"]);
	return (
		// Show the component only when the user is logged in
		// Otherwise, redirect the user to /signin page
		<Route
			{...rest}
			render={(props) =>
				cookies.token ? render() : <Redirect to={`/login`} />
			}
		/>
	);
};

export default PrivateRoute;
