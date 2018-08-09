import * as React from 'react';
import { Link } from 'react-router-dom';
import './password.less';

export class LoginComponent extends React.Component{
    constructor(props){
        super(props);
        this.changeNav = this.changeNav.bind(this);

        this.state = {
            nav: 'login'
        }

    }

    componentDidMount(){

    }

    changeNav(){
        const { nav } = this.state;
        this.setState({  nav: nav == "login" ? 'register' : 'login' });
    }


    render(){
        const { nav } = this.state;
        return(
            <div className="password">
                <div className="password-bg">
                    <Link to='/' className="password-btn">Go Back</Link>
                    <div className="password-form">
                        <div className="form-nav">
                            <div className={`form-nav-li ${nav == 'login' ? 'active' : ''}`}  onClick={this.changeNav}>Login</div>
                            <div className={`form-nav-li ${nav == 'register' ? 'active' : ''}`} onClick={this.changeNav}>Sign up</div>
                        </div>
                        <div className="form-con">
                            <div className="form-title">Username or Email</div>
                            <input className="form-input" type="text"/>
                            <div className="form-title">Password</div>
                            <input className="form-input" type="text"/>
                            <div className="form-btn">{ nav  == 'login'? nav : 'sign up' }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}