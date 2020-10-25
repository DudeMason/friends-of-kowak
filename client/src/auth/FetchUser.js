import React from 'react';
import axios from 'axios';
import { Consumer } from "../Provider";

class FetchUser extends React.Component {
	state = {loaded: false};

	componentDidMount() {
		const {user, setUser} = this.props;

		if (user) {
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

	loaded = () => this.setState({loaded: true});

	render() {
		return this.state.loaded ? this.props.children : null;
	}
}

const ConnectedFetchUser = (props) => (
	<Consumer>
		{value => <FetchUser {...props} value={value} user={value.user} setUser={value.setUser}/>}
	</Consumer>
);
export default ConnectedFetchUser;
