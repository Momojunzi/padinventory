import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Inventory from './containers/Inventory/Inventory';
import ViewInventory from './containers/ViewInventory/ViewInventory';
import Navigation from './containers/Navigation/Navigation';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    apiTest: ""
  }

  componentDidMount() {
    this.testApi();
  }

  testApi = () => {
    axios.get('/api/test')
      .then(response => {
        const apiTest = response.data;
        this.setState({apiTest})
      });
  }
  render() {
    return (
      <div className="App container-fluid justify-content-center">
        <div className="row justify-content-center title-div">
          <h4 className="title">Moving Pad Tracker</h4>
        </div>
        <Router>
          <div className="row justify-content-center inv-container">
              <Navigation />
              <Switch>
                <Route exact path="/" component={Inventory}/>
                <Route exact path="/view" component={ViewInventory}/>
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
