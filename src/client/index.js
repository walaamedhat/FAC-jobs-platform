import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home';
import Page404 from './components/page404';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div className='app'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Page404} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
