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
					<button className='donateButton' onClick={() => alert('This feature is not yet available.')}>
						Donate
					</button>
				</div>

				<div className={'navbar'}>
					<Link to={'/'}>
						<span className='navItem'>Home</span>
					</Link>
					<Link to={'/education'}>
						<span className='navItem'>Education</span>
					</Link>
					<Link to={'/health'}>
						<span className='navItem'>Health Care</span>
					</Link>
					<Link to={'/community'}>
						<span className='navItem'>Community</span>
					</Link>
					<Link to={'/about'}>
						<span className='navItem'>About Us</span>
					</Link>
					<Link to={'/contact'}>
						<span className='navItem'>Contact</span>
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
							<Link to={''} onClick={() => handleLogout(this.props.history)}>
								<span className='login'>Logout</span>
							</Link>
						</>
								 :
						<Link to={'/login'}>
							<span className='login'>Login</span>
						</Link>
					}
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
