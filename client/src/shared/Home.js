import React from 'react';
import { PageConsumer } from "../providers/PageProvider";

class Home extends React.Component {

	componentDidMount() {
		this.props.value.showPage(1);
	}

	render() {

		const {edit, page, editPage, handleChange, toggleEdit} = this.props.value

		return (

			<div>
				{
					edit ?
					<form onSubmit={() => editPage(1)}>
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
						<button onClick={toggleEdit} className={'button isCancel'}>
							<span role={'img'} aria-label={'Cancel'}>✘</span>
						</button>
						<button type={'submit'} className={'button isSubmit'}>
							<span role={'img'} aria-label={'Submit'}>✔︎</span>
						</button>
					</form>
							 :
					<>
						{page.text1}
						<br/>
						{page.text2}
						<br/>
						{page.text3}
						<br/>
						{page.text4}
						<br/>
						{page.text5}
						<br/>
						<button onClick={toggleEdit} className={'button isEdit'}>✎</button>
					</>
				}
			</div>
		)
	}
}

export default class ConnectedHome extends React.Component {
	render() {
		return (
			<PageConsumer>
				{value => <Home {...this.props} value={value}/>}
			</PageConsumer>
		)
	}
}