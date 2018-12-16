import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TopMenu from './components/TopMenu';

import Index from './pages/Index';
import Users from './pages/Users';
import Components from './pages/Components';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopMenu />

          <Route path="/" exact component={Index}></Route>
          <Route path="/users/" exact component={Users}></Route>
          <Route path="/components/" exact component={Components}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
