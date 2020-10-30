import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext(undefined);
export const Consumer = Context.Consumer;

export default class Provider extends Component {
	state = {user: null, edit: false, page: {}};

	text1; text3; text2;text4; text5; text6; text7; text8; text9; nickname;

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
	}

	handleRegister = (user, history) => {
		axios.post('/api/auth', user)
		.then(result => {
			this.setState({user: result.data.data});
			history.push('/');
		})
		.catch(err => {
			console.log(err);
			alert('User already exists.');
		});
	}

	handleLogin = (user, history) => {
		axios.post('/api/auth/sign_in', user)
		.then(res => {
			this.setState({user: res.data.data});
			history.push('/');
		})
		.catch(() => {
			axios.get('/api/users')
			.then(res => {
				if (res.data.find(u => user.email === u.email)) {
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
		.then(res => {
			if (res.data.data.nickname) {
				this.updatePage();
			} else {
				alert('You are not authorized to edit pages.');
			}
		})
		.catch(() => {
			alert('Must be a authorized user to edit!');
		});
	}

	sendReceipt = (receiptParams) => {
		axios.post('/api/receipt_senders', receiptParams)
		.then(res => {
			return res.data;
		})
		.catch(err => {
			console.log(err);
		})
	}

	handleChange = (e) => {
		const {name, value} = e.target;
		this.setState({page: {...this.state.page, [name]: value}});
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
				handleChange: this.handleChange,
				pageConstants: this.pageConstants
			}}>
				{this.props.children}
			</Context.Provider>
		);
	}
}
