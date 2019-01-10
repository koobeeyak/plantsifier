import { connect } from 'react-redux';

import { plantsDataSelector } from '../reducers/plants';
import PlantsTableComponent from './PlantsTable.component';

const mapStateToProps = ({ plants }) => ({
  plants: plantsDataSelector(plants),
});

const PlantsTable = connect(mapStateToProps)(PlantsTableComponent);

export default PlantsTable;
