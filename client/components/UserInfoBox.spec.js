import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import UserInfoBox from './UserInfoBox';
import { createReadFilePromise } from '../utils';

let mockStore, wrapper, user, defaultState;

const readFilePromise = createReadFilePromise(`${__dirname}/../../shared/sample_data.json`);
beforeAll(done => {
  readFilePromise
    .then(json => {
      user = json.results[0];
      defaultState = {
        first: user.name.first,
        last: user.name.last,
        dob: user.dob,
        city: user.location.city,
        photo: user.picture.medium,
      }
    })
    .then(done);
})

beforeEach(() => {
  mockStore = configureStore();
})

it('renders user information', () => {
  const store = mockStore(defaultState);
  wrapper = shallow(
    <Provider store={store}>
      <UserInfoBox />
    </Provider>
  )
  
  console.log(wrapper.text())
  // expect to have tags w/ user information (first, last, dob, city, photo)
})

xit('capitalizes fields')