import { all, fork } from "redux-saga/effects";
import metaRoot from "./meta/sagas";
import watchLoadCountries from "./country/sagas";

export default function* root() {
  yield all([metaRoot(), watchLoadCountries()]);
}
