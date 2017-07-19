import React from 'react';
import PropTypes from 'prop-types';
import UserInfoSection from '../components/UserInfoSection';

const VisibleUserList = (props) => {
  const { usersByLetter } = props;
  const userSections = usersByLetter && Object.keys(usersByLetter)
    .map((letter, i) => (
      <UserInfoSection letter={letter} key={i} />
    ))

  return (
    <div>
      <h1>User Directory</h1>
      {userSections}
    </div>
  )
}

VisibleUserList.propTypes = {
  usersByLetter: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default VisibleUserList;