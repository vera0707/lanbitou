import * as React from 'react';
import { Link } from 'react-router-dom';
import './password.less';
import Swal from 'sweetalert2';

export class LoginComponent extends React.Component{
    constructor(props){
        super(props);
        this.changeNav = this.changeNav.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.userSubmit = this.userSubmit.bind(this);
        this.state = {
            nav: 'login'
        }

    }

    componentDidMount(){

    }

    changeNav(){
        const { nav } = this.state;
        this.setState({
            nav: nav == "login" ? 'register' : 'login',
            username: '',
            password: '',

        });
    }

    inputChange(e){
       const { name,value } = e.target;
       this.setState({ [name]: value })
    }

    userSubmit(){
        const { username,password } = this.state;

        if(!username){
            Swal("","用户名不能为空");
            return false;
        }

        if(!password){
            Swal("","密码不能为空");
            return false;
        }

        window.fetch('/user/login',{
            method: 'POST',
            headers: {"content-type": 'application/json; charset=utf-8'},
            body: JSON.stringify({ username, password })
        }).then(res =>{
            console.log('success',res);
        }).catch(res =>{
            console.log('fail',res);
        })
    }


    render(){
        const { nav,username,password,inputType } = this.state;
        return(
            <div className="password">
                <div className="password-bg">
                    <Link to='/' className="password-btn">Go Back</Link>
                    <div className="password-form">
                        <div className="form-nav">
                            <div className={`form-nav-li ${nav == 'login' ? 'active' : ''}`}  onBlur={this.changeNav}>Login</div>
                            <div className={`form-nav-li ${nav == 'register' ? 'active' : ''}`} onBlur={this.changeNav}>Sign up</div>
                        </div>
                        <div className="form-con">
                            <div className="form-title">Username</div>
                            <input className="form-input" type={ inputType } onChange={ this.inputChange } placeholder="请输入用户名" name="username" value={ username || '' }/>
                            <div className="form-title">Password</div>
                            <input className="form-input" type={ inputType } onChange={ this.inputChange } placeholder="请输入密码" name="password" value={ password || '' }/>
                            <div className="form-btn" onClick={ this.userSubmit }>{ nav  == 'login'? nav : 'sign up' }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}