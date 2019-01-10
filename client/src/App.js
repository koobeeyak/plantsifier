import React, { Component } from 'react';
import './App.css';

import PlantsifierBody from './components/PlantsifierBody.container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlantsifierBody />
      </div>
    );
  }
}

export default App;
