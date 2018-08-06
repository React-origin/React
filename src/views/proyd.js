import React from 'react'
import '../stylesheets/proyd.css'
import Footer from '../components/footer'
import Header2 from '../components/header2'
class Proyd extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id='proyd'>
				<Header2/>
				<div>Proyd</div>
				<Footer/>
			</div>
		)
	}
}

export default Proyd;