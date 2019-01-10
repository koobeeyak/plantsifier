export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_PLANTS_SUCCESS':
      return {
        ...state,
        plants: action.data
      }
    default:
      return state;
  }
}
