import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Consumer } from "../Provider";

const ProtectedRoute = ({component: Component, ...rest}) => (

	<Consumer>
		{
			auth =>
				<Route
					{...rest}
					render={props => (
						auth.user ?
						<Component {...props} />
											:
						<Redirect to={{pathname: "/login", state: {from: props.location}}}/>
					)}
				/>
		}
	</Consumer>
);

export default ProtectedRoute;
