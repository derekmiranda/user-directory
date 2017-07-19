import { connect } from 'react-redux';
import UserInfoBox from '../components/UserInfoBox';

const capitalize = str => str[0].toUpperCase() + str.slice(1);
const cleanUpDOB = dobStr => dobStr;

const mapStateToProps = ({ first, last, city, dob, photo }) => ({
  first: capitalize(first),
  last: capitalize(last),
  city: capitalize(city),
  dob: cleanUpDOB(dob),
  photo,
})

const ConnectedUserInfo = connect(mapStateToProps)(UserInfoBox);

export default ConnectedUserInfo;