const defaultState = {
  plants: [],
  loading: false,
  errorMessage: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_PLANTS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_PLANTS_SUCCESS':
      return {
        ...state,
        plants: action.data,
        loading: false
      }
    case 'GET_PLANTS_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage
      }
    default:
      return state;
  }
}

export const loadingSelector = ({ loading }) => loading;
export const plantsSelector = ({ plants }) => plants;
