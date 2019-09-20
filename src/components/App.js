import React, { Component } from 'react';
import NavBar from './Layouts/NavBar/NavBar';
import Header from './Layouts/Header/Header';
import Dashboard from './Dashboard/Dashboard';
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
          <Dashboard />
        </div>
      </div>
    );
  }
}
