import { connect } from 'react-redux';

import { plantsLoadingSelector } from '../reducers/plants';
import PlantsTableComponent from './PlantsTable.component';

const mapStateToProps = ({ plants }) => ({
  arePlantsLoading: plantsLoadingSelector(plants),
});

const PlantsTable = connect(mapStateToProps)(PlantsTableComponent);

export default PlantsTable;
