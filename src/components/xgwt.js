import React from 'react'
import '../stylesheets/base.css'

class Xgwt extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id="xgwt">
				<div className="xgwt_bottom">
					<div className="xgwt_bottom_left">
						<div className="xgwt_bottom_left_title">常见问题</div>
						<div className="xgwt_bottom_left_link_box">
							<span>什么是首付游？</span>
							<span>在哪里可以使用首付游的服务？</span>
							<span>在首付游合作商家网站的购买流程是什么？</span>
							<span>使用首付游有什么要求？</span>
							<span>使用首付游有额外费用吗？</span>
						</div>
						<div className="xgwt_bottom_left_link_box_r">
							<span>使用首付游有额度限制吗？</span>
							<span>首付游如何判断我的信用状况？</span>
							<span>首付游能保证我的个人信息安全吗？</span>
							<span>如果我有问题用该怎么办？</span>
							<span>查看更多问题...</span>
						</div>
					</div>
					<div className="xgwt_bottom_right">
						<div className="xgwt_bottom_right_wrap">
							<div className="xgwt_bottom_right_top">
								<i>电话</i>
								<div>
									<p>400-9980-920</p>
									<span>客服时间：工作日<b>9：30-18:30</b></span>
								</div>
							</div>
							<div className="xgwt_bottom_right_bottom">
								<div className="xgwt-bottom-right-qrcode">
									<div className="xgwt-bottom-right-wechat one"></div>
									<div>首付游微信</div>
								</div>
								<div className="xgwt-bottom-right-qrcode">
									<div className="xgwt-bottom-right-wechat two"></div>
									<div>首付游Aapp</div>
								</div>
								<div className="xgwt-bottom-right-qrcode last">
									<div className="xgwt-bottom-right-wechat three"></div>
									<div>京东金融Aapp</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Xgwt;