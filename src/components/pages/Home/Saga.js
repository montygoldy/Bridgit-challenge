import { put, takeLatest } from "redux-saga/effects";
import actionTypes from "./Types";
import mainActions from "./Actions";

function* createEntrySaga(action) {
  try {
    yield put(mainActions.createEntrySuccess());
  } catch (error) {
    yield put(mainActions.createEntryErrors(error));
  }
}

function* getEntriesSaga(action) {
  try {
    yield put(mainActions.getEntriesSuccess());
  } catch (error) {
    yield put(mainActions.getEntriesErrors(error));
  }
}

function* deleteEntrySaga(action) {
  try {
    yield put(mainActions.deleteEntrySuccess());
  } catch (error) {
    yield put(mainActions.deleteEntryErrors(error));
  }
}

export function* MainSaga() {
  yield takeLatest(actionTypes.CREATE_ENTRY_REQUEST, createEntrySaga);
  yield takeLatest(actionTypes.GET_ENTRIES_REQUEST, getEntriesSaga);
  yield takeLatest(actionTypes.DELETE_ENTRY_REQUEST, deleteEntrySaga);
}