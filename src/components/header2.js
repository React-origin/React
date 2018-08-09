import React from 'react'
import '../stylesheets/base.css'
import Header2_logo from '../img/header2_logo.png'
import Header2_dianji from '../img/w_header2_dianji.jpg'
import '../stylesheets/base.css'
import {Link} from 'react-router-dom'

import '../stylesheets/prodetail.css'
class Header2 extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<div>
				<div className="header2_wrap">
					<div className="w_header2">			
						<Link to="/orders">
							<img src={Header2_dianji} className="w_header2_dianji"/>
						</Link>
						<span>不用攒钱的出境游</span>
						<img src={Header2_logo} className="w_header2_logo"/>
					</div>		
				</div>
			</div>
		<div>
			<div className="p_top">
			11
			</div>
		</div>
			</div>
			
			
		)
	}
}

export default Header2;