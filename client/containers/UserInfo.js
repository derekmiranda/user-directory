import { connect } from 'react-redux';
import UserInfoBox from '../components/UserInfoBox';

const capitalize = str => str[0].toUpperCase() + str.slice(1);
const cleanUpDOB = dobStr => dobStr;

const mapStateToProps = (_, ownProps) => ownProps;

const ConnectedUserInfo = connect()(UserInfoBox);

export default ConnectedUserInfo;