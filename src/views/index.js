import React from 'react'
import $ from 'jquery'
import {Link} from 'react-router-dom'
import '../stylesheets/index1.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Xgwt from '../components/xgwt'
import Mock from 'mockjs'
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
Mock.mock('http://www.baidu.com/api.php',{
    'imglist|0-7': [
	    {
	    	'id|+1': 0,
	    	'img':"@dataImage('690x388')"
	    }
    ]
})
class Index extends React.Component{
	constructor(props){
		super(props);
		this.state={
			arr:[]
		}
	}
	
	
	render(){
		var jsx=[];
		var jsx1=[];
		var jsx2=[];
		data.list.map(function(item,i){
			jsx.push(<li key={i}><img src={item.img}/></li>)
		})
		data1.list.map(function(item,i){
			jsx1.push(<li key={i}><img src={item.img}/></li>)
		})
		this.state.arr.map(function(item,i){
			if(i==0){
				jsx2.push(
					<li key={i}>
						<div><img src={item.img}/></div>
						<div>
							<span>【定制旅行】专属你的独特旅行 ｜专业定制师服务 不限人数 全球任意目的地</span>
							<span>你可以提出对旅行的期待和要求，为你专属定制，即可享受首付游分期支付</span>
							<span>首付游￥<b>1</b></span>
						</div>
					</li>
				)
			}else{
				jsx2.push(
					<li key={i}>
						<div><img src={item.img}/></div>
						<div>
							<span>上海往返香港3晚4日自由行|港龙航空 华丽海景酒店或同级  送香港4天WIFI 团签（L签）可现询</span>
							<span>首付游￥<b>199</b></span>
						</div>
					</li>
				)
			}
			
		})
		console.log(jsx2)
		return(
			<div id='index'>
				<Header/>
				<div className='index1'>
					<div className='top'>
						<div></div>
						<div>
							<div className='pmd'></div>
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
							<h1>￥0-299</h1>
							<ul>
								<li className='djhou'>精选</li>
								<li>热门海岛</li>
								<li>日本</li>
								<li>东南亚</li>
								<li>港澳台</li>
								<li>欧洲</li>
								<li>澳新</li>
								<li>中东非</li>
								<li>人气</li>
								<li>国内</li>
								<li>签证</li>
								<li>美洲</li>
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
			$('.jgdj_top>ul li').click(function(){
				$(this).addClass('djhou').siblings().removeClass('djhou');
			})
			$.ajax({
				type:"get",
				url:"http://www.baidu.com/api.php",
				async:true,
				dataType:'json',
				success:function(data){
					var _data = data.imglist;
					console.log(_data)
					_this.setState({arr:_data});
					console.log(_this.state.arr)
				}
			});
		})
	}
}

export default Index;