import { call, put, takeLatest } from "redux-saga/effects";
import actionTypes from "./Types";
import mainActions from "./Actions";
import { orderBy } from 'lodash';

const sortingFunc = (data, sortBy, sortOrder) => {
  return orderBy(data, [sortBy.toLowerCase()], [sortOrder]);
}

function* createEntrySaga(action) {
  try {
    // 1. Get the Cache List
    let localData = JSON.parse(localStorage.getItem("entryList"));

    // 2.Update the Cache List
    localData = [action.payload.data, ...localData];

    // 3. Save it back 
    localStorage.setItem("entryList", JSON.stringify(localData))

    yield put(mainActions.createEntrySuccess(localData));
  } catch (error) {
    yield put(mainActions.createEntryErrors(error));
  }
}

function* getEntriesSaga(action) {
  try {
    
    // Get Cached Data 
    let getlocalCategory = action.payload.category || localStorage.getItem("showByCategory");
    let localData = localStorage.getItem("entryList");
    let getlocalSortBy = action.payload.sortBy  || localStorage.getItem("sortBy");
    let getlocalSortOrder = action.payload.sortOrder || localStorage.getItem("sortOrder");

    // If Cached data is there
    if (localData) {
      localData = JSON.parse(localData);
    
      // Show filtered list based on category
      localData = getlocalCategory === "all" ? localData : localData.filter(item => item.category === getlocalCategory);

      // IF sorting is there
      if (getlocalSortBy && getlocalSortOrder) {
        localData = yield call(sortingFunc, localData, getlocalSortBy, getlocalSortOrder);

        // Save the Sorting in localstorage
        localStorage.setItem("sortBy", getlocalSortBy);
        localStorage.setItem("sortOrder", getlocalSortOrder);
      }
      
      // Save the category in localstorage
      localStorage.setItem("showByCategory", getlocalCategory);
    } else {

      // Else add the default 
      localStorage.setItem("entryList", JSON.stringify([]));
      localStorage.setItem("showByCategory", "all");

      localData = [];
      getlocalCategory = "all";
    }

    yield put(mainActions.getEntriesSuccess(getlocalCategory, getlocalSortBy, getlocalSortOrder, localData));
  } catch (error) {
    yield put(mainActions.getEntriesErrors(error));
  }
}

function* deleteEntrySaga(action) {
  try {
     // 1. Get the Cache List
    let localData = JSON.parse(localStorage.getItem("entryList"));

    // 2.Update the Cache List
    localData = localData.filter(item => action.payload.id !== item.id);

    // 3. Save it back 
    localStorage.setItem("entryList", JSON.stringify(localData))

    yield put(mainActions.deleteEntrySuccess(localData));
  } catch (error) {
    yield put(mainActions.deleteEntryErrors(error));
  }
}

function* resetEntriesSaga(action) {
  try {
     // Clear Localstorage
    localStorage.clear();

    yield put(mainActions.resetEntriesSuccess());
  } catch (error) {
    yield put(mainActions.resetEntriesErrors(error));
  }
}

export function* MainSaga() {
  yield takeLatest(actionTypes.CREATE_ENTRY_REQUEST, createEntrySaga);
  yield takeLatest(actionTypes.GET_ENTRIES_REQUEST, getEntriesSaga);
  yield takeLatest(actionTypes.DELETE_ENTRY_REQUEST, deleteEntrySaga);
  yield takeLatest(actionTypes.CLEAR_ENTRIES_REQUEST, resetEntriesSaga);
}