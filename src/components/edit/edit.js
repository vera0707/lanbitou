import * as React from 'react';
import './edit.less';

export class Edit extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div className="edit">
               <textarea onChange={this.props.onchange.bind(this,event)} name="edit_con" id=""  className="edit-con"></textarea>
           </div>
        )
    }
}