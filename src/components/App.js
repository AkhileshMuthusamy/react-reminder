import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './Layouts/NavBar/NavBar';
import Header from './Layouts/Header/Header';
import Dashboard from './Dashboard/Dashboard';
import Monitor from './Monitor/Monitor';
import './App.css';
import { Tasks } from './Tasks';
import { Login } from './Login';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/login" component={Login} />
        <div className="grid-container">
          <div className="header">
            <Header />
          </div>
          <div className="menu">
            <NavBar />
          </div>
          <div className="content">
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/monitor" component={Monitor} />
            <Route path="/tasks" component={Tasks} />
          </div>
        </div>
      </Fragment>
    );
  }
}
