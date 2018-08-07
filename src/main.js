import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router,Route,Switch } from 'react-router-dom';
import { history } from "./location";
import './core.less';

import { IndexComponent } from './pages/index/index';
import { LoginComponent } from './pages/password/login';
import { RegisterComponent } from './pages/password/register';


// class mainRouter extends React.Component{
//     constructor(props){
//         super(props);
//     }
//
//     componentDidMount(){}
//
//
//
//     render(){
//         return(
//             <div className="lbt-content"> {this.props.children}</div>
//         )
//     }
// }


ReactDOM.render((
    <Router history={history}>
        <Switch>
            <Route path="/index" component={IndexComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/register" component={RegisterComponent} />
            <Route exact path="/" component={IndexComponent} />
        </Switch>
    </Router>
),document.getElementById('lbt'));