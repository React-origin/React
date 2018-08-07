import React from 'react'
import {Link} from 'react-router-dom'
import '../stylesheets/base.css'
class Header extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id='header'>
				<div>
					<div className='logo'>
						<Link to='/index'></Link>
					</div>
					<div className='sousuo'>
						<div>
							<input type='text' placeholder='搜索你想要的产品'/>
							<button type='button'>搜索</button>
						</div>
						<div>
							<span>热门搜索 : </span>
							<span>巴厘岛</span>
							<span>曼谷</span>
							<span>济州岛</span>
							<span>普吉岛</span>
							<span>东京</span>
							<span>马尔代夫</span>
						</div>
					</div>
					<div className='link_btn'>
						<ul>
							<li><Link to='/login'>登录</Link> <Link to='/register'>注册</Link></li>
							<li>如何使用首付游</li>
							<li>
								帮助中心
								<ul>
									<li>常见问题</li>
									<li>关于我们</li>
									<li>联系我们</li>
								</ul>
							</li>
							<li><Link to='/orders'>个人中心</Link></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;