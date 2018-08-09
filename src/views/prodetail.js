import React from 'react'
import '../stylesheets/prodetail.css'
import Footer from '../components/footer'
import Header2 from '../components/header2'
import $ from "jquery"
import { Button,Icon,Calendar,Carousel } from 'antd';
import Lunbo5 from "../img/lunbo5.jpg"
import Lunbo6 from "../img/lunbo6.jpg"
import Lunbo7 from "../img/lunbo7.jpg"
import Mock1 from "../data/data3"
import Mock from "mockjs"
const ButtonGroup = Button.Group;
function onPanelChange(value, mode){
	console.log(value);	
  }
  var index=0;
  
class Prodetail extends React.Component{
	constructor(props){
		super(props)
		this.state={
			arr:[]
		}
	}
	tap(){
		index++;
		if(index%2==0){
			$(".rili").hide()
		}else{
			$(".rili").show()
		}
	
	}
	plus(){	
		this.refs.ipt.value++
	}
	jian(){
		if(this.refs.ipt.value>1){
			this.refs.ipt.value--
		}else{
			this.refs.ipt.value=1
		}
		
	}
	tiaozhuan(){
		this.props.history.push("/proyd")
	}
	componentDidMount(){
		$("#p_list li").click(function(){
			var index=$(this).index()
			// console.log(index)
			$(this).addClass("hover").siblings().removeClass("hover")
			$(".p_box>div").eq(index).addClass("active").siblings().removeClass("active")

		})

		var _this=this
		$.ajax({
			type: "post",
			url: "http://www.baidu.com/api",
			async:true,
			data:{goodsID:_this.props.match.params.id},
			dataType: "json",
			success: function (data) {
				console.log(data)
			   _this.setState({arr:data})
				var arr1=data
				// console.log(arr1[0])
			}
		});

	}
	render(){
		var _this = this
		return(
			<div id='prodetail'>
				<Header2/>			
				<div className="p_main">
				{/* 遍历开始 */}

				
				{
					this.state.arr.map(function(item,i){
						
						return(
							
					 <div className="p_con" key={i}>
					 <div className="lunbo">
					 <Carousel autoplay>	
					{

					item.img.map(function(item1,i){
						console.log(item1)
						return(
										
								<div><h3><img src={item1.img} /></h3></div>

						
						)
					})	
					}
					</Carousel> 		
					
							 
					</div>
					<div className="p_detail">
						<p className="p_tit">{item.title}</p>
						
						<div className="flex1">
							<span className="lib-spot"></span>
							<span className="wenzi">特卖不退不换</span>
							<span className="lib-spot"></span>
							<span className="wenzi">提前4天预订</span>
							<span className="lib-spot"></span>
							<span className="wenzi">至多10人/单</span>
							<span className="lib-spot"></span>
							<span className="wenzi">App专享：3期0利率，首单最高立减100元</span>
							
						</div>	

						<div  className="jiage">
							<span className="price-l">单&nbsp;&nbsp;&nbsp;价:</span>
							<span className="price-l">首付游</span>
							<span className="price-l">￥{item.money}</span>
						</div>	
						<div className="riqi">
							<span>出发日期</span>
							<strong onClick={_this.tap.bind(_this)}>请选择出发日期</strong>
<div className="rili" style={{ width:430, border: '1px solid #d9d9d9', borderRadius: 4}}>
<Calendar fullscreen={false} onPanelChange={onPanelChange} />
						   </div> 
								
							
						</div>
						<div className="p_member">
							<span>出行人数</span>
							 <ButtonGroup>
								<Button className="p_btn p_plus" onClick={_this.plus.bind(_this)}>+</Button>
								<input className="p_btn p_num" placeholder="1" ref="ipt"/>
								<Button  className="p_btn p_jian" onClick={_this.jian.bind(_this)}>-</Button>
							</ButtonGroup> 
						</div>
						 <Button type="primary" block className="p_yuding" onClick={_this.tiaozhuan.bind(_this)}>立即预定</Button> 
														
					</div>
				</div>
			

						)
					})
				}



					{/* 遍历结束 */}
					<div className="p_nav">
						<ul id="p_list">
							<li className="hover">产品详情</li>			
							<li>费用说明</li>
							<li>预定须知</li>
							<li>常见问题</li>
						</ul>
						<div className="p_box">
						    <div className="active">
								
							    <span className="my-area-spot"></span>
							    <span className="lib-ft24 lib-pl20">产品详情</span>
								<p>
								*每日赠送中西式营养早餐2份；           <br/><br/>*住店期间赠送一次海鲜BBQ晚餐2位        <br/><br/>*住店期间享受鱼疗池2小时<br/><br/>*免费尊享免税店穿梭巴士；<br/><br/>*情侣入住可申请首晚简单蜜月布置<br/><br/>*免费使用酒店儿童乐园及儿童泳池；                        
							</p>
							<span className="my-area-spot"></span>
							    <span className="lib-ft24 lib-pl20">酒店详情</span>
							<div className="my-area-content">
							   <p className="lib-skin-second lib-ft20 lib-pb21 lib-mt30">三亚辰光克拉码头酒店    Lacosta Hotel（含早/双人房）</p>
							    <img src={Lunbo5}/>
								<img src={Lunbo6}/>
								<img src={Lunbo7}/>
							</div>
								


							</div>
							<div>2s</div>
							<div>
								
								<span className="my-area-spot"></span>
							    <span className="lib-ft24 lib-pl20">预定须知</span>
							    <p className="my-area-content">
								1、预订人必须是出行人之一。<br/><br/>
								2、下单后请于60分钟内完成付款，超过时间，订单将被自动取消。<br/><br/>
								3、每一位预订人最多可以购买两个名额。<br/><br/>
								4、护照及签证为旅游者个人证件。凡持非中国护照的旅游者或持中国护照自备签证的旅游者，应自行办理本次旅游签证和再次回中国内地大陆的签证，如因签证问题造成出入境受阻，由旅游者承担全部责任。<br/><br/>
								5、出团通知最晚于出团前1-3个工作日发送，若能提前确定，我们将会第一时间通知您。
							    </p> 
								
								
							</div>				
							<div>
								<span className="my-area-spot"></span>
								<span className="lib-ft24 lib-pl20">常见问题</span>
								<p className="my-area-content">
								首付游是京东金融旅游产品战略合作品牌，为购买合作旅游商家商品的用户提供首付＋月付服务。
								</p>
								<span className="my-area-spot"></span>
								<span className="lib-ft24 lib-pl20">购买享受首付游服务的旅游商品会占用白条额度吗？</span>
						
								<p className="my-area-content">不会占用京东白条额度哦。</p>
								<span className="my-area-spot"></span>
								<span className="lib-ft24 lib-pl20">如何使用首付游？</span>
								<p className="my-area-content">
								1.点击购买商品。<br/> 
								2.等待首付游发送订单确认短信。<br/>
								3.订单确认后，登录首付游，在“个人中心”里“我的订单”页面查看确认订单详情。<br/>
								4.登录www.shoufuyou.com/user/bills账单页面，及时支付余下11个月的月付款。
								</p>

							

							</div>
						</div>
					
					</div>
				</div>
				<Footer/>
	

			</div>
		)
	}
}

export default Prodetail;