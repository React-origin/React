import React from 'react'
import $ from 'jquery'
import Mock from 'mockjs'
import {Link} from 'react-router-dom'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import '../stylesheets/index1.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Xgwt from '../components/xgwt'
import Data2 from '../data/data2'
import Data1 from '../data/data1'
import lbtjpg1 from '../img/index_lbt1.jpg'
import lbtjpg2 from '../img/index_lbt2.jpg'
import lbtjpg3 from '../img/index_lbt3.jpg'
import lbtjpg4 from '../img/index_lbt4.jpg'
const data = Mock.mock({
	'list|20':[
		{
			'img':"@dataImage('120x83')"
		}
	]
})
const data1 = Mock.mock({
	'list|4':[
		{
			'img':"@dataImage('169x95')"
		}
	]
})
//Mock.mock('http://www.baidu.com/api.php',{
//  'imglist|0-7': [
//	    {
//	    	'id|+1': 0,
//	    	'img':"@dataImage('690x388')"
//	    }
//  ]
//})
//const data2 = Mock.mock({
//  'list|12':[
//  
//  	{
//  		'classid|+1':0,
//  		'imglist|1-7': [
//		    	{
//		    		'goodsid|+1': 100,
//		    		'img':"@dataImage('690x388')",
//		    		'num':"@natural( 68,8888 )"
//		    	}
//	    	]
//  	}
//  ]
//})
/*const data3 = Mock.mock({
	'list|10-20':[
		{
			'goodsid|+1':100,
			'detail':[
				{
					'spname':'游火星@natural( 1,100)',
					'money':"@natural( 154, 1000 )",
					'img|4':[
					
						{
							'img':"@dataImage('690x388')"
						}
						
					]
				}
			]
			
		}
	]
})*/

//Mock.mock('http://www.taobao.com/api.php','post',(req)=>{
//	var classid=eval(req.body);
////	console.log(classid)
//	var arr = [];
//	data2.list.map(function(item){
//		if(classid==item.classid){
////			console.log(item.imglist)
//			arr = item.imglist;
//		}
//	})
//	return arr;
//})


/*const data5 = Mock.mock({
    'list|7':[
    
    	{
    		'lei|+1':66,
    		'citylist|1-4': [
		    	{
		    		'hhh':"@csentence(1,4)",
		    		'city|2-7':[
		    			{
		    				'classID|+1': 0,
		    				'dqlist':"@city()"
		    			}
		    		]
		    	}
	    	]
    	}
    ]
})

Mock.mock('http://www.souhu.com/api.php','post',(req)=>{
	var lei=eval(req.body);
	var navarr = [];
	data5.list.map(function(item){
		if(lei==item.lei){
			navarr = item.citylist;
		}
	})
	return navarr;
})*/

