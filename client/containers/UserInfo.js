import { connect } from 'react-redux';
import UserInfoBox from '../components/UserInfoBox';
import { togglePopup } from '../actions';

const capitalize = str => str[0].toUpperCase() + str.slice(1);
const cleanUpDOB = dobStr => dobStr;

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