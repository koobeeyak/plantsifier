import React, { Component } from 'react';

import PlantsTable from './PlantsTable.container';

class PlantsifierBody extends Component {
  componentDidMount() {
    this.props.getPlantsRequest();
  }
  render() {
    return (
      <PlantsTable />
    );
  }
};

export default PlantsifierBody;
