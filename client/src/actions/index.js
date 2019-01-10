export const GET_PLANTS_REQUEST = 'GET_PLANTS_REQUEST';
export const GET_PLANTS_FAILURE = 'GET_PLANTS_FAILURE';
export const GET_PLANTS_SUCCESS = 'GET_PLANTS_SUCCESS';
export const GET_EMPLOYEES_REQUEST = 'GET_EMPLOYEES_REQUEST';
export const GET_EMPLOYEES_FAILURE = 'GET_EMPLOYEES_FAILURE';
export const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS';

export const getPlantsRequest = () => ({
  type: GET_PLANTS_REQUEST
})

export const getPlantsFailure = (errorMessage) => ({
  type: GET_PLANTS_FAILURE,
  errorMessage
});

export const getPlantsSuccess = (data) => ({
  type: GET_PLANTS_SUCCESS,
  data
});

export const getEmployeesRequest = () => ({
  type: GET_EMPLOYEES_REQUEST
})

export const getEmployeesFailure = (errorMessage) => ({
  type: GET_EMPLOYEES_FAILURE,
  errorMessage
});

export const getEmployeesSuccess = (data) => ({
  type: GET_EMPLOYEES_SUCCESS,
  data
});
