import { createStore } from "redux";
import allReducer from "./Movies";
const store=createStore(allReducer)
export default store;