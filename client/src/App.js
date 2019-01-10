import React, { Component } from 'react';
import './App.css';

import PlantsTable from './components/PlantsTable.container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlantsTable />
      </div>
    );
  }
}

export default App;
