import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from "../providers/AuthProvider";

class Navbar extends React.Component {

	render() {
		const {user, handleLogout, toggleEdit, edit} = this.props.auth;
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
				{
					user.email ?
					<>
						{
							edit ?
							<button onClick={() => toggleEdit()} className={'button isCancel edit'}>
								<span role={'img'} aria-label={'Cancel'}>✘</span>
							</button>
									 :
							<button onClick={() => toggleEdit()} className={'button isEdit edit'}>✎</button>
						}
						<Link to={''} onClick={() => handleLogout(this.props.history)}>
							<span className={'login navItem'}>Logout</span>
						</Link>
					</>
							 :
					<Link to={'/login'}>
						<span className={'login navItem'}>Login</span>
					</Link>
				}
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
