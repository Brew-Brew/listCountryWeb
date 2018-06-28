import { all, fork } from "redux-saga/effects";
import metaRoot from "./meta/sagas";
import countryRoot from "./country/sagas";

export default function* root() {
  yield all([metaRoot(), countryRoot()]);
}
