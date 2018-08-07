import * as React from 'react';
import './password.less';

export class LoginComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }


    render(){
        return(
            <div className="password">
                <div className="password-bg">
                    <div className="password-btn">Go Back</div>
                </div>
            </div>
        )
    }
}