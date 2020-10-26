import React from 'react';
import { Consumer } from "../../Provider";

class Health extends React.Component {

	pageId = this.props.healthId;

	componentDidMount() {
		this.props.showPage(this.pageId);
	}

	render() {
		const {page: {text1, text2, text3, text4, text5, text6, text7, text8, text9}, handleChange, edit} = this.props;

		return (
			<div>
				<div>
					{!edit ? <>{text1}</> : <textarea name='text1' value={text1 ?? ""} onChange={handleChange}/>}
				</div>
				<div>
					{!edit ? <>{text2}</> : <textarea name='text2' value={text2 ?? ""} onChange={handleChange}/>}
				</div>
				<div>
					{!edit ? <>{text3}</> : <textarea name='text3' value={text3 ?? ""} onChange={handleChange}/>}
				</div>
				<div>
					{!edit ? <>{text4}</> : <textarea name='text4' value={text4 ?? ""} onChange={handleChange}/>}
				</div>
				<div>
					{!edit ? <>{text5}</> : <textarea name='text5' value={text5 ?? ""} onChange={handleChange}/>}
				</div>
				<div>
					{!edit ? <>{text6}</> : <textarea name='text6' value={text6 ?? ""} onChange={handleChange}/>}
				</div>
				<div>
					{!edit ? <>{text7}</> : <textarea name='text7' value={text7 ?? ""} onChange={handleChange}/>}
				</div>
				<div>
					{!edit ? <>{text8}</> : <textarea name='text8' value={text8 ?? ""} onChange={handleChange}/>}
				</div>
				<div>
					{!edit ? <>{text9}</> : <textarea name='text9' value={text9 ?? ""} onChange={handleChange}/>}
				</div>
			</div>
		);
	}
}

const ConnectedHealth = () => (
	<Consumer>
		{value => <Health healthId={value.pageConstants.healthId} showPage={value.showPage} page={value.page}
											handleChange={value.handleChange} edit={value.edit}/>}
	</Consumer>
);
export default ConnectedHealth