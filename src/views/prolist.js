import React from 'react'
import '../stylesheets/prolist.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Xgwt from '../components/xgwt'
class Prolist extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id='prolist'>
				<Header/>
				<div>Prolist</div>
				<Xgwt/>
				<Footer/>
			</div>
		)
	}
}

export default Prolist;