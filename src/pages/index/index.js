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
        this.state = {
            editContent : `welcome to [lanbitou] editor`
        }
    }

    componentDidMount(){
        window.onbeforeunload = function (e) {
            var message = 'some word';
            e = e || window.event;

            if (e) {
                e.returnValue = message;
            }

            return message;
        }
    }

    editChange(event) {
        this.setState({editContent: event.target.value})
    }

    render(){
        return(
            <div>
                <Header />
                <Describe />
                <div className="index-con"   style={{ height: window.screen.availHeight - 225 + 'px' }}>
                    <Edit editChange={ this.editChange.bind(this) } editContent={this.state.editContent } />
                    <Markdown editContent={ this.state.editContent }  />
                </div>
            </div>
        )
    }
}