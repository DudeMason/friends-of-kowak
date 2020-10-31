import React from 'react';
import { Consumer } from "../Provider";
import { Link } from "react-router-dom";

class Register extends React.Component {
	state = {email: '', password: '', passwordConfirmation: ''};

	componentDidMount() {
		this.props.showPage(this.props.pageId);
	}

	componentWillUnmount() {
		this.props.clearPage();
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const {email, password, passwordConfirmation} = this.state;
		const {handleRegister, history,} = this.props;

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

		handleRegister({email, password, passwordConfirmation}, history);
	}

	render() {
		const {email, password, passwordConfirmation} = this.state;
		const {page: {text1, text2, text3, text4}, handleChange} = this.props;

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
						onChange={this.handleChange}
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
		{value => <Register history={props.history} handleRegister={value.handleRegister} pageId={value.pageConstants.registerId}
												page={value.page} showPage={value.showPage} clearPage={value.clearPage} handleChange={value.userHandleChange}/>}
	</Consumer>
);
export default ConnectedRegister;
