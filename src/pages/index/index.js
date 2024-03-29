import * as React from 'react';
import { Header } from './../../components/header/header';
import { Describe } from './../../components/describe/describe';
import { Edit } from  './../../components/edit/edit';
import { Markdown } from  './../../components/markdown/markdown';
import Swal from 'sweetalert2';
import './index.less';

export class IndexComponent extends React.Component{
    constructor(props){
        super(props);

        const lbt = window.localStorage.getItem("lbt") ? JSON.parse(window.localStorage.getItem("lbt")) : {};
        const editContent = lbt.editContent ? lbt.editContent : `welcome to [烂笔头] editor.

**注**：当前还有很多功能正在开发，敬请期待——🚧
@xieyuxuan        
        `;
        const creationTime = lbt.creationTime ? lbt.creationTime : new Date();
        const editName =  lbt.editName ? lbt.editName :  `Default Document`;


        this.state = {
            editContent : editContent,
            creationTime: creationTime,
            editName: editName
        }
    }

    componentDidMount(){
        // window.onbeforeunload = function (e) {
        //     const message = 'some word';
        //
        //     e = e || window.event;
        //
        //     if (e) {
        //         e.returnValue = message;
        //     }
        //
        //     return message;
        // }
    }

    editChange(event) {
        this.setState({editContent: event.target.value})
    }

    editBlur(){
        const lbt = JSON.stringify(this.state);
        window.localStorage.clear();
        window.localStorage.setItem("lbt",lbt);
    }

    render(){
        const { creationTime,editContent,editName } = this.state;
        return(
            <div>
                <Describe  creationTime={creationTime} words={editContent.length} editName={editName} />
                <div className="index-con"   style={{ height: window.screen.availHeight - 225 + 'px' }}>
                    <Edit editChange={ this.editChange.bind(this) } editBlur={ this.editBlur.bind(this)} editContent={ editContent }  />
                    <Markdown editContent={ editContent }  />
                </div>
            </div>
        )
    }
}