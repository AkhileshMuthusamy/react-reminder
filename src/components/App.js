import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from './Layouts/NavBar/NavBar';
import Header from './Layouts/Header/Header';
import Dashboard from './Dashboard/Dashboard';
import Monitor from './Monitor/Monitor';
import './App.css';
import { Tasks } from './Tasks';

export default class App extends Component {
  render() {
    console.dir(this.props);
    return (
      <Fragment>
        <div className="grid-container">
          <div className="header">
            <Header />
          </div>
          <div className="menu">
            <NavBar />
          </div>
          <div className="content">
            <Route path={`${this.props.match.path}/dashboard`} component={Dashboard} />
            <Route path={`${this.props.match.path}/monitor`} component={Monitor} />
            <Route path={`${this.props.match.path}/tasks`} component={Tasks} />
            <Redirect from={this.props.match.path} to="/app/dashboard" />
          </div>
        </div>
      </Fragment>
    );
  }
}
