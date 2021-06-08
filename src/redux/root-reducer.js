import { combineReducers } from "redux";
import HomepageReducer from "./reducers/HomepageReducer";

export default combineReducers({
    home : HomepageReducer,
});