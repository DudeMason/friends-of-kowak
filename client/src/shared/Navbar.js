import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => (

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
	</div>
)

export default Navbar;
