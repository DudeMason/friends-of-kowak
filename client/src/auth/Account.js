import React from 'react';
import { Consumer } from "../Provider";
import axios from "axios";

class Account extends React.Component {

	componentDidMount() {
		axios.get('/api/auth/validate_token')
		.catch(() => {
			this.props.setUser(null);
		});
	}

	render() {
		const {user} = this.props;

		return (
			<div align='center'>
				<h2>Your Account</h2>
				<br/>
				Username: {user.uid}
			</div>
		);
	}
}

const ConnectedAccount = () => (
	<Consumer>
		{value => <Account setUser={value.setUser} user={value.user}/>}
	</Consumer>
);
export default ConnectedAccount;
