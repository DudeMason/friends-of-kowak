import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Consumer } from "../Provider";

class Navbar extends React.Component {

	render() {

		const {edit, user, logout, toggleEdit, editPage} = this.props;

		return (
			<div>
				<div className='title'>
					Friends of Kowak
				</div>

				<div id={7} className={'navbar'}>
					<Link to={'/donate'} className='navItem donateButton'>
						Donate
					</Link>
					{
						user ?
						<div>
							<Link to={''} className='login navItem' onClick={() => logout(this.props.history)}>
								Logout
							</Link>

							{
								edit ?
								<div>
									<button className='formButton isCancel navItem' onClick={toggleEdit}>
										<span role='img' aria-label='Cancel'>✘</span>
									</button>
									<button className='formButton isConfirm navItem' onClick={editPage}>
										<span role='img' aria-label='Submit'>✔︎</span>
									</button>
								</div>
										 :
								<div>
									{user.nickname ? <button className='formButton isEdit navItem' onClick={toggleEdit}>✎</button> : null}
								</div>
							}
						</div>
								 :
						<Link id={8} to={'/login'} className='login navItem'>
							Login
						</Link>
					}
					<Link id={1} to={'/'} className='navItem'>
						Home
					</Link>
					<Link id={2} to={'/education'} className='navItem'>
						Education
					</Link>
					<Link id={3} to={'/health'} className='navItem'>
						Health Care
					</Link>
					<Link id={4} to={'/community'} className='navItem'>
						Community
					</Link>
					<Link id={5} to={'/about'} className='navItem'>
						About Us
					</Link>
					<Link id={6} to={'/contact'} className='navItem'>
						Contact
					</Link>
				</div>
			</div>
		);
	}
}

const ConnectedNavbar = (props) => (
	<Consumer>
		{value => <Navbar history={props.history} edit={value.edit} user={value.user} logout={value.handleLogout}
											toggleEdit={value.toggleEdit} editPage={value.editPage}/>}
	</Consumer>
);
export default withRouter(ConnectedNavbar);
