import React from 'react';
import { Consumer } from "../../Provider";

class Home extends React.Component {

	pageId = this.props.educationId;

	componentDidMount() {
		this.props.showPage(this.pageId);
	}

	render() {
		const {page} = this.props;

		return (
			<div>
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
				{page.text6}
				<br/>
				{page.text7}
				<br/>
				{page.text8}
				<br/>
				{page.text9}
			</div>
		);
	}
}

const ConnectedHome = () => (
	<Consumer>
		{value => <Home educationId={value.pageConstants.educationId} showPage={value.showPage} page={value.page}/>}
	</Consumer>
);
export default ConnectedHome