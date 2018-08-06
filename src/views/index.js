import React from 'react'
import {Link} from 'react-router-dom'
import '../stylesheets/index1.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Xgwt from '../components/xgwt'
class Index extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div id='index'>
				<Header/>
				<div>Index</div>
				<Xgwt/>
				<Footer/>
			</div>
		)
	}
}

export default Index;