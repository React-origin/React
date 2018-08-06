import React from 'react'
import '../stylesheets/login_register.css'
import Footer from '../components/footer'
import Header2 from '../components/header2'
class Login extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id='login'>
				<Header2/>
				<div>Login</div>	
				<Footer/>
			</div>
		)
	}
}

export default Login;