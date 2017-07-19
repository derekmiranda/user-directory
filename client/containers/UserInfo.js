import { connect } from 'react-redux';
import UserInfoBox from '../components/UserInfoBox';

const capitalize = str => str[0].toUpperCase() + str.slice(1);
const cleanUpDOB = dobStr => dobStr;

const mapStateToProps = (_, ownProps) => {
  const { first, last, city, dob } = ownProps;
  return {
    ...ownProps,
    first: capitalize(first),
    last: capitalize(last),
    city: capitalize(city),
  }
}

const ConnectedUserInfo = connect(mapStateToProps)(UserInfoBox);

export default ConnectedUserInfo;