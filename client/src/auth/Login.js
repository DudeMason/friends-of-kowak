import React from 'react';
import { Consumer } from "../Provider";

class Login extends React.Component {
	state = {email: '', password: ''};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.auth.handleLogin(this.state, this.props.history);
	}

	handleChange = (e) => {
		const {name, value,} = e.target;
		this.setState({[name]: value,});
	}

	render() {
		const {email, password} = this.state;

		return (
			<div align='center'>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit} style={{width: '90%'}}>
					<input
						autoFocus
						required
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
					<button type='submit'>Submit</button>
				</form>
				<br/>
				Don't have an account?
				<br/>
				<a href={'/register'}>register here</a>
			</div>
		);
	}
}

const ConnectedLogin = (props) => (
	<Consumer>
		{auth => <Login history={props.history} auth={auth}/>}
	</Consumer>
);
export default ConnectedLogin;
