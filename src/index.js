import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import Welcome from './Welcome';
import Table from './Table';
import Test from './Test';
import Add from './Add';
import Edit from './Edit';


ReactDOM.render(
    <Router>
        <Route path="/" exact>
            <Welcome />
        </Route>
        <Route path="/list">
            <Table />
        </Route>
        <Route path="/test" component={Test}/>
        <Route path="/add" component={Add}/>
        <Route path="/edit/:id" exact component={Edit}/>
    </Router>, 
        document.getElementById('root')
);
