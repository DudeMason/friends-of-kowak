import React from 'react';
import { PageConsumer } from "../providers/PageProvider";

class Contact extends React.Component {

	componentDidMount() {
		this.props.value.showPage(2);
	}

	render() {

		const {page} = this.props.value;

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
			</div>
		);
	}
}

const ConnectedContact = () => (
	<PageConsumer>
		{value => <Contact value={value}/>}
	</PageConsumer>
);
export default ConnectedContact;

