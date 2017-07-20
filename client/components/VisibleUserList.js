import React from 'react';
import PropTypes from 'prop-types';
import UserInfoSection from '../components/UserInfoSection';

const VisibleUserList = (props) => {
  const { usersByLetter } = props;
  const userSections = usersByLetter && usersByLetter
    .map((section, i) => {
      return <UserInfoSection {...section} key={i} />;
    })

  return (
    <div>
      {userSections}
    </div>
  )
}

VisibleUserList.propTypes = {
  usersByLetter: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func,
}

export default VisibleUserList;