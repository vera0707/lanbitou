import * as React from 'react';
import { Header } from './../../components/header/header';
import { Describe } from './../../components/describe/describe';
import { Edit } from  './../../components/edit/edit';
import { Markdown } from  './../../components/markdown/markdown';
import './index.less';

export class IndexComponent extends React.Component{
    constructor(props){
        super(props);
        this.editChange = this.editChange.bind(this);
    }

    editChange(event){
        console.log(event)
    }

    render(){
        return(
            <div>
                <Header />
                <Describe />
                <div className="index-con" style={{ height: window.screen.availHeight - 120 + 'px' }}>
                    <Edit onchange={ this.editChange } />
                    <Markdown />
                </div>
            </div>
        )
    }
}