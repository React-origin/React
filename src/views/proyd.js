import React from 'react'
import '../stylesheets/proyd.css'
import Footer from '../components/footer'
import Header2 from '../components/header2'
import $ from "jquery"
import w_date from '../img/w_date_proyd.jpg'
import { Calendar } from 'antd';
import 'antd/dist/antd.css'

function onPanelChange(value, mode) {
  console.log(value._d);
  $(".w_shijian").html(value._d)
}
var index = 0;
class Proyd extends React.Component{
	constructor(props){
		super(props);
		this.state={
			people:"1"
		}
	}
	//点击勾选
	tap1(){
		if($('.w_gou').prop('checked')==true){
			$(".w_sure").css('opacity',1)
		}else{
			$(".w_sure").css('opacity',0.5)
		}		
	}
	
	//点击日历出来
	
	tap2(){
		index++;
		if (index%2==1) {
			$(".w_rili").css('display','block')
		}else{
			$(".w_rili").css('display','none')
		}
		
	}
	
	jian(){
		this.refs.ipt.value--		
		if (this.refs.ipt.value<=1) {
			this.refs.ipt.value=1
		}
		this.setState({
			people:this.refs.ipt.value
		})   
	}
	jia(){
		this.refs.ipt.value++
		this.setState({
			people:this.refs.ipt.value
		})   
	}
	
	componentDidMount(){
		
	}
	
	render(){
		return(
			<div id='proyd'>
				<Header2/>
				<div id="w_main">
					{/*右边*/}
					<div className="w_right">
							<h3>费用信息</h3>
							<div>人数<span>1</span></div>
							<div>首付<b>¥245</b></div>
							<div>
							月付
							<span>¥245</span>
							x11个月
							</div>
					</div>
					{/*左边*/}
					<div className="w_left">
						<div className="w_xianlu">
							<h3>线路信息</h3>
							<div className="xl_con">
									<span>线路名称</span>
									<span> 南京出发云南丽江 大理 泸沽湖6晚7日跟团游|双飞 高端住宿,精品客栈 洱海游船 洱海骑行 赠丽水金沙 </span>
							</div>
							<div className="xl_con">
									<span>套餐类型</span>
									<span>上海出发 </span>
							</div>
							<div className="xl_con">
									<span>出发日期</span>
									<span className="w_date"> 
										<span className='w_shijian'>2018-8-8</span>
									<img src={w_date} className="proyd_date" onClick={this.tap2.bind(this)} />								
									</span>
									{/*<div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4,background:"#fff",position:"absolute",left:"200px",display:"none"}} className="w_rili">
									    <Calendar fullscreen={false} 
									    onPanelChange={onPanelChange} 
									    
									    />
									  </div>*/}
							</div>
							<div className="xl_con">
									<span>出行人数</span>
									<div className='w_people'>
										<button onClick={this.jian.bind(this)}>-</button>
										<input type='text' className='w_math' ref="ipt" placeholder="1"/>
										<button onClick={this.jia.bind(this)}>+</button>
									</div>
							</div>
						</div>
						<div className="w_lianxi">
							<h3>联系人信息<span>（联系人必须是本人)</span></h3>
							<div className="lianxi_con">
								<div>
									<span>中文名称</span>
									<input type="text" className="lianxi_name"/>									
								</div>
								<div>
									<span>手机号码</span>
									<input type="text" className="lianxi_tel"/>									
								</div>
								<div>
									<span>身份证号</span>
									<input type="text" className="lianxi_number"/>									
								</div>
								<div>
									<span>电子邮箱</span>
									<input type="text" className="lianxi_email"/>									
								</div>
							
							</div>
							
						</div>	
							
					
						<div className="w_chuxing">
							<h3>出行人信息<span>（出行人1必须是联系人)</span></h3>
													
							<div className="cx_con">
									<p>出行人<span>{this.state.people}</span></p>
									<div>
										<span>中文名称</span>
										<input type="text" className="chu_name"/>									
									</div>
									<div>
										<span>手机号码</span>
										<input type="text" className="chu_tel"/>									
									</div>
									<div>
										<span>身份证号</span>
										<input type="text" className="chu_number"/>									
									</div>
									<div>
										<span>电子邮箱</span>
										<input type="text" className="chu_email"/>									
									</div>						
							</div>
							
					
											
						</div>
					</div>	
					
					<div className="w_agree">
						<input type="checkbox" className="w_gou" onClick={this.tap1.bind(this)}/>
						我已阅读并同意<span>《首付游戏服务协议》《隐私服务协议》</span>
					</div>
				
				<div className="w_bottom">
							<p>同意首付游协议等同于您认同以下内容：</p>		
							<p>1.用户确认自己是出行人中的一员，否则不予受理出行。</p>							
							<p>2.首付游在交易中替用户向旅行社支付全款，因用户单方面原因导致的旅行问题，不影响到其每月的尾款支付。</p>							
							<p>3.用户在首付游产生的任何交易行为都会记入互联网征信体系。</p>
				</div>
				
				<button className="w_sure">提交订单</button>
					
					
				
				
					</div>
				<Footer/>
			</div>
		)
	}
}

export default Proyd;