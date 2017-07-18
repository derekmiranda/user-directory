import { combineReducers } from 'redux';
import { REQUEST_USERS, RECEIVE_USERS } from '../actions';

const rootReducer = (state = {
  isFetching: false,
}, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_USERS:
      const { userList } = action;
      return {
        ...state,
        userList,
        isFetching: false,
      }
    default:
      return state;
  }
}

export default rootReducer;