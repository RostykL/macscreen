import { combineReducers } from "redux";
import burgerBucket from "./burgersBucket";
import burger from "./Burger";

export default combineReducers({ burgerBucket, burger });
