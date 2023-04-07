import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer } from './reducers/homeReducer';
import { jobListReducer } from './reducers/jobListReducer';
import { auth } from './auth';
import { userReducer } from './reducers/userReducer';
import { hireJobsReducer } from './reducers/hireJobsReducer';

const rootReducer = combineReducers({
  homeReducer,
  jobListReducer,
  auth,
  userReducer,
  hireJobsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
