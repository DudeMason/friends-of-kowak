import React from 'react';
import { Link, withRouter, } from 'react-router-dom';
import { AuthConsumer } from "../providers/AuthProvider";

class Navbar extends React.Component {

	rightNavItems = () => {
		const {user, handleLogout, toggleEdit, edit} = this.props.auth;

		if (user) {
			return (
				<div>
					{
						edit ?
						<button onClick={toggleEdit} className={'button isCancel'}>
							<span role={'img'} aria-label={'Cancel'}>✘</span>
						</button>
								 :
						<button onClick={toggleEdit} className={'button isEdit'}>✎</button>
					}
					<button onClick={() => handleLogout(this.props.history)}>Logout</button>
				</div>
			)
		}
	}

	render() {
		return (
			<div className={'navBar'}>
				<Link to={'/'}>
					<span className={'navItem'}>Home</span>
				</Link>
				<Link to={'/contact'}>
					<span className={'navItem'}>Contact</span>
				</Link>
				<Link to={'/about'}>
					<span className={'navItem'}>About</span>
				</Link>
				{this.rightNavItems()}
			</div>
		)
	}
}

export class ConnectedNavbar extends React.Component {
	render() {
		return (
			<AuthConsumer>
				{auth =>
					<Navbar {...this.props} auth={auth}/>
				}
			</AuthConsumer>
		)
	}
}

export default withRouter(ConnectedNavbar);
