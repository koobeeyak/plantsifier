import { connect } from 'react-redux';

import { loadingSelector } from '../reducers/plants';
import PlantsTableComponent from './PlantsTable.component';

const mapStateToProps = ({ plants }) => ({
  isLoading: loadingSelector(plants),
});

const PlantsTable = connect(mapStateToProps, () => ({}))(PlantsTableComponent);

export default PlantsTable;
