import { mount, shallow } from 'enzyme';
import UserInfoBox from './UserInfoBox';
import { createReadFilePromise } from '../utils';

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

it('renders user information', () => {
  wrapper = shallow(UserInfoBox(defaultState));
  
  expect(wrapper.find('img.photo').html()).toMatch(defaultState.photo);
  expect(wrapper.find('.fullName').html()).toMatch(defaultState.first);
  expect(wrapper.find('.fullName').html()).toMatch(defaultState.last);
  expect(wrapper.find('.dob').html()).toMatch(defaultState.dob);
  expect(wrapper.find('.city').html()).toMatch(defaultState.city);
})