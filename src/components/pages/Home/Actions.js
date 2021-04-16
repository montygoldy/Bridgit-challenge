import constants from "./Types";

const mainActions = {
  //CREATE Entries
  createEntryRequest: data => ({
    type: constants.CREATE_ENTRY_REQUEST,
    payload: {
      data
    }
  }),

  createEntrySuccess: value => ({
    type: constants.CREATE_ENTRY_SUCCESS,
    payload: {
      value
    }
  }),

  createEntryErrors: errors => ({
    type: constants.CREATE_ENTRY_ERRORS,
    payload: {
      errors
    }
  }),

  //GET Entries
  getEntriesRequest: (category) => ({
    type: constants.GET_ENTRIES_REQUEST,
    payload: {
      category
    }
  }),

  getEntriesSuccess: value => ({
    type: constants.GET_ENTRIES_SUCCESS,
    payload: {
      value
    }
  }),

  getEntriesErrors: errors => ({
    type: constants.GET_ENTRIES_ERRORS,
    payload: {
      errors
    }
  }),

  //DELETE Entries
  deleteEntryRequest: id => ({
    type: constants.DELETE_ENTRY_REQUEST,
    payload: {
      id
    }
  }),

  deleteEntrySuccess: value => ({
    type: constants.DELETE_ENTRY_SUCCESS,
    payload: {
      value
    }
  }),

  deleteEntryErrors: errors => ({
    type: constants.DELETE_ENTRY_ERRORS,
    payload: {
      errors
    }
  }),
}

export default mainActions;