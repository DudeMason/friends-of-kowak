import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from "../providers/AuthProvider";

class Navbar extends React.Component {

	render() {
		const {user, handleLogout, toggleEdit, edit} = this.props.auth;
		return (
			<div>
				<div className='title'>
					Friends of Kowak
				</div>

				<div className={'navbar'}>
					<Link to={'/donate'} className='donateButton navItem'>
						Donate
					</Link>
					{
						user ?
						<>
							{
								edit ?
								<button onClick={toggleEdit} className='formButton isCancel navItem'>
									<span role='img' aria-label='Cancel'>✘</span>
								</button>
										 :
								<>
									{
										user.nickname ?
										<button onClick={toggleEdit} className='formButton isEdit navItem'>✎</button>
																	:
										null
									}
								</>
							}
							<Link to={''} className='login navItem' onClick={() => handleLogout(this.props.history)}>
								Logout
							</Link>
						</>
								 :
						<Link to={'/login'} className='login navItem'>
							Login
						</Link>
					}
					<Link to={'/'} className='navItem'>
						Home
					</Link>
					<Link to={'/education'} className='navItem'>
						Education
					</Link>
					<Link to={'/health'} className='navItem'>
						Health Care
					</Link>
					<Link to={'/community'} className='navItem'>
						Community
					</Link>
					<Link to={'/about'} className='navItem'>
						About Us
					</Link>
					<Link to={'/contact'} className='navItem'>
						Contact
					</Link>
				</div>
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
