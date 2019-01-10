import { connect } from 'react-redux';

import { getPlantsRequest, getEmployeesRequest } from '../actions';
import PlantsifierBodyComponent from './PlantsifierBody.component';

const mapDispatchToProps = dispatch => ({
  fetchApiData: () => {
    dispatch(getPlantsRequest());
    dispatch(getEmployeesRequest());
  },
});

const PlantsifierBody = connect(null, mapDispatchToProps)(PlantsifierBodyComponent);

export default PlantsifierBody;
