import fetch from 'isomorphic-fetch';
import { NUM_USERS } from './constants';

const usersURL = `https://randomuser.me/api/?results=${NUM_USERS}&exc=login,nat,registered,id&noinfo`

export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const requestUsers = () => ({
  type: REQUEST_USERS,  
})

export const receiveUsers = (userList) => ({
  type: RECEIVE_USERS,
  userList,
})

export const fetchUsers = (dispatch) => {
  dispatch(requestUsers());
  return fetch(usersURL)
    .then(response => response.json())
    .then(json => {
      const userList = json.results;
      dispatch(receiveUsers(userList))
    })
}

