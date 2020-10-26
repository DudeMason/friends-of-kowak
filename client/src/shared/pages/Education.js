import React from 'react';
import { Consumer } from "../../Provider";

class Education extends React.Component {

	pageId = this.props.educationId;

	componentDidMount() {
		this.props.showPage(this.pageId);
	}

	render() {
		const {page, edit, handleChange} = this.props;

		return (
			<div>
				{
					!edit ?
					<>
						<div>
							{page.text1}
							<br/>
							{page.text2}
						</div>
						<div>
							{page.text3}
							<br/>
							{page.text4}
						</div>
						<div>
							{page.text5}
							<br/>
							{page.text6}
						</div>
						<br/>
						<div>
							{page.text7}
						</div>
						<br/>
						<div>
							{page.text8}
						</div>
						<br/>
						<div>
							{page.text9}
						</div>
					</>
								:
					<>
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
					</>
				}
			</div>
		);
	}
}

const ConnectedEducation = () => (
	<Consumer>
		{value => <Education educationId={value.pageConstants.educationId} showPage={value.showPage} page={value.page}
										handleChange={value.handleChange} edit={value.edit}/>}
	</Consumer>
);
export default ConnectedEducation