import { combineReducers } from 'redux';
import plants from './plants';
import employees from './employees';

export default combineReducers({
  plants,
  employees,
});
