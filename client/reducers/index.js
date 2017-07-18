import { combineReducers } from 'redux';
import { REQUEST_USERS, RECEIVE_USERS } from './actions';

const rootReducer = (state = {
  isRequesting: false,
}, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        isRequesting: true,
      }
    case RECEIVE_USERS:
      const { userList } = action;
      return {
        ...state,
        userList,
        isRequesting: false,
      }
    default:
      return state;
  }
}

export default rootReducer;