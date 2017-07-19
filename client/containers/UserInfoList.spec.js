import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import UserInfoList from './UserInfoList';
import UserInfoSection from '../components/UserInfoSection';
import { requestUsers, receiveUsers } from '../actions';
import { createReadFilePromise } from '../utils/tests';
import { organizeUsersByLetter } from '../utils/common';

let store, wrapper, userList, defaultState;
const mountWithStore = store => mount(
  <Provider store={store}>
    <UserInfoList />
  </Provider>
)

const readFilePromise = createReadFilePromise(`${__dirname}/../../shared/sample_data.json`);
beforeAll(done => {
  readFilePromise
    .then(json => {
      userList = json.results;
      defaultState = {
        users: {
          isFetching: false,
          list: userList,
        },
      }
    })
    .then(done);
})

beforeEach(() => {
  const middleware = [thunk];
  const mockStore = configureStore(middleware);
  store = mockStore(defaultState);
  wrapper = mountWithStore(store);
})

it('should render letter sections organized by last name', () => {
  const letterSections = wrapper.find(UserInfoSection);
  const usersByLetter = organizeUsersByLetter(userList, 'last');

  const letters = 
  const expectedSectionNum = Object.keys(usersByLetter).length;
  expect(letterSections.length).toBe(expectedSectionNum);

  // expect to see letter sections based on capitalized first letter of last names
  // check props

  // get first letters of last name of sample data
  // compare sorted w/ rendered section letters
})