import React, { Component } from 'react';
import axios from 'axios';

const AuthContext = React.createContext(undefined);
export const AuthConsumer = AuthContext.Consumer;

export default class AuthProvider extends Component {
	state = {user: null, edit: false};

	handleRegister = (user, history) => {
		// // If you desire a user capacity, use this
		// axios.get('/api/users')
		// .then(res => {
		// 	if (res.data.length <= 1) {
		axios.post('/api/auth', user)
		.then(result => {
			this.setState({user: result.data.data});
			history.push('/');
		})
		.catch(err => {
			console.log(err);
			alert('User already exists.');
		});
		// 	} else {
		// 		alert('Already at max users.');
		// 	}
		// })
		// .catch(err => {
		// 	console.log(err);
		// });
	}

	handleLogin = (user, history) => {
		axios.post('/api/auth/sign_in', user)
		.then(res => {
			this.setState({user: res.data.data}, () => {
				history.push('/');
			});
		})
		.catch(err => {
			console.log(err);
			alert('Incorrect login');
		});
	}

	handleLogout = (history) => {
		axios.delete('/api/auth/sign_out')
		.then(() => {
			this.setState({user: null, edit: false});
			history.push('/login');
		})
		.catch(err => {
			console.log(err);
		});
	}

	toggleEdit = () => {
		this.setState({edit: !this.state.edit});
	}

	render() {
		return (
			<AuthContext.Provider value={{
				...this.state,
				toggleEdit: this.toggleEdit,
				handleRegister: this.handleRegister,
				handleLogin: this.handleLogin,
				handleLogout: this.handleLogout,
				setUser: (user) => this.setState({user: user})
			}}>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}
