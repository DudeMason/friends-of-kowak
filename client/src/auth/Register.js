import React from 'react';
import { Consumer } from "../Provider";
import { Link } from "react-router-dom";

class Register extends React.Component {
	componentDidMount() {
		this.props.showPage(this.props.pageId);
	}

	componentWillUnmount() {
		this.props.clearPage();
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const {handleRegister, history, aspiringUser: {email, password, passwordConfirmation}} = this.props;

		if (!/.@\w+\.[^0-9]{2}/i.test(email)){
			alert('Must be an email address.');
			return;
		}
		if (password !== passwordConfirmation) {
			alert('Passwords do not match.');
			return;
		}
		if (password.length < 6) {
			alert('Password is too short.');
			return;
		}

		handleRegister(history);
	}

	render() {
		const {page: {text1, text2, text3, text4}, handleChange, aspiringUser: {email, password, passwordConfirmation}} = this.props;

		return (
			<div align='center'>
				<h1>{text1}</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						required
						autoFocus
						name='email'
						value={email}
						placeholder='Email'
						onChange={handleChange}
					/>
					<input
						required
						name='password'
						value={password}
						placeholder='Password'
						type='password'
						onChange={handleChange}
					/>
					<input
						required
						name='passwordConfirmation'
						value={passwordConfirmation}
						placeholder='Confirmation'
						type='password'
						onChange={handleChange}
					/>
					<button type='submit'>{text2}</button>
				</form>
				<br/>
				{text3}
				<br/>
				<Link to={'/login'}>{text4}</Link>
			</div>
		);
	}
}

const ConnectedRegister = (props) => (
	<Consumer>
		{value => <Register history={props.history} handleRegister={value.handleRegister} pageId={value.pageConstants.registerId} aspiringUser={value.aspiringUser}
							page={value.page} showPage={value.showPage} clearPage={value.clearPage} handleChange={value.userHandleChange}/>}
	</Consumer>
);
export default ConnectedRegister;
