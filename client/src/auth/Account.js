import React from 'react';
import { Consumer } from "../Provider";
import axios from "axios";

class Account extends React.Component {

	componentDidMount() {
		axios.get('/api/auth/validate_token')
		.catch(() => {
			this.props.auth.setUser(null);
		});
	}

	render() {
		const {user} = this.props.auth;

		return (
			<div align='center'>
				Account Page
				<br/>
				Username: {user.uid}
				<br/>
				Email: {user.email}
			</div>
		);
	}
}

const ConnectedAccount = () => (
	<Consumer>
		{auth => <Account auth={auth}/>}
	</Consumer>
);
export default ConnectedAccount;
