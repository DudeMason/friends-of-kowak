import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext(undefined);
export const Consumer = Context.Consumer;

export default class Provider extends Component {
	state = {user: null, edit: false, page: {}, aspiringUser: {email: '', password: '', passwordConfirmation: ''}};

	text1; text3; text2; text4; text5; text6; text7; text8; text9; nickname;

	pageConstants = {
		"homeId": 1,
		"educationId": 2,
		"healthId": 3,
		"communityId": 4,
		"aboutId": 5,
		"contactId": 6,
		"donateId": 7,
		"loginId": 8,
		"registerId": 9,
		"accountId": 10,
		"resetId": 11,
	};

	handleRegister = (history) => {
		axios.post('/api/auth', this.state.aspiringUser)
		.then(result => {
			this.setState({user: result.data.data});
			history.push('/');
		})
		.catch(err => {
			console.log(err);
			alert('User already exists.');
		});
	}

	handleLogin = (history) => {
		const {email, password} = this.state.aspiringUser;
		
		axios.post('/api/auth/sign_in', {email: email, password: password})
		.then(res => {
			this.setState({user: res.data.data});
			history.push('/');
		})
		.catch(() => {
			axios.get('/api/users')
			.then(res => {
				if (res.data.find(u => email === u.email)) {
					alert('Incorrect password.');
				} else {
					alert('Username does not exist.');
				}
			});
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

	showPage = (id) => {
		axios.get(`/api/pages/${id}`)
		.then(res => {
			this.setState({page: {...res.data}});
		})
		.catch(err => {
			console.log(err);
		});
	}

	clearPage = () => {
		this.setState({page: {}});
	}

	updatePage = () => {
		const page = this.state.page
		axios.put(`/api/pages/${page.id}`, page)
		.then(() => {
			window.location.reload();
		})
		.catch(err => {
			console.log(err);
		});
	}

	editPage = () => {
		axios.get('/api/auth/validate_token')
		.then(() => {
			const {id} = this.state.user
			axios.get(`/api/users/${id}/permissions`)
			.then(res => {
				if (res.data) {
					this.updatePage();
				}
			})
			.catch(() => {
				alert('You are not authorized to edit pages.');
			});
		})
		.catch(() => {
			alert('Must be a authorized user to edit!');
		});
	}

	sendReceipt = (receiptParams) => {
		axios.post('/api/receipt_sender', receiptParams)
		.then(res => {
			return res.data;
		})
		.catch(err => {
			console.log(err);
		});
	}

	sendPasswordReset = () => {
		const {email} = this.state.user
		axios.get('/api/users')
		.then(res => {
			if (res.data.find(u => u.email === email)) {
				axios.post('/api/password_reset_sender', {email: email})
				.then(r => {
					window.location.reload();
					return r.data;
				})
				.catch(err => {
					console.log(err);
				});
			} else {
				alert('Username does not exist.');
			}
		})
		.catch(err => console.log(err.data));
	}

	pageHandleChange = (e) => {
		const {name, value} = e.target;
		this.setState({page: {...this.state.page, [name]: value}});
	}

	userHandleChange = (e) => {
		const {name, value} = e.target;
		this.setState({aspiringUser: {...this.state.aspiringUser, [name]: value}});
	}

	render() {
		return (
			<Context.Provider value={{
				...this.state,
				toggleEdit: this.toggleEdit,
				handleRegister: this.handleRegister,
				handleLogin: this.handleLogin,
				handleLogout: this.handleLogout,
				setUser: (user) => this.setState({user: user}),
				editPage: this.editPage,
				showPage: this.showPage,
				clearPage: this.clearPage,
				pageHandleChange: this.pageHandleChange,
				userHandleChange: this.userHandleChange,
				pageConstants: this.pageConstants,
				sendPasswordReset: this.sendPasswordReset,
			}}>
				{this.props.children}
			</Context.Provider>
		);
	}
}
