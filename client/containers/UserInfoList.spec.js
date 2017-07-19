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

const areArraysSimilar = (arr1, arr2) => {
  return arr1.every((item1, idx) => {
    const item2 = arr2[idx];
    return item1 === item2;
  })
}

it('should render letter sections organized by last name', () => {
  const letterSections = wrapper.find(UserInfoSection);
  const usersByLetter = organizeUsersByLetter(userList, 'last');

  const expectedSectionNum = usersByLetter.length;
  expect(letterSections.length).toBe(expectedSectionNum);

  const renderedLetters = letterSections.map(section => {
    const { letter } = section.props();
    return letter;
  })

  const letters = usersByLetter.map(section => section.letter);
  const sortedLetters = letters.slice().sort();

  expect(areArraysSimilar(sortedLetters, renderedLetters)).toBeTruthy();
})