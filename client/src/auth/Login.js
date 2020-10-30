import React from 'react';
import { Consumer } from "../Provider";
import { Link } from "react-router-dom";

class Login extends React.Component {
	state = {email: '', password: ''};

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
		this.props.handleLogin(this.state, this.props.history);
	}

	handleChange = (e) => {
		const {name, value,} = e.target;
		this.setState({[name]: value,});
	}

	render() {
		const {email, password} = this.state;
		const {page: {text1, text2, text3, text4}} = this.props

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
					<button type='submit'>{text2}</button>
				</form>
				<br/>
				{text3}
				<br/>
				<Link to={'/register'}>{text4}</Link>
			</div>
		);
	}
}

const ConnectedLogin = (props) => (
	<Consumer>
		{value => <Login history={props.history} handleLogin={value.handleLogin} pageId={value.pageConstants.loginId}
										 page={value.page} showPage={value.showPage} clearPage={value.clearPage}/>}
	</Consumer>
);
export default ConnectedLogin;
