import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "../providers/AuthProvider";

const RedirectRoute = ({component: Component, ...rest}) => (

	<AuthConsumer>
		{
			auth =>
				<Route
					{...rest}
					render={props => (
						auth.user ?
						<Redirect to={{pathname: "/account", state: {from: props.location}}}/>
											:
						<Component {...props} />
					)}
				/>
		}
	</AuthConsumer>
);

export default RedirectRoute;
