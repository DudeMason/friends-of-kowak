import React from 'react';
import { Consumer } from "../Provider";

class Reset extends React.Component {

	componentDidMount() {
		this.props.showPage(this.props.pageId);
	}

	componentWillUnmount() {
		this.props.clearPage();
	}

	render() {
		const {page: {text1, text2}, handleChange, user, sendReset} = this.props

		return (
			<div align='center'>
				<h2>{text1}</h2>
					<input
						autoFocus
						required
						name='email'
						value={user ? user.email : ''}
						placeholder='Email'
						onChange={handleChange}
					/>
					<button onClick={sendReset}>{text2}</button>
			</div>
		);
	}
}

const ConnectedReset = () => (
	<Consumer>
		{value => <Reset page={value.page} handleChange={value.userHandleChange} user={value.user}
										 pageId={value.pageConstants.resetId} clearPage={value.clearPage} showPage={value.showPage}
										 sendReset={value.sendPasswordReset}/>}
	</Consumer>
);
export default ConnectedReset;