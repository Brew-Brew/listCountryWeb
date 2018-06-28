import { all, takeEvery, put, select } from "redux-saga/effects";
import { SEARCH_DATA, setMeta, CLEAR_SEARCH } from "./actions";
import { filterCountriesSuccess, clearFilterData } from "../country/actions";
// search
export function* search(actions) {
  const searchData = actions.data;
  const { country } = yield select();
  //searchData 저장
  yield put(setMeta({ searchData }));
  //filter해서 country에 전달

  const filteredData = country.data.filter(data => {
    return (
      data.code.indexOf(searchData) >= 0 ||
      data.country.indexOf(searchData) >= 0
    );
  });
  yield put(filterCountriesSuccess(filteredData));
}

function* watchSearchData() {
  yield takeEvery(SEARCH_DATA, search);
}

export function* clear() {
  yield put(clearFilterData());
}
function* watchClearData() {
  yield takeEvery(CLEAR_SEARCH, clear);
}
export default function* metaRoot() {
  yield all([watchSearchData(), watchClearData()]);
}
