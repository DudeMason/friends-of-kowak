import React from 'react';
import { PageConsumer } from "../../providers/PageProvider";

class HomeForm extends React.Component {

	page = this.props.value.pageConstants.homePage

	componentDidMount() {
		this.props.value.showPage(this.page);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.value.editPage(this.page);
	}

	render() {
		const {page, handleChange} = this.props.value;

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<textarea name='text1' value={page.text1 ?? ""} onChange={handleChange}/>
					<br/>
					<textarea name='text2' value={page.text2 ?? ""} onChange={handleChange}/>
					<br/>
					<textarea name='text3' value={page.text3 ?? ""} onChange={handleChange}/>
					<br/>
					<textarea name='text4' value={page.text4 ?? ""} onChange={handleChange}/>
					<br/>
					<textarea name='text5' value={page.text5 ?? ""} onChange={handleChange}/>
					<br/>
					<button type='submit' className='formButton isConfirm navItem'>
						<span role='img' aria-label='Submit'>✔︎</span>
					</button>
				</form>
			</div>
		);
	}
}

const ConnectedHomeForm = () => (
	<PageConsumer>
		{value => <HomeForm value={value}/>}
	</PageConsumer>
);
export default ConnectedHomeForm;