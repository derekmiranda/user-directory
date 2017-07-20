import { cleanUpUserData } from '../utils/common';
import {
  REQUEST_USERS, RECEIVE_USERS, CHANGE_SORT, RECEIVE_USER, TOGGLE_POPUP
} from '../actions';

const user = (state = {
  clicked: false,
}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      const { rawUser } = state;
      delete state.rawUser;
      const processedUser = cleanUpUserData(rawUser);
      return {
        ...state,
        ...processedUser,
      }
    case TOGGLE_POPUP:
      const { clicked } = state;
      return {
        ...state,
        clicked: clicked ? false : true,
      }
    default:
      return state;
  }
}

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
      const processedList = userList.map((rawUser, idx) => user({
        rawUser,
        idx,
        clicked: false,
      }, action))

      return {
        ...state,
        list: processedList,
        isFetching: false,
      }
    case CHANGE_SORT:
      const { nameType } = action;
      return {
        ...state,
        nameType,
      }
    case TOGGLE_POPUP:
      const { list } = state;
      const { id } = action;
      return {
        ...state,
        list: list.map((u) => {
          return (id === u.username) ? user(u, action) : u;
        })
      }
    default:
      return state;
  }
}

export default users;