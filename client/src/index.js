import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Provider from './Provider';
import { initMiddleware } from 'devise-axios';

initMiddleware();

ReactDOM.render(
	<Provider>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>,

	document.getElementById('root')
);
