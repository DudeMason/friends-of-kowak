import React from 'react';
import { Consumer } from "../Provider";
import axios from "axios";

class Account extends React.Component {

	componentDidMount() {
		axios.get('/api/auth/validate_token')
		.catch(() => {
			this.props.setUser(null);
		});
		this.props.showPage(this.props.pageId);
	}

	componentWillUnmount() {
		this.props.clearPage();
	}

	render() {
		const {page: {text1, text2, text3}, user} = this.props;

		return (
			<div align='center'>
				{text1}
				<br/>
				{text2}: {user.uid}
				<br/>
				{text3}: {user.email}
			</div>
		);
	}
}

const ConnectedAccount = () => (
	<Consumer>
		{value => <Account setUser={value.setUser} user={value.user} pageId={value.pageConstants.accountId}
											 page={value.page} showPage={value.showPage} clearPage={value.clearPage}/>}
	</Consumer>
);
export default ConnectedAccount;
