import { call, put, takeEvery } from 'redux-saga/effects';

import getPlantsApiCall from '../api/getPlants';
import { GET_PLANTS_REQUEST, getPlantsFailure, getPlantsSuccess } from '../actions';

// getPlants() might take data from the request action as param?
function* getPlants() {
    try {
        const data = yield call(getPlantsApiCall);
        yield put(getPlantsSuccess(data));
    } catch (error) {
        yield put(getPlantsFailure(error));
    }
}

function* getPlantsSaga() {
    yield takeEvery(GET_PLANTS_REQUEST, getPlants);
}

export default getPlantsSaga;
