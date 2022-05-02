import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isAuthenticated } = useSelector((state) => state.auth)
	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated === false ? <Redirect to="/" /> : <Component {...props} />
			}
		/>
	)
}

export default PrivateRoute
