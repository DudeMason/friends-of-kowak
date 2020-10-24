import React from 'react';
import { AuthConsumer } from "./providers/AuthProvider";
import { Route, Switch } from 'react-router-dom';
import Account from "./auth/Account";
import Login from './auth/Login';
import Register from './auth/Register';
import FetchUser from './auth/FetchUser';
import ProtectedRoute from "./auth/ProtectedRoute";
import RedirectRoute from "./auth/RedirectRoute";
import Home from './shared/pages/Home';
import HomeForm from "./shared/forms/HomeForm";
import Education from "./shared/pages/Education";
import EducationForm from "./shared/forms/EducationForm";
import Health from "./shared/pages/Health";
import HealthForm from "./shared/forms/HealthForm";
import Community from "./shared/pages/Community";
import CommunityForm from "./shared/forms/CommunityForm";
import About from './shared/pages/About';
import AboutForm from './shared/forms/AboutForm';
import Contact from './shared/pages/Contact';
import ContactForm from './shared/forms/ContactForm';
import Donate from "./shared/pages/Donate";
import DonateForm from "./shared/forms/DonateForm";
import NoMatch from './shared/NoMatch';
import Navbar from './shared/Navbar';
import './App.css';

const App = ({edit}) => (

	<>
		{
			edit ?
			<div>
				<Navbar/>
				<FetchUser>
					<Switch>
						<Route exact path={'/'} component={HomeForm}/>
						<Route exact path={'/education'} component={EducationForm}/>
						<Route exact path={'/health'} component={HealthForm}/>
						<Route exact path={'/community'} component={CommunityForm}/>
						<Route exact path={'/about'} component={AboutForm}/>
						<Route exact path={'/contact'} component={ContactForm}/>
						<Route exact path={'/donate'} component={DonateForm}/>
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
		}
	</>
);

const ConnectedApp = () => (
	<AuthConsumer>
		{value => <App canRegister={value.canRegister} edit={value.edit}/>}
	</AuthConsumer>
);
export default ConnectedApp;