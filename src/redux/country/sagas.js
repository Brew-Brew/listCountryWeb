import { takeEvery, put, call } from "redux-saga/effects";
//import { orderBy } from 'lodash';

import { getCountries } from "src/api/country";

import {
  LOAD_COUNTRIES,
  loadCountriesRequest,
  loadCountriesSuccess,
  loadCountriesFailure,
  loadCountriesRequest
} from "./actions";

export function* loadCountries(actions) {
  yield put(loadCountriesRequest());

  try {
    const contries = yield call(getCountries);
    console.log(contries);
    yield put(loadCountriesSuccess());
  } catch (error) {
    yield put(loadCountriesFailure(error));
  }
}

export default function* watchLoadCountries() {
  yield takeEvery(LOAD_COUNTRIES, loadCountries);
}
