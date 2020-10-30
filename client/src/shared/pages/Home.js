import React from 'react';
import '../css/Home.css';
import { Link } from "react-router-dom";
import { Consumer } from "../../Provider";
import Health from "../photos/Health.webp"
import Community from "../photos/Community.webp"
import Education from "../photos/Education.webp"

class Home extends React.Component {

	pageId = this.props.homeId;

	componentDidMount() {
		this.props.showPage(this.pageId);
	}

	render() {
		const {page, handleChange, edit} = this.props;
		const columns = 40;
		const rows = 5;
		const imgWidth = 280;
		const imgHeight = 280;

		return (
			<div>
				<div className='threeProng'>
					<div className='one'>
						<div className='prongHeader'>
							{!edit ? <h2>{page.text1}</h2> : <input name='text1' value={page.text1 ?? ""} onChange={handleChange}/>}
						</div>
						<div className='prongText'>
							{!edit ? <>{page.text2}</> :
							 <textarea name='text2' value={page.text2 ?? ""} rows={rows} cols={columns} onChange={handleChange}/>}
							<img src={Education} alt='Girl with graduation cap.' className='prongImg' width={imgWidth} height={imgHeight}/>
						</div>
						<Link to={'/education'} className='prongButton'>Learn More</Link>
					</div>
					<div className='two'>
						<div className='prongHeader'>
							{!edit ? <h2>{page.text3}</h2> : <input name='text3' value={page.text3 ?? ""} onChange={handleChange}/>}
						</div>
						<div className='prongText'>
							{!edit ? <>{page.text4}</> :
							 <textarea name='text4' value={page.text4 ?? ""} rows={rows} cols={columns} onChange={handleChange}/>}
							<img src={Health} alt='Mom with babies.' className='prongImg' width={imgWidth} height={imgHeight}/>
						</div>
						<Link to={'/health'} className='prongButton'>Learn More</Link>
					</div>
					<div className='three'>
						<div className='prongHeader'>
							{!edit ? <h2>{page.text5}</h2> : <input name='text5' value={page.text5 ?? ""} onChange={handleChange}/>}
						</div>
						<div className='prongText'>
							{!edit ? <>{page.text6}</> :
							 <textarea name='text6' value={page.text6 ?? ""} rows={rows} cols={columns} onChange={handleChange}/>}
							<img src={Community} alt='Girl with water bucket.' className='prongImg' width={imgWidth} height={imgHeight}/>
						</div>
						<Link to={'/community'} className='prongButton'>Learn More</Link>
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