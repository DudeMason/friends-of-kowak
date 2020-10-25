import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Consumer } from "../Provider";

const RedirectRoute = ({component: Component, ...rest}) => (

	<Consumer>
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
	</Consumer>
);

export default RedirectRoute;
