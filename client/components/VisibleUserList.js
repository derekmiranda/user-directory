import React from 'react';
import PropTypes from 'prop-types';

const VisibleUserList = () => (
  <div>
    <h1>User Directory</h1>
    {userListElem}
  </div>
)

VisibleUserList.propTypes = {
  userList: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default VisibleUserList;