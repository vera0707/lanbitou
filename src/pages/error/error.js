import * as React from 'react';

export class ErrorComponent extends React.Component{
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
                    <div>error</div>
                </div>
            </div>
        )
    }
}