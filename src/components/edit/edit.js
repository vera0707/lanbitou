import * as React from 'react';
import './edit.less';

export class Edit extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div className="edit">
               <div className="edit-title">Markdown</div>
               <textarea onChange={this.props.editChange} name="edit_con" id=""  className="edit-con"  value={this.props.editContent}></textarea>
           </div>
        )
    }
}