import constants from "./Types";

const initialState = {
  categories: ["all", "fruit", "vegetables"],
  showByCategory: "all",
  entryList: [],
  errors: {},
  sortOrder: "asc",
  sortBy: "",

  isLoading: false,
};

const mainReducer = (state = initialState, action) => {

  switch (action.type) {
    // Create
    case constants.CREATE_ENTRY_SUCCESS:
      return {
        ...state,
        entryList: action.payload.entryList
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
        isLoading: true
      }

    case constants.GET_ENTRIES_SUCCESS:
      return {
        ...state,
        showByCategory: action.payload.category, 
        entryList: action.payload.entryList,
        sortOrder: action.payload.sortOrder || "asc",
        sortBy: action.payload.sortBy,
        isLoading: false
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
        entryList: action.payload.entryList
      }

    case constants.DELETE_ENTRY_ERRORS:
      return {
        ...state,
        errors: action.payload.errors,
      }

    // DELETE  
    case constants.CLEAR_ENTRIES_REQUEST:
      return {
        ...state,
        isLoading: true
      }
      
    case constants.CLEAR_ENTRIES_SUCCESS:
      return {
        ...state,
        showByCategory: "all",
        entryList: [],
        errors: {},
        isLoading: false,
        sortOrder: "asc",
        sortBy: "",
      }

    case constants.CLEAR_ENTRIES_ERRORS:
      return {
        ...state,
        errors: action.payload.errors,
      }

    default:
      return state;
  }
};

export default mainReducer;