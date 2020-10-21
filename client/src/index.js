import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import PageProvider from './providers/PageProvider';
import { initMiddleware } from 'devise-axios';

initMiddleware();

ReactDOM.render(
	<AuthProvider>
		<PageProvider>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</PageProvider>
	</AuthProvider>,

	document.getElementById('root')
);
