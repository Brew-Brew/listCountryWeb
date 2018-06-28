import _ from "lodash";
import { takeEvery, put, call, all, select } from "redux-saga/effects";
//import { orderBy } from 'lodash';

import { getCountries } from "src/api/country";

import {
  LOAD_COUNTRIES,
  SORT_COUNTRIES,
  loadCountriesRequest,
  loadCountriesSuccess,
  loadCountriesFailure
} from "./actions";
import { setMeta } from "../meta/actions";

//나라 load관련 함수들
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

function* watchLoadCountries() {
  yield takeEvery(LOAD_COUNTRIES, loadCountries);
}
// 나라 sort 관련 함수들
export function* sortCountries(actions) {
  yield put(setMeta(actions.sortInfo));
  const { meta, country } = yield select();
  console.log("메타", meta);
  const sortData = _.orderBy(country.data, ["code"], ["asc"]);
  console.log("sorted", sortData);
}

function* watchSortCountries() {
  yield takeEvery(SORT_COUNTRIES, sortCountries);
}
export default function* countryRoot() {
  yield all([watchLoadCountries(), watchSortCountries()]);
}
