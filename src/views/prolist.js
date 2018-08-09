import React from 'react'
import '../stylesheets/prolist.css'
import $ from "jquery"
import {Link} from 'react-router-dom'
import Footer from '../components/footer'
import Header from '../components/header'
import Xgwt from '../components/xgwt'
import Mock from "mockjs"
import Data from "../data/data3"

Mock.mock("http://www.baidu.com/api.php",Data)
//data是data3里的
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
			type: "get",
			url: "http://www.baidu.com/api.php",
			// data:----> classid,
			async:true,
			dataType: "json",
			success: function (data) {
				console.log(data.list)
				_this.setState({arr:data.list})
			}
		});
		
	}
	//{pathName:"/prodetail",query:{id:item.classid}}
	render(){
	return(
		<div>
				<header></header>
				<div id="main">
                    <div className="con">
					{/* 遍历dl的开始 */}

					{
						this.state.arr.map(function(item,i){
							// if(classid==item.classid){
								
							// }
							return(
								<dl key={i}>
							     <Link to={'/prodetail/'+item.goodsID} style={{color:"black"}}> 
									<dt><img src={item.cover_image}/></dt>
									<dd>  
									
										<div className="tit">{item.name}</div>
										<div className="infor">{item.recommended_reason}</div>
										<div className="data">出发时间<span>{item.month_string}</span></div>
										<div className="tag">
											<span>合作平牌</span>
											<span>首付游:</span>
											<span className="sfy">首付游<span className="price">{item.price}</span></span>                                   
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
	    </div>
		)
	}
}

export default Prolist;