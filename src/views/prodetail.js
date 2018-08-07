import React from 'react'
import '../stylesheets/prodetail.css'
import Footer from '../components/footer'
import Header2 from '../components/header2'
class Prodetail extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id='prodetail'>
				<div className="p_top">1</div>
				<div className="p_main">2</div>
				<div className="p_bottom">3</div>


			</div>
		)
	}
}

export default Prodetail;