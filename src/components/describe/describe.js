import * as React from 'react';
import './describe.less';

export class Describe extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div className="describe">
               <div>
                   <div className="color-a0aabf font-12">DOCUMENT NAME</div>
                   <div className="describe-name">Untitled Document.md</div>
               </div>
               <div className="font-12 color-a0aabf">
                   <div>WORDS: <span className="color-333">561</span></div>
                   <div>CHARACTERS: <span className="color-333">3730</span></div>
               </div>
           </div>
        )
    }
}