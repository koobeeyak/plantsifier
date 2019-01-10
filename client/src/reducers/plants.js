import {
  GET_PLANTS_REQUEST,
  GET_PLANTS_SUCCESS,
  GET_PLANTS_FAILURE,
} from '../actions';

const defaultState = {
  data: [],
  loading: false,
  errorMessage: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_PLANTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PLANTS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case GET_PLANTS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

export const plantsLoadingSelector = ({ loading }) => loading;
export const plantsErrorMessageSelector = ({ errorMessage }) => errorMessage;
export const plantsDataSelector = ({ data }) => data;
