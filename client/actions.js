import { NUM_USERS } from './constants';

const userURL = `https://randomuser.me/api/?
  results=${NUM_USERS}&
  exc=login,nat,registered,id&
  noinfo
`

export const REQUEST_USERS = 'REQUEST_USERS';

export const requestUsers = () => ({
  type: REQUEST_USERS,  
})

