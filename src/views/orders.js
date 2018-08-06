import React from 'react'
import '../stylesheets/orders.css'
import Footer from '../components/footer'
import Header2 from '../components/header2'
class Orders extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id='orders'>
				<Header2/>
				<div>Orders</div>
				<Footer/>
			</div>
		)
	}
}

export default Orders;