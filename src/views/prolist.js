import React from 'react'
import '../stylesheets/prolist.css'
import $ from "jquery"
import {Link} from 'react-router-dom'
import Footer from '../components/footer'
import Header from '../components/header'
import Xgwt from '../components/xgwt'
import Mock from "mockjs"
import mok from "../data/data2"

Mock.mock("http://www.taobao.com/api.php",mok)
class Prolist extends React.Component{
	constructor(props){
		super(props)
		this.state={
			arr:[]
		}

	}

	componentDidMount(){
		var _this=this;
		$.ajax({
			type: "post",
			url: "http://www.taobao.com/api.php",
			data:{classid:_this.props.match.params.list},
			async:true,
			dataType: "json",
			success: function (data) {
				// console.log(data)
				_this.setState({arr:data})
			}
		});
		
	}
	//{pathName:"/prodetail",query:{id:item.classid}}
	render(){
	return(
		<div>
				<Header/>
				<div id="main">
                    <div className="con">
					{/* 遍历dl的开始 */}

					{
						this.state.arr.map(function(item,i){
							// if(classid==item.classid){
								
							// }
							return(
								<dl key={i}>
							     <Link to={'/prodetail/'+item.goodsid} style={{color:"black"}}> 
									<dt><img src={item.img}/></dt>
									<dd>  
									
										<div className="tit">{item.title}}</div>
										<div className="infor">{item.num}</div>
										<div className="data">出发时间：<span>{item.num}</span></div>
										<div className="tag">
											<span>合作平台：</span>
											<span>首付游</span>
											<span className="sfy">首付游<span className="price">{item.money}</span></span>                                   
										</div>
									</dd>
							    </Link> 
						    </dl>
							
							)	

						})
					}	
						
							
						{/* 遍历dl的结束 */}
                    </div>
                    {/* <div className="page">2</div> */}
                </div>
				<Xgwt/>
	    </div>
		)
	}
}

export default Prolist;