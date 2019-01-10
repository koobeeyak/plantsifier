import { call, put, takeEvery } from 'redux-saga/effects';

import getEmployeesApiCall from '../api/getEmployees';
import { GET_EMPLOYEES_REQUEST, getEmployeesFailure, getEmployeesSuccess } from '../actions';

function* getEmployees() {
    try {
        const data = yield call(getEmployeesApiCall);
        yield put(getEmployeesSuccess(data));
    } catch (error) {
        yield put(getEmployeesFailure(error.message));
    }
}

function* getEmployeesSaga() {
    yield takeEvery(GET_EMPLOYEES_REQUEST, getEmployees);
}

export default getEmployeesSaga;
