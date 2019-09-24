import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './Layouts/NavBar/NavBar';
import Header from './Layouts/Header/Header';
import Dashboard from './Dashboard/Dashboard';
import Monitor from './Monitor/Monitor';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="header">
          <Header />
        </div>
        <div className="menu">
          <NavBar />
        </div>
        <div className="content">
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/monitor" component={Monitor} />
        </div>
      </div>
    );
  }
}
