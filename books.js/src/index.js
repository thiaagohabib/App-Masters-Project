import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SinopseLK from './Sinopses/sinopseLK.js';
import SinopseBH from './Sinopses/sinopseBH.js';
import SinopseCars from './Sinopses/sinopseCars.js';
import SinopseHC from './Sinopses/sinopseHC.js';
import SinopseTar from './Sinopses/sinopseTar.js';
import SinopseTI from './Sinopses/sinopseTI.js';


ReactDOM.render(
  <BrowserRouter>
      <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/sinopseLK" component={SinopseLK}/>
            <Route path="/sinopseBH" component={SinopseBH}/>
            <Route path="/sinopseCars" component={SinopseCars}/>
            <Route path="/sinopseHC" component={SinopseHC}/>
            <Route path="/sinopseTar" component={SinopseTar}/>
            <Route path="/sinopseTI" component={SinopseTI}/>
        </Switch>
  </ BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
