import * as React from 'react';
import './header.less';

export class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header className="header">
                <div className="header-con">
                    <div className="brand">lanbitou</div>
                </div>
            </header>
        )
    }
}