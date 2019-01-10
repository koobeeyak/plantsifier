import {
  GET_EMPLOYEES_REQUEST,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAILURE,
} from '../actions';

const defaultState = {
  data: [],
  loading: false,
  errorMessage: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case GET_EMPLOYEES_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

export const employeesLoadingSelector = ({ loading }) => loading;
export const employeesSelector = ({ data }) => data;
