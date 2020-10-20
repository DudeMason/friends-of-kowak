import React, { Component } from 'react';
import axios from 'axios';

const PageContext = React.createContext(undefined);
export const PageConsumer = PageContext.Consumer;

export default class PageProvider extends Component {

	state = {page: {}, edit: false}

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
			console.log(err)
		})
	}

	editPage = (id) => {
		axios.put(`/api/pages/${id}`, this.state.page)
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
