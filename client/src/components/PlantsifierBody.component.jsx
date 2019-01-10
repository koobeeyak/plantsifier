import React, { Component } from 'react';

import PlantsTable from './PlantsTable.container';
import LoadingMessage from './LoadingMessage';
import ErrorMessage from './ErrorMessage';

class PlantsifierBody extends Component {
  componentDidMount() {
    this.props.fetchApiData();
  }

  render() {
    return (
      <div className="plantsifier_body">
        {this.props.arePlantsLoading && <LoadingMessage />}
        {this.props.plantsErrorMessage
          && <ErrorMessage errorMessage={this.props.plantsErrorMessage} />}
        <PlantsTable />
      </div>
    );
  }
}

export default PlantsifierBody;
