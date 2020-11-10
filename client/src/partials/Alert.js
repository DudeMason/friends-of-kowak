import React from 'react';
import '../css/Alerts.css'

const Alert = ({message, closeAlert, alertType}) => (
		<div className={`alert ${alertType}`}>
			<span>{message}</span>
			<button className='alertButton' onClick={closeAlert}>X</button>
		</div>
);

export default Alert;