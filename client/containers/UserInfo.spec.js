import React from 'react';
import { mount, shallow } from 'enzyme';
import UserInfo from './UserInfo';
import { createReadFilePromise } from '../utils';
import configureStore from 'redux-mock-store';

let wrapper, user, defaultState, store;

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
  const mockStore = configureStore();
  store = mockStore(defaultState);
})

it('capitalizes fields', () => {
  wrapper = mount(<UserInfo {...defaultState} store={store}/>);
  const { first, last, city } = defaultState;

  const fullNameWrap = wrapper.find('.fullName');
  expect(fullNameWrap.length).toBe(1);

  const fullName = fullNameWrap.text();
  const fullNameMatch = fullName.match(/^(\w+) (\w+)$/);
  const renderedFirst = fullNameMatch[1];
  const renderedLast = fullNameMatch[2];
  const renderedCityWrap = wrapper.find('.city');
  expect(renderedCityWrap.length).toBe(1);

  const renderedCity = renderedCityWrap.text();

  [
    renderedFirst,
    renderedLast,
    renderedCity,
  ]
  .forEach(str => {
    expect(str[0]).toMatch(/[A-Z]/);
  })
})