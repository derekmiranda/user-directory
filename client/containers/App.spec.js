import renderer from 'react-test-renderer';
import NUM_USERS from '../constants';
import App from './App';

it('renders correctly', () => {
  const tree = renderer.create(App()).toJSON();
  expect(tree).toMatchSnapshot();
})