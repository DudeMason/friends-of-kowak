import React from 'react';
import axios from 'axios';
import { AuthConsumer } from "../providers/AuthProvider";

class FetchUser extends React.Component {
	state = {loaded: false,};

	componentDidMount() {
		const {authenticated, setUser} = this.props.auth;

		if (authenticated) {
			this.loaded();
		} else {
			if (this.checkLocalToken()) {
				axios.get('/api/auth/validate_token')
				.then(res => {
					setUser(res.data.data);
					this.loaded();
				})
				.catch(() => {
					this.loaded();
				});
			} else {
				this.loaded();
			}
		}
	}

	checkLocalToken = () => {
		return localStorage.getItem('access-token');
	}

	loaded = () => this.setState({loaded: true,});

	render() {
		return this.state.loaded ? this.props.children : null;
	}
}

const ConnectedFetchUser = (props) => (
	<AuthConsumer>
		{auth => <FetchUser {...props} auth={auth}/>}
	</AuthConsumer>
);
export default ConnectedFetchUser;
