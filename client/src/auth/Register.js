import React from 'react';
import { AuthConsumer } from "../providers/AuthProvider";

class Register extends React.Component {
	state = {email: '', password: '', passwordConfirmation: ''};

	handleSubmit = (e) => {
		e.preventDefault();
		const {email, password, passwordConfirmation} = this.state;
		const {auth: {handleRegister}, history,} = this.props;

		if (!/.@\w+\.[^0-9]{2}/i.test(email)){
			alert('Must be an email address');
			return;
		}

		if (password !== passwordConfirmation) {
			alert('Passwords Do Not Match!');
			return;
		}

		if (password.length < 6) {
			alert('Password is too short.');
			return;
		}

		handleRegister({email, password, passwordConfirmation}, history);
	}

	handleChange = (e) => {
		const {name, value} = e.target;
		this.setState({[name]: value});
	}

	render() {
		const {email, password, passwordConfirmation} = this.state;

		return (
			<div align='center'>
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						required
						autoFocus
						name='email'
						value={email}
						placeholder='Email'
						onChange={this.handleChange}
					/>
					<input
						required
						name='password'
						value={password}
						placeholder='Password'
						type='password'
						onChange={this.handleChange}
					/>
					<input
						required
						name='passwordConfirmation'
						value={passwordConfirmation}
						placeholder='Confirmation'
						type='password'
						onChange={this.handleChange}
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}

const ConnectedRegister = (props) => (
	<AuthConsumer>
		{auth => <Register history={props.history} auth={auth}/>}
	</AuthConsumer>
);
export default ConnectedRegister;
