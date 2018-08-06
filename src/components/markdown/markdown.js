import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import './markdown.less';


export class Markdown extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="markdown">
                <div className="markdown-title">PREVIEW</div>
                <ReactMarkdown className="markdown-con" source={ this.props.editContent } ></ReactMarkdown>
            </div>
        )
    }
}