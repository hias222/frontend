import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Header from "./pages/Header"

import lists from "./pages/lists";
import Heats from "./pages/heats";
import live from "./pages/live";

import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter >
    <Header />     
    <Route path="/" exact component={live} />
    <Route path="/lists" component={lists} />
    <Route path="/live" component={live} />
    <Route path="/heats" exact component={Heats} />
    <Route path="/heats/:id" render={(props) => <Heats id={props.match.params.id} />} />
  </BrowserRouter>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// <Route path="/greeting/:name" render={(props) => <Greeting text="Hello, " {...props} />} />
// <Route path="/" foo="bar" component={Index}/>
serviceWorker.unregister();
