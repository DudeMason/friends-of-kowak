import React from 'react';
import { PageConsumer } from "../providers/PageProvider";

class AboutForm extends React.Component {

	componentDidMount() {
		this.props.value.showPage(2);
	}

	render() {

		const {page, editPage, handleChange} = this.props.value

		return (

			<div>
				<form onSubmit={() => editPage(2)}>
					<textarea name={'text1'} value={page.text1 ?? ""} onChange={handleChange}/>
					<br/>
					<textarea name={'text2'} value={page.text2 ?? ""} onChange={handleChange}/>
					<br/>
					<textarea name={'text3'} value={page.text3 ?? ""} onChange={handleChange}/>
					<br/>
					<textarea name={'text4'} value={page.text4 ?? ""} onChange={handleChange}/>
					<br/>
					<textarea name={'text5'} value={page.text5 ?? ""} onChange={handleChange}/>
					<br/>
					<button type={'submit'} className={'button isSubmit'}>
						<span role={'img'} aria-label={'Submit'}>✔︎</span>
					</button>
				</form>
			</div>
		)
	}
}

export default class ConnectedAboutForm extends React.Component {
	render() {
		return (
			<PageConsumer>
				{value => <AboutForm {...this.props} value={value}/>}
			</PageConsumer>
		)
	}
}

