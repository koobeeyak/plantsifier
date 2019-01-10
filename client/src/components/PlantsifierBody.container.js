import { connect } from 'react-redux';

import { getPlantsRequest } from '../actions';
import PlantsifierBodyComponent from './PlantsifierBody.component';

const mapDispatchToProps = (dispatch) => ({
  getPlantsRequest: () => dispatch(getPlantsRequest())
});

const PlantsifierBody = connect(() => ({}), mapDispatchToProps)(PlantsifierBodyComponent);

export default PlantsifierBody;
