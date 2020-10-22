import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './shared/Home';
import HomeForm from "./shared/HomeForm";
import Contact from './shared/Contact';
import ContactForm from './shared/ContactForm';
import About from './shared/About';
import AboutForm from './shared/AboutForm';
import NoMatch from './shared/NoMatch';
import Navbar from './shared/Navbar';
import Account from "./auth/Account";
import Login from './auth/Login';
import Register from './auth/Register';
import FetchUser from './auth/FetchUser';
import { AuthConsumer } from "./providers/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";
import RedirectRoute from "./auth/RedirectRoute";

const App = ({edit}) => (

	<>
		{
			edit ?
			<div>
				<Navbar/>
				<FetchUser>
					<Switch>
						<Route exact path={'/'} component={HomeForm}/>
						<Route exact path={'/contact'} component={ContactForm}/>
						<Route exact path={'/about'} component={AboutForm}/>
						<RedirectRoute exact path={'/login'} component={Login}/>
						<RedirectRoute exact path={'/register'} component={Register}/>
						<ProtectedRoute exact path={'/account'} component={Account}/>
						<Route component={NoMatch}/>
					</Switch>
				</FetchUser>
			</div>
					 :
			<div>
				<Navbar/>
				<FetchUser>
					<Switch>
						<Route exact path={'/'} component={Home}/>
						<Route exact path={'/contact'} component={Contact}/>
						<Route exact path={'/about'} component={About}/>
						<RedirectRoute exact path={'/login'} component={Login}/>
						<RedirectRoute exact path={'/register'} component={Register}/>
						<ProtectedRoute exact path={'/account'} component={Account}/>
						<Route component={NoMatch}/>
					</Switch>
				</FetchUser>
			</div>
		}
	</>
);

const ConnectedApp = () => (
	<AuthConsumer>
		{value => <App canRegister={value.canRegister} edit={value.edit}/>}
	</AuthConsumer>
);
export default ConnectedApp;