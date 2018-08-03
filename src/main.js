import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router,Route,Switch } from 'react-router-dom';
import { history } from "./location";
import './core.less';

import { IndexComponent } from './pages/index/index';


class mainRouter extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){}



    render(){
        return(
            <div className="lbt-content"> {this.props.children}</div>
        )
    }
}


ReactDOM.render((
    <Router history={history}>
        <Switch>
            <Route path="/" component={IndexComponent} />
            <Route path="/index" component={IndexComponent} />
        </Switch>
    </Router>
),document.getElementById('lbt'));