import { takeEvery, put, call } from "redux-saga/effects";
//import { orderBy } from 'lodash';

import { getCountries } from "src/api/country";

import {
  LOAD_COUNTRIES,
  loadCountriesRequest,
  loadCountriesSuccess,
  loadCountriesFailure
} from "./actions";
import country from "./reducer";

export function* loadCountries(actions) {
  console.log("ddddd");
  yield put(loadCountriesRequest());

  try {
    const contries = yield call(getCountries);
    yield put(loadCountriesSuccess(contries));
  } catch (error) {
    yield put(loadCountriesFailure(error));
  }
}

export default function* watchLoadCountries() {
  yield takeEvery(LOAD_COUNTRIES, loadCountries);
}
