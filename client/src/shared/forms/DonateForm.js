import React from 'react';
import { Consumer } from "../../Provider";

class DonateForm extends React.Component {

	page = this.props.donateId

	componentDidMount() {
		this.props.showPage(this.page);
	}

	render() {
		const {page, handleChange} = this.props;

		return (
			<div>
				<form>
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
					<textarea name='text6' value={page.text6 ?? ""} onChange={handleChange}/>
					<br/>
					<textarea name='text7' value={page.text7 ?? ""} onChange={handleChange}/>
					<br/>
					<textarea name='text8' value={page.text8 ?? ""} onChange={handleChange}/>
					<br/>
					<textarea name='text9' value={page.text9 ?? ""} onChange={handleChange}/>
				</form>
			</div>
		);
	}
}

const ConnectedDonateForm = () => (
	<Consumer>
		{value => <DonateForm donateId={value.pageConstants.donateId} showPage={value.showPage} editPage={value.editPage}
													page={value.page} handleChange={value.handleChange}/>}
	</Consumer>
);
export default ConnectedDonateForm;