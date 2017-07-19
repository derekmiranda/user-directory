import fetch from 'isomorphic-fetch';
import { NUM_USERS } from './constants';

const usersURL = `https://randomuser.me/api/?results=${NUM_USERS}&exc=login,nat,registered,id&noinfo`;

export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const requestUsers = () => ({
  type: REQUEST_USERS,  
})

export const receiveUsers = (userList) => ({
  type: RECEIVE_USERS,
  userList,
})

const capitalizeUserNames = (user) => {
  const newUser = {...user};
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  ['first', 'last'].forEach(nameType => {
    newUser.name[nameType] = capitalize(newUser.name[nameType]);
  });

  return newUser;
}

export const fetchUsers = (dispatch) => {
  dispatch(requestUsers());
  return fetch(usersURL)
    .then(response => response.json())
    .then(json => {
      const userList = json.results;
      const processedUserList = userList.map(capitalizeUserNames);
      dispatch(receiveUsers(processedUserList))
    })
}

