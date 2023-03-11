import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { homeReducer } from "./reducers/homeReducer";
import { jobListReducer } from "./reducers/jobListReducer";


const rootReducer = combineReducers({
    homeReducer,
    jobListReducer
});

export const store = createStore(rootReducer,applyMiddleware(thunk));