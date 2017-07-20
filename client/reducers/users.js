import {
  REQUEST_USERS, RECEIVE_USERS, CHANGE_SORT
} from '../actions';

const users = (state = {
  nameType: 'last',
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
    case CHANGE_SORT:
      const { nameType } = action;
      return {
        ...state,
        nameType,
      }
    default:
      return state;
  }
}

export default users;