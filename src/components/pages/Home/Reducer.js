import constants from "./Types";

const initialState = {
  showByCategory: "all",
  entryById: {},
  entryIdList: {
    all: [],
    fruits: [],
    vegetables: []
  },
  errors: {},

  isLoading: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    // Create
    case constants.CREATE_ENTRY_REQUEST:
      return {
        ...state,
      }
      case constants.CREATE_ENTRY_SUCCESS:
      console.log("action.payload", action.payload.value)
      return {
        ...state,
        entryById: {}
      }

    case constants.CREATE_ENTRY_ERRORS:
      return {
        ...state,
        errors: action.payload.errors,
      }
    
    // GET
    case constants.GET_ENTRIES_REQUEST:
      return {
        ...state,
      }
    case constants.GET_ENTRIES_SUCCESS:
      return {
        ...state,
      }

    case constants.GET_ENTRIES_ERRORS:
      return {
        ...state,
        errors: action.payload.errors,
      }

    // DELETE
    case constants.DELETE_ENTRY_REQUEST:
      return {
        ...state,
      }
    case constants.DELETE_ENTRY_SUCCESS:
      return {
        ...state,
      }

    case constants.DELETE_ENTRY_ERRORS:
      return {
        ...state,
      }

    default:
      return state;
  }
};

export default mainReducer;