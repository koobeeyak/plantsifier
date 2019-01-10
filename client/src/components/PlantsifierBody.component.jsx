import React, { Component } from 'react';

import PlantsTable from './PlantsTable.container';

class PlantsifierBody extends Component {
  componentDidMount() {
    this.props.fetchApiData();
  }

  render() {
    return (
      <PlantsTable />
    );
  }
}

export default PlantsifierBody;
