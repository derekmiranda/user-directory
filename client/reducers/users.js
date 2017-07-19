import { REQUEST_USERS, RECEIVE_USERS } from '../actions';

const users = (state = {
  isFetching: false,
  list: [],
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
        list: userList,
        isFetching: false,
      }
    default:
      return state;
  }
}

export default users;