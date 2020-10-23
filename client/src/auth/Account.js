import React from 'react';
import { AuthConsumer } from "../providers/AuthProvider";
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
	<AuthConsumer>
		{auth => <Account auth={auth}/>}
	</AuthConsumer>
);
export default ConnectedAccount;
