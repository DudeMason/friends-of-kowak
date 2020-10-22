import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";

class Account extends React.Component {
	state = {email: '', password: ''};

	render() {
		const {user} = this.props.auth;

		return (
			<div align='center'>
				Account Page
				<br/>
				Username: {user.email}
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
