import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer } from './reducers/homeReducer';
import { jobListReducer } from './reducers/jobListReducer';
import { auth } from './auth';

const rootReducer = combineReducers({
  homeReducer,
  jobListReducer,
  auth,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
