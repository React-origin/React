import React from 'react'
import '../stylesheets/orders.css'
import Footer from '../components/footer'
import Header2 from '../components/header2'
import orders_logo from '../img/orders_logo.png'
import orders_img from '../img/orders_img.jpg'

class Orders extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id='orders'>
				<Header2/>
				<div className="orders_main">
						<dl className="o_left">
								<dt><img src={orders_logo} /></dt>
								<dd>13826512254</dd>
								<p>我的订单</p>
						</dl>
						
						<div className="o_right">
								<div className="o_right_tit"></div>								
								<dl>
									<dt><img src={orders_img} /></dt>
									<dd>
										<p>上海往返香港3晚4日自由行|港龙航空 华丽海景酒店或同级  送香港4天WIFI 团签（L签）</p>
										<p>
												<span>出行日期 : 2018-08-16</span>
												<span>出行人数 : 1</span>
										</p>
										<p>
										首付 : <b>¥245.00</b>
											<button className="o_btn o_btn_sure">确认支付</button>
											<button className="o_btn o_btn_cancle">取消订单</button>
										</p>
									</dd>
								</dl>
						</div>
						
						<div className="o_right">
								<div className="o_right_tit"></div>								
								<dl>
									<dt><img src={orders_img} /></dt>
									<dd>
										<p>上海往返香港3晚4日自由行|港龙航空 华丽海景酒店或同级  送香港4天WIFI 团签（L签）</p>
										<p>
												<span>出行日期 : 2018-08-16</span>
												<span>出行人数 : 1</span>
										</p>
										<p>
										首付 : <b>¥245.00</b>
											<button className="o_btn o_btn_sure">确认支付</button>
											<button className="o_btn o_btn_cancle">取消订单</button>
										</p>
									</dd>
								</dl>
						</div>
				
				</div>
				<Footer/>
			</div>
		)
	}
}

export default Orders;