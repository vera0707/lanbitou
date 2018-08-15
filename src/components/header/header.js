import * as React from 'react';
import './header.less';
import { Link } from 'react-router-dom';

export class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header className="header">
                <div className="header-con flex">
                    <div>
                        <img className="logo" src={require("./../../assets/logo.png")} alt=""/>
                        <div className="brand">lanbitou</div>
                    </div>
                    <div className="flex">
                        <img className="user-avatar" src={require("./../../assets/default_avatar.jpg")} />
                        {/*<img className="user-avatar" src={} alt=""/>*/}
                        {/*<Link to="/login">登录</Link>*/}
                        {/*<div>&nbsp;&nbsp;|&nbsp;&nbsp;</div>*/}
                        {/*<Link to="/register">注册</Link>*/}
                    </div>
                </div>
            </header>
        )
    }
}