import React from 'react'
import '../stylesheets/base.css'
class Footer extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id='footer'>
				Copyright (c) 2014 shoufuyou.com. All Rights Reserved V1.0.1
				<a href="http://www.miitbeian.gov.cn">沪ICP备15010054号-1</a>
			</div>
		)
	}
}

export default Footer;