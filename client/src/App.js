import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Account from "./auth/Account";
import Login from './auth/Login';
import Register from './auth/Register';
import FetchUser from './auth/FetchUser';
import ProtectedRoute from "./auth/ProtectedRoute";
import RedirectRoute from "./auth/RedirectRoute";
import Home from './shared/pages/Home';
import Education from "./shared/pages/Education";
import Health from "./shared/pages/Health";
import Community from "./shared/pages/Community";
import About from './shared/pages/About';
import Contact from './shared/pages/Contact';
import Donate from "./shared/pages/Donate";
import NoMatch from './shared/NoMatch';
import Navbar from './shared/Navbar';
import './App.css';

const App = () => (
	<div>
		<Navbar/>
		<FetchUser>
			<Switch>
				<Route exact path={'/'} component={Home}/>
				<Route exact path={'/education'} component={Education}/>
				<Route exact path={'/health'} component={Health}/>
				<Route exact path={'/community'} component={Community}/>
				<Route exact path={'/about'} component={About}/>
				<Route exact path={'/contact'} component={Contact}/>
				<Route exact path={'/donate'} component={Donate}/>
				<RedirectRoute exact path={'/login'} component={Login}/>
				<RedirectRoute exact path={'/register'} component={Register}/>
				<ProtectedRoute exact path={'/account'} component={Account}/>
				<Route component={NoMatch}/>
			</Switch>
		</FetchUser>
	</div>
);
export default App;