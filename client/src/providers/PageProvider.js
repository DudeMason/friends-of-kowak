import React, { Component } from 'react';
import axios from 'axios';

const PageContext = React.createContext(undefined);
export const PageConsumer = PageContext.Consumer;

export default class PageProvider extends Component {

	state = {page: {}, edit: false}

	showPage = (id) => {
		axios.get(`/api/pages/${id}`)
		.then(res => {
			this.setState({page: res.data})
		})
		.catch(err => {
			console.log(err)
		})
	}

	editPage = (id, page) => {
		axios.put(`/api/pages/${id}`, page)
		.then(results => {
			this.setState({page: results.data})
		})
		.catch(err => {
			console.log(err)
		})
	}

	handleChange = (e) => {
		const {name, value} = e.target
		this.setState({page: {...this.state.page, [name]: value}})
	}

	toggleEdit = () => {
		this.setState({edit: !this.state.edit})
	}

	render() {
		return (
			<PageContext.Provider value={{
				...this.state,
				editPage: this.editPage,
				showPage: this.showPage,
				toggleEdit: this.toggleEdit,
				handleChange: this.handleChange,
			}}>
				{this.props.children}
			</PageContext.Provider>
		)
	}
}
