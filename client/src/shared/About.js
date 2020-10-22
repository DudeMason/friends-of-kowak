import React from 'react';
import { PageConsumer } from "../providers/PageProvider";

class About extends React.Component {

	componentDidMount() {
		this.props.value.showPage(3);
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

const ConnectedAbout = () => (
	<PageConsumer>
		{value => <About value={value}/>}
	</PageConsumer>
);
export default ConnectedAbout;
