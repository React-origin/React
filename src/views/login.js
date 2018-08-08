import React from 'react'
import '../stylesheets/login_register.css'
// import Footer from '../components/footer'
// import Header2 from '../components/header2'
import login_pic from '../img/sfy_logo.png'
import {Link} from "react-router-dom"
import $ from 'jquery'

class Login extends React.Component{
	constructor(props){
		super(props);
	}

	yzm(){
        // console.log(this.user)
        var _this = this;
       $.ajax({
           type:'post',
           url:'http://localhost:9000/register',
            data:{
                username:_this.refs.ipt.value,
                password:_this.refs.ipt2.vaule,
                id:"1"               
            },
            dataType:'json'
        })
    }

    tap(){
        var res = /^[1]\d{10}$/;
        var rew = /^[a-zA-Z_]\w{5,13}$/;
       if(this.refs.ipt.value == ""){
           alert('请输入用户名')
       }else if(this.refs.ipt1.value == ''){
           alert('请输入验证码')
       }else if(this.refs.ipt2.value == ''){
           alert('密码不能为空')
       }else if(res.test(this.refs.ipt.value) == false){
           alert('请输入正确的手机号格式')
       }else if(rew.test(this.refs.ipt2.value) == false){
           alert('请按照要求填写密码')
       }else{
           var _this = this 
           $.ajax({
               type:'post',
                url:'http://localhost:9000/register',
                data:{
                    username:_this.refs.ipt.value,
                    password:_this.refs.ipt2.value,
                    sjyzm:_this.refs.ipt1.value,
                    id:"2"
                },
                dataType:'json',
                async:true,
                success:function(data){
                    // console.log(data)
                    if(data == 1){
                        alert('注册成功')
                        $('.login_register').hide()
                        $('.login_login').show()
                    }else if(data == 2){
                        alert('用户名已存在')
                        $('.login_register').hide()
                        $('.login_login').show()
                    }else if(data == 3){
                        alert('手机验证码错误')
                    }
                }
           })
       }
    }

    log(){
        $('.login_register').hide()
        $('.login_login').show()
    }

    tap1(){
        if(this.refs.ipt3.value == ''){
            alert('请输入用户名')
        }else if(this.refs.ipt4.value == ''){
            alert('请输入密码')
        }else{
            var _this = this;
            $.ajax({
                type:'post',
                url:'http://localhost:9000/login',
                data:{
                    username:_this.refs.ipt3.value,
                    password:_this.refs.ipt4.value,
                    id:'2'
                },
                dataType:'json',
                async:true,
                success:function(data){
                     if(data == 2){
                        alert('登录成功')
                        sessionStorage.setItem('name',_this.refs.ipt3.value)
                        _this.props.history.push('/index')
                    }else{
                        alert('用户名或密码错误')
                    }
                }
            })
        }
        
    }
    
    log1(){
        $('.login_login').hide()
        $('.login_register').show()
    }

	render(){
		return(
			<div id='login'>
				<div className="login_logo"><Link to="/index"><img src={login_pic}/></Link></div>              
                <div className="login_box">
                    <div className="login_register">
                        <input type="text" ref="ipt" placeholder="请输入手机号"/>
                        <div>
                            <input type="text" className="yzm" ref="ipt1" placeholder="请输入验证码"/>
                            <i onClick={this.yzm.bind(this)}>获取验证码</i>
                        </div>
                        <input type="text" ref="ipt2" placeholder="登录密码为8-18位数字与字母组合"/>
                        <button onClick={this.tap.bind(this)} className="register">注册</button>
                        <button onClick={this.log.bind(this)} className="login_btn">已有用户直接登录</button>
                    </div>
                    <div className="login_login">
                        <input type="text" ref="ipt3" placeholder="请输入手机号"/>
                        <input type="text" ref="ipt4" placeholder="请输入密码"/>
                        <button onClick={this.tap1.bind(this)} className="register">登录</button>
                        <button onClick={this.log1.bind(this)} className="login_btn">注册</button>
                    </div>
                </div>
			</div>
		)
	}
}

export default Login;