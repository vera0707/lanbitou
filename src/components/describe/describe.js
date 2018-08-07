import * as React from 'react';
import './describe.less';
import moment from 'moment';

export class Describe extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div className="describe">
               <div>
                   <div className="color-a0aabf font-12">DOCUMENT NAME</div>
                   <div className="describe-name">{ this.props.editName }.md</div>
               </div>
               <div className="font-12 color-a0aabf">
                   <div>WORDS: <span className="color-333">{ this.props.words }</span></div>
                   <div>CREATIONTIME : <span className="color-333">{ moment(this.props.creationTime).format("YYYY.MM.DD") }</span></div>
               </div>
           </div>
        )
    }
}