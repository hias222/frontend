import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Header from "./pages/Header"

import search from "./pages/search";
import download from "./pages/download";
import live from "./pages/live";

import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter >
    <Header />     
    <Route path="/" exact component={live} />
    <Route path="/search" component={search} />
    <Route path="/live" component={live} />
    <Route path="/download" component={download} />
  </BrowserRouter>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
