import React from 'react';
import { Consumer } from "../../Provider";

class Home extends React.Component {

	pageId = this.props.homeId;

	componentDidMount() {
		this.props.showPage(this.pageId);
	}

	render() {
		const {page, handleChange, edit} = this.props;

		return (
			<div>
				<div className='threeProng'>
					<div className='one'>
						<div className='prongHeader'>
							{!edit ? <>{page.text1}</> : <input name='text1' value={page.text1 ?? ""} onChange={handleChange}/>}
						</div>
						<div className='prongText'>
							{!edit ? <>{page.text2}</> : <textarea name='text2' value={page.text2 ?? ""} onChange={handleChange}/>}
						</div>
					</div>
					<div className='two'>
						<div className='prongHeader'>
							{!edit ? <>{page.text3}</> : <input name='text3' value={page.text3 ?? ""} onChange={handleChange}/>}
						</div>
						<div className='prongText'>
							{!edit ? <>{page.text4}</> : <textarea name='text4' value={page.text4 ?? ""} onChange={handleChange}/>}
						</div>
					</div>
					<div className='three'>
						<div className='prongHeader'>
							{!edit ? <>{page.text5}</> : <input name='text5' value={page.text5 ?? ""} onChange={handleChange}/>}
						</div>
						<div className='prongText'>
							{!edit ? <>{page.text6}</> : <textarea name='text6' value={page.text6 ?? ""} onChange={handleChange}/>}
						</div>
					</div>
				</div>
				<div>
					{!edit ? <>{page.text7}</> : <textarea name='text7' value={page.text7 ?? ""} onChange={handleChange}/>}
				</div>
				<div>
					{!edit ? <>{page.text8}</> : <textarea name='text8' value={page.text8 ?? ""} onChange={handleChange}/>}
				</div>
				<div>
					{!edit ? <>{page.text9}</> : <textarea name='text9' value={page.text9 ?? ""} onChange={handleChange}/>}
				</div>
			</div>
		);
	}
}

const ConnectedHome = () => (
	<Consumer>
		{value => <Home homeId={value.pageConstants.homeId} showPage={value.showPage} page={value.page}
										handleChange={value.handleChange} edit={value.edit}/>}
	</Consumer>
);
export default ConnectedHome