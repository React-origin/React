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
				<Header2/>
				<div>Prodetail</div>
				<Footer/>
			</div>
		)
	}
}

export default Prodetail;