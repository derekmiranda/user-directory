import { combineReducers } from 'redux';
import { REQUEST_USERS, RECEIVE_USERS } from '../actions';
import users from './users';

const rootReducer = combineReducers({
  users,
})

export default rootReducer;