import constants from "./Types";

const mainActions = {
  //CREATE Entries
  createEntryRequest: data => ({
    type: constants.CREATE_ENTRY_REQUEST,
    payload: {
      data
    }
  }),

  createEntrySuccess: entryList => ({
    type: constants.CREATE_ENTRY_SUCCESS,
    payload: {
      entryList
    }
  }),

  createEntryErrors: errors => ({
    type: constants.CREATE_ENTRY_ERRORS,
    payload: {
      errors
    }
  }),

  //GET Entries
  getEntriesRequest: (category, sortBy, sortOrder) => ({
    type: constants.GET_ENTRIES_REQUEST,
    payload: {
      category,
      sortBy, 
      sortOrder
    }
  }),

  getEntriesSuccess: (category, sortBy, sortOrder, entryList) => ({
    type: constants.GET_ENTRIES_SUCCESS,
    payload: {
      category,
      sortBy, 
      sortOrder,
      entryList
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

  deleteEntrySuccess: entryList => ({
    type: constants.DELETE_ENTRY_SUCCESS,
    payload: {
      entryList
    }
  }),

  deleteEntryErrors: errors => ({
    type: constants.DELETE_ENTRY_ERRORS,
    payload: {
      errors
    }
  }),


  //Clear Entries
  resetEntriesRequest: () => ({
    type: constants.CLEAR_ENTRIES_REQUEST,
    payload: {}
  }),

  resetEntriesSuccess: () => ({
    type: constants.CLEAR_ENTRIES_SUCCESS,
    payload: {}
  }),

  resetEntriesErrors: errors => ({
    type: constants.CLEAR_ENTRIES_ERRORS,
    payload: {
      errors
    }
  }),
}

export default mainActions;