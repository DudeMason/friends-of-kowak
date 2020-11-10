import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from "./auth/ProtectedRoute";
import RedirectRoute from "./auth/RedirectRoute";
import Account from "./auth/Account";
import Login from './auth/Login';
import Register from './auth/Register';
import Reset from "./auth/Reset";
import FetchUser from './auth/FetchUser';
import Home from './pages/Home';
import Education from "./pages/Education";
import Health from "./pages/Health";
import Community from "./pages/Community";
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from "./pages/Donate";
import NoMatch from './shared/NoMatch';
import Alert from "./partials/Alert";
import Navbar from "./shared/Navbar";
import './App.css';
import {Consumer} from "./Provider";

const App = ({alertMessage, alertShow, closeAlert, alertType}) => (
	<div>
		<Navbar/>
		{alertShow ? <Alert message={alertMessage} closeAlert={closeAlert} alertType={alertType}/> : null}
		<FetchUser>
			<Switch>
				<Route exact path={'/'} component={Home}/>
				<Route exact path={'/home'} component={Home}/>
				<Route exact path={'/education'} component={Education}/>
				<Route exact path={'/health'} component={Health}/>
				<Route exact path={'/community'} component={Community}/>
				<Route exact path={'/about'} component={About}/>
				<Route exact path={'/contact'} component={Contact}/>
				<Route exact path={'/donate'} component={Donate}/>
				{/*<Route exact path={'/reset'} component={Reset}/>*/}
				<RedirectRoute exact path={'/login'} component={Login}/>
				<RedirectRoute exact path={'/register'} component={Register}/>
				<ProtectedRoute exact path={'/account'} component={Account}/>
				<Route component={NoMatch}/>
			</Switch>
		</FetchUser>
	</div>
);
const ConnectedApp = () => (
	<Consumer>
		{value => <App closeAlert={value.closeAlert} alertShow={value.alertShow} alertType={value.alertType}
					   alertMessage={value.alertMessage}/>}
	</Consumer>
);
export default ConnectedApp;