class Index extends React.Component{
	constructor(props){
		super(props);
		this.state={
			arr:[],
			arr1:[]
		}
	}
	
	
	render(){
		var jsx=[];
		var jsx1=[];
		var jsx2=[];
		var jsx3=[];
		var jsx4=[];
		data.list.map(function(item,i){
			jsx.push(<li key={i}><img src={item.img}/></li>)
		})
		data1.list.map(function(item,i){
			jsx1.push(<li key={i}><img src={item.img}/></li>)
		})

		this.state.arr.map(function(item,i){
			if(i==0){
				jsx2.push(
					<li key={i} dataid={item.goodsid}><Link to={'/prodetail/'+item.goodsid}>
						<div><img src={item.img}/></div>
						<div>
							<span>【定制旅行】专属你的独特旅行 ｜专业定制师服务 不限人数 全球任意目的地</span>
							<span>你可以提出对旅行的期待和要求，为你专属定制，即可享受首付游分期支付</span>
							<span>首付游￥<b>{item.num}</b></span>
						</div>
					</Link></li>
				)
			}else{
				jsx2.push(
					<li key={i} dataid={item.goodsid}><Link to={'/prodetail/'+item.goodsid}>
						<div><img src={item.img}/></div>
						<div>
							<span>上海往返香港3晚4日自由行|港龙航空 华丽海景酒店或同级  送香港4天WIFI 团签（L签）可现询</span>
							<span>首付游￥<b>{item.num}</b></span>
						</div>
					</Link></li>
				)
			}
			
		})
		if(this.state.arr1.length>2){
			this.state.arr1.map(function(item,i){
				jsx3.push(<div className='four' key={i}><h3>{item.hhh}</h3><ul>{item.city.map(function(item2){
					return <li><Link to={'/prolist/'+item2.classID} datacid={item2.classID}>{item2.dqlist}</Link></li>
				})}</ul></div>)
			})
		}else{
			this.state.arr1.map(function(item,i){
				jsx3.push(<div className='two' key={i}><h3>{item.hhh}</h3><ul>{item.city.map(function(item2){
					return <li><Link to={'/prolist/'+item2.classID} datacid={item2.classID}>{item2.dqlist}</Link></li>
				})}</ul></div>)
			})
		}
		return(
			<div id='index'>
				<Header/>
				<div className='index1'>
					<div className='top'>
						<div className='leftnav'>
							<ul className='left_nav'>
								<li navid='66'>国内
									<div className='showlist'>
										{jsx3}
									</div>
								</li>
								<li navid='67'>港澳台
									<div className='showlist'>
										{jsx3}
									</div>
								</li>
								<li navid='69'>日本
									<div className='showlist'>{jsx3}</div>
								</li>
								<li navid='71'>东南亚
									<div className='showlist'>{jsx3}</div>
								</li>
								<li navid='68'>欧洲
									<div className='showlist'>{jsx3}</div>
								</li>
								<li navid='70'>澳新美洲
									<div className='showlist'>{jsx3}</div>
								</li>
								<li navid='72'>中东非洲
									<div className='showlist'>{jsx3}</div>
								</li>
							</ul>
						</div>
						<div>
							<div className='pmd'>
								<Carousel autoplay>
								    <div><img src={lbtjpg4}/></div>
								    <div><img src={lbtjpg3}/></div>
								    <div><img src={lbtjpg2}/></div>
								    <div><img src={lbtjpg1}/></div>
								</Carousel>
							</div>
							<div className='con_zj'>
								<ul>
									{jsx1}
								</ul>
							</div>
						</div>
						<div>
							<a href=''></a>
						</div>
					</div>
					<div className='jgdj'>
						<div className='jgdj_top'>
							<h1>￥0-8888</h1>
							<ul>
								<li className='djhou' data-id='0'>精选</li>
								<li data-id='1'>热门海岛</li>
								<li data-id='2'>日本</li>
								<li data-id='3'>东南亚</li>
								<li data-id='4'>港澳台</li>
								<li data-id='5'>欧洲</li>
								<li data-id='6'>澳新</li>
								<li data-id='7'>中东非</li>
								<li data-id='8'>人气</li>
								<li data-id='9'>国内</li>
								<li data-id='10'>签证</li>
								<li data-id='11'>美洲</li>
							</ul>
							<div><a href=''>更多路线&gt;</a></div>
						</div>
						<div className='list_con'>
							<div>
								<ul>
									{jsx2}
								</ul>
							</div>
						</div>
					</div>
					<div className='jgdj'>
						<div className='jgdj_top'>
							<h1>￥0-8888</h1>
							<ul>
								<li className='djhou' data-id='0'>精选</li>
								<li data-id='1'>热门海岛</li>
								<li data-id='2'>日本</li>
								<li data-id='3'>东南亚</li>
								<li data-id='4'>港澳台</li>
								<li data-id='5'>欧洲</li>
								<li data-id='6'>澳新</li>
								<li data-id='7'>中东非</li>
								<li data-id='8'>人气</li>
								<li data-id='9'>国内</li>
								<li data-id='10'>签证</li>
								<li data-id='11'>美洲</li>
							</ul>
							<div><a href=''>更多路线&gt;</a></div>
						</div>
						<div className='list_con'>
							<div>
								<ul>
									{jsx2}
								</ul>
							</div>
						</div>
					</div>
					<div className='jgdj'>
						<div className='jgdj_top'>
							<h1>￥0-8888</h1>
							<ul>
								<li className='djhou' data-id='0'>精选</li>
								<li data-id='1'>热门海岛</li>
								<li data-id='2'>日本</li>
								<li data-id='3'>东南亚</li>
								<li data-id='4'>港澳台</li>
								<li data-id='5'>欧洲</li>
								<li data-id='6'>澳新</li>
								<li data-id='7'>中东非</li>
								<li data-id='8'>人气</li>
								<li data-id='9'>国内</li>
								<li data-id='10'>签证</li>
								<li data-id='11'>美洲</li>
							</ul>
							<div><a href=''>更多路线&gt;</a></div>
						</div>
						<div className='list_con'>
							<div>
								<ul>
									{jsx2}
								</ul>
							</div>
						</div>
					</div>
					<div className='hzhb'>
						<h2>合作伙伴</h2>
						<div>
							<ul>
								{jsx}
							</ul>
						</div>
					</div>
				</div>
				<Xgwt/>
				<Footer/>
			</div>
		)
	}
	componentDidMount(){
		var _this = this;
		$(function(){
			var cid = $('.jgdj_top>ul').find('.djhou').attr('data-id');
			$.ajax({
				type:"post",
				url:"http://www.taobao.com/api.php",
				async:true,
				data:{classid:cid},
				dataType:'json',
				success:function(data){
					var _data2 = data;
				    _this.setState({arr:_data2});
				}
			});

			$('.jgdj_top>ul li').click(function(){
			
				$(this).addClass('djhou').siblings().removeClass('djhou');
				
				var classid = $(this).attr('data-id');
				$.ajax({
					type:"post",
					url:"http://www.taobao.com/api.php",
					async:true,
					data:{classid:classid},
					dataType:'json',
					success:function(data){
						var _data1 = data;
						console.log(_data1)
					    _this.setState({arr:_data1});
//					    console.log(_this.state.arr)
					}
				});
			})
			
			$('.left_nav li').hover(function(){
				$(this).find('.showlist').css("display","block");
				
				var navid = $(this).attr('navid');
				$.ajax({
					type:"post",
					url:'http://www.souhu.com/api.php',
					async:true,
					data:{lei:navid},
					dataType:'json',
					success:function(data){
						var _data5 = data;
						console.log(_data5);
					    _this.setState({arr1:_data5});
					    console.log(_this.state.arr1)
					}
				});
					
			},
			function(){
				$(this).find('.showlist').css("display","none")
			})

		})	
	}
}

export default Index;