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
					user ?
					<>
						{
							edit ?
							<button onClick={() => toggleEdit()} className={'button isCancel edit'}>
								<span role={'img'} aria-label={'Cancel'}>✘</span>
							</button>
									 :
							<>
								{
									user.nickname ?
									<button onClick={() => toggleEdit()} className={'button isEdit edit'}>✎</button>
																:
									null
								}
							</>
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
		);
	}
}

const ConnectedNavbar = (props) => (
	<AuthConsumer>
		{auth => <Navbar history={props.history} auth={auth}/>}
	</AuthConsumer>
);
export default withRouter(ConnectedNavbar);
