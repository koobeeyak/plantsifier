export const GET_PLANTS_REQUEST = 'GET_PLANTS_REQUEST';
const GET_PLANTS_FAILURE = 'GET_PLANTS_FAILURE';
const GET_PLANTS_SUCCESS = 'GET_PLANTS_SUCCESS';

export const getPlantsFailure = (error) => ({
  type: GET_PLANTS_FAILURE,
  error
});

export const getPlantsSuccess = (data) => ({
  type: GET_PLANTS_SUCCESS,
  data
});
