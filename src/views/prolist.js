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
		<div>
			<div id="main">
				<div className="con">
					<dl>
						<dt><img src="https://img.sfystatic.com/upload/images/product-cover/cd/5f/1004823.jpg"/></dt>
						<dd>                               
						  <div className="tit">上海直飞香港+澳门4天3晚自由行 | 港龙直飞早去晚回，2晚华丽海景+1晚澳门葡京</div>
						  <div className="infor">全程入住高端酒店</div>
						  <div className="data">出发时间<span>8月、9月</span></div>
						  <div className="tag">
								<span>合作平牌</span>
								<span>首付游:</span>
								<span className="sfy">首付游<span className="price">￥199</span></span>                                   
						  </div>
						</dd>
					</dl>
					<dl>2</dl>
					<dl>3</dl>
					<dl>4</dl>
				</div>
				 {/* <div className="page">2</div> */}
			</div>
	</div>
		)
	}
}

export default Prolist;