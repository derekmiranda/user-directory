import { shallow } from 'enzyme';

xit('renders users from fetched data', () => {
  const numUsers = userList.length;
  const liItems = wrapper.find('li');
  expect(liItems.length).toBe(numUsers);
})