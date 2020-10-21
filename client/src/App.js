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
import FetchUser from './auth/FetchUser';
import Login from './auth/Login';
import Register from './auth/Register';
import { AuthConsumer } from "./providers/AuthProvider";

const App = ({canRegister, edit}) => (

	<div>
		<Navbar/>
		<FetchUser>
			<Switch>
				{
					edit ?
					<>
						<Route exact path='/' component={HomeForm}/>
						<Route exact path='/contact' component={ContactForm}/>
						<Route exact path='/about' component={AboutForm}/>
					</>
							 :
					<>
						<Route exact path='/' component={Home}/>
						<Route exact path='/contact' component={Contact}/>
						<Route exact path='/about' component={About}/>
					</>
				}
				<Route exact path='/login' component={Login}/>
				{canRegister ? <Route exact path='/register' component={Register}/> : null}
				<Route component={NoMatch}/>
			</Switch>
		</FetchUser>
	</div>
)

const ConnectedApp = () => {
	return (
		<AuthConsumer>
			{
				value => (
					<App canRegister={value.canRegister}/>
				)
			}
		</AuthConsumer>
	)
}
export default ConnectedApp;