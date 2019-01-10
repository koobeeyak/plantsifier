import { connect } from 'react-redux';

import { getPlantsRequest } from '../actions';
import { plantsLoadingSelector, plantsErrorMessageSelector } from '../reducers/plants';
import PlantsifierBodyComponent from './PlantsifierBody.component';

const mapStateToProps = ({ plants }) => ({
  arePlantsLoading: plantsLoadingSelector(plants),
  plantsErrorMessage: plantsErrorMessageSelector(plants),
});

const mapDispatchToProps = dispatch => ({
  fetchApiData: () => dispatch(getPlantsRequest()),
});

const PlantsifierBody = connect(mapStateToProps, mapDispatchToProps)(PlantsifierBodyComponent);

export default PlantsifierBody;
