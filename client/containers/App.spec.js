import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import nock from 'nock';
import { readFile } from 'fs';
import App from './App';
import { requestUsers, receiveUsers } from '../actions';
import { NUM_USERS } from '../constants';

let store, wrapper, fetchedData;
const initialState = {
  isFetching: false,
}
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
    .then(done)
})

beforeEach(() => {
  const middleware = [thunk];
  const mockStore = configureStore(middleware);
  store = mockStore(initialState);
})

afterEach(() => {
  nock.cleanAll();
})

it('renders list of users from fetched data', () => {
  nock('https://randomuser.me')
    .get(`/api/?results=${NUM_USERS}&exc=login,nat,registered,id&noinfo`)
    .reply(200, fetchedData);

  wrapper = mount(<Provider store={store}><App /></Provider>);

  const numUsers = fetchedData.results.length;
  const liWrapper = wrapper.find('li');
  expect(liWrapper.length).toBe(numUsers);
})