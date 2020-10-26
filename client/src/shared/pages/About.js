import React from 'react';
import { Consumer } from "../../Provider";

class About extends React.Component {

	pageId = this.props.aboutId;

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
						<div className='threeProng'>
							<div className='one'>
								<div className='prongHeader'>
									{page.text1}
								</div>
								<br/>
								<div className='prongText'>
									{page.text2}
								</div>
							</div>
							<div className='two'>
								<div className='prongHeader'>
									{page.text3}
								</div>
								<br/>
								<div className='prongText'>
									{page.text4}
								</div>
							</div>
							<div className='three'>
								<div className='prongHeader'>
									{page.text5}
								</div>
								<br/>
								<div className='prongText'>
									{page.text6}
								</div>
							</div>
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

const ConnectedAbout = () => (
	<Consumer>
		{value => <About aboutId={value.pageConstants.aboutId} showPage={value.showPage} page={value.page}
										 handleChange={value.handleChange} edit={value.edit}/>}
	</Consumer>
);
export default ConnectedAbout;
