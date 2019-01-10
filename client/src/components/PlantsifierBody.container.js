import { connect } from 'react-redux';

import { getPlantsRequest } from '../actions';
import PlantsifierBodyComponent from './PlantsifierBody.component';

const mapDispatchToProps = dispatch => ({
  fetchApiData: () => dispatch(getPlantsRequest()),
});

const PlantsifierBody = connect(null, mapDispatchToProps)(PlantsifierBodyComponent);

export default PlantsifierBody;
