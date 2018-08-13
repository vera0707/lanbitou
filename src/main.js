import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router,Route,Switch } from 'react-router-dom';
import { history } from './location';
import './core.less';

import { IndexComponent } from './pages/index/index';
import { LoginComponent } from './pages/password/login';
import { ErrorComponent } from './pages/error/error';

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


const PasswordRouter = ()=>{
    <div>
        <Route path={`${match.url}/login`}  component={LoginComponent} />
        <Route path={`${match.url}/register`}  component={LoginComponent} />
    </div>
};



ReactDOM.render((
    <Router history={history}>
        <Switch>
            <Route path="/index" component={IndexComponent} />
            <Route exact path="/password/:type" component={ LoginComponent} />
            <Route exact path="/" component={ LoginComponent} />
            <Route path="*" component={ErrorComponent}/>
        </Switch>
    </Router>
),document.getElementById('lbt'));

