import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import UserInfoList from './UserInfoList';
import UserInfoSection from '../components/UserInfoSection';
import { requestUsers, receiveUsers } from '../actions';
import { createReadFilePromise } from '../utils';

let mockStore, wrapper, userList, defaultState;
const mountWithStore = store => mount(
  <Provider store={store}>
    <UserInfoList />
  </Provider>
);

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
  mockStore = configureStore(middleware);
})

it('renders users from fetched data', () => {
  const store = mockStore(defaultState);
  wrapper = mountWithStore(store);

  const numUsers = userList.length;
  const liItems = wrapper.find('li');
  expect(liItems.length).toBe(numUsers);
})

it('should render letter sections by last name', () => {
  const store = mockStore(defaultState);
  wrapper = mountWithStore(store);

  const letterSections = wrapper.find(UserInfoSection);
  
  // hard coded value for num of sections based on last name
  const expectedSectionNums = 3;
  expect(letterSections.length).toBe(expectedSectionNums);

  // expect to see letter sections based on capitalized first letter of last names
  // get text in header to get letter
})