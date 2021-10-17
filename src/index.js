import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Navbar from './components/header/NavBar';
import Landing from './views/Landing';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/landing" component={Landing} />
            <Route path="/docs" component={Navbar} />
            <Route path="/app" target="_blank" />
            <Redirect from="/" to="/landing" />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
