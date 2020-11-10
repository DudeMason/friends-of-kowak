import React from 'react';
import { Consumer } from "../Provider";
import { Link } from "react-router-dom";

class Login extends React.Component {
	componentDidMount() {
		const pageId = this.props.pageId;
		document.getElementById(pageId).focus();
		this.props.showPage(pageId);
	}

	componentWillUnmount() {
		this.props.clearPage();
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleLogin(this.props.history);
	}

	render() {
		const {page: {text1, text2, text3, text4, text5, text6}, handleChange, aspiringUser: {email, password}} = this.props

		return (
			<div align='center'>
				<h1>{text1}</h1>
				<form onSubmit={this.handleSubmit} style={{width: '90%'}}>
					<input
						autoFocus
						required
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
					<button type='submit'>{text2}</button>
				</form>
				<br/>
				{text3} <Link to={'/register'}>{text4}</Link>
				<br/>
				<br/>
				{text5}
				<br/>
				<Link to={'/reset'}>{text6}</Link>
			</div>
		);
	}
}

const ConnectedLogin = (props) => (
	<Consumer>
		{value => <Login history={props.history} handleLogin={value.handleLogin} pageId={value.pageConstants.loginId} aspiringUser={value.aspiringUser}
						page={value.page} showPage={value.showPage} clearPage={value.clearPage} handleChange={value.userHandleChange}/>}
	</Consumer>
);
export default ConnectedLogin;
