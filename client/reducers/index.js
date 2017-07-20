import { combineReducers } from 'redux';
import { CHANGE_SEARCH } from '../actions';
import users from './users';

const search = (state = '', action) => {
  if (action.type === CHANGE_SEARCH) {
    return action.search;
  }
  return state;
}

const rootReducer = combineReducers({
  users,
  search,
})

export default rootReducer;