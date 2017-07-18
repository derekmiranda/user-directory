import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import { readFile } from 'fs';
import App from './App';
import { requestUsers, receiveUsers } from '../actions';

let store, wrapper;
const initialState = {
  isFetching: false,
}

function readDataFromJSON() {
  return dispatch => {
    const readFilePromise = new Promise((resolve, reject) => {
      readFile(`${__dirname}/sample_data.json`, (err, data) => {
        err && console.error(err);
        const json = JSON.parse(data.toString());
        resolve(json);
      })
    })

    return readFilePromise
      .then(json => {
        const userList = json.results;
        dispatch(receiveUsers(userList));
        return json;
      })
  }
}

beforeEach(() => {
  const middleware = [thunk];
  const mockStore = configureStore(middleware);
  store = mockStore(initialState);
});

it('renders list of users from fetched data', () => {
  wrapper = mount(<Provider store={store}><App /></Provider>);
  return store.dispatch(readDataFromJSON())
    .then(json => {
      const actions = store.getActions();
      expect(actions[0] && actions[0].type).toBe(requestUsers().type);
      expect(actions[1] && actions[1].type).toBe(receiveUsers().type);

      const numUsers = json.results.length;
      const liWrapper = wrapper.find('li');
      expect(liWrapper.length).toBe(numUsers);
    })
})