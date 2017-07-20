import { mount, shallow } from 'enzyme';
import UserInfoBox from './UserInfoBox';
import { createReadFilePromise } from '../utils/tests';

let wrapper, user, defaultState;

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
  wrapper = shallow(UserInfoBox(defaultState));
})

it('renders user photo', () => {
  expect(wrapper.find('img.photo').html()).toMatch(defaultState.photo);
})

it('renders full name', () => {
  expect(wrapper.find('.fullname').html()).toMatch(defaultState.first);
  expect(wrapper.find('.fullname').html()).toMatch(defaultState.last);
})

it('renders date of birth', () => {
  expect(wrapper.find('.dob').html()).toMatch(defaultState.dob);
})

it('renders city name', () => {
  expect(wrapper.find('.city').html()).toMatch(defaultState.city);
})