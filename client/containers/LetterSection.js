import UserInfoSection from '../components/UserInfoSection';
import { connect } from 'react-redux';

const mapStateToProps = state => state;

const LetterSection = connect(mapStateToProps)(UserInfoSection);

export default LetterSection;