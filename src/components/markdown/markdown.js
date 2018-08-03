import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import './markdown.less';


export class Markdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tmpl : `> * 整理知识，学习笔记
             ## 什么是 Markdown
                Markdown 是一种方便记忆、书写的纯文本标记语言，用户可以使用这些标记符号以最小的输入代价生成极富表现力的文档：譬如您正在阅读的这份文档。它使用简单的符号标记不同的标题，分割不同的段落，**粗体** 或者 *斜体* 某些文字，更棒的是，它还可以
                - [ ] 支持以 PDF 格式导出文稿
- [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
- [x] 新增 Todo 列表功能
- [x] 修复 LaTex 公式渲染问题
- [x] 新增 LaTex 公式编号功能
            `
        }
    }

    render(){
        return(
            <div className="markdown">
                <ReactMarkdown source={ this.state.tmpl} ></ReactMarkdown>
            </div>
        )
    }
}