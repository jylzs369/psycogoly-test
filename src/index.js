import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './index.css';
import Home from './components/home';
import Whole from './components/whole'
import Subject from './components/subject'
import SubjectDetail from './components/subject/detail'
import Testing from './components/testing'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/whole">
          <Whole />
        </Route>
        <Route exact path="/subject">
          <Subject />
        </Route>
        <Route path="/subject/detail/:id">
          <SubjectDetail />
        </Route>
        <Route path="/testing">
          <Testing />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
