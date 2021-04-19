import { all, fork } from "redux-saga/effects";

// Root
import { MainSaga } from "../components/pages/Home/Saga";

// Pages test

export default function* rootSaga() {
  yield all([
    fork(MainSaga),
  ]);
}
