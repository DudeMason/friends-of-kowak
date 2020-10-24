import React, { Component } from 'react';
import axios from 'axios';

const PageContext = React.createContext(undefined);
export const PageConsumer = PageContext.Consumer;

export default class PageProvider extends Component {
	state = {page: {}};
	pageConstants = {
		"homePage": 1,
		"educationPage": 2,
		"healthPage": 3,
		"communityPage": 4,
		"aboutPage": 5,
		"contactPage": 6,
		"donatePage": 7
	}

	showPage = (id) => {
		axios.get(`/api/pages/${id}`)
		.then(res => {
			this.setState({
				page: {
					text1: res.data.text1,
					text2: res.data.text2,
					text3: res.data.text3,
					text4: res.data.text4,
					text5: res.data.text5,
					text6: res.data.text6,
					text7: res.data.text7,
					text8: res.data.text8,
					text9: res.data.text9
				}
			})
		})
		.catch(err => {
			console.log(err);
		});
	}

	updatePage = (id) => {
		axios.put(`/api/pages/${id}`, this.state.page)
		.then(() => {
			window.location.reload();
		})
		.catch(err => {
			console.log(err);
		});
	}

	editPage = (id) => {
		axios.get('/api/auth/validate_token')
		.then(res => {
			if (res.data.data.nickname) {
				this.updatePage(id);
			} else {
				alert('You are not authorized to edit pages.');
			}
		})
		.catch(() => {
			alert('Must be a authorized user to edit!');
		});
	}

	sendReceipt = (receiptParams) => {
		axios.post('/api/receipt_senders', receiptParams)
		.then(res => {
			return res.data;
		})
		.catch(err => {
			console.log(err);
		})
	}

	handleChange = (e) => {
		const {name, value} = e.target;
		this.setState({page: {...this.state.page, [name]: value}});
	}

	render() {
		return (
			<PageContext.Provider value={{
				...this.state,
				editPage: this.editPage,
				showPage: this.showPage,
				handleChange: this.handleChange,
				pageConstants: this.pageConstants,
			}}>
				{this.props.children}
			</PageContext.Provider>
		);
	}
}
