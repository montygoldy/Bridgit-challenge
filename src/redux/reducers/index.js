import { combineReducers } from 'redux';

// Root
import mainReducer from "../../components/pages/Home/Reducer";

export default combineReducers({
  main: mainReducer,
});
