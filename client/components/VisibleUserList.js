import React from 'react';
import PropTypes from 'prop-types';

const VisibleUserList = (props) => {
  const { userList } = props;

  let userListElem;
  if (userList) {
    const userElems = userList.map(
      ({ name }, idx) => <li key={idx}>{name.first} {name.last}</li>
    )
    userListElem = <ul>{userElems}</ul>;
  }

  return (
    <div>
      <h1>User Directory</h1>
      {userListElem}
    </div>
  )
}

VisibleUserList.propTypes = {
  userList: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default VisibleUserList;