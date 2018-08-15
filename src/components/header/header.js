import * as React from 'react';
import './header.less';
import { Link } from 'react-router-dom';

export class Header extends React.Component{
    constructor(props){
        super(props);
        const isLogin = !!this.props.userInfo;

        this.state = { isLogin };
    }

    render(){
        const { isLogin } = this.state;
        return(
            <header className="header">
                <div className="header-con flex">
                    <div>
                        <img className="logo" src={require("./../../assets/logo.png")} alt=""/>
                        <div className="brand">lanbitou</div>
                    </div>
                        {
                            isLogin &&
                            <div className="flex">
                                <img className="user-avatar" src={require("./../../assets/default_avatar.jpg")} />
                                <div className="user-name"></div>
                            </div>

                        }
                        {
                            !isLogin &&
                            <div className="flex">
                                <Link to="/login">登录</Link>
                                <div>&nbsp;&nbsp;|&nbsp;&nbsp;</div>
                                <Link to="/register">注册</Link>
                            </div>

                        }
                </div>
            </header>
        )
    }
}