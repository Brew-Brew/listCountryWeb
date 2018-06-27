import { takeEvery, put, call } from "redux-saga/effects";
//import { orderBy } from 'lodash';

import { getCartInfo } from "src/api";

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
    yield put(loadCountriesSuccess());
  } catch (error) {
    yield put(loadCountriesFailure(error));
  }
}

export default function* watchCartInfo() {
  yield takeEvery(LOAD_COUNTRIES, loadCountries);
}
