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

				<div className={'navbar'}>
					<Link to={'/donate'} className='donateButton navItem'>
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
	<Consumer>
		{value => <Navbar history={props.history} edit={value.edit} user={value.user} logout={value.handleLogout}
											toggleEdit={value.toggleEdit} editPage={value.editPage}/>}
	</Consumer>
);
export default withRouter(ConnectedNavbar);
