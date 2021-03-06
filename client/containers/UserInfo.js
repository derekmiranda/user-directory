import { connect } from 'react-redux';
import UserInfoBox from '../components/UserInfoBox';
import { togglePopup } from '../actions';

const capitalize = (str) => str.split(' ')
  .map(str => str[0] && str[0].toUpperCase() + str.slice(1))
  .join(' ')

const cleanUpDOB = (dobStr) => {
  const dobMatch = dobStr.match(/^(\w{4})-(\w{2})-(\w{2})/);
  const year = dobMatch[1];
  const month = dobMatch[2];
  const day = dobMatch[3];

  return `${year}/${month}/${day}`;
};

const mapStateToProps = (state, ownProps) => {
  const { first, last, city, dob } = ownProps;
  return {
    ...ownProps,
    first: capitalize(first),
    last: capitalize(last),
    city: capitalize(city),
    dob: cleanUpDOB(dob),
  }
}

const mapDispatchToProps = (dispatch) => ({
  onPicClick: id => dispatch(togglePopup(id)),
})

const ConnectedUserInfo = connect(mapStateToProps, mapDispatchToProps)(UserInfoBox);

export default ConnectedUserInfo;