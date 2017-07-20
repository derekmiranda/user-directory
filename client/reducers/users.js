import {
  REQUEST_USERS, RECEIVE_USERS, CHANGE_SORT
} from '../actions';

const cleanUpUserData = (user) => ({
  first: user.name.first,
  last: user.name.last,
  username: user.login.username,
  city: user.location.city,
  dob: user.dob,
  photo: user.picture.large,
  thumbnail: user.picture.thumbnail,
})

// const user = (state = {

// })

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
      const processedList = userList.map(cleanUpUserData);
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
    default:
      return state;
  }
}

export default users;