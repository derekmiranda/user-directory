import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { readFile } from 'fs';
import App from './App';
import { requestUsers, receiveUsers } from '../actions';
import { NUM_USERS } from '../constants';

let mockStore, wrapper, fetchedData;
const readFilePromise = new Promise((resolve, reject) => {
  readFile(`${__dirname}/sample_data.json`, (err, data) => {
    err && console.error(err);
    const json = JSON.parse(data.toString());
    resolve(json);
  })
})

beforeAll(done => {
  readFilePromise
    .then(json => fetchedData = json)
    .then(done);
})

beforeEach(() => {
  const middleware = [thunk];
  mockStore = configureStore(middleware);
})

it('renders list of users from fetched data', () => {
  const userList = fetchedData.results;
  const initialState = {
    isFetching: false,
    userList,
  }
  const store = mockStore(initialState);

  wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const numUsers = fetchedData.results.length;
  const liItems = wrapper.find('li');
  expect(liItems.length).toBe(numUsers);
})