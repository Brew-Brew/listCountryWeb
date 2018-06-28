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
  yield put(loadCountriesRequest());

  try {
    const countries = yield call(getCountries);
    //{ , , } => [{}.{},{}]형태로 바꿔주기 위한것이다.
    const countryArr = Object.keys(countries)
      .map(key => [{ code: key, country: countries[key] }])
      .map(arr => arr[0]);
    yield put(loadCountriesSuccess(countryArr));
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
  // lodash를 사용하여 sorting함
  const sortData = _.orderBy(country.data, [`${meta.type}`], [`${meta.sort}`]);
  yield put(loadCountriesSuccess(sortData));
}

function* watchSortCountries() {
  yield takeEvery(SORT_COUNTRIES, sortCountries);
}
export default function* countryRoot() {
  yield all([watchLoadCountries(), watchSortCountries()]);
}
