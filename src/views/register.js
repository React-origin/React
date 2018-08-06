import React from 'react'
import '../stylesheets/login_register.css'
import Footer from '../components/footer'
import Header2 from '../components/header2'
class Register extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id='register'>
				<Header2/>
				<div>Register</div>
				<Footer/>
			</div>
		)
	}
}

export default Register;